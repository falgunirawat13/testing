import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const SubmittedData = () => {
  // Static data
  const submittedData = {
    applyFor: 'Internal Audit',
    standard: 'ISO 9001',
    zone: 'North',
    title: 'Mr',
    name: 'John Doe',
    birthDate: '1985-09-15',
    nationality: 'American',
    contactNo: '123-456-7890',
    mobileNo: '987-654-3210',
    faxNo: '555-555-5555',
    emailId: 'john.doe@example.com',
    address: '123 Audit Street, Compliance City, USA',
    isspl: 'Yes',
    irs: 'No',
    documents: [
      { fileType: 'PDF', fileName: 'audit_report.pdf' },
      { fileType: 'DOCX', fileName: 'compliance_doc.docx' },
    ],
  };

  return (
    <>
      <h2 className="text-4xl font-semibold text-[#1A202C] mb-6">
        Biodata Information View
      </h2>

      {/* Grid for Basic and Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Basic Information */}
        <div className="bg-white rounded-lg p-4 border border-[#2D3748]">
          <h3 className="text-2xl font-semibold text-[#2D3748] mb-2">
            Basic Information
          </h3>
          <hr className="mb-4 font-bold border border-black" />
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 text-[#1A202C] md:grid-cols-2">
            <div className="flex flex-col">
              <div className="font-bold text-black">Apply For:</div>
              <div>{submittedData.applyFor}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Standard:</div>
              <div>{submittedData.standard}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Zone:</div>
              <div>{submittedData.zone}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Title:</div>
              <div>{submittedData.title}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Name:</div>
              <div>{submittedData.name}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Birth Date:</div>
              <div>{submittedData.birthDate}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Is part of ISSPL?</div>
              <div>{submittedData.isspl}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Is part of IRS?</div>
              <div>{submittedData.irs}</div>
            </div>
            <div className="col-span-2">
              <div className="font-bold text-black">Address:</div>
              <div>{submittedData.address}</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg p-4 border border-[#2D3748]">
          <h3 className="text-2xl font-semibold text-[#2D3748] mb-2">
            Contact Information
          </h3>
          <hr className="mb-4 font-bold border border-black" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#1A202C]">
            <div className="flex flex-col">
              <div className="font-bold text-black">Nationality:</div>
              <div>{submittedData.nationality}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Contact No.:</div>
              <div>{submittedData.contactNo}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Mobile No.:</div>
              <div>{submittedData.mobileNo}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Fax No.:</div>
              <div>{submittedData.faxNo}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black">Email ID:</div>
              <div>{submittedData.emailId}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Documents */}
      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">
        Uploaded Documents
      </h3>
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


      {/* Action Buttons */}
      <div className="flex flex-row justify-end items-end mt-6 space-x-4">
      
        <Button
          variant="primary"
          className="bg-[#152238] px-6 py-2 rounded-lg text-white"
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default SubmittedData;
