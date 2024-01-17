import { useState, useContext, useEffect } from 'react';
import { Layout, Menu, Slider, InputNumber, DatePicker, Select } from 'antd';
import camera from '../../assets/images/icons/Camera.svg';
import CourseCard from './CourseCard';
import CheckBoxLabel from '../UI/CheckBoxLabel';
import FilterCourses from './FilterCourses';
import { getCategoriesList, getInstructorsList } from '../../apis/OzKnowledge';
import {AuthContext} from '../../apis/context/AuthTokenContext';

const FilteredCourses = ({courses}) => {

    const [collapsed, setCollapsed] = useState(true);

    const [categories, setCategories] = useState([]);
    const [trainers, setTrainers] = useState([]);

    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const [categoryId, setCategoryId] = useState([]);
    const [sellerType, setSellerType] = useState('');
    const [trainerId, setTrainerId] = useState('');

    const ids = JSON.parse(sessionStorage.getItem('coursesIdsOz'));
    const { token } = useContext(AuthContext);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        const getClasses = async () => {
            try{
                const result = await getCategoriesList(token, signal);
                setCategories(result);
            }catch (error){
                console.log(error);
            }
        }
        getClasses();

        return () => controller.abort();
    }, [ids]);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        const getInstructors = async () => {
            try{
                const result = await getInstructorsList(token, signal, 100, 0);
                setTrainers(result);
            }catch (error){
                console.log(error);
            }
        }
        getInstructors();
        return () => controller.abort();
    }, []);


    const onChangeSeller = (e) => {
        setSellerType(e.target.value);
        console.log(e.target.value);
    };

    const onChangeSlider = (value) => {
        setPriceFrom(value[0]);
        setPriceTo(value[1]);
    };

    const onChangeDateStart = (dateString) => {
        setStartDate(dateString);
    };

    const onChangeDateEnd = (dateString) => {
        setEndDate(dateString);
    };

    const items = [
        {
            key: 'sub1',
            icon: null,
            label: 'CATEGORY',
            children: categories && categories.map(item=>{
                    return {
                        key: item.id,
                        icon: (<img src={item.image} alt='icon' width= '24px' height= '24px'/>),
                        label: item.title,
                        children: item.sub_category.map(e=>{
                            return {
                                key: e.id,
                                label: (
                                    <div className='form-check' key={e.id}>
                                        <input class="form-check-input" type="checkbox" name={e.tilte} id={e.id} value={e.id}/>
                                        <label class="form-check-label" htmlFor={e.id}>
                                            {e.title}
                                        </label>
                                    </div>
                                )
                            }
                        })
                    }
                })
        },
        {
            type: 'divider',
        },
        {
            key: 'sub2',
            icon: null,
            label: 'SELLER TYPE',
            children: [
                {
                    key: 'sub21',
                    label: (
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={onChangeSeller} value={'member'}/>
                            <label class="form-check-label" htmlFor="flexRadioDefault1">
                                Member
                            </label>
                        </div>),
                },
                {
                    key: 'sub22',
                    label: (
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={onChangeSeller} value={'public'}/>
                            <label class="form-check-label" htmlFor="flexRadioDefault2">
                                Public
                            </label>
                        </div>),
                }
            ],
        },
        {
            type: 'divider',
        },
        {
            key: 'sub3',
            icon: null,
            label: 'PRICES',
            children: [
                {
                    key: 'sub31',
                    label: (
                        <div className='my-2'>
                            <div className='d-flex'>
                            <div className='col-6'>
                                <InputNumber
                                    value={priceFrom}
                                    onChange={onChangeSlider}
                                />
                            </div>
                            <div className='col-6'>
                                <InputNumber
                                    value={priceTo}
                                    onChange={onChangeSlider}
                                />
                            </div>
                        </div>
                            <Slider 
                                range
                                step={10}
                                defaultValue={[priceFrom, priceTo]}
                                onChange={onChangeSlider}
                            />
                        </div>
                    ),
                }
            ]
        },
        {
            type: 'divider',
        },
        {
            key:'sub4',
            label: 'Date Course',
            children: [
                {
                    key: 'sub41',
                    label: (
                        <div className='d-flex my-2'>
                            <div className='col-6'>
                                <DatePicker 
                                    size={'large'} 
                                    placeholder="From"
                                    value={startDate}
                                    onChange={onChangeDateStart} />
                            </div>
                            <div className='col-6'>
                                <DatePicker 
                                    size={'large'}
                                    placeholder="To"
                                    value={endDate}
                                    onChange={onChangeDateEnd}  />
                            </div>
                    </div>
                    )
                }
            ]
        },
        {
            type: 'divider',
        },
        {
            key: 'sub5',
            label: 'Select instructor',
            children: [
                {
                    key: 'sub51',
                    label: (
                        <Select
                            id='user_type'
                            defaultValue={trainerId || undefined}
                            value={trainerId || undefined}
                            className="form__field placeholderSelect"
                            onChange={(value) => {
                                setTrainerId(value)
                            }}
                            bordered={false}
                            placeholder={'Select instructor'}
                        >
                            {trainers && trainers.map((item) => (
                                <Select.Option key={item.id} value={item.id}>
                                    {item.name}
                                </Select.Option>
                            ))}
                        </Select>
                    )
                }
            ]
        }
        
    ];

    return (
        <>
            <FilterCourses courses_length={courses.length}/>
            <section className="container-fluid px-70 py-5">
                <div className='row'>
                    <div className='col-xxl-4 col-xl-3 filter_side'>
                        <Layout.Sider>
                            <Menu 
                                theme="light" 
                                items={items} 
                                defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4', 'sub5']}
                                mode="inline" 
                                inlineCollapsed={collapsed}
                            />
                        </Layout.Sider>
                    </div>
                    <div className='col-xxl-8 col-xl-9 ps-3'>
                        <div className='row g-3 row-cols-lg-3'>
                            {courses && 
                                courses.map(item => {
                                    return (
                                        <div className='col' key={item.id}>
                                            <CourseCard coursesDetails={item} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default FilteredCourses;