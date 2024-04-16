import React from "react";
import Dropdown from "../../../../common/Dropdown/Dropdown";
import docImg01 from "../../../../images/document.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ViewDocument = () => {
    const optionData = ["100%", "90%", "80%"];
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className="viewDocumentWrap">
            <div className="viewDocumentHeader">
                <Dropdown
                    placeholder="100%"
                    size="sm"
                    optionData={optionData}
                />
                <ul className="viewItem">
                    <li className="download">download</li>
                    <li className="plus">puls</li>
                    <li className="minus">minus</li>
                </ul>
            </div>
            <div className="documents">
                <Carousel
                    infinite={true}
                    responsive={responsive}
                    itemClass="docSlider"
                >
                    <div className="doc">
                        <img src={docImg01} alt="" />
                    </div>
                    <div className="doc">
                        <img src={docImg01} alt="" />
                    </div>
                    <div className="doc">
                        <img src={docImg01} alt="" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default ViewDocument;
