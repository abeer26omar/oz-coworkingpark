import React, { useContext, useState, useEffect } from "react";
import Paragraph from "../../UI/Paragraph";
import Calunder from "../../UI/Icons/Calunder";
import Alarm from "../../UI/Icons/Alarm";
import Payment from "../../UI/Icons/Payment";
import moment from "moment";
import PromoCode from '../../promo-code/PromoCode';
import { AuthContext } from '../../../apis/context/AuthTokenContext';
import { getBranchById } from "../../../apis/config";

const CaseOne = ({ details }) => {

  const [branch, setBransh] = useState();
  const [priceAfterPromo, setPriceAfterPromo] = useState('');
  const { token, branchId } = useContext(AuthContext);

  const getPrice = (value) => {
    setPriceAfterPromo(value);
  };

  useEffect(() => {
    getBranchById(token, branchId).then((res) => {
      setBransh(res.name);
    });
  }, [branchId]);

  return (
    <>
      <div className="circle_yellow">
        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="149" viewBox="0 0 106 149" fill="none">
          <path d="M170.904 82.3539C171.688 95.3526 167.866 106.023 162.673 116.403C162.183 117.47 161.497 118.44 161.203 119.507C159.145 126.782 153.853 131.633 148.071 135.901C140.918 141.139 132.882 144.146 124.063 145.892C115.145 147.638 106.228 148.996 97.1143 149.093C87.0209 149.093 77.3195 147.444 67.814 144.34C62.5223 142.594 57.3286 140.848 52.037 139.199C44.8834 136.968 39.1017 132.409 33.516 127.849C23.5206 119.701 14.2112 110.776 8.82148 98.8448C6.07764 92.8305 4.31375 86.2341 2.74584 79.8318C0.491969 71.4893 -0.389979 62.9528 0.0999923 54.3194C0.687958 43.7458 4.60773 34.9183 12.5453 27.837C23.0307 18.4275 34.594 10.473 47.8232 5.42876C63.5023 -0.488562 79.7693 -1.55562 96.2324 2.13058C99.2702 2.80961 102.21 3.48865 105.248 4.07068C114.557 5.81678 122.691 9.988 129.942 15.7113C140.722 24.0538 150.325 33.6573 158.557 44.4249C162.085 48.9841 164.828 54.1254 166.788 59.7517C169.532 67.4151 171.492 75.2725 170.904 82.3539ZM79.0834 135.513C84.4731 134.931 89.8627 134.64 95.2524 133.767C116.713 129.983 134.156 119.216 148.365 103.113C149.051 102.24 149.737 101.076 149.835 100.009C150.619 93.8005 150.423 87.5922 148.365 81.5778C143.662 67.9001 136.508 55.4834 128.668 43.4548C127.297 41.3207 125.533 39.0896 123.475 37.6345C115.831 32.4932 107.502 28.71 98.6822 25.7998C88.9808 22.5987 78.9854 21.5316 68.892 21.0466C60.7584 20.7556 52.9189 21.4346 46.1573 26.3819C42.6295 29.001 38.7097 31.1351 35.3779 33.8513C28.5183 39.5746 22.5407 46.0739 19.8948 54.9984C17.837 61.9828 18.0329 69.1612 19.1109 76.1456C20.7768 87.0101 24.6966 97.0987 29.4003 106.993C32.2421 112.814 35.9659 118.149 40.9636 122.126C52.037 130.953 64.5802 135.998 79.0834 135.513ZM64.3842 136.289C64.2862 136.677 64.1882 136.968 64.0903 137.356C67.912 138.326 71.6358 139.296 75.4576 140.169C83.7871 141.915 92.2146 142.982 100.74 141.915C105.934 141.236 111.03 139.878 116.125 138.52C126.905 135.513 135.528 129.207 141.996 120.283C144.544 116.791 146.307 112.814 147.091 108.448C134.058 120.477 119.555 129.789 102.504 134.737C104.66 134.737 106.62 134.252 108.58 133.864C110.442 133.476 112.205 133.185 114.067 132.797C97.8983 139.199 81.1413 138.617 64.3842 136.289ZM84.865 4.65271C107.992 11.4431 125.631 25.7999 143.172 40.1566C137.488 30.1651 130.628 21.2406 121.123 14.6442C113.675 9.50297 105.836 5.52576 96.8203 4.26469C93.0966 3.77967 89.3728 3.29464 84.865 4.65271ZM168.944 88.1742C169.924 71.8773 166.2 57.8116 156.891 45.4919C151.599 38.5075 145.034 32.2992 138.958 25.8969C136.606 23.4717 133.862 21.5316 131.314 19.3005C137.39 27.2549 143.564 34.9183 148.071 43.7458C150.031 47.529 152.481 50.8272 155.225 54.0284C161.007 60.5277 165.22 67.9001 167.082 76.5336C167.866 80.1228 168.258 83.712 168.944 88.1742ZM6.7636 89.1442C7.93953 85.5551 8.91948 82.4509 9.80143 79.2497C9.89942 78.7647 9.80143 78.0857 9.50744 77.6006C7.05759 73.0414 6.56761 67.9001 5.88165 62.8558C5.48968 59.6547 5.58767 56.2595 6.07764 52.9613C7.35157 44.2308 12.0553 37.0525 17.151 30.0681C18.7189 27.934 20.1888 25.7028 21.7567 23.4717C21.4627 23.2777 21.2668 23.0837 20.9728 22.7927C18.6209 24.7328 16.269 26.5759 14.0152 28.613C8.72349 33.5603 4.41174 39.2836 2.94183 46.559C0.00199812 60.9157 2.45185 74.8845 6.7636 89.1442ZM48.7052 23.2777C43.9034 23.0837 39.3957 23.3747 36.2599 27.3519C35.8679 27.934 35.0839 28.225 34.594 28.71C28.4203 33.8513 22.9327 39.3806 19.3069 46.559C16.857 51.5062 14.3092 56.6475 14.3092 62.1768C14.3092 69.3552 15.0931 76.6306 15.8771 83.809C16.367 88.9502 19.2089 93.0245 22.6387 96.8077C21.9527 93.5095 21.0708 90.3083 19.9928 87.2041C16.955 78.2797 16.0731 69.0642 17.053 59.7517C17.445 56.3565 18.6209 52.9613 20.0908 49.8571C24.4026 40.8357 31.9481 34.5303 39.9837 28.807C42.7275 26.7699 45.7653 25.1208 48.7052 23.2777ZM75.0656 6.3018C80.3573 7.75688 85.453 8.92094 90.4507 10.667C101.524 14.4502 110.736 21.5316 120.437 27.6429C129.648 33.4633 137.096 41.3207 143.956 49.7601C145.817 51.9913 148.071 54.0284 150.717 56.6475C150.619 55.2894 150.619 54.9014 150.521 54.5134C149.443 49.8571 146.209 46.559 142.878 43.5518C136.116 37.5375 129.256 31.7172 122.103 26.0909C112.205 18.3304 101.328 12.1221 89.2748 7.85389C86.139 6.78683 82.8072 5.91378 79.5733 5.42876C78.1034 5.23475 76.5355 6.01079 75.0656 6.3018ZM153.951 56.5505C155.225 60.8187 155.715 64.5049 157.283 67.7061C160.027 73.6234 160.909 79.8317 161.105 86.3311C161.203 92.3454 162.966 98.0687 164.142 104.859C168.552 92.1514 166.886 67.5121 153.951 56.5505ZM115.929 30.1651C103.288 16.6814 81.6312 13.7712 67.0301 18.9125C74.9676 20.0765 83.4931 20.6586 91.7246 22.5987C100.054 24.4418 107.992 27.6429 115.929 30.1651ZM113.773 143.855C114.949 143.758 115.537 143.855 116.125 143.758C126.611 142.206 135.92 137.841 144.74 132.215C148.267 129.983 151.305 126.976 154.343 123.969C155.617 122.708 156.891 120.962 156.695 118.537C143.27 128.916 128.374 135.513 113.773 143.855ZM80.4553 14.8383C79.4753 14.5472 78.4954 14.1592 77.6135 14.0622C72.5178 13.7712 67.4221 13.5772 62.3264 13.1892C54.8788 12.6071 49.9791 17.2634 44.4914 20.6586C44.5894 21.0466 44.6874 21.3376 44.8834 21.7256C56.6427 19.3975 68.402 17.1664 80.4553 14.8383ZM160.517 98.3597L159.341 98.0687C155.127 109.709 148.659 119.798 138.86 127.655C145.719 124.26 152.187 120.38 157.283 114.754C158.263 113.687 159.243 112.134 159.439 110.679C160.027 106.702 160.223 102.531 160.517 98.3597ZM28.0284 19.3005C31.6541 17.7484 35.1819 16.1963 38.8077 14.7413C40.5716 14.0622 42.4335 13.7712 44.1974 12.9952C50.665 10.279 57.2307 8.0479 64.3842 7.56287C66.5401 7.36886 68.794 6.78683 71.2438 4.65271C54.3888 4.4587 39.8857 8.24191 28.0284 19.3005ZM152.579 93.3155C155.617 87.7862 156.205 83.4209 154.245 79.3467C150.325 71.1983 145.132 63.6319 139.546 56.4535C144.838 68.3851 151.599 79.8317 152.579 93.3155ZM13.5252 42.5818C6.17564 50.8272 5.68567 67.0271 11.1733 74.4965C11.9573 63.8259 12.7413 53.6403 13.5252 42.5818ZM14.2112 87.6892C15.4851 99.8148 20.4828 110.291 27.4404 119.992C29.2043 122.417 33.712 124.745 36.5539 124.648C26.3625 113.784 18.1309 101.949 14.2112 87.6892ZM61.6404 10.9581C73.8897 12.4131 84.963 13.7712 96.5264 15.2263C87.4129 9.988 78.0054 8.0479 68.01 8.72693C66.1481 8.92094 64.2862 9.988 61.6404 10.9581ZM34.202 26.8669C33.908 26.6729 33.712 26.4789 33.418 26.2849C31.9481 26.8669 30.4782 27.4489 29.0083 28.031C24.8925 29.6801 21.6587 32.2022 19.9928 36.3734C18.0329 41.3207 16.1711 46.268 14.3092 51.3122C14.3092 51.4092 14.6031 51.6032 15.0931 51.9913C18.9149 41.5147 25.7745 33.5603 34.202 26.8669ZM133.96 44.4249C141.31 55.1924 148.071 65.184 154.833 75.1755C150.717 63.4379 145.523 52.3793 133.96 44.4249ZM11.3693 81.9659C8.23352 86.7191 8.62549 90.8903 9.89942 95.1586C11.6633 101.076 14.7991 106.314 18.4249 111.261C18.7189 111.746 19.4049 111.94 19.8948 112.328C15.1911 102.919 12.0553 93.2185 11.3693 81.9659ZM147.091 115.336C147.385 115.53 147.777 115.724 148.071 115.918C150.227 112.037 152.775 108.254 154.539 104.18C156.205 100.397 157.185 96.2256 158.361 92.1514C158.753 90.6963 159.243 88.8532 157.283 87.4952C153.853 97.0017 150.521 106.12 147.091 115.336ZM51.253 13.8682C41.2576 14.6442 34.888 19.8825 28.0284 25.8969C35.9659 24.2478 39.8857 22.2107 51.253 13.8682ZM20.2868 31.6202L28.9103 22.4047C28.7143 22.2107 28.5183 22.0166 28.2243 21.8226C24.9905 24.5388 20.7768 26.4789 20.2868 31.6202ZM83.5911 2.03357H71.6358C75.5556 3.48865 79.4754 4.4587 83.5911 2.03357ZM47.3332 134.931C47.5292 134.64 47.6272 134.446 47.8232 134.155C45.5693 132.215 43.6094 129.692 39.0037 129.886C42.2375 131.924 44.7854 133.476 47.3332 134.931ZM109.07 142.885C108.972 142.594 108.874 142.303 108.776 142.012C105.346 142.691 101.916 143.37 98.5842 143.952C98.6822 144.243 98.6822 144.534 98.7802 144.825C102.21 144.243 105.64 143.564 109.07 142.885ZM24.7945 104.859C24.5006 105.15 24.3046 105.344 24.0106 105.635C26.1665 108.448 27.5384 111.843 31.1642 113.59C29.0083 110.679 26.8524 107.769 24.7945 104.859ZM130.04 39.0896L130.726 38.2165C129.06 36.8584 127.493 35.5004 125.827 34.1423C125.533 34.4333 125.337 34.8213 125.043 35.1124C126.709 36.3734 128.374 37.7315 130.04 39.0896ZM57.6226 11.0551C57.5246 10.764 57.4266 10.57 57.3286 10.279C56.1527 10.667 54.9768 11.1521 53.8009 11.5401C53.8988 11.8311 53.9968 12.0251 54.0948 12.3161C55.2708 11.9281 56.4467 11.4431 57.6226 11.0551ZM128.374 17.8454C128.473 17.6514 128.668 17.3604 128.766 17.1664C128.179 16.7784 127.689 16.4873 127.101 16.0993C127.003 16.1963 126.905 16.2933 126.905 16.4873C127.395 16.9724 127.885 17.3604 128.374 17.8454Z" fill="#D0DF00"/>
        </svg>
      </div>
      <div className="w-100 row p-5 bg_white">
        <div className="col-md-6 col-12">
          <span className="mainPlan">Summary</span>
          <Paragraph className="paragraph_black py-3">
            {details.selectedPackage}
          </Paragraph>
          <ul className="p-0" style={{
            listStyle: 'none'
          }}>
            <li className="d-flex align-items-center mb-4">
              <Calunder />
              <Paragraph className="mb-0 mx-2">{details.selected_plan}</Paragraph>
            </li>
            <li className="d-flex align-items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M26.2502 17.6663L26.4947 15.0687C26.6867 13.0286 26.7827 12.0085 26.4337 11.5869C26.2449 11.3588 25.9882 11.219 25.7137 11.1949C25.2063 11.1503 24.5691 11.8757 23.2947 13.3266C22.6356 14.0769 22.306 14.4521 21.9384 14.5102C21.7347 14.5424 21.5271 14.5093 21.339 14.4146C20.9996 14.2438 20.7732 13.78 20.3206 12.8524L17.9346 7.96316C17.0792 6.21038 16.6515 5.33398 16.0007 5.33398C15.3498 5.33398 14.9221 6.21038 14.0667 7.96317L11.6807 12.8524C11.2281 13.78 11.0017 14.2438 10.6623 14.4146C10.4742 14.5093 10.2666 14.5424 10.0629 14.5102C9.69528 14.4521 9.36574 14.0769 8.70665 13.3266C7.4322 11.8757 6.79498 11.1503 6.28757 11.1949C6.01309 11.219 5.75636 11.3588 5.56757 11.5869C5.21857 12.0085 5.31457 13.0286 5.50658 15.0687L5.75105 17.6663C6.15388 21.9464 6.35529 24.0865 7.61675 25.3769C8.87821 26.6673 10.7688 26.6673 14.5501 26.6673H17.4512C21.2325 26.6673 23.1231 26.6673 24.3845 25.3769C25.646 24.0865 25.8474 21.9464 26.2502 17.6663Z" stroke="black" stroke-width="2"/>
              <path d="M15.0898 16.5575C15.4951 15.8304 15.6978 15.4668 16.0008 15.4668C16.3038 15.4668 16.5064 15.8304 16.9118 16.5575L17.0166 16.7456C17.1318 16.9522 17.1894 17.0555 17.2792 17.1237C17.369 17.1919 17.4808 17.2172 17.7045 17.2678L17.9081 17.3138C18.6952 17.4919 19.0888 17.581 19.1824 17.8821C19.276 18.1832 19.0077 18.4969 18.4711 19.1244L18.3323 19.2867C18.1798 19.465 18.1036 19.5542 18.0693 19.6645C18.035 19.7748 18.0465 19.8937 18.0696 20.1316L18.0906 20.3482C18.1717 21.1854 18.2123 21.604 17.9671 21.7901C17.722 21.9762 17.3535 21.8065 16.6166 21.4672L16.4259 21.3794C16.2165 21.283 16.1118 21.2347 16.0008 21.2347C15.8898 21.2347 15.7851 21.283 15.5757 21.3794L15.385 21.4672C14.648 21.8065 14.2796 21.9762 14.0344 21.7901C13.7893 21.604 13.8299 21.1854 13.911 20.3482L13.932 20.1316C13.955 19.8937 13.9666 19.7748 13.9323 19.6645C13.898 19.5542 13.8217 19.465 13.6692 19.2867L13.5304 19.1244C12.9938 18.4969 12.7255 18.1832 12.8192 17.8821C12.9128 17.581 13.3063 17.4919 14.0934 17.3138L14.2971 17.2678C14.5207 17.2172 14.6326 17.1919 14.7224 17.1237C14.8122 17.0555 14.8697 16.9522 14.9849 16.7456L15.0898 16.5575Z" stroke="#BDBDBD" stroke-width="2"/>
            </svg>
              <Paragraph className="mb-0 mx-2">{details.mainPlan}</Paragraph>
            </li>
            <li className="d-flex align-items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <path d="M12.815 2.8178C13.4906 1.60593 13.8283 1 14.3333 1C14.8383 1 15.1761 1.60593 15.8516 2.8178L16.0264 3.13132C16.2184 3.4757 16.3144 3.64789 16.464 3.7615C16.6137 3.87511 16.8001 3.91728 17.1729 4.00163L17.5122 4.07842C18.8241 4.37523 19.48 4.52364 19.636 5.02546C19.7921 5.52728 19.3449 6.05017 18.4506 7.09596L18.2192 7.36652C17.9651 7.6637 17.838 7.81229 17.7809 7.99612C17.7237 8.17994 17.7429 8.37819 17.7813 8.7747L17.8163 9.13568C17.9515 10.531 18.0191 11.2286 17.6106 11.5388C17.202 11.8489 16.5879 11.5662 15.3596 11.0006L15.0419 10.8543C14.6928 10.6936 14.5183 10.6133 14.3333 10.6133C14.1483 10.6133 13.9738 10.6936 13.6248 10.8543L13.307 11.0006C12.0788 11.5662 11.4646 11.8489 11.0561 11.5388C10.6475 11.2286 10.7151 10.531 10.8503 9.13568L10.8853 8.7747C10.9237 8.37819 10.943 8.17994 10.8858 7.99612C10.8286 7.81229 10.7016 7.6637 10.4474 7.36652L10.2161 7.09596C9.32173 6.05017 8.87457 5.52728 9.03062 5.02546C9.18668 4.52364 9.84259 4.37523 11.1544 4.07842L11.4938 4.00163C11.8666 3.91728 12.053 3.87511 12.2026 3.7615C12.3523 3.64789 12.4483 3.4757 12.6402 3.13132L12.815 2.8178Z" stroke="black" stroke-width="1.5"/>
                <path d="M24.2415 8.57687C24.5793 7.97094 24.7482 7.66797 25.0007 7.66797C25.2531 7.66797 25.422 7.97094 25.7598 8.57687L25.8472 8.73363C25.9432 8.90582 25.9912 8.99191 26.066 9.04872C26.1408 9.10552 26.234 9.12661 26.4204 9.16878L26.5901 9.20718C27.246 9.35558 27.574 9.42979 27.652 9.6807C27.73 9.93161 27.5065 10.1931 27.0593 10.7159L26.9436 10.8512C26.8165 10.9998 26.753 11.0741 26.7244 11.166C26.6958 11.2579 26.7054 11.3571 26.7247 11.5553L26.7421 11.7358C26.8098 12.4335 26.8436 12.7823 26.6393 12.9374C26.435 13.0924 26.1279 12.951 25.5138 12.6683L25.3549 12.5951C25.1804 12.5148 25.0931 12.4746 25.0007 12.4746C24.9082 12.4746 24.8209 12.5148 24.6464 12.5951L24.4875 12.6683C23.8734 12.951 23.5663 13.0924 23.362 12.9374C23.1577 12.7823 23.1916 12.4335 23.2592 11.7358L23.2766 11.5553C23.2959 11.3571 23.3055 11.2579 23.2769 11.166C23.2483 11.0741 23.1848 10.9998 23.0577 10.8512L22.942 10.7159C22.4949 10.1931 22.2713 9.93161 22.3493 9.6807C22.4273 9.42979 22.7553 9.35558 23.4112 9.20718L23.5809 9.16878C23.7673 9.12661 23.8605 9.10552 23.9353 9.04872C24.0101 8.99191 24.0581 8.90582 24.1541 8.73363L24.2415 8.57687Z" stroke="black" stroke-width="1.5"/>
                <path d="M2.90751 8.57687C3.24528 7.97094 3.41417 7.66797 3.66667 7.66797C3.91916 7.66797 4.08805 7.97094 4.42582 8.57687L4.51321 8.73363C4.60919 8.90582 4.65719 8.99191 4.73202 9.04872C4.80684 9.10552 4.90004 9.12661 5.08643 9.16878L5.25612 9.20718C5.91204 9.35558 6.24 9.42979 6.31802 9.6807C6.39605 9.93161 6.17247 10.1931 5.72531 10.7159L5.60962 10.8512C5.48255 10.9998 5.41902 11.0741 5.39044 11.166C5.36185 11.2579 5.37146 11.3571 5.39067 11.5553L5.40816 11.7358C5.47577 12.4335 5.50957 12.7823 5.30529 12.9374C5.10102 13.0924 4.79395 12.951 4.17982 12.6683L4.02094 12.5951C3.84642 12.5148 3.75916 12.4746 3.66667 12.4746C3.57417 12.4746 3.48691 12.5148 3.3124 12.5951L3.15351 12.6683C2.53938 12.951 2.23231 13.0924 2.02804 12.9374C1.82377 12.7823 1.85757 12.4335 1.92517 11.7358L1.94266 11.5553C1.96187 11.3571 1.97148 11.2579 1.9429 11.166C1.91431 11.0741 1.85078 10.9998 1.72371 10.8512L1.60803 10.7159C1.16087 10.1931 0.937287 9.93161 1.01531 9.6807C1.09334 9.42979 1.4213 9.35558 2.07721 9.20718L2.2469 9.16878C2.43329 9.12661 2.52649 9.10552 2.60132 9.04872C2.67615 8.99191 2.72414 8.90582 2.82012 8.73363L2.90751 8.57687Z" stroke="black" stroke-width="1.5"/>
                <path opacity="0.5" d="M3.66602 26.8499H6.67926C8.02707 26.8499 9.38939 26.9903 10.7011 27.2605C13.0214 27.7386 15.4645 27.7965 17.8086 27.417C18.9644 27.2299 20.1007 26.9439 21.1293 26.4474C22.0579 25.9992 23.1953 25.3675 23.9593 24.6599C24.7221 23.9533 25.5167 22.7969 26.0806 21.893C26.5642 21.1179 26.3303 20.167 25.5654 19.5894C24.7158 18.9479 23.455 18.948 22.6055 19.5897L20.1959 21.4099C19.2621 22.1154 18.242 22.7648 17.0268 22.9586C16.8807 22.9819 16.7276 23.0031 16.5678 23.0216M16.5678 23.0216C16.5197 23.0272 16.471 23.0325 16.4218 23.0376M16.5678 23.0216C16.7622 22.98 16.9553 22.8601 17.1364 22.702C17.994 21.9535 18.0482 20.692 17.3041 19.8562C17.1314 19.6623 16.9294 19.5005 16.7048 19.3666C12.975 17.142 7.1719 18.8363 3.66602 21.3226M16.5678 23.0216C16.5192 23.0321 16.4704 23.0376 16.4218 23.0376M16.4218 23.0376C15.7239 23.1092 14.9076 23.1277 14.0017 23.0422" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
                {details?.amenities.map(item=>{
                  return (<span className='me-2'>{item.title},</span>)
                })}
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M5.33398 13.5257C5.33398 7.52914 10.1096 2.66797 16.0007 2.66797C21.8917 2.66797 26.6673 7.52914 26.6673 13.5257C26.6673 19.4753 23.2629 26.4179 17.9512 28.9006C16.713 29.4793 15.2883 29.4793 14.0501 28.9006C8.73842 26.4179 5.33398 19.4753 5.33398 13.5257Z" stroke="black" stroke-width="2"/>
                <ellipse cx="16" cy="13.332" rx="4" ry="4" stroke="#BDBDBD" stroke-width="2"/>
              </svg>
              <span className='ms-2'>{branch}</span>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-12 border-left">
          <ul className="p-0 px-sm-3 px-1" style={{
            listStyle: 'none'
          }}>
            <li className="d-flex align-items-center mb-4">
              <Payment />
              <Paragraph className="mb-0 mx-2">
                {Math.floor(details.price)} EGP
              </Paragraph>
            </li>
            <li className="mb-0">
              <PromoCode price={details.price} getPrice={getPrice}/>
            </li>
              <div className="my-32" style={{
                borderBottom: '1px solid black'
              }}></div>
            <li className="price-promo">
              <div className="d-flex justify-content-between align-items-center">
                <p>Total Price:</p>
                <p>{priceAfterPromo} EGP</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CaseOne;
