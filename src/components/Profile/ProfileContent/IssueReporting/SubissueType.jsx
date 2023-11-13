import Button from "../../../UI/Button";
import Paragraph from "../../../UI/Paragraph";

const SubissueType = () => {
    return (
        <div className="container py-4 px-sm-5 px-3">
            <div className="head-form">
                <h2>Ticket Type</h2>
            </div>
            <div className="row row-cols-xxl-3 row-cols-lg-2 row-cols-md-2 row-cols-1 g-3 space-description">
                <div className='col'>
                    <Button className='p-0 issue_type_box' tagType='link' to={'/profile/issueplace'}>
                        <Paragraph className='service_catering mb-0'>IT Assistance</Paragraph>
                    </Button>
                </div>
                <div className='col'>
                    <Button className='p-0 issue_type_box' tagType='link' to={'/profile/issueplace'}>
                        <Paragraph className='service_catering mb-0'>IT Assistance</Paragraph>
                    </Button>
                </div>
                <div className='col'>
                    <Button className='p-0 issue_type_box' tagType='link' to={'/profile/issueplace'}>
                        <Paragraph className='service_catering mb-0'>IT Assistance</Paragraph>
                    </Button>
                </div>
                <div className='col'>
                    <Button className='p-0 issue_type_box' tagType='link' to={'/profile/issueplace'}>
                        <Paragraph className='service_catering mb-0'>IT Assistance</Paragraph>
                    </Button>
                </div>
            </div>
        </div>
    )
};
export default SubissueType;