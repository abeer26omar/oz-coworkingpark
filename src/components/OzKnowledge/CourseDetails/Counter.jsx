import CountUp from 'react-countup';
import Paragraph from '../../UI/Paragraph';

const Counter = () => {
    return (
        <>
            <section className="container-fluid px-70">
                <div className="row row-cols-md-4 row-cols-2 g-3 justify-content-center py-5">
                    <div className="col">
                        <div className="d-flex flex-column justify-content-between align-items-center">
                            <CountUp 
                                end={24} 
                                separator="," 
                                enableScrollSpy 
                                scrollSpyOnce 
                                className="counter_blue mb-3"
                                suffix="+"
                            />
                            <Paragraph className='mb-0 p-counter opacity-100 fw-semibold'>Hours of Course</Paragraph>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column justify-content-between align-items-center">
                            <CountUp 
                                end={18} 
                                separator="," 
                                enableScrollSpy 
                                scrollSpyOnce 
                                className="counter_blue mb-3"
                                suffix="+"
                            />
                            <Paragraph className='mb-0 p-counter opacity-100 fw-semibold'>Total Assignments</Paragraph>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column justify-content-between align-items-center">
                            <CountUp 
                                end={20} 
                                separator="," 
                                enableScrollSpy 
                                scrollSpyOnce 
                                className="counter_blue mb-3"
                                suffix="+"
                            />
                            <Paragraph className='mb-0 p-counter opacity-100 fw-semibold'>Video Lessons</Paragraph>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column justify-content-between align-items-center">
                            <CountUp 
                                end={4312} 
                                separator="," 
                                enableScrollSpy 
                                scrollSpyOnce 
                                className="counter_blue mb-3"
                                suffix="+"
                            />
                            <Paragraph className='mb-0 p-counter opacity-100 fw-semibold'>Students Enrolled</Paragraph>
                        </div>
                    </div>
                
                </div>
            </section>
        </>
    )
};
export default Counter;