import React from "react";
import Lion from "../../assets/lion.png";
import Logo from "../../assets/aadhaar-hindi.png";
import QrCode from "../../assets/qr-code.png";
import "./index.css";
import FrontHeader from "../../assets/front_header_banner.png";
import BackHeader from "../../assets/back_header_banner.png";
import BackFoot1 from "../../assets/back_foot_1.png";
import BackFoot2 from "../../assets/back_foot_2.png";
import BackFoot3 from "../../assets/back_foot_3.png";

const AadharCard = (formData) => {
  const data = formData && formData.formData.formData;

  // const random = Math.floor(1e15 + Math.random() * 9e15).toString();
  // const randomMarginLeft = Math.floor(Math.random() * (40 - 30 + 1)) + 30;

  // const formattedRandom = random.replace(/(\d{4})/g, "$1 ");

  const handleImage = (image) => {
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      return imageUrl;
    }
  };

  const formatId = (no) => {
    return no.replace(/(\d{4})/g, "$1 ");
  };

  

  return (
    <>
      <div className="front-container" style={{ marginTop: "6rem" }}>
        <div className="front-nav" style={{ width: '100%', height: '1.6rem' }}>
          <img src={Lion} alt="lion" />
          <div className="front-nav-txt" style={{ maxWidth: '64%' }}>
            <img src={FrontHeader} alt="front_head" style={{ maxWidth: '-webkit-fill-available' }} />
          </div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="front-details-container">
          <div className="front-details">
            <img src={handleImage(data.image)} alt="Dummy" />
            <div>
              <p>
                {data.hindiName}
              </p>
              <p>
                {data.name}
              </p>
              <p>
                जन्म तिथि/DOB : {data.dob.split("-").reverse().join("/")}{" "}
              </p>
              <p>
                {data.gender}
              </p>
            </div>
          </div>
          {/* <img src={QrCode} alt="QrCode" className="front-qrcode" /> */}
        </div>
        <div className="front-footer">
          <p style={{padding: '4px 0', fontSize: '14px', fontWeight: '600'}}>{formatId(data.aadhar)}</p>
          {/* <hr className="dotted" /> */}
          {/* <p style={{padding: '0 0 4px 0'}}>VID: {formatId(random)}</p> */}
          <hr className="end"/>
          <p style={{ fontWeight: '700', fontSize: '14px' }}>
            मेरा <span>आधार,</span> मेरी पहचान
          </p>
        </div>
      </div>
      {/* back */}
      <div className="front-container" style={{ marginTop: "16rem" }}>
        <div className="front-nav" style={{ width: '100%', height: '1.6rem' }}>
          <img src={Lion} alt="lion" />
          {/* <div className="front-nav-txt" style={{ maxWidth: '64%' }}> */}
          <img src={BackHeader} alt="back_head" style={{ maxWidth: '-webkit-fill-available' }}/>
          {/* </div> */}
          <img src={Logo} alt="logo" />
        </div>
        <div className="back-details-container">
          <div className="back-details">
            {data.addressHindi && <p style={{ marginBottom: '4px' }}>
              <b>पता:</b>
              <br /> {data.addressHindi}
            </p>}
            <p>
              <b>Address:</b>
              <br /> {data.address}
            </p>
          </div>
          <img src={QrCode} alt="QrCode" className="back-qrcode" />
        </div>
        <div className="front-footer">
          <p style={{padding: '4px 0', fontSize: '14px', fontWeight: '600'}}>{formatId(data.aadhar)}</p>
          {/* <hr className="dotted" /> */}
          {/* <p style={{padding: '0 0 4px 0'}}>VID: {formatId(random)}</p> */}
          <hr className="end"/>
          <div style={{ display: 'flex', justifyContent:'space-around', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '8px', fontWeight: '600' }}>
              <img src={BackFoot1} alt="icon1" className="back-footicon" /> 1947
            </div> |
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '8px', fontWeight: '600' }}>
              <img src={BackFoot2} alt="icon2" className="back-footicon" /> help@uidai@gov.in
            </div> |
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '8px', fontWeight: '600' }}>
              <img src={BackFoot3} alt="icon3" className="back-footicon" /> www.uidai.gov.in
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AadharCard;
