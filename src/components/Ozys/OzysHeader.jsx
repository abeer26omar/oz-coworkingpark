
import MainHeaderWrapper from '../UI/MainHeaderWrapper';
import Paragraph from '../UI/Paragraph';

const OzysHeader = () => {
    return (
        <>
            <div className='position-relative'>
                <MainHeaderWrapper image={''} special_flex={`justify-content-md-center`}>
                    <div className="container text-center">
                        <Paragraph className="text-two">{'FOOD & Beverage'}</Paragraph>
                        <Paragraph className="text-two">{'X'}</Paragraph>
                        <Paragraph className="text-two">{'OZ'}</Paragraph>

                    </div>
                </MainHeaderWrapper>
            </div>
        </>
    )
};
export default OzysHeader;