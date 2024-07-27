import React, { useState } from 'react';

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    questionnaireNo: 'IRQSIQU-012595',
    opportunity: '',
    clientName: '',
    zone: '',
    certificationType: '',
    surveillanceType: '',
    readinessDate: '',
    selectedSites: '',
    selectedSitesText: ''
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
      <div className="bg-white dark:bg-boxdark  rounded-lg w-full max-w-6xl relative" style={{ maxHeight: '90vh', height: '80%' }}>
        <div className="mb-4 flex justify-between items-center bg-black text-white p-4">
          <div>
            <h1 className="text-2xl font-semibold">Questionnaire Information</h1>
            <h5>Selected Opportunity: STS MARINE PTE LTD QMS 2024</h5>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md hover:bg-gray-700 transition-colors ml-auto"
          >
            X
          </button>
        </div>

        <div className="flex mt-6 overflow-auto text-black" style={{ maxHeight: 'calc(100% - 80px)',padding:"30px" }}>
          {/* General Information */}
          <div className="w-1/10 flex-none flex flex-col pr-4 mb-4 pb-4">
            <h2 className="text-lg font-semibold">General Information</h2>
            <div className="flex flex-col space-y-4 mt-2">
              <div>
                <label htmlFor="questionnaireNo" className="block text-sm font-medium text-gray-700">Questionnaire No</label>
                <input
                  id="questionnaireNo"
                  name="questionnaireNo"
                  value={formData.questionnaireNo}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-200  bg-gray border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:text-sm p-2"
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="selectSite" className="block text-sm font-medium text-gray-700">Select sites</label>
                <select
                  id="selectSite"
                  name="selectedSites"
                  value={formData.selectedSites}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-200 bg-gray border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:text-sm p-2"
                >
                  <option value="" disabled>Select a Site</option>
                  <option value="site1">Site 1</option>
                  <option value="site2">Site 2</option>
                  <option value="site3">Site 3</option>
                  <option value="site4">Site 4</option>
                </select>
              </div>
            </div>
          </div>

          {/* Certification Information */}
          <div className="w-9/10 flex flex-col ml-2">
            <h2 className="text-lg text-center font-semibold">Certification Information</h2>
            <div className="flex space-x-4 mt-2">
              <div className="flex-1">
                <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">Client Name</label>
                <input
                  id="clientName"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-200  bg-gray border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:text-sm p-2"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="zone" className="block text-sm font-medium text-gray-700">Zone</label>
                <select
                  id="zone"
                  name="zone"
                  value={formData.zone}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-200 bg-gray border-gray-300 bg-gray rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:text-sm p-2"
                >
                  <option value="" disabled>Select a Zone</option>
                  <option value="zone1">Zone 1</option>
                  <option value="zone2">Zone 2</option>
                  <option value="zone3">Zone 3</option>
                  <option value="zone4">Zone 4</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="certificationType" className="block text-sm font-medium text-gray-700">Certification Type</label>
                <input
                  id="certificationType"
                  name="certificationType"
                  value={formData.certificationType}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-200  bg-gray border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:text-sm p-2"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="surveillanceType" className="block text-sm font-medium text-gray-700">Surveillance Type</label>
                <input
                  id="surveillanceType"
                  name="surveillanceType"
                  value={formData.surveillanceType}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-200 bg-gray border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:text-sm p-2"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="readinessDate" className="block text-sm font-medium text-gray-700">Readiness Date</label>
                <input
                  id="readinessDate"
                  name="readinessDate"
                  value={formData.readinessDate}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-200 bg-gray border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:text-sm p-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="selectSiteText" className="block text-sm font-medium text-gray-700">Select Sites</label>
              <textarea
                id="selectSiteText"
                name="selectedSitesText"
                value={formData.selectedSitesText}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full bg-gray-200 bg-gray border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:text-sm p-2"
              />
            </div>
          </div>
        </div>
        <div>
        <button className="border-2 border-black px-4 py-2 rounded-md " style={{marginLeft:'30px'}}>
  Proceed to Fill Std Info
</button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 bg-white flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
