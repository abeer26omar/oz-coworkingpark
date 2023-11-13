import Button from '../../../UI/Button';
import Paragraph from '../../../UI/Paragraph';
import './IssueReporting.css';

const IssueType = () => {
    return (
        <div className="container py-4 px-sm-5 px-3">
            <div className="head-form">
                <h2>Ticket Type</h2>
            </div>
            <div className="row row-cols-xxl-3 row-cols-lg-2 row-cols-md-2 row-cols-1 g-3 space-description">
                <div className='col'>
                    <Button className='p-0 issue_type_box' tagType='link' to={'/profile/subissueType'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path d="M54.9194 36.4226C55.5281 33.503 55.5281 30.4911 54.9194 27.5715L59.3477 22.7825C59.4668 22.6542 59.5471 22.4953 59.5796 22.3241C59.612 22.1528 59.5953 21.9759 59.5313 21.8136C58.4893 19.1717 57.0469 16.7023 55.2535 14.4905C55.1432 14.3543 54.9965 14.2515 54.8301 14.1939C54.6637 14.1362 54.4843 14.126 54.3123 14.1644L47.9122 15.5619C45.66 13.5835 43.0267 12.0765 40.1709 11.1317L38.1991 4.95456C38.1456 4.78874 38.0463 4.64106 37.9124 4.52826C37.7785 4.41546 37.6153 4.34205 37.4414 4.31635C34.6118 3.89455 31.7344 3.89455 28.9048 4.31635C28.7272 4.3431 28.5611 4.41959 28.426 4.53681C28.2909 4.65403 28.1925 4.80707 28.1424 4.97785L26.4106 11.0339H22.7635C22.5344 10.1556 21.9896 9.39018 21.2312 8.8811C20.4729 8.37201 19.5529 8.15419 18.6439 8.26849C17.7349 8.38279 16.8992 8.82134 16.2934 9.50195C15.6877 10.1826 15.3535 11.0585 15.3535 11.9656C15.3535 12.8726 15.6877 13.7486 16.2934 14.4292C16.8992 15.1098 17.7349 15.5483 18.6439 15.6626C19.5529 15.7769 20.4729 15.5591 21.2312 15.05C21.9896 14.5409 22.5344 13.7755 22.7635 12.8973H27.1212C27.3255 12.897 27.5241 12.8309 27.6871 12.7091C27.8501 12.5872 27.9686 12.4162 28.0248 12.2218L29.7848 6.0726C32.0407 5.78641 34.3243 5.78641 36.5802 6.0726L38.5238 12.1566C38.5697 12.3005 38.6502 12.4312 38.7584 12.5375C38.8666 12.6438 38.9993 12.7225 39.145 12.7668C42.0707 13.6629 44.7551 15.1993 46.9993 17.2623C47.1106 17.3648 47.2454 17.4392 47.3921 17.479C47.5388 17.5187 47.693 17.5227 47.8416 17.4905L54.1382 16.093C55.5265 17.8872 56.6734 19.8525 57.55 21.9394L53.197 26.6491C53.095 26.7602 53.0216 26.894 52.9831 27.0392C52.9446 27.1844 52.9421 27.3366 52.9758 27.4829C53.6626 30.4382 53.6626 33.5092 52.9758 36.4645C52.9421 36.6108 52.9446 36.7631 52.9831 36.9083C53.0216 37.0535 53.095 37.1873 53.197 37.2984L57.55 42.0081C56.6734 44.0949 55.5265 46.0602 54.1382 47.8545L47.8275 46.4988C47.6789 46.4667 47.5247 46.4706 47.378 46.5104C47.2313 46.5502 47.0965 46.6245 46.9851 46.7271C44.741 48.7901 42.0566 50.3265 39.1309 51.2225C38.9851 51.2669 38.8525 51.3455 38.7443 51.4519C38.6361 51.5582 38.5556 51.6889 38.5097 51.8328L36.5661 57.9168C34.3102 58.2027 32.0266 58.2027 29.7707 57.9168L28.0107 51.7676C27.9543 51.5763 27.8376 51.408 27.6775 51.2873C27.5174 51.1665 27.3225 51.0998 27.1212 51.0968H22.7635C22.5344 50.2185 21.9896 49.4531 21.2312 48.944C20.4729 48.4349 19.5529 48.2171 18.6439 48.3314C17.7349 48.4457 16.8992 48.8842 16.2934 49.5648C15.6877 50.2454 15.3535 51.1214 15.3535 52.0285C15.3535 52.9355 15.6877 53.8115 16.2934 54.4921C16.8992 55.1727 17.7349 55.6112 18.6439 55.7255C19.5529 55.8398 20.4729 55.622 21.2312 55.1129C21.9896 54.6038 22.5344 53.8384 22.7635 52.9602H26.4106L28.1424 59.0162C28.1921 59.1885 28.2908 59.3429 28.4269 59.4611C28.5629 59.5792 28.7305 59.6561 28.9095 59.6823C31.739 60.1059 34.6167 60.1059 37.4461 59.6823C37.62 59.6566 37.7832 59.5832 37.9171 59.4704C38.051 59.3576 38.1503 59.2099 38.2038 59.0441L40.1756 52.8577C43.0314 51.9128 45.6647 50.4059 47.9169 48.4275L54.317 49.825C54.489 49.8634 54.6684 49.8531 54.8348 49.7955C55.0012 49.7378 55.1479 49.6351 55.2582 49.4989C57.0516 47.2871 58.494 44.8177 59.536 42.1758C59.6 42.0134 59.6167 41.8366 59.5843 41.6653C59.5518 41.494 59.4715 41.3352 59.3524 41.2068L54.9194 36.4226ZM19.1211 13.829C18.7488 13.829 18.3849 13.7197 18.0753 13.5149C17.7657 13.3102 17.5245 13.0191 17.382 12.6787C17.2395 12.3382 17.2022 11.9635 17.2749 11.602C17.3475 11.2406 17.5268 10.9086 17.79 10.648C18.0533 10.3874 18.3887 10.2099 18.7539 10.138C19.119 10.0661 19.4975 10.103 19.8415 10.244C20.1854 10.3851 20.4794 10.6239 20.6862 10.9303C20.8931 11.2368 21.0035 11.597 21.0035 11.9656C21.0035 12.4598 20.8052 12.9337 20.4521 13.2832C20.0991 13.6326 19.6203 13.829 19.1211 13.829ZM19.1211 53.8918C18.7488 53.8918 18.3849 53.7826 18.0753 53.5778C17.7657 53.3731 17.5245 53.082 17.382 52.7415C17.2395 52.4011 17.2022 52.0264 17.2749 51.6649C17.3475 51.3035 17.5268 50.9714 17.79 50.7108C18.0533 50.4502 18.3887 50.2728 18.7539 50.2009C19.119 50.129 19.4975 50.1659 19.8415 50.3069C20.1854 50.4479 20.4794 50.6868 20.6862 50.9932C20.8931 51.2996 21.0035 51.6599 21.0035 52.0285C21.0035 52.5227 20.8052 52.9966 20.4521 53.3461C20.0991 53.6955 19.6203 53.8918 19.1211 53.8918Z" fill="black" stroke="black"/>
                        <path d="M32.9892 42.2455C35.735 42.2702 38.3783 41.2142 40.3375 39.3096C42.2968 37.4051 43.4115 34.8081 43.4365 32.09C43.4614 29.3719 42.3946 26.7553 40.4706 24.8159C38.5467 22.8764 35.9233 21.7729 33.1774 21.7482H12.41C12.1809 20.8699 11.6361 20.1045 10.8777 19.5954C10.1193 19.0864 9.19942 18.8685 8.2904 18.9828C7.38138 19.0971 6.54568 19.5357 5.93993 20.2163C5.33419 20.8969 5 21.7728 5 22.6799C5 23.587 5.33419 24.4629 5.93993 25.1435C6.54568 25.8241 7.38138 26.2627 8.2904 26.377C9.19942 26.4913 10.1193 26.2735 10.8777 25.7644C11.6361 25.2553 12.1809 24.4899 12.41 23.6116H27.1915C25.9357 24.4514 24.882 25.5545 24.1053 26.8426C23.3286 28.1308 22.8479 29.5724 22.6973 31.0652H20.4102C20.1811 30.1869 19.6363 29.4215 18.8779 28.9124C18.1195 28.4033 17.1996 28.1855 16.2905 28.2998C15.3815 28.4141 14.5458 28.8526 13.9401 29.5332C13.3343 30.2139 13.0001 31.0898 13.0001 31.9969C13.0001 32.9039 13.3343 33.7799 13.9401 34.4605C14.5458 35.1411 15.3815 35.5796 16.2905 35.6939C17.1996 35.8082 18.1195 35.5904 18.8779 35.0813C19.6363 34.5722 20.1811 33.8068 20.4102 32.9286H23.5914C23.841 32.9286 24.0804 32.8304 24.2569 32.6557C24.4334 32.4809 24.5326 32.244 24.5326 31.9969C24.5326 30.3384 25.0294 28.7172 25.9602 27.3383C26.8909 25.9593 28.2139 24.8846 29.7617 24.2499C31.3095 23.6152 33.0127 23.4492 34.6559 23.7727C36.299 24.0963 37.8084 24.8949 38.993 26.0676C40.1777 27.2403 40.9845 28.7344 41.3113 30.361C41.6382 31.9876 41.4704 33.6736 40.8293 35.2058C40.1881 36.738 39.1024 38.0476 37.7094 38.969C36.3164 39.8903 34.6787 40.3821 33.0033 40.3821H12.41C12.1809 39.5039 11.6361 38.7384 10.8777 38.2293C10.1193 37.7203 9.19942 37.5024 8.2904 37.6167C7.38138 37.731 6.54568 38.1696 5.93993 38.8502C5.33419 39.5308 5 40.4067 5 41.3138C5 42.2209 5.33419 43.0968 5.93993 43.7774C6.54568 44.458 7.38138 44.8966 8.2904 45.0109C9.19942 45.1252 10.1193 44.9074 10.8777 44.3983C11.6361 43.8892 12.1809 43.1238 12.41 42.2455H32.9892ZM8.76758 24.5433C8.39528 24.5433 8.03134 24.434 7.72179 24.2293C7.41223 24.0245 7.17096 23.7335 7.02848 23.393C6.88601 23.0525 6.84873 22.6778 6.92137 22.3164C6.994 21.9549 7.17328 21.6229 7.43653 21.3623C7.69979 21.1017 8.0352 20.9242 8.40035 20.8523C8.7655 20.7804 9.14398 20.8173 9.48794 20.9584C9.8319 21.0994 10.1259 21.3382 10.3327 21.6447C10.5396 21.9511 10.65 22.3114 10.65 22.6799C10.65 23.1741 10.4516 23.6481 10.0986 23.9975C9.74562 24.347 9.26682 24.5433 8.76758 24.5433ZM16.7677 33.8603C16.3954 33.8603 16.0315 33.751 15.7219 33.5462C15.4124 33.3415 15.1711 33.0504 15.0286 32.71C14.8862 32.3695 14.8489 31.9948 14.9215 31.6333C14.9941 31.2719 15.1734 30.9398 15.4367 30.6792C15.6999 30.4186 16.0353 30.2412 16.4005 30.1693C16.7656 30.0974 17.1441 30.1343 17.4881 30.2753C17.8321 30.4164 18.126 30.6552 18.3329 30.9616C18.5397 31.2681 18.6501 31.6283 18.6501 31.9969C18.6501 32.4911 18.4518 32.965 18.0988 33.3145C17.7458 33.6639 17.267 33.8603 16.7677 33.8603ZM8.76758 43.1772C8.39528 43.1772 8.03134 43.0679 7.72179 42.8632C7.41223 42.6584 7.17096 42.3674 7.02848 42.0269C6.88601 41.6864 6.84873 41.3117 6.92137 40.9503C6.994 40.5888 7.17328 40.2568 7.43653 39.9962C7.69979 39.7356 8.0352 39.5581 8.40035 39.4862C8.7655 39.4143 9.14398 39.4512 9.48794 39.5923C9.8319 39.7333 10.1259 39.9721 10.3327 40.2786C10.5396 40.585 10.65 40.9453 10.65 41.3138C10.65 41.808 10.4516 42.282 10.0986 42.6314C9.74562 42.9809 9.26682 43.1772 8.76758 43.1772Z" fill="#BDBDBD" stroke="#BDBDBD"/>
                        </svg>
                        <Paragraph className='service_catering mb-0'>Contact Admin</Paragraph>
                    </Button>
                </div>
                <div className='col'>
                    <Button className='p-0 issue_type_box' tagType='link' to={'/profile/subissueType'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path d="M54.9194 36.4226C55.5281 33.503 55.5281 30.4911 54.9194 27.5715L59.3477 22.7825C59.4668 22.6542 59.5471 22.4953 59.5796 22.3241C59.612 22.1528 59.5953 21.9759 59.5313 21.8136C58.4893 19.1717 57.0469 16.7023 55.2535 14.4905C55.1432 14.3543 54.9965 14.2515 54.8301 14.1939C54.6637 14.1362 54.4843 14.126 54.3123 14.1644L47.9122 15.5619C45.66 13.5835 43.0267 12.0765 40.1709 11.1317L38.1991 4.95456C38.1456 4.78874 38.0463 4.64106 37.9124 4.52826C37.7785 4.41546 37.6153 4.34205 37.4414 4.31635C34.6118 3.89455 31.7344 3.89455 28.9048 4.31635C28.7272 4.3431 28.5611 4.41959 28.426 4.53681C28.2909 4.65403 28.1925 4.80707 28.1424 4.97785L26.4106 11.0339H22.7635C22.5344 10.1556 21.9896 9.39018 21.2312 8.8811C20.4729 8.37201 19.5529 8.15419 18.6439 8.26849C17.7349 8.38279 16.8992 8.82134 16.2934 9.50195C15.6877 10.1826 15.3535 11.0585 15.3535 11.9656C15.3535 12.8726 15.6877 13.7486 16.2934 14.4292C16.8992 15.1098 17.7349 15.5483 18.6439 15.6626C19.5529 15.7769 20.4729 15.5591 21.2312 15.05C21.9896 14.5409 22.5344 13.7755 22.7635 12.8973H27.1212C27.3255 12.897 27.5241 12.8309 27.6871 12.7091C27.8501 12.5872 27.9686 12.4162 28.0248 12.2218L29.7848 6.0726C32.0407 5.78641 34.3243 5.78641 36.5802 6.0726L38.5238 12.1566C38.5697 12.3005 38.6502 12.4312 38.7584 12.5375C38.8666 12.6438 38.9993 12.7225 39.145 12.7668C42.0707 13.6629 44.7551 15.1993 46.9993 17.2623C47.1106 17.3648 47.2454 17.4392 47.3921 17.479C47.5388 17.5187 47.693 17.5227 47.8416 17.4905L54.1382 16.093C55.5265 17.8872 56.6734 19.8525 57.55 21.9394L53.197 26.6491C53.095 26.7602 53.0216 26.894 52.9831 27.0392C52.9446 27.1844 52.9421 27.3366 52.9758 27.4829C53.6626 30.4382 53.6626 33.5092 52.9758 36.4645C52.9421 36.6108 52.9446 36.7631 52.9831 36.9083C53.0216 37.0535 53.095 37.1873 53.197 37.2984L57.55 42.0081C56.6734 44.0949 55.5265 46.0602 54.1382 47.8545L47.8275 46.4988C47.6789 46.4667 47.5247 46.4706 47.378 46.5104C47.2313 46.5502 47.0965 46.6245 46.9851 46.7271C44.741 48.7901 42.0566 50.3265 39.1309 51.2225C38.9851 51.2669 38.8525 51.3455 38.7443 51.4519C38.6361 51.5582 38.5556 51.6889 38.5097 51.8328L36.5661 57.9168C34.3102 58.2027 32.0266 58.2027 29.7707 57.9168L28.0107 51.7676C27.9543 51.5763 27.8376 51.408 27.6775 51.2873C27.5174 51.1665 27.3225 51.0998 27.1212 51.0968H22.7635C22.5344 50.2185 21.9896 49.4531 21.2312 48.944C20.4729 48.4349 19.5529 48.2171 18.6439 48.3314C17.7349 48.4457 16.8992 48.8842 16.2934 49.5648C15.6877 50.2454 15.3535 51.1214 15.3535 52.0285C15.3535 52.9355 15.6877 53.8115 16.2934 54.4921C16.8992 55.1727 17.7349 55.6112 18.6439 55.7255C19.5529 55.8398 20.4729 55.622 21.2312 55.1129C21.9896 54.6038 22.5344 53.8384 22.7635 52.9602H26.4106L28.1424 59.0162C28.1921 59.1885 28.2908 59.3429 28.4269 59.4611C28.5629 59.5792 28.7305 59.6561 28.9095 59.6823C31.739 60.1059 34.6167 60.1059 37.4461 59.6823C37.62 59.6566 37.7832 59.5832 37.9171 59.4704C38.051 59.3576 38.1503 59.2099 38.2038 59.0441L40.1756 52.8577C43.0314 51.9128 45.6647 50.4059 47.9169 48.4275L54.317 49.825C54.489 49.8634 54.6684 49.8531 54.8348 49.7955C55.0012 49.7378 55.1479 49.6351 55.2582 49.4989C57.0516 47.2871 58.494 44.8177 59.536 42.1758C59.6 42.0134 59.6167 41.8366 59.5843 41.6653C59.5518 41.494 59.4715 41.3352 59.3524 41.2068L54.9194 36.4226ZM19.1211 13.829C18.7488 13.829 18.3849 13.7197 18.0753 13.5149C17.7657 13.3102 17.5245 13.0191 17.382 12.6787C17.2395 12.3382 17.2022 11.9635 17.2749 11.602C17.3475 11.2406 17.5268 10.9086 17.79 10.648C18.0533 10.3874 18.3887 10.2099 18.7539 10.138C19.119 10.0661 19.4975 10.103 19.8415 10.244C20.1854 10.3851 20.4794 10.6239 20.6862 10.9303C20.8931 11.2368 21.0035 11.597 21.0035 11.9656C21.0035 12.4598 20.8052 12.9337 20.4521 13.2832C20.0991 13.6326 19.6203 13.829 19.1211 13.829ZM19.1211 53.8918C18.7488 53.8918 18.3849 53.7826 18.0753 53.5778C17.7657 53.3731 17.5245 53.082 17.382 52.7415C17.2395 52.4011 17.2022 52.0264 17.2749 51.6649C17.3475 51.3035 17.5268 50.9714 17.79 50.7108C18.0533 50.4502 18.3887 50.2728 18.7539 50.2009C19.119 50.129 19.4975 50.1659 19.8415 50.3069C20.1854 50.4479 20.4794 50.6868 20.6862 50.9932C20.8931 51.2996 21.0035 51.6599 21.0035 52.0285C21.0035 52.5227 20.8052 52.9966 20.4521 53.3461C20.0991 53.6955 19.6203 53.8918 19.1211 53.8918Z" fill="black" stroke="black"/>
                        <path d="M32.9892 42.2455C35.735 42.2702 38.3783 41.2142 40.3375 39.3096C42.2968 37.4051 43.4115 34.8081 43.4365 32.09C43.4614 29.3719 42.3946 26.7553 40.4706 24.8159C38.5467 22.8764 35.9233 21.7729 33.1774 21.7482H12.41C12.1809 20.8699 11.6361 20.1045 10.8777 19.5954C10.1193 19.0864 9.19942 18.8685 8.2904 18.9828C7.38138 19.0971 6.54568 19.5357 5.93993 20.2163C5.33419 20.8969 5 21.7728 5 22.6799C5 23.587 5.33419 24.4629 5.93993 25.1435C6.54568 25.8241 7.38138 26.2627 8.2904 26.377C9.19942 26.4913 10.1193 26.2735 10.8777 25.7644C11.6361 25.2553 12.1809 24.4899 12.41 23.6116H27.1915C25.9357 24.4514 24.882 25.5545 24.1053 26.8426C23.3286 28.1308 22.8479 29.5724 22.6973 31.0652H20.4102C20.1811 30.1869 19.6363 29.4215 18.8779 28.9124C18.1195 28.4033 17.1996 28.1855 16.2905 28.2998C15.3815 28.4141 14.5458 28.8526 13.9401 29.5332C13.3343 30.2139 13.0001 31.0898 13.0001 31.9969C13.0001 32.9039 13.3343 33.7799 13.9401 34.4605C14.5458 35.1411 15.3815 35.5796 16.2905 35.6939C17.1996 35.8082 18.1195 35.5904 18.8779 35.0813C19.6363 34.5722 20.1811 33.8068 20.4102 32.9286H23.5914C23.841 32.9286 24.0804 32.8304 24.2569 32.6557C24.4334 32.4809 24.5326 32.244 24.5326 31.9969C24.5326 30.3384 25.0294 28.7172 25.9602 27.3383C26.8909 25.9593 28.2139 24.8846 29.7617 24.2499C31.3095 23.6152 33.0127 23.4492 34.6559 23.7727C36.299 24.0963 37.8084 24.8949 38.993 26.0676C40.1777 27.2403 40.9845 28.7344 41.3113 30.361C41.6382 31.9876 41.4704 33.6736 40.8293 35.2058C40.1881 36.738 39.1024 38.0476 37.7094 38.969C36.3164 39.8903 34.6787 40.3821 33.0033 40.3821H12.41C12.1809 39.5039 11.6361 38.7384 10.8777 38.2293C10.1193 37.7203 9.19942 37.5024 8.2904 37.6167C7.38138 37.731 6.54568 38.1696 5.93993 38.8502C5.33419 39.5308 5 40.4067 5 41.3138C5 42.2209 5.33419 43.0968 5.93993 43.7774C6.54568 44.458 7.38138 44.8966 8.2904 45.0109C9.19942 45.1252 10.1193 44.9074 10.8777 44.3983C11.6361 43.8892 12.1809 43.1238 12.41 42.2455H32.9892ZM8.76758 24.5433C8.39528 24.5433 8.03134 24.434 7.72179 24.2293C7.41223 24.0245 7.17096 23.7335 7.02848 23.393C6.88601 23.0525 6.84873 22.6778 6.92137 22.3164C6.994 21.9549 7.17328 21.6229 7.43653 21.3623C7.69979 21.1017 8.0352 20.9242 8.40035 20.8523C8.7655 20.7804 9.14398 20.8173 9.48794 20.9584C9.8319 21.0994 10.1259 21.3382 10.3327 21.6447C10.5396 21.9511 10.65 22.3114 10.65 22.6799C10.65 23.1741 10.4516 23.6481 10.0986 23.9975C9.74562 24.347 9.26682 24.5433 8.76758 24.5433ZM16.7677 33.8603C16.3954 33.8603 16.0315 33.751 15.7219 33.5462C15.4124 33.3415 15.1711 33.0504 15.0286 32.71C14.8862 32.3695 14.8489 31.9948 14.9215 31.6333C14.9941 31.2719 15.1734 30.9398 15.4367 30.6792C15.6999 30.4186 16.0353 30.2412 16.4005 30.1693C16.7656 30.0974 17.1441 30.1343 17.4881 30.2753C17.8321 30.4164 18.126 30.6552 18.3329 30.9616C18.5397 31.2681 18.6501 31.6283 18.6501 31.9969C18.6501 32.4911 18.4518 32.965 18.0988 33.3145C17.7458 33.6639 17.267 33.8603 16.7677 33.8603ZM8.76758 43.1772C8.39528 43.1772 8.03134 43.0679 7.72179 42.8632C7.41223 42.6584 7.17096 42.3674 7.02848 42.0269C6.88601 41.6864 6.84873 41.3117 6.92137 40.9503C6.994 40.5888 7.17328 40.2568 7.43653 39.9962C7.69979 39.7356 8.0352 39.5581 8.40035 39.4862C8.7655 39.4143 9.14398 39.4512 9.48794 39.5923C9.8319 39.7333 10.1259 39.9721 10.3327 40.2786C10.5396 40.585 10.65 40.9453 10.65 41.3138C10.65 41.808 10.4516 42.282 10.0986 42.6314C9.74562 42.9809 9.26682 43.1772 8.76758 43.1772Z" fill="#BDBDBD" stroke="#BDBDBD"/>
                        </svg>
                        <Paragraph className='service_catering mb-0'>Contact Admin</Paragraph>
                    </Button>
                </div>
                <div className='col'>
                    <Button className='p-0 issue_type_box' tagType='link' to={'/profile/subissueType'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path d="M54.9194 36.4226C55.5281 33.503 55.5281 30.4911 54.9194 27.5715L59.3477 22.7825C59.4668 22.6542 59.5471 22.4953 59.5796 22.3241C59.612 22.1528 59.5953 21.9759 59.5313 21.8136C58.4893 19.1717 57.0469 16.7023 55.2535 14.4905C55.1432 14.3543 54.9965 14.2515 54.8301 14.1939C54.6637 14.1362 54.4843 14.126 54.3123 14.1644L47.9122 15.5619C45.66 13.5835 43.0267 12.0765 40.1709 11.1317L38.1991 4.95456C38.1456 4.78874 38.0463 4.64106 37.9124 4.52826C37.7785 4.41546 37.6153 4.34205 37.4414 4.31635C34.6118 3.89455 31.7344 3.89455 28.9048 4.31635C28.7272 4.3431 28.5611 4.41959 28.426 4.53681C28.2909 4.65403 28.1925 4.80707 28.1424 4.97785L26.4106 11.0339H22.7635C22.5344 10.1556 21.9896 9.39018 21.2312 8.8811C20.4729 8.37201 19.5529 8.15419 18.6439 8.26849C17.7349 8.38279 16.8992 8.82134 16.2934 9.50195C15.6877 10.1826 15.3535 11.0585 15.3535 11.9656C15.3535 12.8726 15.6877 13.7486 16.2934 14.4292C16.8992 15.1098 17.7349 15.5483 18.6439 15.6626C19.5529 15.7769 20.4729 15.5591 21.2312 15.05C21.9896 14.5409 22.5344 13.7755 22.7635 12.8973H27.1212C27.3255 12.897 27.5241 12.8309 27.6871 12.7091C27.8501 12.5872 27.9686 12.4162 28.0248 12.2218L29.7848 6.0726C32.0407 5.78641 34.3243 5.78641 36.5802 6.0726L38.5238 12.1566C38.5697 12.3005 38.6502 12.4312 38.7584 12.5375C38.8666 12.6438 38.9993 12.7225 39.145 12.7668C42.0707 13.6629 44.7551 15.1993 46.9993 17.2623C47.1106 17.3648 47.2454 17.4392 47.3921 17.479C47.5388 17.5187 47.693 17.5227 47.8416 17.4905L54.1382 16.093C55.5265 17.8872 56.6734 19.8525 57.55 21.9394L53.197 26.6491C53.095 26.7602 53.0216 26.894 52.9831 27.0392C52.9446 27.1844 52.9421 27.3366 52.9758 27.4829C53.6626 30.4382 53.6626 33.5092 52.9758 36.4645C52.9421 36.6108 52.9446 36.7631 52.9831 36.9083C53.0216 37.0535 53.095 37.1873 53.197 37.2984L57.55 42.0081C56.6734 44.0949 55.5265 46.0602 54.1382 47.8545L47.8275 46.4988C47.6789 46.4667 47.5247 46.4706 47.378 46.5104C47.2313 46.5502 47.0965 46.6245 46.9851 46.7271C44.741 48.7901 42.0566 50.3265 39.1309 51.2225C38.9851 51.2669 38.8525 51.3455 38.7443 51.4519C38.6361 51.5582 38.5556 51.6889 38.5097 51.8328L36.5661 57.9168C34.3102 58.2027 32.0266 58.2027 29.7707 57.9168L28.0107 51.7676C27.9543 51.5763 27.8376 51.408 27.6775 51.2873C27.5174 51.1665 27.3225 51.0998 27.1212 51.0968H22.7635C22.5344 50.2185 21.9896 49.4531 21.2312 48.944C20.4729 48.4349 19.5529 48.2171 18.6439 48.3314C17.7349 48.4457 16.8992 48.8842 16.2934 49.5648C15.6877 50.2454 15.3535 51.1214 15.3535 52.0285C15.3535 52.9355 15.6877 53.8115 16.2934 54.4921C16.8992 55.1727 17.7349 55.6112 18.6439 55.7255C19.5529 55.8398 20.4729 55.622 21.2312 55.1129C21.9896 54.6038 22.5344 53.8384 22.7635 52.9602H26.4106L28.1424 59.0162C28.1921 59.1885 28.2908 59.3429 28.4269 59.4611C28.5629 59.5792 28.7305 59.6561 28.9095 59.6823C31.739 60.1059 34.6167 60.1059 37.4461 59.6823C37.62 59.6566 37.7832 59.5832 37.9171 59.4704C38.051 59.3576 38.1503 59.2099 38.2038 59.0441L40.1756 52.8577C43.0314 51.9128 45.6647 50.4059 47.9169 48.4275L54.317 49.825C54.489 49.8634 54.6684 49.8531 54.8348 49.7955C55.0012 49.7378 55.1479 49.6351 55.2582 49.4989C57.0516 47.2871 58.494 44.8177 59.536 42.1758C59.6 42.0134 59.6167 41.8366 59.5843 41.6653C59.5518 41.494 59.4715 41.3352 59.3524 41.2068L54.9194 36.4226ZM19.1211 13.829C18.7488 13.829 18.3849 13.7197 18.0753 13.5149C17.7657 13.3102 17.5245 13.0191 17.382 12.6787C17.2395 12.3382 17.2022 11.9635 17.2749 11.602C17.3475 11.2406 17.5268 10.9086 17.79 10.648C18.0533 10.3874 18.3887 10.2099 18.7539 10.138C19.119 10.0661 19.4975 10.103 19.8415 10.244C20.1854 10.3851 20.4794 10.6239 20.6862 10.9303C20.8931 11.2368 21.0035 11.597 21.0035 11.9656C21.0035 12.4598 20.8052 12.9337 20.4521 13.2832C20.0991 13.6326 19.6203 13.829 19.1211 13.829ZM19.1211 53.8918C18.7488 53.8918 18.3849 53.7826 18.0753 53.5778C17.7657 53.3731 17.5245 53.082 17.382 52.7415C17.2395 52.4011 17.2022 52.0264 17.2749 51.6649C17.3475 51.3035 17.5268 50.9714 17.79 50.7108C18.0533 50.4502 18.3887 50.2728 18.7539 50.2009C19.119 50.129 19.4975 50.1659 19.8415 50.3069C20.1854 50.4479 20.4794 50.6868 20.6862 50.9932C20.8931 51.2996 21.0035 51.6599 21.0035 52.0285C21.0035 52.5227 20.8052 52.9966 20.4521 53.3461C20.0991 53.6955 19.6203 53.8918 19.1211 53.8918Z" fill="black" stroke="black"/>
                        <path d="M32.9892 42.2455C35.735 42.2702 38.3783 41.2142 40.3375 39.3096C42.2968 37.4051 43.4115 34.8081 43.4365 32.09C43.4614 29.3719 42.3946 26.7553 40.4706 24.8159C38.5467 22.8764 35.9233 21.7729 33.1774 21.7482H12.41C12.1809 20.8699 11.6361 20.1045 10.8777 19.5954C10.1193 19.0864 9.19942 18.8685 8.2904 18.9828C7.38138 19.0971 6.54568 19.5357 5.93993 20.2163C5.33419 20.8969 5 21.7728 5 22.6799C5 23.587 5.33419 24.4629 5.93993 25.1435C6.54568 25.8241 7.38138 26.2627 8.2904 26.377C9.19942 26.4913 10.1193 26.2735 10.8777 25.7644C11.6361 25.2553 12.1809 24.4899 12.41 23.6116H27.1915C25.9357 24.4514 24.882 25.5545 24.1053 26.8426C23.3286 28.1308 22.8479 29.5724 22.6973 31.0652H20.4102C20.1811 30.1869 19.6363 29.4215 18.8779 28.9124C18.1195 28.4033 17.1996 28.1855 16.2905 28.2998C15.3815 28.4141 14.5458 28.8526 13.9401 29.5332C13.3343 30.2139 13.0001 31.0898 13.0001 31.9969C13.0001 32.9039 13.3343 33.7799 13.9401 34.4605C14.5458 35.1411 15.3815 35.5796 16.2905 35.6939C17.1996 35.8082 18.1195 35.5904 18.8779 35.0813C19.6363 34.5722 20.1811 33.8068 20.4102 32.9286H23.5914C23.841 32.9286 24.0804 32.8304 24.2569 32.6557C24.4334 32.4809 24.5326 32.244 24.5326 31.9969C24.5326 30.3384 25.0294 28.7172 25.9602 27.3383C26.8909 25.9593 28.2139 24.8846 29.7617 24.2499C31.3095 23.6152 33.0127 23.4492 34.6559 23.7727C36.299 24.0963 37.8084 24.8949 38.993 26.0676C40.1777 27.2403 40.9845 28.7344 41.3113 30.361C41.6382 31.9876 41.4704 33.6736 40.8293 35.2058C40.1881 36.738 39.1024 38.0476 37.7094 38.969C36.3164 39.8903 34.6787 40.3821 33.0033 40.3821H12.41C12.1809 39.5039 11.6361 38.7384 10.8777 38.2293C10.1193 37.7203 9.19942 37.5024 8.2904 37.6167C7.38138 37.731 6.54568 38.1696 5.93993 38.8502C5.33419 39.5308 5 40.4067 5 41.3138C5 42.2209 5.33419 43.0968 5.93993 43.7774C6.54568 44.458 7.38138 44.8966 8.2904 45.0109C9.19942 45.1252 10.1193 44.9074 10.8777 44.3983C11.6361 43.8892 12.1809 43.1238 12.41 42.2455H32.9892ZM8.76758 24.5433C8.39528 24.5433 8.03134 24.434 7.72179 24.2293C7.41223 24.0245 7.17096 23.7335 7.02848 23.393C6.88601 23.0525 6.84873 22.6778 6.92137 22.3164C6.994 21.9549 7.17328 21.6229 7.43653 21.3623C7.69979 21.1017 8.0352 20.9242 8.40035 20.8523C8.7655 20.7804 9.14398 20.8173 9.48794 20.9584C9.8319 21.0994 10.1259 21.3382 10.3327 21.6447C10.5396 21.9511 10.65 22.3114 10.65 22.6799C10.65 23.1741 10.4516 23.6481 10.0986 23.9975C9.74562 24.347 9.26682 24.5433 8.76758 24.5433ZM16.7677 33.8603C16.3954 33.8603 16.0315 33.751 15.7219 33.5462C15.4124 33.3415 15.1711 33.0504 15.0286 32.71C14.8862 32.3695 14.8489 31.9948 14.9215 31.6333C14.9941 31.2719 15.1734 30.9398 15.4367 30.6792C15.6999 30.4186 16.0353 30.2412 16.4005 30.1693C16.7656 30.0974 17.1441 30.1343 17.4881 30.2753C17.8321 30.4164 18.126 30.6552 18.3329 30.9616C18.5397 31.2681 18.6501 31.6283 18.6501 31.9969C18.6501 32.4911 18.4518 32.965 18.0988 33.3145C17.7458 33.6639 17.267 33.8603 16.7677 33.8603ZM8.76758 43.1772C8.39528 43.1772 8.03134 43.0679 7.72179 42.8632C7.41223 42.6584 7.17096 42.3674 7.02848 42.0269C6.88601 41.6864 6.84873 41.3117 6.92137 40.9503C6.994 40.5888 7.17328 40.2568 7.43653 39.9962C7.69979 39.7356 8.0352 39.5581 8.40035 39.4862C8.7655 39.4143 9.14398 39.4512 9.48794 39.5923C9.8319 39.7333 10.1259 39.9721 10.3327 40.2786C10.5396 40.585 10.65 40.9453 10.65 41.3138C10.65 41.808 10.4516 42.282 10.0986 42.6314C9.74562 42.9809 9.26682 43.1772 8.76758 43.1772Z" fill="#BDBDBD" stroke="#BDBDBD"/>
                        </svg>
                        <Paragraph className='service_catering mb-0'>Contact Admin</Paragraph>
                    </Button>
                </div>
                <div className='col'>
                    <Button className='p-0 issue_type_box' tagType='link' to={'/profile/subissueType'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path d="M54.9194 36.4226C55.5281 33.503 55.5281 30.4911 54.9194 27.5715L59.3477 22.7825C59.4668 22.6542 59.5471 22.4953 59.5796 22.3241C59.612 22.1528 59.5953 21.9759 59.5313 21.8136C58.4893 19.1717 57.0469 16.7023 55.2535 14.4905C55.1432 14.3543 54.9965 14.2515 54.8301 14.1939C54.6637 14.1362 54.4843 14.126 54.3123 14.1644L47.9122 15.5619C45.66 13.5835 43.0267 12.0765 40.1709 11.1317L38.1991 4.95456C38.1456 4.78874 38.0463 4.64106 37.9124 4.52826C37.7785 4.41546 37.6153 4.34205 37.4414 4.31635C34.6118 3.89455 31.7344 3.89455 28.9048 4.31635C28.7272 4.3431 28.5611 4.41959 28.426 4.53681C28.2909 4.65403 28.1925 4.80707 28.1424 4.97785L26.4106 11.0339H22.7635C22.5344 10.1556 21.9896 9.39018 21.2312 8.8811C20.4729 8.37201 19.5529 8.15419 18.6439 8.26849C17.7349 8.38279 16.8992 8.82134 16.2934 9.50195C15.6877 10.1826 15.3535 11.0585 15.3535 11.9656C15.3535 12.8726 15.6877 13.7486 16.2934 14.4292C16.8992 15.1098 17.7349 15.5483 18.6439 15.6626C19.5529 15.7769 20.4729 15.5591 21.2312 15.05C21.9896 14.5409 22.5344 13.7755 22.7635 12.8973H27.1212C27.3255 12.897 27.5241 12.8309 27.6871 12.7091C27.8501 12.5872 27.9686 12.4162 28.0248 12.2218L29.7848 6.0726C32.0407 5.78641 34.3243 5.78641 36.5802 6.0726L38.5238 12.1566C38.5697 12.3005 38.6502 12.4312 38.7584 12.5375C38.8666 12.6438 38.9993 12.7225 39.145 12.7668C42.0707 13.6629 44.7551 15.1993 46.9993 17.2623C47.1106 17.3648 47.2454 17.4392 47.3921 17.479C47.5388 17.5187 47.693 17.5227 47.8416 17.4905L54.1382 16.093C55.5265 17.8872 56.6734 19.8525 57.55 21.9394L53.197 26.6491C53.095 26.7602 53.0216 26.894 52.9831 27.0392C52.9446 27.1844 52.9421 27.3366 52.9758 27.4829C53.6626 30.4382 53.6626 33.5092 52.9758 36.4645C52.9421 36.6108 52.9446 36.7631 52.9831 36.9083C53.0216 37.0535 53.095 37.1873 53.197 37.2984L57.55 42.0081C56.6734 44.0949 55.5265 46.0602 54.1382 47.8545L47.8275 46.4988C47.6789 46.4667 47.5247 46.4706 47.378 46.5104C47.2313 46.5502 47.0965 46.6245 46.9851 46.7271C44.741 48.7901 42.0566 50.3265 39.1309 51.2225C38.9851 51.2669 38.8525 51.3455 38.7443 51.4519C38.6361 51.5582 38.5556 51.6889 38.5097 51.8328L36.5661 57.9168C34.3102 58.2027 32.0266 58.2027 29.7707 57.9168L28.0107 51.7676C27.9543 51.5763 27.8376 51.408 27.6775 51.2873C27.5174 51.1665 27.3225 51.0998 27.1212 51.0968H22.7635C22.5344 50.2185 21.9896 49.4531 21.2312 48.944C20.4729 48.4349 19.5529 48.2171 18.6439 48.3314C17.7349 48.4457 16.8992 48.8842 16.2934 49.5648C15.6877 50.2454 15.3535 51.1214 15.3535 52.0285C15.3535 52.9355 15.6877 53.8115 16.2934 54.4921C16.8992 55.1727 17.7349 55.6112 18.6439 55.7255C19.5529 55.8398 20.4729 55.622 21.2312 55.1129C21.9896 54.6038 22.5344 53.8384 22.7635 52.9602H26.4106L28.1424 59.0162C28.1921 59.1885 28.2908 59.3429 28.4269 59.4611C28.5629 59.5792 28.7305 59.6561 28.9095 59.6823C31.739 60.1059 34.6167 60.1059 37.4461 59.6823C37.62 59.6566 37.7832 59.5832 37.9171 59.4704C38.051 59.3576 38.1503 59.2099 38.2038 59.0441L40.1756 52.8577C43.0314 51.9128 45.6647 50.4059 47.9169 48.4275L54.317 49.825C54.489 49.8634 54.6684 49.8531 54.8348 49.7955C55.0012 49.7378 55.1479 49.6351 55.2582 49.4989C57.0516 47.2871 58.494 44.8177 59.536 42.1758C59.6 42.0134 59.6167 41.8366 59.5843 41.6653C59.5518 41.494 59.4715 41.3352 59.3524 41.2068L54.9194 36.4226ZM19.1211 13.829C18.7488 13.829 18.3849 13.7197 18.0753 13.5149C17.7657 13.3102 17.5245 13.0191 17.382 12.6787C17.2395 12.3382 17.2022 11.9635 17.2749 11.602C17.3475 11.2406 17.5268 10.9086 17.79 10.648C18.0533 10.3874 18.3887 10.2099 18.7539 10.138C19.119 10.0661 19.4975 10.103 19.8415 10.244C20.1854 10.3851 20.4794 10.6239 20.6862 10.9303C20.8931 11.2368 21.0035 11.597 21.0035 11.9656C21.0035 12.4598 20.8052 12.9337 20.4521 13.2832C20.0991 13.6326 19.6203 13.829 19.1211 13.829ZM19.1211 53.8918C18.7488 53.8918 18.3849 53.7826 18.0753 53.5778C17.7657 53.3731 17.5245 53.082 17.382 52.7415C17.2395 52.4011 17.2022 52.0264 17.2749 51.6649C17.3475 51.3035 17.5268 50.9714 17.79 50.7108C18.0533 50.4502 18.3887 50.2728 18.7539 50.2009C19.119 50.129 19.4975 50.1659 19.8415 50.3069C20.1854 50.4479 20.4794 50.6868 20.6862 50.9932C20.8931 51.2996 21.0035 51.6599 21.0035 52.0285C21.0035 52.5227 20.8052 52.9966 20.4521 53.3461C20.0991 53.6955 19.6203 53.8918 19.1211 53.8918Z" fill="black" stroke="black"/>
                        <path d="M32.9892 42.2455C35.735 42.2702 38.3783 41.2142 40.3375 39.3096C42.2968 37.4051 43.4115 34.8081 43.4365 32.09C43.4614 29.3719 42.3946 26.7553 40.4706 24.8159C38.5467 22.8764 35.9233 21.7729 33.1774 21.7482H12.41C12.1809 20.8699 11.6361 20.1045 10.8777 19.5954C10.1193 19.0864 9.19942 18.8685 8.2904 18.9828C7.38138 19.0971 6.54568 19.5357 5.93993 20.2163C5.33419 20.8969 5 21.7728 5 22.6799C5 23.587 5.33419 24.4629 5.93993 25.1435C6.54568 25.8241 7.38138 26.2627 8.2904 26.377C9.19942 26.4913 10.1193 26.2735 10.8777 25.7644C11.6361 25.2553 12.1809 24.4899 12.41 23.6116H27.1915C25.9357 24.4514 24.882 25.5545 24.1053 26.8426C23.3286 28.1308 22.8479 29.5724 22.6973 31.0652H20.4102C20.1811 30.1869 19.6363 29.4215 18.8779 28.9124C18.1195 28.4033 17.1996 28.1855 16.2905 28.2998C15.3815 28.4141 14.5458 28.8526 13.9401 29.5332C13.3343 30.2139 13.0001 31.0898 13.0001 31.9969C13.0001 32.9039 13.3343 33.7799 13.9401 34.4605C14.5458 35.1411 15.3815 35.5796 16.2905 35.6939C17.1996 35.8082 18.1195 35.5904 18.8779 35.0813C19.6363 34.5722 20.1811 33.8068 20.4102 32.9286H23.5914C23.841 32.9286 24.0804 32.8304 24.2569 32.6557C24.4334 32.4809 24.5326 32.244 24.5326 31.9969C24.5326 30.3384 25.0294 28.7172 25.9602 27.3383C26.8909 25.9593 28.2139 24.8846 29.7617 24.2499C31.3095 23.6152 33.0127 23.4492 34.6559 23.7727C36.299 24.0963 37.8084 24.8949 38.993 26.0676C40.1777 27.2403 40.9845 28.7344 41.3113 30.361C41.6382 31.9876 41.4704 33.6736 40.8293 35.2058C40.1881 36.738 39.1024 38.0476 37.7094 38.969C36.3164 39.8903 34.6787 40.3821 33.0033 40.3821H12.41C12.1809 39.5039 11.6361 38.7384 10.8777 38.2293C10.1193 37.7203 9.19942 37.5024 8.2904 37.6167C7.38138 37.731 6.54568 38.1696 5.93993 38.8502C5.33419 39.5308 5 40.4067 5 41.3138C5 42.2209 5.33419 43.0968 5.93993 43.7774C6.54568 44.458 7.38138 44.8966 8.2904 45.0109C9.19942 45.1252 10.1193 44.9074 10.8777 44.3983C11.6361 43.8892 12.1809 43.1238 12.41 42.2455H32.9892ZM8.76758 24.5433C8.39528 24.5433 8.03134 24.434 7.72179 24.2293C7.41223 24.0245 7.17096 23.7335 7.02848 23.393C6.88601 23.0525 6.84873 22.6778 6.92137 22.3164C6.994 21.9549 7.17328 21.6229 7.43653 21.3623C7.69979 21.1017 8.0352 20.9242 8.40035 20.8523C8.7655 20.7804 9.14398 20.8173 9.48794 20.9584C9.8319 21.0994 10.1259 21.3382 10.3327 21.6447C10.5396 21.9511 10.65 22.3114 10.65 22.6799C10.65 23.1741 10.4516 23.6481 10.0986 23.9975C9.74562 24.347 9.26682 24.5433 8.76758 24.5433ZM16.7677 33.8603C16.3954 33.8603 16.0315 33.751 15.7219 33.5462C15.4124 33.3415 15.1711 33.0504 15.0286 32.71C14.8862 32.3695 14.8489 31.9948 14.9215 31.6333C14.9941 31.2719 15.1734 30.9398 15.4367 30.6792C15.6999 30.4186 16.0353 30.2412 16.4005 30.1693C16.7656 30.0974 17.1441 30.1343 17.4881 30.2753C17.8321 30.4164 18.126 30.6552 18.3329 30.9616C18.5397 31.2681 18.6501 31.6283 18.6501 31.9969C18.6501 32.4911 18.4518 32.965 18.0988 33.3145C17.7458 33.6639 17.267 33.8603 16.7677 33.8603ZM8.76758 43.1772C8.39528 43.1772 8.03134 43.0679 7.72179 42.8632C7.41223 42.6584 7.17096 42.3674 7.02848 42.0269C6.88601 41.6864 6.84873 41.3117 6.92137 40.9503C6.994 40.5888 7.17328 40.2568 7.43653 39.9962C7.69979 39.7356 8.0352 39.5581 8.40035 39.4862C8.7655 39.4143 9.14398 39.4512 9.48794 39.5923C9.8319 39.7333 10.1259 39.9721 10.3327 40.2786C10.5396 40.585 10.65 40.9453 10.65 41.3138C10.65 41.808 10.4516 42.282 10.0986 42.6314C9.74562 42.9809 9.26682 43.1772 8.76758 43.1772Z" fill="#BDBDBD" stroke="#BDBDBD"/>
                        </svg>
                        <Paragraph className='service_catering mb-0'>Contact Admin</Paragraph>
                    </Button>
                </div>
            </div>
        </div>
    )
};
export default IssueType;