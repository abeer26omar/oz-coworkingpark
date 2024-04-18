import { Skeleton, Badge } from "antd";
import * as DOMPurify from "dompurify";
import Button from "../UI/Button";
import Media from "../Media/Media";
import Paragraph from "../UI/Paragraph";

const ZeeCard = ({isPending, item}) => {
    return (
        <div className="card my-2 h-100 text-start">
            {isPending ? (
              <Skeleton.Image active />
            ) : (
              <>
                  {item?.allow_free === 1 ? (<Badge.Ribbon text="Free" color="gold">
                    <Media
                      type="img"
                      src={item.image}
                      className="w-100"
                      alt={item.title}
                      style={{
                        height: '352px',
                        objectFit: 'cover'
                      }}
                    />
                  </Badge.Ribbon>) : (
                    <Media
                      type="img"
                      src={item.image}
                      className="w-100"
                      alt={item.title}
                      style={{
                        height: '352px',
                        objectFit: 'cover'
                      }}
                    />
                  )}
              </>
            )}
            <div className="card-body">
              {isPending ? (
                <Skeleton
                  active
                  title={{ width: 300 }}
                  paragraph={{ row: 1 }}
                />
              ) : (
                <>
                  <Paragraph className="card-title mb-2 dynamic_wraper_1">
                    {item.title}
                  </Paragraph>
                  <div
                    className="description_black dynamic_wraper"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        item.descriptions
                      ),
                    }}
                  ></div>
                </>
              )}
              <div className="d-flex justify-content-between align-items-center ">
                {isPending ? (
                  <Skeleton.Input active />
                ) : (
                  <>
                    <Button
                      tagType="link"
                      to={`/gymdetails/${item.id}`}
                      className="button-outLine btn-bg-white m-auto-unset"
                    >
                      Explore More
                    </Button>
                  </>
                )}
                {isPending ? (
                  <Skeleton active title={{ width: 100 }} paragraph={false} />
                ) : (
                  <>
                    <Paragraph className="card-title">
                      {Math.floor(item.price)} Egp
                    </Paragraph>
                  </>
                )}
              </div>
            </div>
          </div>
    )
}
export default ZeeCard;