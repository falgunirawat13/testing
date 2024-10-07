import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
const RegistrationApproval = () => {
    const [files, setFiles] = useState([]); // State to hold file data
    const [filteredFiles, setFilteredFiles] = useState([]); // State for filtered file data
  
    useEffect(() => {
      const staticFiles = [
        {
          id: 1,
          fileType: 'Contract Agreement',
          fileName: 'contract_agreement.pdf',
        },
        {
          id: 2,
          fileType: 'Declaration of Confidentiality',
          fileName: 'confidentiality_declaration.pdf',
        },
    ];
  
      setFiles(staticFiles);
      setFilteredFiles(staticFiles);
    }, []);
  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-4">
        Registration Approvals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
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
      </div>
      <h2 className="text-xl font-medium text-black dark:text-white mt-4">
        Select EA/IAF Codes and Risk Category
      </h2>
      <div className="flex flex-wrap gap-4 mt-3 mb-4">
        {/* Field 1: Select EA/IAF Codes */}
        <div className="flex-1 min-w-[200px]">
          <label
            htmlFor="applyFor"
            className="font-medium text-black dark:text-white mb-1"
          >
            Select EA/IAF Codes
          </label>
          <Form.Select
            aria-label="Select Application Type"
            className="mt-2 w-full"
          >
            <option>Select</option>
            {/* Add other options here */}
          </Form.Select>
        </div>

        {/* Field 2: Risk Category */}
        <div className="flex-1 min-w-[200px]">
          <label
            htmlFor="standard"
            className="font-medium text-black dark:text-white mb-1"
          >
            Risk Category
          </label>
          <Form.Select aria-label="Select Standard" className="mt-2 w-full">
            <option>Select</option>
            {/* Add other options here */}
          </Form.Select>
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button
            className="mt-2 rounded bg-[#152238] py-2 px-4 font-medium text-white hover:bg-opacity-90"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
      <h2 className="text-xl font-medium text-black dark:text-white mt-4">
        Claimed NaceCodes
      </h2>
      <div className="my-3">
        <div className="overflow-x-auto">
          <Table
            hover
            className="table-striped table-borderless w-full min-w-[600px]"
          >
            <thead className="thead-light">
              <tr>
                <th className="py-3 px-2 text-left">Standard</th>
                <th className="py-3 px-2 text-left">Criteria</th>
                <th className="py-3 px-2 text-left">NaceCodes(Rev1)</th>
                <th className="py-3 px-2 text-left">NaceCodes(Rev2)</th>
                <th className="py-3 px-2 text-left">Rejection Remarks</th>
                <th className="py-3 px-2 text-left">Approve</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-2 text-left">HACCP HACCP:2015</td>
                <td className="py-3 px-2 text-left">Work Experience</td>
                <td className="py-3 px-2 text-left">O 93.01</td>
                <td className="py-3 px-2 text-left">81.22</td>
                <td className="py-3 px-2 text-left">
                  <input
                    type="text"
                    placeholder="Enter remarks"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </td>
                <td className="py-3 px-2 text-left">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <h2 className="text-xl font-medium text-black dark:text-white mt-4">
        Claimed Category Codes
      </h2>
      <div className="my-3">
        <div className="overflow-x-auto">
          <Table
            hover
            className="table-striped table-borderless w-full min-w-[600px]"
          >
            <thead className="thead-light">
              <tr>
                <th className="py-3 px-2 text-left">Standard</th>
                <th className="py-3 px-2 text-left">Criteria</th>
                <th className="py-3 px-2 text-left">Category</th>
                <th className="py-3 px-2 text-left">SubCategory</th>
                <th className="py-3 px-2 text-left">Rejection Remarks</th>
                <th className="py-3 px-2 text-left">Approve</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-2 text-left">HACCP HACCP:2015</td>
                <td className="py-3 px-2 text-left">Work Experience</td>
                <td className="py-3 px-2 text-left">C</td>
                <td className="py-3 px-2 text-left">CIV.6</td>
                <td className="py-3 px-2 text-left">
                  <input
                    type="text"
                    placeholder="Enter remarks"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </td>
                <td className="py-3 px-2 text-left">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <h2 className="text-xl font-medium text-black dark:text-white mt-4">
        Claimed EA/IAF Codes and Risk Categories
      </h2>
      <div className="my-3">
        <div className="overflow-x-auto">
          <Table
            hover
            className="table-striped table-borderless w-full min-w-[600px]"
          >
            <thead className="thead-light">
              <tr>
                <th className="py-3 px-2 text-left">Standard</th>
                <th className="py-3 px-2 text-left">Criteria</th>
                <th className="py-3 px-2 text-left">EA/IAF Code</th>
                <th className="py-3 px-2 text-left">Risk Categories</th>
                <th className="py-3 px-2 text-left">Rejection Remarks</th>
                <th className="py-3 px-2 text-left">Approve</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-2 text-left">HACCP HACCP:2015</td>
                <td className="py-3 px-2 text-left">Work Experience</td>
                <td className="py-3 px-2 text-left">2</td>
                <td className="py-3 px-2 text-left">Low</td>
                <td className="py-3 px-2 text-left">
                  <input
                    type="text"
                    placeholder="Enter remarks"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </td>
                <td className="py-3 px-2 text-left">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <h2 className="text-xl font-medium text-black dark:text-white mt-4">
        Supported Documents
      </h2>
      <div className=" my-3">
        <div className="table-responsive">
          <Table hover className="table-striped table-borderless">
            <thead className="thead-light">
              <tr>
                <th className="py-3 px-4">File Type</th>
                <th className="py-3 px-4">File Name</th>
                <th className="py-3 px-4">View</th>
               
              </tr>
            </thead>
            <tbody>
              {filteredFiles.map(file => (
                <tr key={file.id}>
                  <td className="py-3 px-4">{file.fileType}</td>
                  <td className="py-3 px-4">{file.fileName}</td>
                  <td className="py-3 px-4">
                    <button
                      
                      className="text-blue-500 underline"
                    >
                      View
                    </button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="flex flex-row justify-end items-end mt-2">
        <button
          className="mr-2 flex justify-center shadow-5 rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-2 dark:border-strokedark dark:text-white"
          type="submit"
        >
          Close
        </button>
        <button
          className="flex justify-center rounded bg-[#152238] py-2 px-2 font-medium text-gray hover:bg-opacity-90"
          type="submit"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default RegistrationApproval;
