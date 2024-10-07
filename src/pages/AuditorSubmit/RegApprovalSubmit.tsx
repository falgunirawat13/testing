import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const SubmittedRegistrationData = () => {
  // Static data representing submitted values
  const [files, setFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);

  useEffect(() => {
    const staticFiles = [
      { id: 1, fileType: 'Contract Agreement', fileName: 'contract_agreement.pdf' },
      { id: 2, fileType: 'Declaration of Confidentiality', fileName: 'confidentiality_declaration.pdf' },
    ];
    
    setFilteredFiles(staticFiles);
  }, []);

  const staticData = {
    qualificationCriteria: 'Select',
    industry: 'Select',
    standard: 'ISO 9001',
    eaIafCodes: '2',
    riskCategory: 'Low',
    naceCodesRev1: 'O 93.01',
    naceCodesRev2: '81.22',
    category: 'C',
    subCategory: 'CIV.6',
    rejectionRemarks: 'No issues',
    files: filteredFiles
  };
  const [remarks, setRemarks] = useState({
    naceCodes: "Remarks for NaceCodes",
    categoryCodes: "Remarks for Category Codes",
    eaIafCodes: "Remarks for EA/IAF Codes",
  });


  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-4">
        Registration Approval View
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        {/* Qualification Criteria, Industry, Standard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="font-semibold text-black mb-1">Qualification Criteria</label>
            <div className="text-black">{staticData.qualificationCriteria}</div>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-black mb-1">Industry</label>
            <div className="text-black">{staticData.industry}</div>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-black mb-1">Standard</label>
            <div className="text-black">{staticData.standard}</div>
          </div>
        </div>

        {/* EA/IAF Codes and Risk Category */}
        <h2 className="text-xl font-medium text-black mt-4 mb-2">
          EA/IAF Codes and Risk Category
        </h2>
        <hr className="mb-4 font-bold border border-black" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="font-semibold text-black mb-1">EA/IAF Code</label>
            <div className="text-black">{staticData.eaIafCodes}</div>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-black mb-1">Risk Category</label>
            <div className="text-black">{staticData.riskCategory}</div>
          </div>
        </div>
        </div>
        {/* Claimed Nace Codes */}

        <div className="mt-5 bg-gray-50 min-h-screen">
  {/* Flex Container for Cards */}
  <div className="flex flex-wrap -mx-3 mb-6">
    
    {/* Claimed Nace Codes Card */}
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <div className="bg-white p-4 rounded-lg shadow-md h-full">
        <h2 className="text-xl font-semibold text-black mb-4">
          Claimed Nace Codes
        </h2>
        <div className="space-y-4">
          <p className="text-black"><strong>Standard:</strong> HACCP HACCP:2015</p>
          <p className="text-black"><strong>Criteria:</strong> Work Experience</p>
          <p className="text-black"><strong>NaceCodes (Rev1):</strong> O 93.01</p>
          <p className="text-black"><strong>NaceCodes (Rev2):</strong> 81.22</p>
          <p className="text-black">
            <strong>Rejection Remarks:</strong> Missing details
          </p>
          <p className="text-black">
            <strong>Approve:</strong> 
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500 ml-2" checked />
          </p>
        </div>
      </div>
    </div>

    {/* Claimed Category Codes Card */}
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <div className="bg-white p-4 rounded-lg shadow-md h-full">
        <h2 className="text-xl font-semibold text-black mb-4">
          Claimed Category Codes
        </h2>
        <div className="space-y-4">
          <p className="text-black"><strong>Standard:</strong> HACCP HACCP:2015</p>
          <p className="text-black"><strong>Criteria:</strong> Work Experience</p>
          <p className="text-black"><strong>Category:</strong> C</p>
          <p className="text-black"><strong>SubCategory:</strong> CIV.6</p>
          <p className="text-black">
            <strong>Rejection Remarks:</strong> Missing details
          </p>
          <p className="text-black">
            <strong>Approve:</strong> 
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500 ml-2" checked />
          </p>
        </div>
      </div>
    </div>

    {/* Claimed EA/IAF Codes and Risk Categories Card */}
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <div className="bg-white p-4 rounded-lg shadow-md h-full">
        <h2 className="text-xl font-semibold text-black mb-4">
          Claimed EA/IAF Codes and Risk Categories
        </h2>
        <div className="space-y-4">
          <p className="text-black"><strong>Standard:</strong> HACCP HACCP:2015</p>
          <p className="text-black"><strong>Criteria:</strong> Work Experience</p>
          <p className="text-black"><strong>EA/IAF Code:</strong> 2</p>
          <p className="text-black"><strong>Risk Categories:</strong> Low</p>
          <p className="text-black">
            <strong>Rejection Remarks:</strong> Missing details
          </p>
          <p className="text-black">
            <strong>Approve:</strong> 
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500 ml-2" checked />
          </p>
        </div>
      </div>
    </div>

  </div>

  {/* Supported Documents */}
  <section className="my-6">
    <h2 className="text-2xl font-semibold text-black mb-4">
      Supported Documents
    </h2>
    <div className="bg-white p-4 rounded-lg shadow-md">
      {filteredFiles.map(file => (
        <div key={file.id} className="flex items-center justify-between py-2 border-b border-gray-200">
          <div>
            <p className="text-black"><strong>File Type:</strong> {file.fileType}</p>
            <p className="text-black"><strong>File Name:</strong> {file.fileName}</p>
          </div>
          <button className="text-blue-500 hover:underline">View</button>
        </div>
      ))}
    </div>
  </section>

  
</div>



    </>
  );
};

export default SubmittedRegistrationData;
