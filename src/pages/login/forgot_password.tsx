import { Col, Form, Layout, Row, Image, Input, Button, Space } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [size] = useState(12);
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (values: { email: string }) => {
    setErrorMessage(null);
    setLoading(true);
  
    const { email } = values;
  
    try {
      const auth = getAuth(); // Get the Auth instance
      await sendPasswordResetEmail(auth, email); // Send the password reset email
      setLoading(false);
      navigate(`/forgotnew/${encodeURIComponent(email)}`);// Navigate to the ForgotNewPassword page with email as query parameter
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
              Đặt lại mật khẩu
            </label>
            {/* <Form.Item label="Vui lòng nhập email để đặt lại mật khẩu của bạn" name="email">
              <Input />
            </Form.Item> */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
                {
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>


            <Form.Item style={{ paddingTop: 20, textAlign: "center" }}>
              <Space size={size}>
                <Button style={{ backgroundColor: " white", color: "#FF9138" }}>
                  <Link to="/">Hủy</Link>
                </Button>
                <Button style={{ backgroundColor: "#FF9138", color: "white" }} htmlType="submit" loading={loading}>
                  Tiếp tục
                </Button>
              </Space>
            </Form.Item></Form>
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

export default ForgotPassword;