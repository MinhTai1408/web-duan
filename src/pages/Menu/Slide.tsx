import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Layout, Menu, Image } from "antd";
import { LoginOutlined, SettingOutlined } from "@ant-design/icons";
import MenuItem from "../../model/menuItem";
import "../Menu/Slide.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

const DASHBOARD_ITEM: MenuItem = {
  key: "1",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M18.3333 9.08366V3.41699C18.3333 2.16699 17.8 1.66699 16.475 1.66699H13.1083C11.7833 1.66699 11.25 2.16699 11.25 3.41699V9.08366C11.25 10.3337 11.7833 10.8337 13.1083 10.8337H16.475C17.8 10.8337 18.3333 10.3337 18.3333 9.08366Z"
        stroke="#8c8c8c"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 16.583V15.083C18.3333 13.833 17.8 13.333 16.475 13.333H13.1083C11.7833 13.333 11.25 13.833 11.25 15.083V16.583C11.25 17.833 11.7833 18.333 13.1083 18.333H16.475C17.8 18.333 18.3333 17.833 18.3333 16.583Z"
        stroke="#8c8c8c"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.75 10.917V16.5837C8.75 17.8337 8.21666 18.3337 6.89166 18.3337H3.525C2.2 18.3337 1.66666 17.8337 1.66666 16.5837V10.917C1.66666 9.66699 2.2 9.16699 3.525 9.16699H6.89166C8.21666 9.16699 8.75 9.66699 8.75 10.917Z"
        stroke="#8c8c8c"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.75 3.41699V4.91699C8.75 6.16699 8.21666 6.66699 6.89166 6.66699H3.525C2.2 6.66699 1.66666 6.16699 1.66666 4.91699V3.41699C1.66666 2.16699 2.2 1.66699 3.525 1.66699H6.89166C8.21666 1.66699 8.75 2.16699 8.75 3.41699Z"
        stroke="#8c8c8c"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  label: "Dashboard",
  path: "/home",
};
const DEVICE_ITEM: MenuItem = {
  key: "2",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5.36666 1.66699H14.625C17.5917 1.66699 18.3333 2.40866 18.3333 5.36699V10.642C18.3333 13.6087 17.5917 14.342 14.6333 14.342H5.36666C2.40833 14.3503 1.66666 13.6087 1.66666 10.6503V5.36699C1.66666 2.40866 2.40833 1.66699 5.36666 1.66699Z"
        stroke="#A9A9B0"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 14.3496V18.3329"
        stroke="#A9A9B0"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.66666 10.833H18.3333"
        stroke="#A9A9B0"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.25 18.333H13.75"
        stroke="#A9A9B0"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  label: "Thiết bị",
  path: "/device",
};
const SERVICE_ITEM: MenuItem = {
  key: "3",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
    >
      <path
        d="M21 7.18601C21 9.06092 19.9887 10.7464 18.3785 11.9193C18.3228 11.9583 18.2921 12.0251 18.2893 12.092L18.2197 13.9168C18.2113 14.1619 17.9411 14.304 17.7349 14.1731L16.1888 13.2008C16.1888 13.2008 16.1888 13.2008 16.186 13.2008C16.0968 13.1423 15.9882 13.1256 15.8879 13.1562C14.9685 13.4431 13.9684 13.6019 12.9209 13.6019C12.907 13.6019 12.893 13.6019 12.8791 13.6019C12.907 13.4181 12.9209 13.2314 12.9209 13.042C12.9209 10.426 10.252 8.30594 6.95906 8.30594C6.28209 8.30594 5.63297 8.39509 5.02564 8.55946C4.90306 8.1165 4.83899 7.65404 4.83899 7.18044C4.83899 3.63398 8.45509 0.761719 12.9181 0.761719C17.3839 0.767291 21 3.64234 21 7.18601Z"
        stroke="#A9A9B0"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M5.02842 8.56445C2.68547 9.20242 1 10.9687 1 13.047C1 14.4288 1.74662 15.6741 2.93342 16.5405C2.97521 16.5711 2.99749 16.6185 3.00028 16.6686L3.05042 18.0142C3.056 18.1953 3.25658 18.2984 3.40981 18.2037L4.55203 17.4849C4.56038 17.4793 4.57153 17.471 4.57989 17.4654C4.62167 17.432 4.67739 17.4208 4.72754 17.4376C5.41844 17.6604 6.17064 17.783 6.96183 17.783C10.0152 17.783 12.5336 15.9582 12.8819 13.6069"
        stroke="#A9A9B0"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  ),
  label: "Dịch vụ",
  path: "/service",
};
const NUMBER_ITEM: MenuItem = {
  key: "4",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clip-path="url(#clip0_82034_3203)">
        <path
          d="M1.66666 14.167L10 18.3337L18.3333 14.167"
          stroke="#A9A9B0"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.66666 10L10 14.1667L18.3333 10"
          stroke="#A9A9B0"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 1.66699L1.66666 5.83366L10 10.0003L18.3333 5.83366L10 1.66699Z"
          stroke="#A9A9B0"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_82034_3203">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  label: "Cấp số",
  path: "/number",
};
const REPORT_ITEM: MenuItem = {
  key: "5",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
    >
      <g clip-path="url(#clip0_82034_3210)">
        <mask
          id="path-1-outside-1_82034_3210"
          maskUnits="userSpaceOnUse"
          x="-1"
          y="-1"
          width="20"
          height="22"
          fill="black"
        >
          <rect fill="white" x="-1" y="-1" width="20" height="22" />
        </mask>
        <path
          d="M5.29762 0.968221C5.29762 1.06326 5.29762 1.14048 5.29762 1.22364C5.29762 1.9008 5.30422 2.57202 5.29762 3.24918C5.29101 4.16394 4.61064 4.76388 3.59339 4.76388C2.77431 4.76388 1.96184 4.76388 1.14275 4.76388C1.12954 4.76388 1.10972 4.76982 1.05688 4.7817C1.05688 4.85298 1.05688 4.9302 1.05688 5.00742C1.05688 9.47431 1.05688 13.9471 1.05688 18.414C1.05688 18.8833 1.22202 19.0318 1.73064 19.0318C6.57908 19.0318 11.4209 19.0318 16.2694 19.0318C16.7648 19.0318 16.9365 18.8714 16.9365 18.4259C16.9365 17.5349 16.9365 16.6439 16.9365 15.7529C16.9365 15.4618 17.1017 15.2718 17.3659 15.2302C17.6829 15.1827 17.9802 15.3727 17.9868 15.6638C18 16.6736 18.0198 17.6834 17.9802 18.6932C17.9472 19.4298 17.2272 19.9762 16.3684 19.9822C15.4833 19.9881 14.6048 19.9822 13.7196 19.9822C9.7167 19.9822 5.71376 19.9822 1.70422 19.9822C0.85211 19.9822 0.211376 19.5486 0.039633 18.8476C0.00660551 18.717 0.00660551 18.5803 0.00660551 18.4497C0.00660551 13.7749 0.00660551 9.09415 0 4.41936C0 4.17582 0.0858716 3.99762 0.270826 3.8313C1.61174 2.64924 2.93945 1.44936 4.26716 0.24948C4.45211 0.0772201 4.65028 0 4.9211 0C8.71266 0.00594001 12.4976 0.00594001 16.2892 0.00594001C17.3262 0.00594001 17.9934 0.605881 17.9934 1.53846C17.9934 2.13246 17.9934 15.0223 17.9934 15.6163C17.9934 15.8598 17.8547 16.0261 17.6235 16.0915C17.3923 16.1568 17.1809 16.1034 17.0554 15.9252C16.9828 15.8182 16.9497 15.6757 16.9431 15.5509C16.9299 14.9866 16.9365 2.12652 16.9365 1.56222C16.9365 1.12266 16.7516 0.956341 16.2561 0.956341C12.6826 0.956341 9.10899 0.956341 5.52881 0.956341C5.46936 0.950401 5.3967 0.962281 5.29762 0.968221ZM1.89578 3.79566C1.89578 3.79566 1.90899 3.80754 1.9222 3.80754C2.39119 3.80754 2.86018 3.81348 3.32917 3.81348C4.14165 3.81348 4.22752 3.73626 4.22752 3.01752C4.22752 2.57796 4.22752 2.1384 4.22752 1.69884C3.44147 2.4057 2.66862 3.10068 1.89578 3.79566Z"
          fill="#A9A9B0"
        />

        <path
          d="M7.92001 11.6063C7.74166 11.7785 7.58973 11.9389 7.41799 12.0874C6.67157 12.7586 5.92515 13.4358 5.17872 14.1011C4.87487 14.3743 4.47854 14.3327 4.28698 14.0179C4.16148 13.816 4.20771 13.6318 4.43891 13.418C4.99377 12.919 5.54863 12.4201 6.1035 11.9211C6.56588 11.5053 7.02166 11.0895 7.48405 10.6796C7.7945 10.4005 8.07194 10.4005 8.38239 10.6737C8.93065 11.1667 9.47891 11.6597 10.0073 12.1349C10.9784 11.2618 11.9428 10.3945 12.9072 9.52134C12.6826 9.52134 12.425 9.52728 12.1673 9.52134C11.8965 9.50946 11.6984 9.36096 11.6521 9.14712C11.6059 8.93328 11.6984 8.72538 11.9031 8.63628C12.0022 8.5947 12.1211 8.565 12.2334 8.565C12.894 8.55906 13.5545 8.55906 14.2151 8.565C14.618 8.57094 14.8162 8.76102 14.8162 9.12336C14.8162 9.71142 14.8162 10.2935 14.8162 10.8816C14.8162 11.2142 14.5982 11.434 14.2811 11.434C13.9773 11.434 13.7659 11.2202 13.7593 10.8935C13.7527 10.6915 13.7527 10.4955 13.7527 10.2935C13.7527 10.2817 13.7395 10.2698 13.6602 10.1629C13.6073 10.2579 13.5809 10.347 13.5215 10.4005C12.5307 11.2974 11.5398 12.1884 10.549 13.0794C10.1791 13.412 9.94129 13.412 9.56478 13.0794C9.02973 12.5983 8.49469 12.1171 7.92001 11.6063Z"
          fill="#A9A9B0"
        />
        <path
          d="M13.7659 14.4995C13.7659 13.8045 13.7593 13.1036 13.7659 12.4086C13.7725 12.0106 14.1688 11.7789 14.5255 11.9512C14.7171 12.0403 14.8162 12.1888 14.8162 12.3848C14.8162 13.8104 14.8228 15.236 14.8162 16.6616C14.8162 16.9467 14.5718 17.1487 14.2811 17.1428C13.9971 17.1368 13.7725 16.9408 13.7725 16.6676C13.7593 15.9429 13.7659 15.2241 13.7659 14.4995Z"
          fill="#A9A9B0"
        />
        <path
          d="M7.40477 14.9033C7.40477 14.3152 7.39816 13.7331 7.40477 13.145C7.40477 12.8302 7.60293 12.6282 7.90018 12.6104C8.21724 12.5926 8.45504 12.8064 8.46165 13.1331C8.46825 13.5133 8.46165 13.8875 8.46165 14.2677C8.46165 15.0458 8.46165 15.824 8.46165 16.6021C8.46165 16.9288 8.2833 17.1308 7.98605 17.1545C7.64917 17.1842 7.40477 16.9763 7.39816 16.6377C7.40477 16.0616 7.40477 15.4854 7.40477 14.9033Z"
          fill="#A9A9B0"
        />
        <path
          d="M12.6958 15.0168C12.6958 15.5455 12.6958 16.0682 12.6958 16.5969C12.6958 16.9236 12.491 17.1315 12.1806 17.1374C11.8635 17.1433 11.6455 16.9236 11.6455 16.5909C11.6455 15.5217 11.6455 14.4525 11.6455 13.3893C11.6455 13.0626 11.8503 12.8547 12.1608 12.8488C12.4778 12.8428 12.6958 13.0626 12.6958 13.3952C12.7024 13.9358 12.6958 14.4763 12.6958 15.0168Z"
          fill="#A9A9B0"
        />
        <path
          d="M10.582 15.4798C10.582 15.8422 10.582 16.2045 10.582 16.5728C10.5754 16.9292 10.364 17.149 10.047 17.143C9.7299 17.1371 9.52513 16.9173 9.52513 16.5787C9.52513 15.8362 9.52513 15.0937 9.52513 14.3512C9.52513 14.0245 9.7299 13.8166 10.0404 13.8107C10.3706 13.8047 10.5754 14.0008 10.582 14.3453C10.5886 14.7195 10.582 15.0997 10.582 15.4798Z"
          fill="#A9A9B0"
        />
        <path
          d="M5.2976 15.8185C5.2976 15.5512 5.29099 15.2839 5.2976 15.0166C5.3042 14.7077 5.52219 14.5176 5.83264 14.5236C6.12989 14.5295 6.34787 14.7255 6.34787 15.0166C6.35448 15.5571 6.35448 16.0977 6.34787 16.6382C6.34127 16.9352 6.11007 17.1431 5.81283 17.1372C5.52219 17.1312 5.31081 16.9293 5.2976 16.6382C5.2976 16.6263 5.2976 16.6085 5.2976 16.5966C5.2976 16.3353 5.2976 16.0798 5.2976 15.8185Z"
          fill="#A9A9B0"
        />
        <path
          d="M4.22754 16.43C4.22754 16.5251 4.23414 16.626 4.22754 16.7211C4.20111 16.9587 3.96331 17.1428 3.7057 17.1369C3.44808 17.1309 3.21689 16.9587 3.19708 16.733C3.17726 16.5251 3.17726 15.8776 3.19708 15.6697C3.21689 15.4321 3.4679 15.2598 3.73212 15.2658C3.99634 15.2717 4.20772 15.444 4.23414 15.6816C4.23414 15.7826 4.22754 16.329 4.22754 16.43Z"
          fill="#A9A9B0"
        />
      </g>
      <defs>
        <clipPath id="clip0_82034_3210">
          <rect width="18" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  label: "Báo cáo",
  path: "/report",
};
const SETTINGS_ITEM: MenuItem = {
  key: "6",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M8.68578 18.0437L8.68301 18.0421L4.11493 15.4093C3.16175 14.7663 2.78258 14.4693 2.59073 14.1388C2.40772 13.8237 2.36667 13.4258 2.36667 12.4087V7.59199C2.36667 6.57339 2.40559 6.17441 2.58449 5.86024C2.77032 5.53392 3.13834 5.24176 4.07395 4.60765L8.67509 1.94996L8.67617 1.94933C9.02135 1.74879 9.49263 1.63574 9.9875 1.63574C10.4824 1.63574 10.9537 1.74879 11.2988 1.94933L11.3004 1.95024L15.8851 4.59142C16.8383 5.23437 17.2174 5.5314 17.4093 5.86181C17.5923 6.177 17.6333 6.57483 17.6333 7.59199V12.4003C17.6333 13.4189 17.5944 13.8179 17.4155 14.1321C17.2297 14.4584 16.8617 14.7506 15.9261 15.3847L11.3261 18.0417C11.3259 18.0418 11.3257 18.0419 11.3255 18.042C10.9669 18.2477 10.4907 18.3587 10 18.3587C9.50799 18.3587 9.03359 18.2472 8.68578 18.0437ZM4.23307 4.81747L4.21803 4.82616L4.20364 4.83587L4.18752 4.84675C3.86164 5.06666 3.59376 5.24744 3.38776 5.41047C3.17516 5.57872 2.99255 5.7551 2.86229 5.97965C2.72902 6.2094 2.67395 6.44876 2.64865 6.70466C2.62498 6.94414 2.62499 7.23234 2.625 7.56891L2.625 7.59199V12.4003L2.625 12.4238C2.62499 12.76 2.62498 13.0487 2.64928 13.2892C2.67533 13.5468 2.73203 13.7872 2.86795 14.0184C3.00031 14.2434 3.18561 14.4215 3.40206 14.5926C3.61237 14.7588 3.88614 14.9441 4.22055 15.1703L4.23646 15.1811L4.2513 15.1911L4.26681 15.2001L8.81681 17.8251L8.81702 17.8252C9.16297 18.0246 9.60364 18.1045 10.0042 18.1045C10.4047 18.1045 10.8454 18.0246 11.1913 17.8252L11.1919 17.8249L15.7753 15.1748L15.7909 15.1658L15.8059 15.1556L15.822 15.1447C16.1458 14.9248 16.4121 14.744 16.6169 14.5809C16.8284 14.4125 17.01 14.236 17.1394 14.0115C17.2718 13.782 17.3264 13.5429 17.3515 13.2874C17.375 13.048 17.375 12.76 17.375 12.4233V12.4003V7.59199V7.56856C17.375 7.23229 17.375 6.94359 17.3507 6.70316C17.3247 6.44552 17.268 6.20512 17.132 5.97396C16.9997 5.74887 16.8144 5.57082 16.5979 5.39973C16.3876 5.23349 16.1138 5.04824 15.7794 4.82195L15.7635 4.81122L15.7487 4.80118L15.7332 4.79223L11.1862 2.16898C11.1857 2.16867 11.1851 2.16836 11.1846 2.16805C10.8382 1.96552 10.3984 1.89199 10 1.89199C9.60156 1.89199 9.1617 1.96554 8.81523 2.16814L4.23307 4.81747Z"
        stroke="#A9A9B0"
      />
      <path
        d="M10 12.625C8.55114 12.625 7.375 11.4489 7.375 10C7.375 8.55114 8.55114 7.375 10 7.375C11.4489 7.375 12.625 8.55114 12.625 10C12.625 11.4489 11.4489 12.625 10 12.625ZM10 7.625C8.69052 7.625 7.625 8.69052 7.625 10C7.625 11.3095 8.69052 12.375 10 12.375C11.3095 12.375 12.375 11.3095 12.375 10C12.375 8.69052 11.3095 7.625 10 7.625Z"
        fill="#292D32"
        stroke="#A9A9B0"
      />
    </svg>
  ),
  label: "Cài đặt hệ thống",
  path: "/settings",
  children: [
    {
      key: "6.1",
      icon: <SettingOutlined />,
      label: "Quản lý vai trò",
      path: "/settings/roles",
    },
    {
      key: "6.2",
      icon: <SettingOutlined />,
      label: "Quản lý tài khoản",
      path: "/settings/accounts",
    },
    {
      key: "6.3",
      icon: <SettingOutlined />,
      label: "Nhật ký sử dụng",
      path: "/settings/users",
    },
  ],
};

const items: MenuItem[] = [
  DASHBOARD_ITEM,
  DEVICE_ITEM,
  SERVICE_ITEM,
  NUMBER_ITEM,
  REPORT_ITEM,
  SETTINGS_ITEM,
];

interface SlideProps {
  handleLogout: () => Promise<void>;
}

const Slide: FC<SlideProps> = ({ handleLogout }) => {
  return (
    <Layout style={{ minHeight: "150vh" }}>
      <Sider theme="light">
        <Menu mode="vertical" theme="light">
          <Image
            width={200}
            src={`${process.env.PUBLIC_URL}/asset/logo-menu.png`}
          />
          {items.map((item) =>
            item.children ? (
              <SubMenu
                key={item.key}
                icon={item.icon}
                title={item.label}
                className="custom-submenu"
              >
                {item.children.map((child) => (
                  <Menu.Item key={child.key}>
                    <Link to={child.path}>{child.label}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            )
          )}
        </Menu>
        <div
          style={{
            paddingTop: 150,
            marginLeft: 30,
          }}
        >
          <Button
            style={{ background: " #FFF2E7", color: "orange" }}
            onClick={handleLogout}
            icon={<LoginOutlined style={{ color: "#ff7506" }} />}
          >
            <span>Đăng xuất</span>
          </Button>
        </div>
      </Sider>
    </Layout>
  );
};

export default Slide;
