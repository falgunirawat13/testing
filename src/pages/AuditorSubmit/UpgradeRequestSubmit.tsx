import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
const SubmittedData = () => {
  // Static data to display
  const submittedData = {
    auditor: "John Doe",
    applicationType: "Internal Audit",
    fileUploads: [
      {
        fileType: "Contract Agreement",
        fileName: "Contract_Agreement.pdf"
      },
     
    ],
    industry: "Compliance Audit",
    standard: "ISO 9001",
    qualificationCriteria: "Criteria A",
    existingNaceCodes: [
      {
        standard: "ISO 9001",
        naceRev1: "O93.01",
        naceRev2: "81.22"
      }
    ],
    existingCategoryCodes: [
      {
        standard: "HACCP HACCP:2015",
        category: "C",
        subCategory: "CIV.6"
      }
    ],
    existingEaiAfCodesAndRisk: [
      {
        standard: "ISO 27001",
        eaiAfCode: "EA7",
        riskCategory: "High"
      }
    ],
    selectedEaiIafCodes: "EA1",
    selectedRiskCategory: "High",
    documents: [
        { fileType: 'PDF', fileName: 'audit_report.pdf' },
        { fileType: 'DOCX', fileName: 'compliance_doc.docx' },
      ],
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-black mb-4">Request Information View</h1>

      {/* Combined Card for Auditor and Application Type */}
      <div className="border p-4 rounded  bg-white mb-4">
        {/* Auditor and Application Type */}
        <div className="mb-4">
          <h2 className="text-lg text-black mb-2 font-semibold">Auditor and Application Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-black">Auditor:</p>
              <p className="text-black">{submittedData.auditor}</p>
            </div>
            <div>
              <p className="font-semibold text-black">Application Type:</p>
              <p className="text-black">{submittedData.applicationType}</p>
            </div>
          </div>
        </div>

        {/* File Uploads */}
       
        <div className="bg-white rounded ">
        <h2 className="text-lg font-semibold text-black mb-2">File Uploads:</h2>
       
        <div className="flex flex-wrap gap-4">
          {submittedData.fileUploads.map((file, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-2  rounded bg-gray-100 flex-1">
              <div className="flex-1">
                <p className="font-semibold text-black">File Type:</p>
                <p className=" text-black">{file.fileType}</p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-black">File Name:</p>
                <p className=" text-black">{file.fileName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Combined Card for Industry, Standard, Qualification Criteria */}
      <div className="border p-4 rounded bg-white">
        {/* Industry, Standard, Qualification Criteria */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-lg font-semibold text-black">Industry:</p>
            <p className="text-lg text-black">{submittedData.industry}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-black">Standard:</p>
            <p className="text-lg text-black">{submittedData.standard}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-black">Qualification Criteria:</p>
            <p className="text-lg text-black">{submittedData.qualificationCriteria}</p>
          </div>
        </div>
        <hr className="mb-4 font-bold border border-black" />
        {/* Existing NaceCodes, Existing Category Codes, Existing EA/IAF Codes and Risk Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Existing NaceCodes */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-2">Existing NaceCodes</h2>
            <div className="space-y-4">
              {submittedData.existingNaceCodes.map((code, index) => (
                <div key={index}>
                  <p className="text-black"><strong>Standard:</strong> {code.standard}</p>
                  <p className="text-black"><strong>NaceCodes (Rev1):</strong> {code.naceRev1}</p>
                  <p className="text-black"><strong>NaceCodes (Rev2):</strong> {code.naceRev2}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Existing Category Codes */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-2">Existing Category Codes</h2>
            <div className="space-y-4">
              {submittedData.existingCategoryCodes.map((code, index) => (
                <div key={index}>
                  <p className="text-black"><strong>Standard:</strong> {code.standard}</p>
                  <p className="text-black"><strong>Category:</strong> {code.category}</p>
                  <p className="text-black"><strong>SubCategory:</strong> {code.subCategory}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Existing EA/IAF Codes and Risk Categories */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-2">Existing EA/IAF Codes and Risk Categories</h2>
            <div className="space-y-4">
              {submittedData.existingEaiAfCodesAndRisk.map((item, index) => (
                <div key={index}>
                  <p className="text-black"><strong>Standard:</strong> {item.standard}</p>
                  <p className="text-black"><strong>EA/IAF Code:</strong> {item.eaiAfCode}</p>
                  <p className="text-black"><strong>Risk Categories:</strong> {item.riskCategory}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="mb-4 font-bold border border-black" />
        {/* Selected EA/IAF Codes and Risk Category */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-black mb-2">Selected Codes and Risk</h2>
         
            <div>
              <p className="text-black"><strong>Selected EA/IAF Codes:</strong> {submittedData.selectedEaiIafCodes}</p>
            </div>
            <div>
              <p className="text-black"><strong>Selected Risk Category:</strong> {submittedData.selectedRiskCategory}</p>
            </div>
          
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-[#2D3748] mt-4">Uploaded Documents</h3>
      <div className="bg-white shadow-md rounded-lg p-4 border border-[#2D3748] overflow-x-auto">
  <Table hover className="table-striped min-w-full">
    <thead className="bg-[#F7FAFC] text-[#1A202C]">
      <tr>
        <th className="py-2 px-4 whitespace-nowrap">File Type</th>
        <th className="py-2 px-4 whitespace-nowrap">File Name</th>
        <th className="py-2 px-4 whitespace-nowrap">View</th>
        <th className="py-2 px-4 whitespace-nowrap">Delete</th>
      </tr>
    </thead>
    <tbody>
      {submittedData.documents.map((doc, index) => (
        <tr key={index}>
          <td className="py-2 px-4 text-[#4A5568]">{doc.fileType}</td>
          <td className="py-2 px-4 text-[#4A5568]">{doc.fileName}</td>
          <td className="py-2 px-4">
            <Button variant="link" className="text-[#3182CE]">
              View
            </Button>
          </td>
          <td className="py-2 px-4">
            <Button variant="link" className="text-[#E53E3E]">
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
</div>
    </div>
  );
};

export default SubmittedData;
