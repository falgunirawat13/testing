import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const UploadDocuments = () => {
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
      {
        id: 3,
        fileType: 'Declaration of Impartiality of Interest',
        fileName: 'confidentiality_declaration.pdf',
      },
      {
        id: 4,
        fileType: 'Emplanment Letter',
        fileName: 'confidentiality_declaration.pdf',
      },
      // Add more static files as needed
    ];

    setFiles(staticFiles);
    setFilteredFiles(staticFiles);
  }, []);



  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-4">Upload Documents</h1>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-3">
  {/* Field: File Type */}
  <div className="flex flex-col flex-1 min-w-[200px] sm:max-w-[300px]">
    <label
      htmlFor="applyFor"
      className="font-medium text-black dark:text-white mb-1"
    >
      File Type
    </label>
    <Form.Select aria-label="Select Application Type" className="mt-2">
      <option>Select</option>
      <option value="Contract Agreement">Contract Agreement</option>
      <option value="Declaration of Confidentiality">
        Declaration of Confidentiality
      </option>
      <option value="Declaration of Impartiality of Interest">
        Declaration of Impartiality of Interest
      </option>
      <option value="Empanelment Letter">Emplanment Letter</option>
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
      className="mt-2"
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
      className="mt-2 flex justify-center rounded bg-[#152238] py-2 font-medium text-white hover:bg-opacity-90"
      type="submit"
    >
      Add to Selection
    </button>
  </div>
</div>


      <div className=" my-3">
        <div className="table-responsive">
          <Table hover className="table-striped table-borderless">
            <thead className="thead-light">
              <tr>
                <th className="py-3 px-4">File Type</th>
                <th className="py-3 px-4">File Name</th>
                <th className="py-3 px-4">View</th>
                <th className="py-3 px-4">Delete</th>
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
                  <td className="py-3 px-4">
                    <button
                     
                      className="text-red-500 underline"
                    >
                      Delete
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
          Send for Approval
        </button>
      </div>
    </>
  );
};

export default UploadDocuments;
