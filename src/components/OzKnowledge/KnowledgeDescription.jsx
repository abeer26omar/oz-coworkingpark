import Paragraph from "../UI/Paragraph";
import CountUp from 'react-countup';
import './OzKnowledge.css';
import { useNavigate } from "react-router-dom";
import { Skeleton } from 'antd';

const KnowledgeDescription = ({ categories, info, isPending }) => {

  const navigate = useNavigate();

  const HandelCourses = (id, ids, item) => {
    localStorage.setItem('coursesIdsOz', ids);
    localStorage.setItem('courseOzCat', JSON.stringify(item));
    navigate(`/courses/${id}`);
  };

  return (
    <>
      <section className="knowledge_description container-fluid px-70 py-5">
        <div className="description">
          <Paragraph className="status-event">Description</Paragraph>
          {isPending && (<Skeleton active paragraph={{rows: 3}} />)}
          <Paragraph className="p-text-box">{info?.descriptions}</Paragraph>
        </div>
        <div className="circle_yellow_knowledge">
        <svg xmlns="http://www.w3.org/2000/svg" width="83" height="163" viewBox="0 0 83 163" fill="none">
          <path d="M82.8948 90.0965C83.7429 104.317 79.6083 115.99 73.9894 127.345C73.4593 128.512 72.7172 129.573 72.3991 130.74C70.1727 138.699 64.4478 144.005 58.1928 148.675C50.4536 154.405 41.7601 157.695 32.2186 159.605C22.571 161.515 12.9235 163.001 3.06385 163.107C-7.85592 163.107 -18.3516 161.303 -28.6353 157.907C-34.3602 155.997 -39.9791 154.087 -45.7041 152.283C-53.4433 149.842 -59.6983 144.854 -65.7413 139.867C-76.5551 130.953 -86.6267 121.19 -92.4576 108.137C-95.4261 101.557 -97.3344 94.3413 -99.0307 87.3373C-101.469 78.2111 -102.423 68.8725 -101.893 59.4278C-101.257 47.8608 -97.0164 38.2039 -88.429 30.4571C-77.0851 20.1635 -64.5751 11.4617 -50.2628 5.94348C-33.3 -0.529827 -15.7012 -1.69714 2.1097 2.33541C5.39623 3.07825 8.57675 3.82108 11.8633 4.4578C21.9349 6.36796 30.7344 10.9311 38.5796 17.1922C50.2415 26.3185 60.6312 36.8243 69.5367 48.6036C73.3533 53.5913 76.3217 59.2156 78.4421 65.3706C81.4106 73.754 83.5309 82.3497 82.8948 90.0965ZM-16.4433 148.25C-10.6124 147.613 -4.78142 147.295 1.04952 146.34C24.2673 142.201 43.1384 130.422 58.5108 112.806C59.253 111.851 59.9951 110.578 60.1011 109.41C60.9492 102.619 60.7372 95.8269 58.5108 89.2475C53.422 74.2846 45.6828 60.7013 37.2014 47.5424C35.7172 45.2078 33.8088 42.767 31.5825 41.1752C23.3131 35.5509 14.3017 31.4122 4.76012 28.2286C-5.73557 24.7267 -16.5493 23.5594 -27.4691 23.0288C-36.2685 22.7104 -44.7499 23.4532 -52.0651 28.8654C-55.8817 31.7306 -60.1224 34.0652 -63.727 37.0366C-71.1482 43.2976 -77.6152 50.4077 -80.4777 60.1707C-82.7041 67.8113 -82.492 75.6642 -81.3258 83.3048C-79.5235 95.1902 -75.2829 106.227 -70.194 117.051C-67.1195 123.418 -63.0909 129.255 -57.684 133.606C-45.7041 143.262 -32.1339 148.781 -16.4433 148.25ZM-32.3459 149.099C-32.4519 149.524 -32.5579 149.842 -32.6639 150.266C-28.5293 151.328 -24.5006 152.389 -20.3659 153.344C-11.3545 155.254 -2.237 156.421 6.9865 155.254C12.6054 154.511 18.1183 153.025 23.6312 151.54C35.2931 148.25 44.6226 141.352 51.6197 131.589C54.3762 127.769 56.2845 123.418 57.1326 118.643C43.0323 131.802 27.3418 141.989 8.8948 147.401C11.2272 147.401 13.3475 146.871 15.4679 146.446C17.4822 146.022 19.3905 145.703 21.4048 145.279C3.91199 152.283 -14.2169 151.646 -32.3459 149.099ZM-10.1883 5.09452C14.8318 12.5229 33.9149 28.2286 52.892 43.9344C46.743 33.004 39.3217 23.241 29.0381 16.0249C20.9808 10.4005 12.4994 6.0496 2.7458 4.67004C-1.28284 4.13944 -5.31151 3.60884 -10.1883 5.09452ZM80.7745 96.4637C81.8346 78.6355 77.806 63.2482 67.7344 49.771C62.0094 42.1303 54.9063 35.3387 48.3332 28.3348C45.7888 25.6818 42.8203 23.5594 40.0639 21.1186C46.6369 29.8204 53.316 38.2039 58.1928 47.8608C60.3132 51.9995 62.9636 55.6075 65.9321 59.1095C72.1871 66.2195 76.7458 74.2846 78.7601 83.7293C79.6083 87.6557 80.0323 91.5821 80.7745 96.4637ZM-94.684 97.5248C-93.4118 93.5984 -92.3516 90.2026 -91.3975 86.7006C-91.2914 86.17 -91.3975 85.4272 -91.7155 84.8966C-94.3659 79.909 -94.896 74.2846 -95.6382 68.7664C-96.0622 65.2644 -95.9562 61.5502 -95.4261 57.9422C-94.0479 48.3914 -88.9591 40.5385 -83.4462 32.8979C-81.7499 30.5633 -80.1596 28.1225 -78.4634 25.6818C-78.7814 25.4695 -78.9935 25.2573 -79.3115 24.9389C-81.8559 27.0613 -84.4003 29.0776 -86.8387 31.3061C-92.5637 36.7182 -97.2284 42.9793 -98.8187 50.9383C-101.999 66.644 -99.3488 81.9252 -94.684 97.5248ZM-49.3086 25.4695C-54.5035 25.2573 -59.3803 25.5756 -62.7728 29.9265C-63.1969 30.5633 -64.045 30.8816 -64.5751 31.4122C-71.2542 37.0366 -77.1912 43.0854 -81.1138 50.9383C-83.7642 56.3504 -86.5207 61.9747 -86.5207 68.0235C-86.5207 75.8764 -85.6725 83.8354 -84.8244 91.6883C-84.2943 97.3126 -81.2198 101.77 -77.5092 105.908C-78.2513 102.3 -79.2055 98.7983 -80.3717 95.4025C-83.6582 85.6394 -84.6124 75.5581 -83.5522 65.3706C-83.1281 61.6564 -81.8559 57.9422 -80.2657 54.5463C-75.6009 44.6772 -67.4376 37.7794 -58.7442 31.5183C-55.7757 29.2898 -52.4892 27.4858 -49.3086 25.4695ZM-20.79 6.89856C-15.0651 8.49035 -9.55219 9.76379 -4.14531 11.6739C7.83463 15.8126 17.8002 23.5594 28.2959 30.2449C38.2616 36.6121 46.3189 45.2078 53.7401 54.4402C55.7544 56.881 58.1928 59.1095 61.0553 61.9747C60.9492 60.489 60.9493 60.0646 60.8432 59.6401C59.677 54.5463 56.1785 50.9383 52.5739 47.6486C45.2587 41.0691 37.8375 34.7019 30.0982 28.547C19.3905 20.0574 7.62259 13.2657 -5.41753 8.59647C-8.81007 7.42916 -12.4147 6.47408 -15.9132 5.94348C-17.5035 5.73124 -19.1998 6.5802 -20.79 6.89856ZM64.5538 61.8686C65.9321 66.5379 66.4621 70.5704 68.1584 74.0724C71.1269 80.5457 72.0811 87.3373 72.2931 94.4474C72.3991 101.027 74.3074 107.288 75.5796 114.716C80.3504 100.815 78.5481 73.8601 64.5538 61.8686ZM23.4192 33.004C9.74294 18.2534 -13.6869 15.0698 -29.4834 20.6941C-20.896 21.9676 -11.6725 22.6043 -2.76709 24.7267C6.24437 26.743 14.8318 30.2449 23.4192 33.004ZM21.0868 157.376C22.359 157.27 22.9951 157.376 23.6312 157.27C34.975 155.572 45.0467 150.797 54.5882 144.642C58.4048 142.201 61.6914 138.912 64.9779 135.622C66.3561 134.242 67.7343 132.332 67.5223 129.679C52.998 141.034 36.8833 148.25 21.0868 157.376ZM-14.9591 16.2371C-16.0192 15.9187 -17.0794 15.4943 -18.0336 15.3881C-23.5465 15.0698 -29.0594 14.8575 -34.5723 14.4331C-42.6296 13.7963 -47.9304 18.8901 -53.8674 22.6043C-53.7614 23.0288 -53.6553 23.3471 -53.4433 23.7716C-40.7212 21.2247 -27.9992 18.784 -14.9591 16.2371ZM71.657 107.606L70.3848 107.288C65.826 120.022 58.8289 131.059 48.2272 139.654C55.6484 135.94 62.6455 131.695 68.1584 125.54C69.2186 124.373 70.2788 122.675 70.4908 121.083C71.1269 116.733 71.3389 112.169 71.657 107.606ZM-71.6783 21.1186C-67.7556 19.4207 -63.939 17.7228 -60.0164 16.131C-58.1081 15.3881 -56.0937 15.0698 -54.1854 14.2208C-47.1883 11.2495 -40.0851 8.80871 -32.3459 8.27811C-30.0135 8.06588 -27.5751 7.42916 -24.9247 5.09452C-43.1596 4.88228 -58.8502 9.02095 -71.6783 21.1186ZM63.0696 102.088C66.3561 96.0392 66.9922 91.2638 64.8719 86.8068C60.6312 77.8927 55.0123 69.6153 48.9693 61.7625C54.6942 74.8152 62.0094 87.3373 63.0696 102.088ZM-87.3688 46.5874C-95.3201 55.6075 -95.8502 73.3295 -89.9132 81.5008C-89.0651 69.8276 -88.217 58.685 -87.3688 46.5874ZM-86.6267 95.9331C-85.2485 109.198 -79.8416 120.659 -72.3144 131.271C-70.4061 133.924 -65.5293 136.471 -62.4548 136.365C-73.4806 124.479 -82.386 111.533 -86.6267 95.9331ZM-35.3144 11.9923C-22.0622 13.5841 -10.0823 15.0698 2.42775 16.6616C-7.43185 10.9311 -17.6095 8.80871 -28.4232 9.55155C-30.4376 9.76379 -32.4519 10.9311 -35.3144 11.9923ZM-64.9992 29.396C-65.3172 29.1837 -65.5293 28.9715 -65.8473 28.7592C-67.4376 29.396 -69.0278 30.0327 -70.6181 30.6694C-75.0708 32.4734 -78.5694 35.2325 -80.3717 39.7957C-82.492 45.2078 -84.5063 50.6199 -86.5207 56.1381C-86.5207 56.2443 -86.2026 56.4565 -85.6725 56.881C-81.5379 45.42 -74.1167 36.7182 -64.9992 29.396ZM42.9263 48.6036C50.8776 60.3829 58.1928 71.3133 65.508 82.2436C61.0553 69.4031 55.4364 57.3055 42.9263 48.6036ZM-89.7012 89.672C-93.0937 94.8719 -92.6697 99.435 -91.2914 104.104C-89.3831 110.578 -85.9906 116.308 -82.068 121.72C-81.7499 122.251 -81.0078 122.463 -80.4777 122.887C-85.5665 112.594 -88.9591 101.982 -89.7012 89.672ZM57.1326 126.177C57.4507 126.389 57.8748 126.602 58.1928 126.814C60.5252 122.569 63.2816 118.43 65.1899 113.973C66.9922 109.835 68.0524 105.272 69.3246 100.815C69.7487 99.2228 70.2788 97.2065 68.1584 95.7208C64.4478 106.121 60.8432 116.096 57.1326 126.177ZM-46.5522 15.1759C-57.3659 16.0249 -64.2571 21.7553 -71.6783 28.3348C-63.0909 26.5307 -58.8502 24.3022 -46.5522 15.1759ZM-80.0536 34.5958L-70.7241 24.5144C-70.9361 24.3022 -71.1482 24.09 -71.4662 23.8777C-74.9648 26.8491 -79.5235 28.9715 -80.0536 34.5958ZM-11.5665 2.22929H-24.5006C-20.2599 3.82108 -16.0192 4.88228 -11.5665 2.22929ZM-50.7929 147.613C-50.5808 147.295 -50.4748 147.083 -50.2628 146.764C-52.7012 144.642 -54.8215 141.883 -59.8043 142.095C-56.3058 144.324 -53.5493 146.022 -50.7929 147.613ZM15.998 156.315C15.8919 155.997 15.7859 155.678 15.6799 155.36C11.9693 156.103 8.2587 156.846 4.65411 157.483C4.76013 157.801 4.76013 158.119 4.86615 158.438C8.57675 157.801 12.2874 157.058 15.998 156.315ZM-75.1768 114.716C-75.4949 115.035 -75.7069 115.247 -76.025 115.565C-73.6926 118.643 -72.2084 122.357 -68.2857 124.267C-70.6181 121.083 -72.9505 117.9 -75.1768 114.716ZM38.6856 42.767L39.4277 41.812C37.6255 40.3263 35.9292 38.8406 34.1269 37.3549C33.8088 37.6733 33.5968 38.0978 33.2787 38.4161C35.081 39.7957 36.8833 41.2814 38.6856 42.767ZM-39.6611 12.0984C-39.7671 11.7801 -39.8731 11.5678 -39.9791 11.2495C-41.2513 11.6739 -42.5235 12.2045 -43.7957 12.629C-43.6897 12.9474 -43.5837 13.1596 -43.4777 13.478C-42.2055 13.0535 -40.9333 12.5229 -39.6611 12.0984ZM36.8833 19.5268C36.9894 19.3146 37.2014 18.9962 37.3074 18.784C36.6713 18.3595 36.1412 18.0411 35.5051 17.6167C35.3991 17.7228 35.2931 17.8289 35.2931 18.0411C35.8232 18.5717 36.3533 18.9962 36.8833 19.5268Z" fill="#D0DF00"/>
        </svg>
    </div>
        <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-2 g-3 justify-content-center py-5">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex">
              <div className="counter_icon me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_5471_14133)">
                    <path
                      d="M1.25 15L20 5L38.75 15L20 25L1.25 15Z"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29.375 37.5V20L20 15"
                      stroke="#BDBDBD"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M34.375 17.3281V25.8594C34.3739 26.1249 34.2861 26.3827 34.125 26.5937C33.0781 28 28.6406 33.125 20 33.125C11.3594 33.125 6.92187 28 5.875 26.5937C5.7139 26.3827 5.62612 26.1249 5.625 25.8594V17.3281"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5471_14133">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <CountUp
                  end={info?.trainers}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                  className="counter"
                />
                <Paragraph className="mb-0 p-counter">Instructor</Paragraph>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex">
              <div className="counter_icon me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M13.75 25C18.2373 25 21.875 21.3623 21.875 16.875C21.875 12.3877 18.2373 8.75 13.75 8.75C9.26269 8.75 5.625 12.3877 5.625 16.875C5.625 21.3623 9.26269 25 13.75 25Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M24.2812 9.04688C24.9995 8.85207 25.7402 8.75227 26.4844 8.75C28.6393 8.75 30.7059 9.60602 32.2296 11.1298C33.7533 12.6535 34.6094 14.7201 34.6094 16.875C34.6094 19.0299 33.7533 21.0965 32.2296 22.6202C30.7059 24.144 28.6393 25 26.4844 25"
                    stroke="#BDBDBD"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 30.8443C3.76867 29.039 5.45318 27.5655 7.41126 26.5482C9.36934 25.531 11.5435 25 13.75 25C15.9565 25 18.1307 25.531 20.0887 26.5482C22.0468 27.5655 23.7313 29.039 25 30.8443"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.4844 25C28.6911 24.9986 30.8657 25.529 32.8239 26.5462C34.7822 27.5635 36.4666 29.0376 37.7344 30.8438"
                    stroke="#BDBDBD"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <CountUp
                  end={info?.students}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                  className="counter"
                  suffix="+"
                />
                <Paragraph className="mb-0 p-counter">Student</Paragraph>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex">
              <div className="counter_icon me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clip-path="url(#clip0_5471_14158)">
                    <path d="M20 28.125C23.4518 28.125 26.25 25.3268 26.25 21.875C26.25 18.4232 23.4518 15.625 20 15.625C16.5482 15.625 13.75 18.4232 13.75 21.875C13.75 25.3268 16.5482 28.125 20 28.125Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30.625 18.125C32.0809 18.1226 33.5171 18.4604 34.8193 19.1114C36.1214 19.7625 37.2534 20.7089 38.125 21.875" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.875 21.875C2.74656 20.7089 3.87856 19.7625 5.18072 19.1114C6.48287 18.4604 7.91915 18.1226 9.375 18.125" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 33.7499C11.8232 32.0641 13.1033 30.6434 14.6944 29.6496C16.2856 28.6558 18.124 28.1289 20 28.1289C21.876 28.1289 23.7144 28.6558 25.3056 29.6496C26.8968 30.6434 28.1768 32.0641 29 33.7499" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.37422 18.125C8.42522 18.126 7.49555 17.8568 6.69382 17.3491C5.8921 16.8413 5.25144 16.1158 4.84669 15.2575C4.44195 14.3991 4.28984 13.4433 4.40815 12.5017C4.52645 11.5601 4.91027 10.6716 5.51477 9.94007C6.11927 9.20851 6.91947 8.66409 7.82189 8.37042C8.7243 8.07676 9.69166 8.04597 10.6109 8.28166C11.5302 8.51735 12.3634 9.00978 13.0132 9.70142C13.663 10.3931 14.1025 11.2553 14.2805 12.1875" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25.7188 12.1875C25.8967 11.2553 26.3362 10.3931 26.986 9.70142C27.6358 9.00978 28.469 8.51735 29.3883 8.28166C30.3076 8.04597 31.2749 8.07676 32.1773 8.37042C33.0797 8.66409 33.88 9.20851 34.4844 9.94007C35.0889 10.6716 35.4728 11.5601 35.5911 12.5017C35.7094 13.4433 35.5573 14.3991 35.1525 15.2575C34.7478 16.1158 34.1071 16.8413 33.3054 17.3491C32.5037 17.8568 31.574 18.126 30.625 18.125" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_5471_14158">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <CountUp
                  end={info?.users}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                  className="counter"
                  suffix="+"
                />
                <Paragraph className="mb-0 p-counter">User’s</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-70 py-5">
        <Paragraph className="main_section_title">Popular Category</Paragraph>
        {isPending && (
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-lg-5 g-3 justify-content-center py-5">
            {[1,2,3,4].map((n, index)=>{
              return (
                <div className="col" key={index}>
                      <Skeleton 
                        avatar={{ shape: 'square', size: 'large' }}
                        active
                        paragraph={{
                          rows: 1,
                        }}
                        title={{width: '100%'}}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}/>
                </div>
              )

            })}
          </div>
        )}
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-lg-5 g-3 justify-content-center py-5">
          {categories &&
            categories?.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <div className="categorey_box d-flex flex-column justify-content-center align-items-center">
                    <div
                      className="popular_icon mb-3"
                      onClick={() => HandelCourses(item.id, item.ids, categories)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        width="24px"
                        height="24px"
                      />
                    </div>
                    <Paragraph className="popular_title">
                      {item.title}
                    </Paragraph>
                    <Paragraph className="mb-0 popular_desc">
                      {item.courses} Course
                    </Paragraph>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};
export default KnowledgeDescription;