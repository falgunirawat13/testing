import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CodeComponent = () => {
  // Static data
  const navigate = useNavigate();

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

  const [qualificationCriteria, setQualificationCriteria] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [standardOptions, setStandardOptions] = useState([]);
  const [formData, setFormData] = useState({
    qualificationCriteria: '',
    industry: '',
    standard: '',
    reviewalStatus: '', // Added this line
    reviewedBy: '', // Added this line
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          qualificationCriteriaResponse,
          industryResponse,
          standardResponse,
        ] = await Promise.all([
          axios.get(
            'http://localhost:8000/api/auditor/auditorQualificationCriteria',
          ),
          axios.get('http://localhost:8000/api/auditor/auditorIndustry'),
          axios.get('http://localhost:8000/api/auditor/auditorStandards'),
        ]);

        setQualificationCriteria(qualificationCriteriaResponse.data);
        setIndustry(industryResponse.data);
        setStandardOptions(standardResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-4">
        Review And Approval Of Registration
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {/* Field: Apply For */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Application Received For
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.applyFor}
          </div>
        </div>

        {/* Field: Name */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Auditor Name
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.name}
          </div>
        </div>

        {/* Field: Zone */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Zone
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.zone}
          </div>
        </div>

        {/* Field: Title */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Title
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.title}
          </div>
        </div>

        {/* Field: Birth Date */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Birth Date
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.birthDate}
          </div>
        </div>

        {/* Field: Nationality */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Nationality
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.nationality}
          </div>
        </div>

        {/* Field: Contact No */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Contact No
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.contactNo}
          </div>
        </div>

        {/* Field: Mobile No */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Mobile No
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.mobileNo}
          </div>
        </div>

        {/* Field: Fax No */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Fax No
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.faxNo}
          </div>
        </div>

        {/* Field: Email ID */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Email ID
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.emailId}
          </div>
        </div>

        {/* Field: Is part of ISSPL */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Is part of ISSPL?
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.isspl}
          </div>
        </div>

        {/* Field: Is part of IRS */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Is part of IRS?
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.irs}
          </div>
        </div>
      </div>

      {/* Field: Address */}
      <div className="mt-4">
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Address
          </label>
          <div className="p-2 border rounded-lg resize-none bg-white text-black">
            {submittedData.address}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-[#2D3748] mb-4 mt-4">
        Likely NaceCode/Category Code Suggestion Panel
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
        {/* Field: Qualification Criteria */}
        <div className="flex flex-col">
          <label
            htmlFor="qualificationCriteria"
            className="font-medium text-black dark:text-white mb-1"
          >
            Qualification Criteria
          </label>
          <Form.Select
            aria-label="Select Qualification Criteria"
            name="qualificationCriteria"
            value={formData.qualificationCriteria}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {qualificationCriteria.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </Form.Select>
        </div>

        {/* Field: Industry */}
        <div className="flex flex-col">
          <label
            htmlFor="industry"
            className="font-medium text-black dark:text-white mb-1"
          >
            Industry
          </label>
          <Form.Select
            aria-label="Select Industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {industry.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </Form.Select>
        </div>

        {/* Field: Standard */}
        <div className="flex flex-col">
          <label
            htmlFor="standard"
            className="font-medium text-black dark:text-white mb-1"
          >
            Standard
          </label>
          <Form.Select
            name="standard"
            value={formData.standard}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {standardOptions.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-[#2D3748] mb-4 mt-4">
        Claimed NaceCodes
      </h3>
      <Table responsive="md" hover bordered className="table-striped">
        <thead className="thead-light">
          <tr>
            <th className="p-2">Standard</th>
            <th className="p-2">Criteria</th>
            <th className="p-2">NaceCodes(Rev1)</th>
            <th className="p-2">NaceCodes(Rev2)</th>
            <th className="p-2">Rejection Remarks</th>
            <th className="p-2">Approve</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr>
            <td className="p-2">ISO 9001</td>
            <td className="p-2">Quality Management</td>
            <td className="p-2">1234</td>
            <td className="p-2">5678</td>
            {/* Rejection Remarks with text input */}
            <td className="p-2">
              <input
                type="text"
                placeholder="Enter remarks"
                className="form-control"
                name="rejectionRemarks1"
              />
            </td>
            {/* Approve with checkbox */}
            <td className="p-2 text-center">
              <input type="checkbox" name="approve1" />
            </td>
          </tr>

          {/* Additional rows can follow the same structure */}
          <tr>
            <td className="p-2">ISO 14001</td>
            <td className="p-2">Environmental Management</td>
            <td className="p-2">9100</td>
            <td className="p-2">9101</td>
            <td className="p-2">
              <input
                type="text"
                placeholder="Enter remarks"
                className="form-control"
                name="rejectionRemarks2"
              />
            </td>
            <td className="p-2 text-center">
              <input type="checkbox" name="approve2" />
            </td>
          </tr>
        </tbody>
      </Table>

      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4 mt-4">
        Supported Documents
      </h3>
      <div className="bg-white shadow-md rounded-lg p-4 border border-[#2D3748] overflow-x-auto">
        <Table hover className="table-striped min-w-full">
          <thead className="bg-[#F7FAFC] text-[#1A202C]">
            <tr>
              <th className="py-2 px-4 whitespace-nowrap">File Type</th>
              <th className="py-3 px-4 whitespace-nowrap">File Name</th>
              <th className="py-2 px-4 whitespace-nowrap">View</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.documents.map((doc, index) => (
              <tr key={index}>
                <td className="py-2 px-4">{doc.fileType}</td>
                <td className="py-3 px-4">{doc.fileName}</td>
                <td className="py-2 px-4">
                  <Button variant="link" className="text-[#3182CE]">
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <h3 className="text-2xl font-semibold text-[#2D3748] mb-4 mt-4">
        Support Documents Review
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
        {/* Field: Reviewal Status */}
        <div className="flex flex-col">
          <label
            htmlFor="reviewalStatus"
            className="font-medium text-black dark:text-white mb-1"
          >
            Reviewal Status
          </label>
          <Form.Select
            aria-label="Select Reviewal Status"
            name="reviewalStatus"
            value={formData.reviewalStatus}
            onChange={handleChange}
          >
            <option value="">Please Select</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Rejected">Rejected</option>
          </Form.Select>
        </div>

        {/* Field: Reviewed By */}
        <div className="flex flex-col">
          <label
            htmlFor="reviewedBy"
            className="font-medium text-black dark:text-white mb-1"
          >
            Reviewed By
          </label>
          <Form.Select
            aria-label="Select Reviewed By"
            name="reviewedBy"
            value={formData.reviewedBy}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {/* Add options for reviewers here */}
            <option value="Reviewer1">Reviewer 1</option>
            <option value="Reviewer2">Reviewer 2</option>
          </Form.Select>
        </div>
      </div>

      <div className="flex flex-col mb-4 mt-4">
        <label
          htmlFor="reviewerRemarks"
          className="font-medium text-black dark:text-white mb-1"
        >
          Reviewer Remarks
        </label>
        <textarea
          name="reviewerRemarks"
          value={formData.reviewerRemarks}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md"
          rows="2"
          placeholder="Remarks "
        ></textarea>
      </div>

      <div className="flex justify-end space-x-3 p-4">
        <Button
          className="bg-black text-white px-6 py-2 rounded-md shadow-md"
          type="button"
        >
          Edit
        </Button>
        <Button
          className="bg-white text-black border-black border px-6 py-2 rounded-md shadow-md"
          type="button"
          onClick={() => navigate('/validation')}
        >
          Close
        </Button>
      </div>
    </>
  );
};

export default CodeComponent;
