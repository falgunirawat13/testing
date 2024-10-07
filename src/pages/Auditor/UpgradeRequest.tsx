import React from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import UploadDocuments from './UploadDocuments';

const UpgradeRequest = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-4">
        Upgrade Request Information
      </h1>
      <div className="audit-plan-container flex flex-col mt-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
          {/* Auditor Selection Section */}
          <div className="flex flex-col mb-4 sm:mb-0 w-full sm:w-[600px]">
            <h3 className="font-medium text-black dark:text-white">
              Select Auditor
            </h3>
            {/* Dropdown for Select Auditor */}
            <Form.Select aria-label="Select Auditor" className="mt-2 ">
              <option>Select Auditor</option>
              {/* Uncomment the following options as needed */}
              {/* <option value="auditor1">John Doe</option> */}
            </Form.Select>
          </div>

          {/* Apply For Section */}
          <div className="flex flex-col w-full sm:w-[300px]">
            <h3 className="font-medium text-black dark:text-white">
              Apply For
            </h3>
            {/* Dropdown for Apply For */}
            <Form.Select
              aria-label="Select Application Type"
              className="mt-2 w-full"
            >
              <option>Select</option>
              {/* Uncomment the following options as needed */}
              {/* <option value="type1">Internal Audit</option> */}
            </Form.Select>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-medium text-black dark:text-white ">
        Upload Documents
      </h2>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-3">
        {/* Field: File Type */}
        <div className="flex flex-col flex-1 min-w-[200px] sm:max-w-[300px]">
          <label
            htmlFor="applyFor"
            className="font-medium text-black dark:text-white mb-1"
          >
            File Type
          </label>
          <Form.Select
            aria-label="Select Application Type"
            className="mt-2 w-full"
          >
            <option>Select</option>
            <option value="Contract Agreement">Contract Agreement</option>
            <option value="Declaration of Confidentiality">
              Declaration of Confidentiality
            </option>
            <option value="Declaration of Impartiality of Interest">
              Declaration of Impartiality of Interest
            </option>
            <option value="Empanelment Letter">Empanelment Letter</option>
          </Form.Select>
        </div>

        {/* File Upload Field */}
        <div className="flex flex-col flex-1 min-w-[200px] sm:max-w-[300px]">
          <label
            htmlFor="uploadFile"
            className="font-medium text-black dark:text-white mb-1"
          >
            Upload File
          </label>
          <Form.Control
            type="file"
            id="uploadFile"
            className="mt-2 w-full"
            aria-label="Upload File"
          />
        </div>

        {/* Action Button */}
        <div className="flex flex-col flex-1 min-w-[200px] sm:max-w-[200px]">
          <label
            htmlFor="uploadFile"
            className="font-medium text-black dark:text-white mb-1"
          >
            Action
          </label>
          <button
            className="mt-2 flex justify-center rounded bg-[#152238] py-2 font-medium text-white hover:bg-opacity-90 w-full"
            type="submit"
          >
            Add to Selection
          </button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="my-3">
        <div className="table-responsive">
          <Table hover className="table-striped table-borderless w-full">
            <thead className="thead-light">
              <tr>
                <th className="py-3 px-4">File Type</th>
                <th className="py-3 px-4">File Name</th>
                <th className="py-3 px-4">View</th>
                <th className="py-3 px-4">Delete</th>
              </tr>
            </thead>
            {/* Body of the table with data (to be filled with appropriate data rows) */}
          </Table>
        </div>
      </div>
      <h2 className="text-xl font-medium text-black dark:text-white mt-4">
        Likely NaceCode/Category Code Suggestions Panel
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
        <div className="flex flex-col">
          <label
            htmlFor="applyFor"
            className="font-medium text-black dark:text-white mb-1"
          >
            Industry
          </label>
          <Form.Select aria-label="Select Application Type" className="mt-2">
            <option>Select</option>
            {/* <option value="Compliance Audit">Compliance Audit</option> */}
          </Form.Select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="standard"
            className="font-medium text-black dark:text-white mb-1"
          >
            Standard
          </label>
          <Form.Select aria-label="Select Standard" className="mt-2">
            <option>Select</option>
            <option value="ISO 9001">ISO 9001</option>
            <option value="ISO 14001">ISO 14001</option>
            <option value="ISO 27001">ISO 27001</option>
          </Form.Select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor=""
            className="font-medium text-black dark:text-white mb-1"
          >
            Qualification Criteria
          </label>
          <Form.Select aria-label="Select Zone" className="mt-2">
            <option>Select</option>
          </Form.Select>
        </div>
      </div>
      <div>
      {/* Table for Existing NaceCodes */}
      <h2 className="text-xl font-medium text-black dark:text-white mt-4">
        Existing NaceCodes
      </h2>
      <div className="my-3">
        <div className="table-responsive">
          <Table hover className="table-striped table-borderless w-full table-fixed">
            <thead className="thead-light">
              <tr>
                <th className="py-3 px-2 w-1/3 text-left">Standard</th>
                <th className="py-3 px-2 w-1/3 text-left">NaceCodes (Rev1)</th>
                <th className="py-3 px-2 w-1/3 text-left">NaceCodes (Rev2)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-2 w-1/3 text-left">ISO 9001</td>
                <td className="py-3 px-2 w-1/3 text-left">O93.01</td>
                <td className="py-3 px-2 w-1/3 text-left">81.22</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      {/* Table for Existing Category Codes */}
      <h2 className="text-xl font-medium text-black dark:text-white mt-4">
        Existing Category Codes
      </h2>
      <div className="my-3">
        <div className="table-responsive">
          <Table hover className="table-striped table-borderless w-full table-fixed">
            <thead className="thead-light">
              <tr>
                <th className="py-3 px-2 w-1/3 text-left">Standard</th>
                <th className="py-3 px-2 w-1/3 text-left">Category</th>
                <th className="py-3 px-2 w-1/3 text-left">SubCategory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-2 w-1/3 text-left">HACCP HACCP:2015</td>
                <td className="py-3 px-2 w-1/3 text-left">C</td>
                <td className="py-3 px-2 w-1/3 text-left">CIV.6</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      {/* Table for Existing EA/IAF Codes and Risk Categories */}
      <h2 className="text-xl font-medium text-black dark:text-white mt-4">
        Existing EA/IAF Codes and Risk Categories
      </h2>
      <div className="my-3">
        <div className="table-responsive">
          <Table hover className="table-striped table-borderless w-full table-fixed">
            <thead className="thead-light">
              <tr>
                <th className="py-3 px-2 w-1/3 text-left">Standard</th>
                <th className="py-3 px-2 w-1/3 text-left">EA/IAF Code</th>
                <th className="py-3 px-2 w-1/3 text-left">Risk Categories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-2 w-1/3 text-left">ISO 27001</td>
                <td className="py-3 px-2 w-1/3 text-left">EA7</td>
                <td className="py-3 px-2 w-1/3 text-left">High</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    <h2 className="text-xl font-medium text-black dark:text-white mt-4">
        Select EA/IAF Codes and Risk Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3 mb-4">
        <div className="flex flex-col">
          <label
            htmlFor="applyFor"
            className="font-medium text-black dark:text-white mb-1"
          >
            Select EA/IAF Codes
          </label>
          <Form.Select aria-label="Select Application Type" className="mt-2">
            <option>Select</option>
            {/* <option value="Compliance Audit">Compliance Audit</option> */}
          </Form.Select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="standard"
            className="font-medium text-black dark:text-white mb-1"
          >
           Risk Category
          </label>
          <Form.Select aria-label="Select Standard" className="mt-2">
            <option>Select</option>
        </Form.Select>
        </div>

       
      </div>
      <UploadDocuments/>
    </>
  );
};

export default UpgradeRequest;
