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
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
      <div className="bg-white  w-full max-w-4xl relative" style={{ maxHeight: '90vh', height: 'auto' }}>
        <div className="mb-2 flex justify-between items-center  text-white p-4 " style={{ backgroundColor: '#152238' }}>
          <h1 className="text-2xl font-semibold">Lead Information</h1>
          <button onClick={onClose} className="px-2 py-1  hover:bg-gray-700 transition-colors">X</button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-auto text-black p-4">
          {/* Form Fields */}
          <div className="w-full flex flex-col space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="leadFor" className="block text-sm font-medium ">Lead For</label>
                <select id="leadFor" name="leadFor" value={formData.leadFor} onChange={handleChange} className="mt-1 block w-full bg-gray-200 border-gray-300 border   sm:text-sm p-2">
                  <option value="" disabled>Please select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="sourceOfLead" className="block text-sm font-medium ">Source Of Lead</label>
                <select id="sourceOfLead" name="sourceOfLead" value={formData.sourceOfLead} onChange={handleChange} className="mt-1 block w-full bg-gray-200 border-gray-300 border  sm:text-sm p-2">
                  <option value="" disabled>Please select</option>
                  <option value="source1">Source 1</option>
                  <option value="source2">Source 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="clientType" className="block text-sm font-medium ">Client Type</label>
                <select id="clientType" name="clientType" value={formData.clientType} onChange={handleChange} className="mt-1 block w-full bg-gray-200 border-gray-300 border  sm:text-sm p-2">
                  <option value="" disabled>Please select</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium ">Company Name</label>
                <select id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="mt-1 block w-full bg-gray-200 border-gray-300 border   sm:text-sm p-2">
                  <option value="" disabled>Please select</option>
                  <option value="company1">Company 1</option>
                  <option value="company2">Company 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium ">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full bg-gray-200 border-gray-300 border  sm:text-sm p-2" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium ">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full bg-gray-200 border-gray-300 border   sm:text-sm p-2" />
              </div>
              <div>
                <label htmlFor="phoneNo" className="block text-sm font-medium ">Phone No</label>
                <input type="text" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} className="mt-1 block w-full bg-gray-200 border-gray-300 border  sm:text-sm p-2" />
              </div>
              <div>
                <label htmlFor="mobileNo" className="block text-sm font-medium ">Mobile No</label>
                <input type="text" id="mobileNo" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="mt-1 block w-full bg-gray-200 border-gray-300 border   sm:text-sm p-2" />
              </div>
              <div>
                <label htmlFor="emailId" className="block text-sm font-medium ">Email Id</label>
                <input type="email" id="emailId" name="emailId" value={formData.emailId} onChange={handleChange} className="mt-1 block w-full bg-gray-200 border-gray-300 border   sm:text-sm p-2" />
              </div>
              <div>
                <label htmlFor="designation" className="block text-sm font-medium ">Designation</label>
                <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} className="mt-1 block w-full bg-gray-200 border-gray-300 border  sm:text-sm p-2" />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium">Location</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="mt-1 block w-full bg-gray-200 border-gray-300 border   sm:text-sm p-2" />
              </div>
              <div>
                <label htmlFor="remarks" className="block text-sm font-medium ">Remarks</label>
                <textarea id="remarks" name="remarks" value={formData.remarks} onChange={handleChange} rows={2} className="mt-1 block w-full bg-gray-200 border-gray-300 border  sm:text-sm p-2"></textarea>
              </div>
              <div>
                <label htmlFor="estimatedQuotation" className="block text-sm font-medium ">Estimated Quotation</label>
                <input type="text" id="estimatedQuotation" name="estimatedQuotation" value={formData.estimatedQuotation} onChange={handleChange} className="mt-1 block w-full bg-gray-200 border-gray-300 border   sm:text-sm p-2" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button type="button" onClick={onClose} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors mr-2">Close</button>
              <button type="submit" className="bg-black text-white px-3 py-1 rounded-md  transition-colors">Save changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadFormPopup;
