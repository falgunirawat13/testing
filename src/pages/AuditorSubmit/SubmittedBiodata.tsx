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
    workExperienceYears: '5',
    organizationName: 'Auditor Express',
    organizationBusinessLine: 'Auditing',
    tenure: '10',
    rolesResponsibilities: 'Chief Auditor - working fine',
    yearsInConsultancy: '4',
    consultancySector: 'sector',
    numberOfClients: '7',
    yearsInAuditing: '9',
    auditedSector: 'Sector',
    numberOfMandays: '8',
    numberOfTrainings: '19',
    yearsInTraining: '10',
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

      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">
        Work Experience
      </h3>
      <div className="bg-white rounded-lg p-4 border border-[#2D3748] gap-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#1A202C]">
          <div className="flex flex-col">
            <div className="font-bold text-black">
              No. of years in work experience:
            </div>
            <div>{submittedData.workExperienceYears}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">
              Name of the Organization:
            </div>
            <div>{submittedData.organizationName}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">
              Organization's line of business:
            </div>
            <div>{submittedData.organizationBusinessLine}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">Tenure:</div>
            <div>{submittedData.tenure}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">
              Role and Responsibiloties w.r.t. required competencies:
            </div>
            <div>{submittedData.rolesResponsibilities}</div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">
        Consultancy Experience
      </h3>
      <div className="bg-white rounded-lg p-4 border border-[#2D3748] mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#1A202C]">
          <div className="flex flex-col">
            <div className="font-bold text-black">
              No. of years in consultancy:
            </div>
            <div>{submittedData.yearsInConsultancy}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">
              Consultancy provided in sector:
            </div>
            <div>{submittedData.consultancySector}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">Number of Clients:</div>
            <div>{submittedData.numberOfClients}</div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">
        Auditing Experience
      </h3>
      <div className="bg-white rounded-lg p-4 border border-[#2D3748] mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#1A202C]">
          <div className="flex flex-col">
            <div className="font-bold text-black">
              No. of years in auditing:
            </div>
            <div>{submittedData.yearsInAuditing}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">Audited in sector:</div>
            <div>{submittedData.auditedSector}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black">Number of Mandays:</div>
            <div>{submittedData.numberOfMandays}</div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4">
        Training Experience:
      </h3>
      <div className="bg-white rounded-lg p-4 border border-[#2D3748] mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#1A202C]">
          <div className="flex flex-col">
            <div className="font-bold text-black">
              No. of years in training:
            </div>
            <div>{submittedData.yearsInTraining}</div>
          </div>

          <div className="flex flex-col">
            <div className="font-bold text-black">Number of Trainings:</div>
            <div>{submittedData.numberOfTrainings}</div>
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
