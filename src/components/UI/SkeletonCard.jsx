import { useState } from 'react';
import { Card, Skeleton } from 'antd';

const SkeletonCard = () => {

    const [loading, setLoading] = useState(true);
    
    return (
        <>
            <Card>
                <Skeleton.Image active loading={loading} className="card-img-top"/>
                <Skeleton loading={loading} active className='p-2' />
            </Card>

        </>
    )
};
export default SkeletonCard;