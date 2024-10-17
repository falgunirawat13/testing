import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Col, Form } from 'react-bootstrap';

const Upgradation3 = () => {
  const auditorInfo = {
    regNo: 'P/WZ/1086',
    auditorName: 'XYZ ABC',
  };

  const naceCodeData = [
    { standard: 'ISO 45001:2018', naceRev1: 'A01', naceRev2: 'B02' },
    { standard: 'ISO 45001:2018', naceRev1: 'C03', naceRev2: 'D04' },
    { standard: 'ISO 45001:2018', naceRev1: 'E05', naceRev2: 'F06' },
  ];

  const categoryData = [
    {
      standard: 'ISO 45001:2018',
      category: 'Quality',
      subCategory: 'Manufacturing',
    },
    {
      standard: 'ISO 45001:2018',
      category: 'Environment',
      subCategory: 'Energy',
    },
    {
      standard: 'ISO 45001:2018',
      category: 'Food Safety',
      subCategory: 'Agriculture',
    },
  ];

  const eafIafData = [
    { standard: 'ISO 45001:2018', eafCode: '31', riskCategory: 'Low' },
    { standard: 'ISO 45001:2018', eafCode: '32', riskCategory: 'Medium' },
    { standard: 'ISO 45001:2018', eafCode: '33', riskCategory: 'High' },
  ];

  const [qualificationCriteria, setQualificationCriteria] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [standardOptions, setStandardOptions] = useState([]);
  const [formData, setFormData] = useState({
    qualificationCriteria: '',
    industry: '',
    standard: '',
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

  const requestInfo = {
    requestFor: 'Grade Upgrade',
    scheme: 'ISO 9001:2015',
    zone: 'West Zone',
    applicationFor: 'Auditor',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const standards = [
    { standard: 'ISO 45001:2018', role: 'Provisional Auditor' },
    { standard: 'ISO 21001:2018', role: 'Provisional Auditor' },
    { standard: 'ISO 14001:2015', role: 'Provisional Auditor' },
    { standard: 'ISO 9001:2015', role: 'Provisional Auditor' },
    { standard: 'AYUSH MARK', role: 'Provisional Auditor' },
    { standard: 'ISO 22000:2018', role: 'Provisional Auditor' },
    { standard: 'ISO 50001:2018', role: 'Provisional Auditor' },
  ];

  // Sample data for submitted documents
  const submittedData = {
    documents: [
      { fileType: 'PDF', fileName: 'Audit_Report_01.pdf' },
      { fileType: 'DOC', fileName: 'Standards_Document.docx' },
      { fileType: 'XLS', fileName: 'Audit_Results.xlsx' },
    ],
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-black mb-2 mt-4">
        Upgradation Request Information
      </h1>
      {/* Auditor Information and Request Information side by side */}
      <div className="p-4">
        <Row>
          {/* Auditor Information */}
          <Col md={5}>
            <div className="p-2">
              <h4 className="text-xl font-bold text-black mb-4">
                Auditor Information
              </h4>
              <Table bordered hover>
                <thead className="bg-light">
                  <tr>
                    <th className="p-2 text-center align-middle">
                      Registration No
                    </th>
                    <th className="p-2 text-center align-middle">
                      Auditor Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 text-center align-middle">
                      {auditorInfo.regNo}
                    </td>
                    <td className="p-2 text-center align-middle">
                      {auditorInfo.auditorName}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>

          {/* Request Information */}
          <Col md={7}>
            <div className="p-2">
              <h4 className="text-xl font-bold text-black mb-4">
                Request Information
              </h4>
              <Table bordered hover>
                <thead className="bg-light">
                  <tr>
                    <th className="p-2 text-center align-middle">
                      Request For
                    </th>
                    <th className="p-2 text-center align-middle">Scheme</th>
                    <th className="p-2 text-center align-middle">Zone</th>
                    <th className="p-2 text-center align-middle">
                      Application For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 text-center align-middle">
                      {requestInfo.requestFor}
                    </td>
                    <td className="p-2 text-center align-middle">
                      {requestInfo.scheme}
                    </td>
                    <td className="p-2 text-center align-middle">
                      {requestInfo.zone}
                    </td>
                    <td className="p-2 text-center align-middle">
                      {requestInfo.applicationFor}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>

        {/* Standard-wise Auditor Roles Table */}
        <h4 className="text-xl font-bold text-black mb-4">
          Standard-wise Auditor Roles
        </h4>
        <Table bordered>
          <thead>
            <tr>
              <th>Standard</th>
              <th>Auditor Role</th>
            </tr>
          </thead>
          <tbody>
            {standards.map((item, index) => (
              <tr key={index}>
                <td>{item.standard}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h4 className="text-xl font-bold text-black mb-4 mt-7">
          Upgradation Request Remarks
        </h4>
        <div className="flex flex-col mb-4 mt-4">
          <label
            htmlFor="reviewerRemarks"
            className="font-bold text-black dark:text-white mb-1"
          >
            Remarks
          </label>
          <textarea
            name="reviewerRemarks"
            className="border border-gray-300 p-2 rounded-md"
            rows="2"
            placeholder="Remarks "
          ></textarea>
        </div>

        <h4 className="text-xl font-bold text-black mb-4">
          Supported Documents
        </h4>
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

        <h4 className="text-xl font-bold text-black mb-4 mt-7">
          Likely NaceCode/Category Code Suggestion Panel
        </h4>
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

        {/* Standard, NaceCode(Rev 1), NaceCode(Rev 2) Table */}
        <h4 className="text-xl font-bold text-black mb-4 mt-7">
          Existing NaceCodes
        </h4>
        <Table bordered>
          <thead>
            <tr>
              <th>Standard</th>
              <th>NaceCode (Rev 1)</th>
              <th>NaceCode (Rev 2)</th>
            </tr>
          </thead>
          <tbody>
            {naceCodeData.map((item, index) => (
              <tr key={index}>
                <td>{item.standard}</td>
                <td>{item.naceRev1}</td>
                <td>{item.naceRev2}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Standard, Category, Sub-Category Table */}
        <h4 className="text-xl font-bold text-black mb-4 mt-7">
          Existing Category Codes
        </h4>
        <Table bordered>
          <thead>
            <tr>
              <th>Standard</th>
              <th>Category</th>
              <th>Sub-Category</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((item, index) => (
              <tr key={index}>
                <td>{item.standard}</td>
                <td>{item.category}</td>
                <td>{item.subCategory}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Standard, EAF/IAF Codes, Risk Category Table */}
        <h4 className="text-xl font-bold text-black mb-4 mt-7">
          Existing EAF/IAF Codes and Risk Categories
        </h4>
        <Table bordered>
          <thead>
            <tr>
              <th>Standard</th>
              <th>EAF/IAF Codes</th>
              <th>Risk Category</th>
            </tr>
          </thead>
          <tbody>
            {eafIafData.map((item, index) => (
              <tr key={index}>
                <td>{item.standard}</td>
                <td>{item.eafCode}</td>
                <td>{item.riskCategory}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h4 className="text-xl font-bold text-black mb-4 mt-4">
          Document Review
        </h4>
        <Row>
          <Col md={6}>
            <div className="flex flex-col">
              <h4 className="font-bold text-black dark:text-white mb-1">
                Status
              </h4>
              <Form.Select aria-label="Select Status" name="status">
                <option value="">Please select</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </Form.Select>
            </div>
          </Col>
          <Col md={6}>
            <div className="flex flex-col">
              <h4 className="font-bold text-black dark:text-white mb-1">
                Approved By
              </h4>
              <Form.Select aria-label="Select Approver" name="approvedBy">
                <option value="">Please select</option>
                <option value="name1">Name 1</option>
                <option value="name2">Name 2</option>
                <option value="name3">Name 3</option>
                <option value="name4">Name 4</option>
              </Form.Select>
            </div>
          </Col>
        </Row>

        <div className="flex flex-col mb-4 mt-4">
          <label
            htmlFor="reviewerRemarks"
            className="font-bold text-black dark:text-white mb-1"
          >
            Remarks
          </label>
          <textarea
            name="reviewerRemarks"
            className="border border-gray-300 p-2 rounded-md"
            rows="2"
            placeholder="Remarks"
          ></textarea>
        </div>

        <div className="flex flex-col mb-4 mt-4">
          <label
            htmlFor="reviewerRemarks"
            className="font-bold text-black dark:text-white mb-1"
          >
            Comments and Approval on Verification of Documents
          </label>
          <textarea
            name="reviewerRemarks"
            className="border border-gray-300 p-2 rounded-md"
            rows="2"
            placeholder="Remarks"
          ></textarea>
        </div>

        <h4 className="font-bold text-black dark:text-white mb-1">
          Send Upgradation Letter
        </h4>
      </div>

      {/* Close and Submit Buttons */}
      <div className="flex justify-end space-x-4 p-4">
        <Button
          className="bg-black text-white px-6 py-2 rounded-md shadow-md"
          type="button"
        >
          Close
        </Button>
        <Button
          className="bg-white text-black border-black border px-6 py-2 rounded-md shadow-md"
          type="button"
        >
          Update
        </Button>
      </div>
    </>
  );
};

export default Upgradation3;
