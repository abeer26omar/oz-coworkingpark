import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {FiSearch} from "react-icons/fi";
import Button from '../UI/Button';
import Paragraph from "../UI/Paragraph";
import MarketFilter from './MarketFilter';
import { getProductsList } from '../../apis/Market';
import { AuthContext } from '../../apis/context/AuthTokenContext';
import MarketProjectItem from './MarketProjectItem';
import LoginAlert from '../Auth/LoginAlertModal';

const MarketSpace = ()=>{

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [error, setError] = useState('');
    const [empty, setEmpty] = useState('');
    const [show, setShow] = useState(false);
    // const [searchText, setSearchText] = useState('');
    const [visibleCards, setVisibleCards] = useState(3);
    const { token, userId } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelHide = () => setShow(false);

    const handleShowMore = () => {
      setVisibleCards(prevVisibleCards => prevVisibleCards + 3);
    };

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        setEmpty('');
        setError('')
        getProductsList(token, userId).then(res=>{
            setCards(res);
        })

        return controller.abort();
    },[]);

    const toggleFilter = (e) => {
        e.preventDefault();
        setIsFilterOpen(!isFilterOpen);
    };

  

    const getFilteredData = (data) => {
        setCards(data?.slice(0, 3));
        if(data.length === 0){
            setEmpty('there is no services in this group');
        }else{
            setEmpty('');
        }
    };

    return (
      <>
        <section className="booking-space p-0">
          <div className="container-fluid">
            <div className="row border-bottom border-top align-items-center">
              <div className="col-lg-3 col-md-3 col-sm-12 border-right py-4">
                <h2 className="book-title mb-0 p-0 text-center">
                  {"services"}
                </h2>
              </div>
              <div
                className={`col-xl-9 col-md-9 col-sm-12 px-3 
                            d-flex
                            flex-xl-row 
                            flex-column
                            align-items-center justify-content-${
                              isFilterOpen ? "between" : "end"
                            }`}
              >
                {isFilterOpen && (
                  <div className="col-lg-6 col-12">
                    {/* <div className="input-group">
                                    <input 
                                        type="text" 
                                        className="form__field placeholderSelect" 
                                        placeholder="Search by Name"
                                        onChange={handelSearch}
                                    />
                                    <span className="icon-custom"><FiSearch/></span>
                                </div> */}
                  </div>
                )}
                <div className="col-xl-5 col-12 btn-spaces-filter text-center">
                  <Button
                    tagType="link"
                    onClick={() => {
                      if (token) {
                        console.log("logged");
                        navigate("/addService");
                      } else {
                        console.log("not");
                        setShow(true);
                      }
                    }}
                    className="button-outLine px-4 btn-bg-white btn-filter text-center mx-2"
                    style={{
                      width: "180px",
                    }}
                  >
                    <svg
                      className="me-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_6026_14023)">
                        <path
                          d="M15.4735 7.63316C13.1395 4.19931 10.0221 2.37426 8.38958 3.4925C8.20981 3.61909 8.05361 3.77619 7.92804 3.95667C7.92804 3.96986 4.1487 11.6182 4.1487 11.6182L2.03881 13.0477C1.71491 13.2675 1.4375 13.5491 1.22244 13.8762C1.00737 14.2033 0.858859 14.5696 0.785384 14.9541C0.711909 15.3386 0.714911 15.7338 0.79422 16.1172C0.873528 16.5005 1.02759 16.8645 1.2476 17.1883L1.34254 17.3281C1.78726 17.9759 2.46944 18.4223 3.24113 18.5704C4.01281 18.7185 4.81178 18.5564 5.46474 18.1193L8.85375 23.1118C9.35221 23.7263 10.3096 24.3382 11.4911 23.6182C11.7004 23.4825 11.879 23.3044 12.0153 23.0954C12.1515 22.8865 12.2425 22.6513 12.2823 22.405C12.3301 22.1601 12.3288 21.9081 12.2785 21.6636C12.2283 21.4192 12.1301 21.1871 11.9896 20.9809L9.00408 16.5765C9.00408 16.5765 16.0617 16.0147 16.088 16.0041C16.3084 15.958 16.5173 15.8684 16.7025 15.7404C17.5412 15.1707 17.8419 13.976 17.5518 12.3751C17.2907 10.9008 16.5496 9.2314 15.4735 7.63316ZM2.11002 16.8085L2.01507 16.6688C1.86328 16.4453 1.75704 16.1941 1.70246 15.9295C1.64787 15.6649 1.646 15.3922 1.69695 15.1269C1.74791 14.8615 1.85069 14.6089 1.9994 14.3834C2.14812 14.1578 2.33986 13.9638 2.56364 13.8125L4.38606 12.5729L6.79134 16.1149L4.96892 17.3545C4.74539 17.5065 4.49411 17.6129 4.22942 17.6677C3.96473 17.7226 3.69184 17.7247 3.42633 17.674C3.16082 17.6233 2.90791 17.5208 2.68205 17.3723C2.45619 17.2238 2.26181 17.0322 2.11002 16.8085ZM11.23 21.5004C11.3742 21.7149 11.4273 21.9778 11.3779 22.2314C11.3285 22.4851 11.1804 22.7087 10.9663 22.8534C10.7514 22.9977 10.4881 23.0509 10.234 23.0015C9.97994 22.9521 9.7558 22.804 9.61068 22.5896L6.23221 17.6129L7.59046 16.6899L7.94914 16.6608L11.23 21.5004ZM7.6643 15.7562L5.04276 11.8951L7.54298 6.79711C7.78562 8.2292 8.49507 9.9303 9.62914 11.5997C10.7632 13.2692 12.0819 14.5562 13.3214 15.3105L7.6643 15.7562ZM15.4445 15.1417C14.1839 15.06 12.132 13.6384 10.394 11.0776C8.65595 8.51667 8.09156 6.09294 8.47925 4.88766C8.54926 4.66143 8.68897 4.4631 8.87843 4.32101C9.06789 4.17891 9.2974 4.10032 9.53419 4.09645C10.7843 4.09645 12.9127 5.5259 14.7008 8.16063C15.7083 9.64283 16.4414 11.1936 16.6419 12.5492C17.0349 15.1417 15.4445 15.1417 15.4445 15.1417Z"
                          fill="#F0F2F4"
                        />
                        <path
                          d="M12.1752 7.73492C11.8521 7.67148 11.5197 7.67309 11.1972 7.73966C10.8748 7.80622 10.5689 7.93641 10.2974 8.12261C10.2473 8.15724 10.2046 8.2014 10.1716 8.25255C10.1386 8.3037 10.116 8.36084 10.1051 8.42072C10.0942 8.4806 10.0953 8.54204 10.1081 8.60153C10.1209 8.66102 10.1454 8.7174 10.18 8.76744C10.2146 8.81749 10.2588 8.86023 10.31 8.89321C10.3611 8.92619 10.4182 8.94878 10.4781 8.95968C10.538 8.97057 10.5994 8.96957 10.6589 8.95672C10.7184 8.94388 10.7748 8.91944 10.8249 8.88481C10.9968 8.76809 11.1901 8.68638 11.3936 8.64436C11.5971 8.60233 11.807 8.6008 12.0111 8.63987C12.2152 8.67893 12.4097 8.75781 12.5833 8.87202C12.7569 8.98622 12.9064 9.13351 13.0231 9.30547C13.1398 9.47743 13.2215 9.67069 13.2635 9.87423C13.3056 10.0778 13.3071 10.2876 13.268 10.4917C13.229 10.6958 13.1501 10.8903 13.0359 11.0639C12.9217 11.2375 12.7744 11.387 12.6024 11.5037C12.5214 11.5597 12.4603 11.6402 12.4283 11.7334C12.3962 11.8265 12.3948 11.9275 12.4243 12.0215C12.4538 12.1156 12.5126 12.1977 12.5921 12.2559C12.6716 12.3141 12.7676 12.3453 12.8662 12.345C12.9602 12.3468 13.0524 12.3191 13.1299 12.2659C13.5401 11.988 13.8586 11.5946 14.0451 11.1356C14.2315 10.6765 14.2775 10.1725 14.1773 9.68725C14.077 9.20203 13.835 8.75749 13.4819 8.40993C13.1287 8.06238 12.6804 7.82745 12.1936 7.73492H12.1752ZM16.0416 4.42766H16.0864C16.2005 4.42762 16.3106 4.38527 16.3954 4.30879C16.4801 4.23232 16.5335 4.12715 16.5453 4.0136L16.9013 0.553378C16.9094 0.492192 16.9052 0.430003 16.8888 0.370489C16.8725 0.310975 16.8444 0.255346 16.8061 0.206893C16.7679 0.15844 16.7203 0.118148 16.6662 0.0883992C16.6122 0.0586508 16.5527 0.0400509 16.4913 0.0337C16.4299 0.027349 16.3678 0.0333761 16.3088 0.0514245C16.2498 0.069473 16.195 0.0991762 16.1477 0.138777C16.1003 0.178377 16.0614 0.227071 16.0332 0.281976C16.005 0.336882 15.9881 0.396884 15.9835 0.458433L15.6301 3.92129C15.6176 4.04299 15.6539 4.16469 15.731 4.25964C15.8082 4.35459 15.9199 4.41503 16.0416 4.42766ZM22.0073 3.71558C21.9395 3.61342 21.8341 3.54223 21.714 3.51752C21.5939 3.49282 21.469 3.51661 21.3664 3.58371L18.1514 5.6936C18.068 5.74872 18.0047 5.82947 17.971 5.9237C17.9374 6.01792 17.9354 6.12051 17.9651 6.21602C17.9949 6.31153 18.0548 6.39479 18.136 6.45326C18.2172 6.51172 18.3152 6.54223 18.4152 6.54019C18.5085 6.54234 18.6003 6.51663 18.6789 6.46635L21.8939 4.35645C21.9936 4.28628 22.0615 4.17949 22.0828 4.05941C22.104 3.93932 22.0769 3.81571 22.0073 3.71558ZM22.991 9.34898L19.2512 8.67646C19.1306 8.65477 19.0062 8.68191 18.9056 8.75189C18.8049 8.82188 18.7362 8.92898 18.7145 9.04964C18.6928 9.1703 18.72 9.29463 18.79 9.39528C18.8599 9.49593 18.967 9.56466 19.0877 9.58635L22.8249 10.2589H22.9066C23.0242 10.2623 23.1387 10.2207 23.2266 10.1426C23.3146 10.0644 23.3694 9.95567 23.3798 9.83848C23.3903 9.7213 23.3555 9.60456 23.2828 9.5121C23.21 9.41965 23.1047 9.35847 22.9884 9.34107L22.991 9.34898Z"
                          fill="#BDBDBD"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_6026_14023">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    add post
                  </Button>
                  <Button
                    tagType="link"
                    className="button-outLine px-4 btn-bg-white btn-filter text-center"
                    onClick={toggleFilter}
                    style={{
                      width: "180px",
                    }}
                  >
                    <svg
                      className="me-3"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group">
                        <g id="Vector">
                          <path
                            d="M18.1538 8.61538V10.4615C19.0031 10.4615 19.6923 11.1508 19.6923 12H20.6154V11.0769H21.4102C21.254 10.5261 20.9592 10.0188 20.5471 9.60671C19.9124 8.97198 19.0515 8.61538 18.1538 8.61538Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M21.4102 11.0769H20.6154V12H21.5385C21.5385 11.6851 21.4946 11.3746 21.4102 11.0769Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M23.0769 12.9231C23.3217 12.9231 23.5565 12.8258 23.7296 12.6527C23.9027 12.4796 24 12.2448 24 12C24 11.7552 23.9027 11.5204 23.7296 11.3473C23.5565 11.1742 23.3217 11.0769 23.0769 11.0769V12.9231Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M23.0769 12.9231V11.0769H21.4102C21.4946 11.3746 21.5385 11.6851 21.5385 12C21.5385 12.3149 21.4946 12.6254 21.4102 12.9231H23.0769Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M20.6154 12.9231H21.4102C21.4946 12.6254 21.5385 12.3149 21.5385 12H20.6154V12.9231Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M19.6923 12C19.6923 12.8492 19.0031 13.5385 18.1538 13.5385V15.3846C19.0515 15.3846 19.9124 15.028 20.5471 14.3933C20.9592 13.9812 21.254 13.4739 21.4102 12.9231H20.6154V12H19.6923Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M18.1538 15.3846V13.5385C17.3046 13.5385 16.6154 12.8492 16.6154 12H14.7692C14.7692 12.8977 15.1258 13.7585 15.7606 14.3933C16.3953 15.028 17.2562 15.3846 18.1538 15.3846Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M14.7692 12H16.6154C16.6154 11.1508 17.3046 10.4615 18.1538 10.4615V8.61538C17.2562 8.61538 16.3953 8.97198 15.7606 9.60671C15.1258 10.2415 14.7692 11.1023 14.7692 12Z"
                            fill="#BDBDBD"
                          />
                          <path
                            className="fill_white"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.923077 2.46154C0.678262 2.46154 0.443473 2.55879 0.270363 2.7319C0.0972523 2.90501 0 3.1398 0 3.38462C0 3.62943 0.0972523 3.86422 0.270363 4.03733C0.443473 4.21044 0.678262 4.30769 0.923077 4.30769H8.74368C8.89985 4.85852 9.19468 5.36586 9.60671 5.7779C10.2415 6.41264 11.1023 6.76923 12 6.76923C12.8977 6.76923 13.7585 6.41264 14.3933 5.7779C14.8053 5.36586 15.1002 4.85852 15.2563 4.30769H23.0769C23.3217 4.30769 23.5565 4.21044 23.7296 4.03733C23.9027 3.86422 24 3.62943 24 3.38462C24 3.1398 23.9027 2.90501 23.7296 2.7319C23.5565 2.55879 23.3217 2.46154 23.0769 2.46154H15.2563C15.1002 1.91071 14.8053 1.40337 14.3933 0.991331C13.7585 0.356592 12.8977 0 12 0C11.1023 0 10.2415 0.356592 9.60671 0.991331C9.19468 1.40337 8.89985 1.91071 8.74368 2.46154H0.923077ZM0.923077 11.0769C0.678262 11.0769 0.443473 11.1742 0.270363 11.3473C0.0972523 11.5204 0 11.7552 0 12C0 12.2448 0.0972523 12.4796 0.270363 12.6527C0.443473 12.8258 0.678262 12.9231 0.923077 12.9231H12C12.2448 12.9231 12.4796 12.8258 12.6527 12.6527C12.8258 12.4796 12.9231 12.2448 12.9231 12C12.9231 11.7552 12.8258 11.5204 12.6527 11.3473C12.4796 11.1742 12.2448 11.0769 12 11.0769H0.923077ZM12 19.6923C11.7552 19.6923 11.5204 19.7896 11.3473 19.9627C11.1742 20.1358 11.0769 20.3706 11.0769 20.6154C11.0769 20.8602 11.1742 21.095 11.3473 21.2681C11.5204 21.4412 11.7552 21.5385 12 21.5385H23.0769C23.3217 21.5385 23.5565 21.4412 23.7296 21.2681C23.9027 21.095 24 20.8602 24 20.6154C24 20.3706 23.9027 20.1358 23.7296 19.9627C23.5565 19.7896 23.3217 19.6923 23.0769 19.6923H12ZM13.5385 3.38462C13.5385 4.23385 12.8492 4.92308 12 4.92308C11.1508 4.92308 10.4615 4.23385 10.4615 3.38462C10.4615 2.53538 11.1508 1.84615 12 1.84615C12.8492 1.84615 13.5385 2.53538 13.5385 3.38462Z"
                            fill="black"
                          />
                          <path
                            d="M0.923077 19.6923C0.678262 19.6923 0.443473 19.7896 0.270363 19.9627C0.0972523 20.1358 0 20.3706 0 20.6154C0 20.8602 0.0972523 21.095 0.270363 21.2681C0.443473 21.4412 0.678262 21.5385 0.923077 21.5385V19.6923Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M0.923077 19.6923V21.5385H2.58984C2.50543 21.2407 2.46154 20.9303 2.46154 20.6154C2.46154 20.3004 2.50543 19.99 2.58984 19.6923H0.923077Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M5.84615 24V22.1538C4.99692 22.1538 4.30769 21.4646 4.30769 20.6154H3.38462V21.5385H2.58984C2.746 22.0893 3.04083 22.5966 3.45287 23.0087C4.08761 23.6434 4.9485 24 5.84615 24Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M2.58984 21.5385H3.38462V20.6154H2.46154C2.46154 20.9303 2.50543 21.2407 2.58984 21.5385Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M3.38462 19.6923H2.58984C2.50543 19.99 2.46154 20.3004 2.46154 20.6154H3.38462V19.6923Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M4.30769 20.6154C4.30769 19.7662 4.99692 19.0769 5.84615 19.0769V17.2308C4.9485 17.2308 4.08761 17.5874 3.45287 18.2221C3.04083 18.6341 2.746 19.1415 2.58984 19.6923H3.38462V20.6154H4.30769Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M7.38462 20.6154H9.23077C9.23077 19.7177 8.87418 18.8568 8.23944 18.2221C7.6047 17.5874 6.74381 17.2308 5.84615 17.2308V19.0769C6.69538 19.0769 7.38462 19.7662 7.38462 20.6154Z"
                            fill="#BDBDBD"
                          />
                          <path
                            d="M7.38462 20.6154C7.38462 21.4646 6.69538 22.1538 5.84615 22.1538V24C6.74381 24 7.6047 23.6434 8.23944 23.0087C8.87418 22.3739 9.23077 21.513 9.23077 20.6154H7.38462Z"
                            fill="#BDBDBD"
                          />
                        </g>
                      </g>
                    </svg>
                    Filter
                  </Button>
                </div>
              </div>
            </div>
            {isFilterOpen && (<div className="filter border-bottom">
              <MarketFilter
                isOpen={isFilterOpen}
                getFilteredData={getFilteredData}
              />
            </div>)}
            <div className="booking-section my-5">
              {empty && <Paragraph className="empty">{empty}</Paragraph>}
              {error && (
                <Paragraph className="text-danger empty">{error}</Paragraph>
              )}
              <div className="row">
                {cards &&
                  cards.slice(0, visibleCards).map((item, index) => {
                    return (
                      <>
                        <div
                          className="col-lg-4 col-md-6 col-sm-12"
                          key={index}
                        >
                          <MarketProjectItem
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            category={item.category?.name}
                            category_logo={item.category?.logo}
                            user={item.user_id?.first_name}
                            description={item.description}
                            lastseen={item.user_id?.lastseen}
                            is_favorite={item.is_favorite}
                          />
                        </div>
                      </>
                    );
                  })}
              </div>
              {cards && visibleCards < cards.length && (
                <div className="text-center mt-5">
                  <Button
                    tagType="link"
                    className="btn-cards-more"
                    onClick={handleShowMore}
                  >
                    Show more
                    <svg
                      width="8"
                      height="5"
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="expand_more"
                        d="M4.00451 4.5C3.90895 4.5 3.81937 4.4856 3.73576 4.45681C3.65214 4.42847 3.5745 4.38002 3.50283 4.31146L0.188191 1.14051C0.0567994 1.01482 -0.00579067 0.857585 0.000420551 0.668814C0.00615399 0.4805 0.0747161 0.323495 0.206107 0.1978C0.337499 0.0721046 0.504724 0.00925661 0.707783 0.00925661C0.910843 0.00925661 1.07807 0.0721046 1.20946 0.1978L4.00451 2.87168L6.81748 0.180659C6.94887 0.0549639 7.11323 -0.00514088 7.31055 0.000344001C7.5074 0.00628595 7.67152 0.0721046 7.80291 0.1978C7.9343 0.323495 8 0.48347 8 0.677726C8 0.871982 7.9343 1.03196 7.80291 1.15765L4.50619 4.31146C4.43452 4.38002 4.35688 4.42847 4.27327 4.45681C4.18965 4.4856 4.10007 4.5 4.00451 4.5Z"
                        fill="black"
                      />
                    </svg>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
        <LoginAlert show={show} onHide={handelHide} />
      </>
    );
};
export default MarketSpace;