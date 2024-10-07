import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const CertificateInfo = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const staticUsers = [
      {
        id: 1,
        standard: 'ISO 9001',
        description: 'FSMS',
        accreditation: 'ANAB',
        certificateNo: '5678',
        generateCertificate: '',
      },
      {
        id: 2,
        standard: 'ISO 9001',
        description: 'FSMS',
        accreditation: 'ANAB',
        certificateNo: '5678',
        generateCertificate: '',
      },
      // Add more static users as needed
    ];

    setUsers(staticUsers);
    setFilteredUsers(staticUsers);
  }, []);

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">
        Certificate Information
      </h1>

      {/* Client Information Section */}
      <h2 className="font-bold text-black text-lg sm:text-xl dark:text-white mr-2 mt-3 mb-3">
        Client Information
      </h2>

      {/* Main Container for Fields */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-3 space-y-4 sm:space-y-0">
        <div className="flex flex-col w-full">
          <label
            htmlFor="fileNo"
            className="font-medium text-black dark:text-white mb-1"
          >
            File No.
          </label>
          <Form.Control
            id="fileNo"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="File No."
            placeholder="File No"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="client"
            className="font-medium text-black dark:text-white mb-1"
          >
            Client
          </label>
          <Form.Control
            id="client"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Client"
            placeholder="Client"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="zone"
            className="font-medium text-black dark:text-white mb-1"
          >
            Zone
          </label>
          <Form.Control
            id="zone"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Zone"
            placeholder="Zone"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-3 space-y-4 sm:space-y-0">
        <div className="flex flex-col w-full">
          <label
            htmlFor="phoneNo"
            className="font-medium text-black dark:text-white mb-1"
          >
            Phone No.
          </label>
          <Form.Control
            id="phoneNo"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Phone No."
            placeholder="Phone No"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="emailId"
            className="font-medium text-black dark:text-white mb-1"
          >
            Email ID
          </label>
          <Form.Control
            id="emailId"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Email ID"
            placeholder="Email ID"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="websiteUrl"
            className="font-medium text-black dark:text-white mb-1"
          >
            Website URL
          </label>
          <Form.Control
            id="websiteUrl"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Website URL"
            placeholder="Website URL"
          />
        </div>
      </div>

      <h2 className="font-bold text-black text-lg sm:text-xl dark:text-white mr-2 mt-3 mb-3">
        Audit Information
      </h2>
      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-3 space-y-4 sm:space-y-0">
        <div className="flex flex-col w-full">
          <label
            htmlFor="certificationType"
            className="font-medium text-black dark:text-white mb-1"
          >
            Certification Type
          </label>
          <Form.Control
            id="certificationType"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Certification Type"
            placeholder="Certification Type"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="auditType"
            className="font-medium text-black dark:text-white mb-1"
          >
            Audit Type
          </label>
          <Form.Control
            id="auditType"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Audit Type"
            placeholder="Audit Type"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="auditDate"
            className="font-medium text-black dark:text-white mb-1"
          >
            Audit Date
          </label>
          <Form.Control
            id="auditDate"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Audit Date"
            placeholder="Audit Date"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="recommendationDate"
            className="font-medium text-black dark:text-white mb-1"
          >
            Recommendation Date
          </label>
          <Form.Control
            id="recommendationDate"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Recommendation Date"
            placeholder="N/A"
          />
        </div>
      </div>

      <h2 className="font-bold text-black text-lg sm:text-xl dark:text-white mr-2 mt-3 mb-3">
        Standard Information
      </h2>
      <div className=" my-3">
        <div className="table-responsive">
          <Table hover className="table-striped table-borderless">
            <thead className="thead-light">
              <tr>
                <th className="py-2 px-4">Standard</th>
                <th className="py-2 px-4">Description</th>
                <th className="py-2 px-4">Accreditations</th>
                <th className="py-2 px-4">Certificate No.</th>
                <th className="py-2 px-4">Generate Certificates</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td className="py-2 px-4">{user.standard}</td>
                  <td className="py-2 px-4">{user.description}</td>
                  <td className="py-2 px-4">{user.accreditation}</td>
                  <td className="py-2 px-4">{user.certificateNo}</td>
                  <td className="py-2 px-4">{user.generateCertificate}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default CertificateInfo;
