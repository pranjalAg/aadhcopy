import React, { useState } from "react";
import AadharCard from "../aadhar-card/AadharCard";
import "./index.css";

const AadhaarCardForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    hindiName: "",
    dob: "",
    address: "",
    gender: "",
    aadhar: "",
    image: null, // Store image file here
    addressHindi: ""
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(({
        ...formData,
        image: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      setFormData({
        formData,
      });
      setIsRegistered(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {isRegistered ? (
        <AadharCard formData={formData} />
      ) : (
        <div className="aadhaar-form-container">
          <h3 className="aadhaar-form-heading">fill details</h3>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="aadhar">id No:</label>
              <input
                type="number"
                id="aadhar"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="hindi-name">Full Name(hindi):</label>
              <input
                type="text"
                id="hindi-name"
                name="hindiName"
                value={formData.hindiName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                max="9999-12-31"
                min="1000-01-01"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressHindi">Address in Hindi (optional):</label>
              <textarea
                id="addressHindi"
                name="addressHindi"
                value={formData.addressHindi}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Photo:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-4"
              />
            </div>
            {error ? (
              <p
                style={{
                  textAlign: "center",
                  color: "red",
                  marginBottom: "5px",
                }}
              >
                This is not valid mobile number
              </p>
            ) : (
              ""
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AadhaarCardForm;
