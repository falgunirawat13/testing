import React, { useState } from 'react';

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    enquiryLead: '',
    clientName: '',
    title: '',
    status: 'Open',
    closureDate: '',
    quotationAmount: '',
    considerForTraining: false,
    details: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
      <div className="bg-white  rounded shadow-lg w-full max-w-3xl">
      <div className="bg-black p-6 rounded-t  container-fluid">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Create New Opporunities</h2>
            <button onClick={onClose} className="text-white">X</button>
            </div>
            </div>
        <form onSubmit={handleSubmit} className='p-6 dark:bg-boxdark '>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="mb-2 text-sm  font-medium">Select Enquiry Lead</label>
              <select
                name="enquiryLead"
                value={formData.enquiryLead}
                onChange={handleChange}
                className="border p-2 rounded text-sm"
              >
                <option value="">Select</option>
                <option value="lead1">Lead 1</option>
                <option value="lead2">Lead 2</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Client Name</label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                className="border p-2 rounded text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border p-2 rounded text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border p-2 rounded text-sm"
              >
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Expected Closure Date</label>
              <input
                type="date"
                name="closureDate"
                value={formData.closureDate}
                onChange={handleChange}
                className="border p-2 rounded text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Estimated Quotation Amount</label>
              <input
                type="number"
                name="quotationAmount"
                value={formData.quotationAmount}
                onChange={handleChange}
                className="border p-2 rounded text-sm"
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="considerForTraining"
              checked={formData.considerForTraining}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm">Consider For Training</label>
          </div>
          <div className="mb-4">
            <label className="mb-2 text-sm font-medium">Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="border p-2 rounded w-full text-sm"
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500  px-4 py-2 rounded mr-2"
            >
              Close
            </button>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
