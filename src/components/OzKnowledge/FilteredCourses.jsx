import { useState } from 'react';
import { Layout, Menu } from 'antd';
import camera from '../../assets/images/icons/Camera.svg';
import CourseCard from './CourseCard';
import CheckBoxLabel from '../UI/CheckBoxLabel';
import { Radio, Space } from 'antd';

const FilteredCourses = () => {

    const [collapsed, setCollapsed] = useState(true);
    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const getItem = (label, key, icon, children, type) => {
        return {
          key,
          icon,
          children,
          label,
          type,
        };
      }

    const items = [
        {
            key: 'sub1',
            icon: null,
            label: 'CATEGORY',
            children: [
                {
                    key: 'sub11',
                    icon: (<img src={camera} alt='icon'/>),
                    label: 'Photography',
                    children: [
                        {
                            key: 'sub111',
                            label: (<CheckBoxLabel key={1} label={'Graphic design'} value={'1'}/>),
                        },
                        {
                            key: 'sub112',
                            label: (<CheckBoxLabel key={2} label={'Ux & Ui Design'} value={'2'}/>),
                        },
                        {
                            key: 'sub113',
                            label: (<CheckBoxLabel key={3} label={'Motion Design'} value={'3'}/>),
                        }
                    ]
                },
                {
                    key: 'sub12',
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32" fill="none">
                                <path d="M10.875 19C11.9105 19 12.75 18.1605 12.75 17.125C12.75 16.0895 11.9105 15.25 10.875 15.25C9.83947 15.25 9 16.0895 9 17.125C9 18.1605 9.83947 19 10.875 19Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 24.9984L9.55313 18.4453" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 25L16.0781 22.825C16.2072 22.803 16.3281 22.7471 16.4286 22.6631C16.5291 22.5791 16.6055 22.47 16.65 22.3469L18.75 16.75L11.25 9.25L5.65312 11.35C5.52979 11.397 5.42083 11.4753 5.33699 11.5772C5.25314 11.6792 5.19731 11.8012 5.175 11.9312L3 25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.75 16.7519L21.2156 14.2862C21.2865 14.2165 21.3428 14.1333 21.3812 14.0415C21.4196 13.9498 21.4394 13.8513 21.4394 13.7519C21.4394 13.6524 21.4196 13.5539 21.3812 13.4622C21.3428 13.3705 21.2865 13.2873 21.2156 13.2175L14.7844 6.78625C14.7146 6.71538 14.6314 6.65911 14.5397 6.62069C14.4479 6.58228 14.3495 6.5625 14.25 6.5625C14.1505 6.5625 14.0521 6.58228 13.9603 6.62069C13.8686 6.65911 13.7854 6.71538 13.7156 6.78625L11.25 9.25187" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>),
                    label: 'Design',
                    children: [
                        {
                            key: 'sub111',
                            label: (<CheckBoxLabel key={1} label={'Graphic design'} value={'1'}/>),
                        },
                        {
                            key: 'sub112',
                            label: (<CheckBoxLabel key={2} label={'Ux & Ui Design'} value={'2'}/>),
                        },
                        {
                            key: 'sub113',
                            label: (<CheckBoxLabel key={3} label={'Motion Design'} value={'3'}/>),
                        }
                    ]
                }
            ],
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
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" htmlFor="flexRadioDefault1">
                                Member
                            </label>
                        </div>),
                },
                {
                    key: 'sub22',
                    label: (
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" htmlFor="flexRadioDefault2">
                                Public
                            </label>
                        </div>),
                }
            ],
        },
        
    ];

    return (
        <>
            <section className="container-fluid px-70 py-5">
                <div className='row'>
                    <div className='col-xxl-4 col-xl-3 filter_side'>
                        <Layout.Sider>
                            <Menu 
                                theme="light" 
                                defaultSelectedKeys={['1']}
                                mode="inline" 
                                items={items} 
                                inlineCollapsed={collapsed}
                            />
                        </Layout.Sider>
                    </div>
                    <div className='col-xxl-8 col-xl-9 ps-3'>
                        <div className='row g-3 row-cols-lg-3'>
                            <div className='col'>
                                <CourseCard />
                            </div>
                            <div className='col'>
                                <CourseCard />
                            </div>
                            <div className='col'>
                                <CourseCard />
                            </div>
                            <div className='col'>
                                <CourseCard />
                            </div>
                            <div className='col'>
                                <CourseCard />
                            </div>
                            <div className='col'>
                                <CourseCard />
                            </div>
                            <div className='col'>
                                <CourseCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default FilteredCourses;