import { Col, Form, Layout, Row, Image, Input, Button, Space } from "antd";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getAuth, confirmPasswordReset } from "firebase/auth";

interface ForgotNewPasswordProps {
  email: string;
  [key: string]: string | undefined;
}

const ForgotNewPassword = () => {
  const [size] = useState(12);
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const { email } = useParams<ForgotNewPasswordProps>();
  const navigate = useNavigate();

  const handleFormSubmit = async (values: { password: string, confirmPassword: string }) => {
    setErrorMessage(null);
    setLoading(true);

    const { password, confirmPassword } = values;

    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu không khớp. Vui lòng nhập lại.");
      setLoading(false);
      return;
    }

    try {
      const auth = getAuth(); // Get the Auth instance
      if (!email) {
        throw new Error("Email không hợp lệ"); // hoặc xử lý lỗi theo cách khác
      }
      
      await confirmPasswordReset(auth, email, password); // Reset the user's password
      setLoading(false);
      navigate(`/`); // Navigate to the login page
    } catch (error: any) {
      const errorCode = error.code;
      setErrorMessage(errorCode);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Row>
        <Col flex={2}>
          <Image
            width={170}
            height={136}
            src={`${process.env.PUBLIC_URL}/asset/logo.png`}
            style={{ marginLeft: 150 }}
          />

          <Form
            form={form}
            layout="vertical"
            style={{
              paddingTop: 50,
              bottom: 20,
              marginLeft: 30,
              marginRight: 20,
              textAlign: "center",
            }}
            onFinish={handleFormSubmit}
          >
            <label style={{ fontSize: 20, fontWeight: 600 }}>
              Nhập mật khẩu mới
            </label>
            <Form.Item
              label="Mật khẩu mới"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu mới",
                },
                {
                  min: 6,
                  message: "Mật khẩu phải có ít nhất 6 ký tự",
                },
              ]}
            >
              <Input.Password placeholder="Mật khẩu mới" />
            </Form.Item>

            <Form.Item
              label="Nhập lại mật khẩu"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập lại mật khẩu mới",
                },
              ]}
            >
              <Input.Password placeholder="Nhập lại mật khẩu mới" />
            </Form.Item>

            {errorMessage && (
              <Form.Item style={{ color: "red" }}>
                {errorMessage}
              </Form.Item>
            )}

            <Form.Item style={{ paddingTop: 20, textAlign: "center" }}>
              <Space size={size}>
                <Button style={{ backgroundColor: "white", color: "#FF9138" }}>
                  <Link to="/">Hủy</Link>
                </Button>
                <Button
                  style={{ backgroundColor: "#FF9138", color: "white" }}
                  htmlType="submit"
                  loading={loading}
                >
                  Cập nhật
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
        <Col flex={0}>
          <Image
            width={700}
            height={590}
            src={`${process.env.PUBLIC_URL}/asset/poster.png`}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default ForgotNewPassword;