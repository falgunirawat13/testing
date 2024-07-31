import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LeadFormPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    leadFor: '',
    sourceOfLead: '',
    clientType: '',
    companyName: '',
    firstName: '',
    lastName: '',
    phoneNo: '',
    mobileNo: '',
    emailId: '',
    designation: '',
    location: '',
    remarks: '',
    estimatedQuotation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="d-flex align-items-center justify-content-center position-fixed top-0 bottom-0 start-0 end-0 bg-dark bg-opacity-50 overflow-auto">
      <div className="bg-white rounded-lg p-4 w-100 mw-100" style={{ maxWidth: '800px', maxHeight: '90vh', height: '80%' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h4 mb-0">Lead Information</h1>
          <button onClick={onClose} className="btn btn-close"></button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-auto" style={{ maxHeight: 'calc(100% - 80px)' }}>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="leadFor" className="form-label">Lead For</label>
              <select id="leadFor" name="leadFor" value={formData.leadFor} onChange={handleChange} className="form-select">
                <option value="" disabled>Please select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="sourceOfLead" className="form-label">Source Of Lead</label>
              <select id="sourceOfLead" name="sourceOfLead" value={formData.sourceOfLead} onChange={handleChange} className="form-select">
                <option value="" disabled>Please select</option>
                <option value="source1">Source 1</option>
                <option value="source2">Source 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="clientType" className="form-label">Client Type</label>
              <select id="clientType" name="clientType" value={formData.clientType} onChange={handleChange} className="form-select">
                <option value="" disabled>Please select</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="companyName" className="form-label">Company Name</label>
              <select id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="form-select">
                <option value="" disabled>Please select</option>
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" />
            </div>
            <div className="col-md-4">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="phoneNo" className="form-label">Phone No</label>
              <input type="text" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} className="form-control" />
            </div>
            <div className="col-md-4">
              <label htmlFor="mobileNo" className="form-label">Mobile No</label>
              <input type="text" id="mobileNo" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="form-control" />
            </div>
            <div className="col-md-4">
              <label htmlFor="emailId" className="form-label">Email Id</label>
              <input type="email" id="emailId" name="emailId" value={formData.emailId} onChange={handleChange} className="form-control" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="designation" className="form-label">Designation</label>
              <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} className="form-control" />
            </div>
            <div className="col-md-4">
              <label htmlFor="location" className="form-label">Location</label>
              <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="form-control" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="remarks" className="form-label">Remarks</label>
            <textarea id="remarks" name="remarks" value={formData.remarks} onChange={handleChange} className="form-control"></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="estimatedQuotation" className="form-label">Estimated Quotation</label>
            <input type="text" id="estimatedQuotation" name="estimatedQuotation" value={formData.estimatedQuotation} onChange={handleChange} className="form-control" />
          </div>

          <div className="d-flex justify-content-end">
            <button type="button" onClick={onClose} className="btn btn-secondary me-2">Close</button>
            <button type="submit" className="btn btn-primary">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadFormPopup;
