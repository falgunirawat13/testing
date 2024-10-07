import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import axios from 'axios';

const BiodataInfo = () => {
  const [formData, setFormData] = useState({
    applyFor: '',
    standard: '',
    zone: '',
    title: '',
    name: '',
    birthDate: '',
    isPartOfISSPL: '',
    isPartOfIRS: '',
    address: '',
    educationDetails: '',
    languages: '',
    expertise: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    nationality: '',
    contactNo: '',
    mobileNo: '',
    faxNo: '',
    emailID: '',
    qualificationCriteria: '',
    industry: '',
    documentType: '',
    uploadFile: '',
    naceCodeRev1: '',
    naceCodeRev2: '',
    efCodes: '',
    riskCategory: '',
    training: '',
    otherQualifications: '',
    relevantSeminars: '',
    workExperienceYears: '',
    organizationName: '',
    organizationBusinessLine: '',
    tenure: '',
    rolesResponsibilities: '',
    yearsInConsultancy: '',
    consultancySector: '',
    numberOfClients: '',
    yearsInAuditing: '',
    auditedSector: '',
    numberOfMandays: '',
    yearsInTraining: '',
    numberOfTrainings: '',
  });

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/auditor-qualifications')
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) =>
        console.error('Error fetching auditor qualifications:', error),
      );
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNacecodeChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      nacecode: value,
    }));
  };

  const handleriskCategoryChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      riskCategory: value,
    }));
  };

  // const token = localStorage.getItem('token');
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    axios
      .post('http://localhost:8000/api/auditor/auditors', formData)
      .then((response) => {
        console.log('Form submitted successfully:', response.data);
        // Optionally show a success message or redirect
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Optionally show an error message
      });
  };
  const [applyForOptions, setApplyForOptions] = useState([]);
  const [standardOptions, setStandardOptions] = useState([]);
  const [zoneOptions, setZoneOptions] = useState([]); // Initialize as an empty array
  const [titleOptions, setTitleOptions] = useState([]);
  const [isPartOfISSPL, setIsPartOfISSPL] = useState([]);
  const [isPartOfIRS, setIsPartOfIRS] = useState([]);
  const [qualificationCriteria, setQualificationCriteria] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          applyForResponse,
          standardResponse,
          zoneResponse,
          titleResponse,
          issplResponse,
          irsResponse,
          qualificationCriteriaResponse,
          industryResponse,
          languageResponse,
        ] = await Promise.all([
          axios.get('http://localhost:8000/api/auditor/auditorApplyFors'),
          axios.get('http://localhost:8000/api/auditor/auditorStandards'),
          axios.get('http://localhost:8000/api/questionnaire/zone'),
          axios.get('http://localhost:8000/api/auditor/auditorTitles'),
          axios.get('http://localhost:8000/api/auditor/auditorIsPartOfISSPL'),
          axios.get('http://localhost:8000/api/auditor/auditorIisPartOfIRS'),
          axios.get(
            'http://localhost:8000/api/auditor/auditorQualificationCriteria',
          ),
          axios.get('http://localhost:8000/api/auditor/auditorIndustry'),
          axios.get('http://localhost:8000/api/auditor/auditorLanuage'),
        ]);

        setApplyForOptions(applyForResponse.data);
        setStandardOptions(standardResponse.data);
        if (zoneResponse.data.success) {
          setZoneOptions(zoneResponse.data.data);
        } else {
          console.error('Failed to fetch zone options:', zoneResponse.data);
        }
        setTitleOptions(titleResponse.data);
        setIsPartOfISSPL(issplResponse.data);
        setIsPartOfIRS(irsResponse.data);
        setQualificationCriteria(qualificationCriteriaResponse.data);
        setIndustry(industryResponse.data);
        setLanguages(languageResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [, setUsers] = useState([]); // State to hold user data
  const [, setFilteredUsers] = useState([]); // State for filtered user data
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    const staticUsers = [
      {
        id: 1,
        auditType: 'Internal',
        standard: 'ISO 9001',
        mandays: 5,
        naceCode1: '1234',
        naceCode2: '5678',
        iafCode: '01',
        risk: 'Low',
        subCategory: 'Category A',
      },
      {
        id: 2,
        auditType: 'External',
        standard: 'ISO 14001',
        mandays: 7,
        naceCode1: '2345',
        naceCode2: '6789',
        iafCode: '02',
        risk: 'High',
        subCategory: 'Category B',
      },
      // Add more static users as needed
    ];

    setUsers(staticUsers);
    setFilteredUsers(staticUsers);
  }, []);

  const [visibleSections, setVisibleSections] = useState({
    workExperience: false,
    consultancy: false,
    auditing: false,
    training: false,
  });

  // Generalized toggle function
  const toggleSection = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  console.log(formData.zone);
  console.log(formData.name, 'ABC');
  console.log(formData);

  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-4">
        Auditor Biodata Information
      </h1>
      {/* Main Container for Fields */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {/* Field: Apply For */}
          <div className="flex flex-col">
            <label
              htmlFor="applyFor"
              className="font-medium text-black dark:text-white mb-1"
            >
              Apply For
            </label>
            <Form.Select
              aria-label="Select Application Type"
              className="mt-2"
              name="applyFor"
              value={formData.applyFor}
              onChange={handleChange}
            >
              <option>Select</option>
              {applyForOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {' '}
                  {/* Assuming each option has an id */}
                  {option.name}{' '}
                  {/* Adjust based on the actual structure of the option */}
                </option>
              ))}
            </Form.Select>
          </div>

          {/* <div className="flex flex-col">
            <label htmlFor="standard" className="font-medium text-black mb-1">
              Standard
            </label>
            <Form.Select
              name="standard"
              value={formData.standard}
              onChange={handleChange}
              className="mt-2"
            >
              <option value="">Select</option>
              {standardOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {' '}
                 Assuming each option has an id 
                  {option.name}{' '}
                   Adjust based on the actual structure of the option 
                </option>
              ))}
            </Form.Select>
          </div> */}

          <div className="flex flex-col">
            <label
              htmlFor="zone"
              className="font-medium text-black dark:text-white mb-1"
            >
              Zone
            </label>
            <Form.Select
              className="mt-2"
              name="zone"
              value={formData.zone}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {Array.isArray(zoneOptions) && zoneOptions.length > 0 ? (
                zoneOptions.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))
              ) : (
                <option disabled>Loading options...</option> // Placeholder if no options available
              )}
            </Form.Select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="font-medium text-black dark:text-white mb-1"
            >
              Title
            </label>
            <Form.Select
              aria-label="Select Title"
              className="mt-2"
              name="title"
              value={formData.title}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {titleOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          {/* Field: Name */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              Name
            </label>
            <Form.Control
              id="name"
              type="text"
              className="border rounded-lg"
              aria-label="Text Field Name"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Field: Birth Date */}
          <div className="flex flex-col">
            <label
              htmlFor="birthDate"
              className="font-medium text-black dark:text-white mb-1"
            >
              Birth Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="border rounded-lg w-[100%] p-2"
              placeholderText="Select"
            />
            {/* <Form.Control
            id="birthDate"
            type="date"
            className="border rounded-lg"
            aria-label="Date of Birth"
          /> */}
          </div>

          {/* Field: Is part of ISSPL? */}
          <div className="flex flex-col">
            <label
              htmlFor="isspl"
              className="font-medium text-black dark:text-white mb-1"
            >
              Is part of ISSPL?
            </label>
            <Form.Select
              aria-label="Select ISSPL Status"
              name="title"
              value={formData.isPartOfISSPL}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {isPartOfISSPL.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          {/* Field: Is part of IRS? */}
          <div className="flex flex-col">
            <label
              htmlFor="irs"
              className="font-medium text-black dark:text-white mb-1"
            >
              Is part of IRS?
            </label>
            <Form.Select
              aria-label="Select IRS Status"
              className=""
              value={formData.isPartOfIRS}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {isPartOfIRS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              Expertise
            </label>
            <Form.Control
              as="textarea"
              aria-label="Address"
              className="p-2 border rounded-lg resize-none"
              rows={1}
              placeholder="Expertise"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              Address
            </label>
            <Form.Control
              as="textarea"
              aria-label="Address"
              className="p-2 border rounded-lg resize-none"
              rows={1}
              placeholder="Address"
            />
          </div>
        </div>
        {/* Address Field */}
        {/* <div className="flex">
          <div className="flex flex-col  mt-3 w-1/3 mr-2">
            <label
              htmlFor="address"
              className="font-medium text-black dark:text-white mb-1"
            >
              Expertise
            </label>
            <Form.Control
              as="textarea"
              aria-label="Address"
              className="p-2 border rounded-lg resize-none"
              rows={1}
              placeholder="Expertise"
            />
          </div>
          <div className="flex flex-col  mt-3 w-1/3">
            <label
              htmlFor="address"
              className="font-medium text-black dark:text-white mb-1"
            >
              Address
            </label>
            <Form.Control
              as="textarea"
              aria-label="Address"
              className="p-2 border rounded-lg resize-none"
              rows={1}
              placeholder="Address"
            />
          </div>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              City
            </label>
            <Form.Control
              id="name"
              type="text"
              className="border rounded-lg"
              aria-label="Text Field Name"
              placeholder="City"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              State
            </label>
            <Form.Control
              id="name"
              type="text"
              className="border rounded-lg"
              aria-label="Text Field Name"
              placeholder="State"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              Pin code
            </label>
            <Form.Control
              id="name"
              type="text"
              className="border rounded-lg"
              aria-label="Text Field Name"
              placeholder="Pin code"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              Country
            </label>
            <Form.Control
              id="name"
              type="text"
              className="border rounded-lg"
              aria-label="Text Field Name"
              placeholder="Country"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
          <div className="flex flex-col  ">
            <label
              htmlFor="address"
              className="font-medium text-black dark:text-white mb-1"
            >
              Educational Details
            </label>
            <Form.Control
              id="name"
              type="text"
              className="border rounded-lg"
              aria-label="Text Field Name"
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="title"
              className="font-medium text-black dark:text-white mb-1"
              value={formData.languages}
              onChange={handleChange}
            >
              Languages
            </label>
            <Form.Select aria-label="Select Title" className="">
              <option>Select</option>
              {languages.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>
        {/* Contact Information Section */}
        <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-3">
          {/* Field: Nationality */}
          <div className="flex flex-col">
            <label
              htmlFor="nationality"
              className="font-medium text-black dark:text-white mb-1"
            >
              Nationality
            </label>
            <Form.Control
              id="nationality"
              type="text"
              className="border rounded-lg"
              aria-label="Nationality"
              placeholder="Nationality"
            />
          </div>

          {/* Field: Contact No. */}
          <div className="flex flex-col">
            <label
              htmlFor="contactNo"
              className="font-medium text-black dark:text-white mb-1"
            >
              Contact No.
            </label>
            <Form.Control
              id="contactNo"
              type="text"
              className="border rounded-lg"
              aria-label="Contact No."
              placeholder="Contact No"
            />
          </div>

          {/* Field: Mobile No. */}
          <div className="flex flex-col">
            <label
              htmlFor="mobileNo"
              className="font-medium text-black dark:text-white mb-1"
            >
              Mobile No.
            </label>
            <Form.Control
              id="mobileNo"
              type="text"
              className="border rounded-lg"
              aria-label="Mobile No."
              placeholder="Mobile No"
            />
          </div>

          {/* Field: Fax No. */}
          <div className="flex flex-col">
            <label
              htmlFor="faxNo"
              className="font-medium text-black dark:text-white mb-1"
            >
              Fax No.
            </label>
            <Form.Control
              id="faxNo"
              type="text"
              className="border rounded-lg"
              aria-label="Fax No."
              placeholder="Fax No"
            />
          </div>

          {/* Field: Email ID */}
          <div className="flex flex-col">
            <label
              htmlFor="emailId"
              className="font-medium text-black dark:text-white mb-1"
            >
              Email ID
            </label>
            <Form.Control
              id="emailId"
              type="email"
              className="border rounded-lg"
              aria-label="Email ID"
              placeholder="Email ID"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          <div className="flex flex-col">
            <label
              htmlFor="emailId"
              className="font-medium text-black dark:text-white mb-1"
            >
              Other Professional Qualifications
            </label>
            <Form.Control
              id=""
              type="email"
              className="border rounded-lg"
              aria-label="Email ID"
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="font-medium text-black dark:text-white mb-1"
            >
              Training
            </label>
            <Form.Control
              id=""
              type="email"
              className="border rounded-lg"
              aria-label="Email ID"
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="emailId"
              className="font-medium text-black dark:text-white mb-1"
            >
              Affilation with any certification
            </label>
            <Form.Control
              id=""
              type="email"
              className="border rounded-lg"
              aria-label="Email ID"
              placeholder="Enter"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3 ">
          <div className="flex flex-col">
            <label
              htmlFor="seminars"
              className="font-medium text-black dark:text-white mb-1 whitespace-nowrap"
            >
              Relevant Seminars / Conferences Attended
            </label>
            <Form.Control
              id="seminars"
              type="text"
              className="border rounded-lg"
              aria-label="Seminars Attended"
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="activities"
              className="font-medium text-black dark:text-white mb-1 whitespace-nowrap"
            >
              Other Continuous Improvement and Skill Development Activities
            </label>
            <Form.Control
              id="activities"
              type="text"
              className="border rounded-lg"
              aria-label="Skill Development"
              placeholder="Enter"
            />
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------- */}
        <br />
        <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-6 mb-3">
          Work Experience including Consultancy / Auditing / Training
        </h2>{' '}
        <button
          className="flex justify-center rounded bg-[#152238] py-2 px-3 font-medium text-white mb-2"
          onClick={() => toggleSection('workExperience')}
        >
          {visibleSections.workExperience
            ? 'Close Work Experience'
            : 'Add Work Experience'}
        </button>
        {visibleSections.workExperience && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-1 mb-2">
            {[
              'No. of years in work experience',
              'Name of the organization',
              "Organization's line of business",
              'Tenure',
              'Roles and responsibilities w.r.t. required competencies',
            ].map((label, index) => (
              <div key={index} className="flex flex-col">
                <label className="font-medium text-black dark:text-white mb-1">
                  {label}
                </label>
                <Form.Control
                  type="text"
                  className="border rounded-lg"
                  placeholder="Enter"
                />
              </div>
            ))}
          </div>
        )}
        <button
          className="flex justify-center rounded bg-[#152238] py-2 px-3 font-medium text-white mb-2"
          onClick={() => toggleSection('consultancy')}
        >
          {visibleSections.consultancy
            ? 'Close Consultancy Experience'
            : 'Add Consultancy Experience'}
        </button>
        {visibleSections.consultancy && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-1 mb-2">
            {[
              'Number of Years in Consultancy',
              'Consultancy Provided in Sector',
              'Number of Clients',
            ].map((label, index) => (
              <div key={index} className="flex flex-col mt-4">
                <label className="font-medium text-black dark:text-white mb-1">
                  {label}
                </label>
                <Form.Control
                  type="text"
                  className="border rounded-lg"
                  placeholder="Enter"
                />
              </div>
            ))}
          </div>
        )}
        <button
          className="flex justify-center rounded bg-[#152238] py-2 px-3 font-medium text-white mb-2"
          onClick={() => toggleSection('auditing')}
        >
          {visibleSections.auditing
            ? 'Close Auditing Experience'
            : 'Add Auditing Experience'}
        </button>
        {visibleSections.auditing && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-1 mb-2">
            {[
              'Number of Years in Auditing',
              'Audited in Sector',
              'Number of Mandays',
            ].map((label, index) => (
              <div key={index} className="flex flex-col mt-4">
                <label className="font-medium text-black dark:text-white mb-1">
                  {label}
                </label>
                <Form.Control
                  type="text"
                  className="border rounded-lg"
                  placeholder="Enter"
                />
              </div>
            ))}
          </div>
        )}
        <button
          className="flex justify-center rounded bg-[#152238] py-2 px-3 font-medium text-white mb-2"
          onClick={() => toggleSection('training')}
        >
          {visibleSections.training
            ? 'Close Training Experience'
            : 'Add Training Experience'}
        </button>
        {visibleSections.training && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-1 mb-2">
            {[
              'No. of years in Training',
              'Training imparted in Sector & on subject',
              'Number of Trainings',
            ].map((label, index) => (
              <div key={index} className="flex flex-col mt-4">
                <label className="font-medium text-black dark:text-white mb-1">
                  {label}
                </label>
                <Form.Control
                  type="text"
                  className="border rounded-lg"
                  placeholder="Enter"
                />
              </div>
            ))}
          </div>
        )}
        {/* Supported Documents Section */}
        <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
          Supported Documents
        </h2>
        <div className="flex flex-row space-x-4 w-full">
          {/* Documents Type Dropdown */}
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="documentsType"
              className="font-medium text-black dark:text-white mb-1"
            >
              Documents Type
            </label>
            <Form.Select aria-label="Select Document Type" className="mt-2">
              <option>Select</option>
              <option value="PDF">CV/Biodata/Resume</option>
              <option value="Word">
                Educational Qualification Certificates
              </option>
              <option value="Excel">Work Experience Letters</option>
              <option value="Excel">
                Professional Certificates(LA Certificates & Training
                Certificates)
              </option>
              <option value="Excel">
                Audit Logs/List of Audits conducted (This is mandatory for Team
                Leaders / Auditor Status)
              </option>
              <option value="Excel">List of consultancy provided</option>
              <option value="Excel">PAN Card</option>
              <option value="Excel">AAdhar Card</option>
              <option value="Excel">Government ID</option>
              <option value="Excel">Cancelled Cheque</option>
            </Form.Select>
          </div>

          {/* File Upload Field */}
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="fileUpload"
              className="font-medium text-black dark:text-white mb-1"
            >
              Upload File
            </label>
            <input
              type="file"
              id="fileUpload"
              className="border rounded-lg p-1 mt-2 bg-white"
              aria-label="File Upload"
            />
          </div>
        </div>
        <div className="flex flex-row justify-start items-end mt-2">
          <Button variant="primary" className="mb-2 bg-[#152238]">
            Add to Selection
          </Button>
        </div>
        <div className="my-3">
          <div className="table-responsive">
            <Table hover className="table-striped table-borderless">
              <thead className="thead-light">
                <tr>
                  <th className="py-2 px-4">File Type</th>
                  <th className="py-2 px-4">File Name </th>
                  <th className="py-2 px-4">View</th>
                  <th className="py-2 px-4">Delete</th>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {/* Field: Qualification Criteria */}
          <div className="flex flex-col">
            <label
              htmlFor="applyFor"
              className="font-medium text-black dark:text-white mb-1"
            >
              Qualification Criteria
            </label>
            <Form.Select
              aria-label="Select Title"
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
              htmlFor="standard"
              className="font-medium text-black dark:text-white mb-1"
            >
              Industry
            </label>
            <Form.Select
              aria-label="Select Standard"
              value={formData.industry}
              onChange={handleChange}
            >
              <option>Select</option>
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
              htmlFor="zone"
              className="font-medium text-black dark:text-white mb-1"
            >
              Standard
            </label>
            <Form.Select
              name="standard"
              value={formData.standard}
              onChange={(e) => {
                handleChange(e);
                console.log('Selected Standard:', e.target.value); // Log the selected standard
              }}
            >
              <option value="">Select</option>
              {standardOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Form.Select>

            {/* Logging to understand the value */}
            {console.log(
              'Current formData.standard:',
              typeof formData.standard,
            )}
          </div>
        </div>
        {/* Conditional Rendering for NACE codes */}
        {(formData.standard === '20' ||
          formData.standard === '13' ||
          formData.standard === '36' ||
          formData.standard === '62' ||
          formData.standard === '11' ||
          formData.standard === '54') && (
          <div className="w-full mt-4">
            {' '}
            {/* Full width for NACE codes section */}
            <h2 className="font-bold text-black text-xl dark:text-white mb-3">
              Select Nacecodes
            </h2>
            <div className="flex justify-between mb-4">
              {' '}
              {/* Add flex container */}
              <div className="flex flex-col w-1/2 pr-2">
                <label
                  htmlFor="nacecodesRev1"
                  className="font-medium text-black dark:text-white mb-1"
                >
                  Select Nacecodes (Rev1)
                </label>
                <Form.Select
                  aria-label="Select Application Type"
                  className="mt-2"
                >
                  <option>Select</option>
                  <option value="E 40.11">
                    E 40.11 (Production of electricity)
                  </option>
                  <option value="O 93.01">
                    O 93.01 (Washing and dry cleaning of textile and fur
                    products)
                  </option>
                  {/* Add more options */}
                </Form.Select>
              </div>
              <div className="flex flex-col w-1/2 pl-2">
                <label
                  htmlFor="nacecodesRev2"
                  className="font-medium text-black dark:text-white mb-1"
                >
                  Select Nacecodes (Rev2)
                </label>
                <Form.Select
                  aria-label="Select Application Type"
                  value={formData.nacecode}
                  onChange={handleNacecodeChange} // Custom handler to update selected Nacecode
                  className="mt-2"
                >
                  <option>Select</option>
                  <option value="Technical Area">Technical Area</option>
                  <option value="81.22">
                    81.22 (Other building and industrial cleaning activities)
                  </option>
                  {/* Add more options */}
                </Form.Select>
              </div>
            </div>
            {/* Conditionally render the table when "Technical Area" is selected */}
            {formData.nacecode === 'Technical Area' &&
              formData.standard === '20' && (
                <div className="mt-4">
                  <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                    Select Technical Area
                  </h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>IAF/EA Code(s)</th>
                        <th>NACE Rev2</th>
                        <th>QMS-Risk</th>
                        <th>Key Process involved</th>
                        <th>Quality Control</th>
                        <th>Product Requirement</th>
                        <th>Applicable legal & statutory requirements</th>
                        <th> Link with Question Bank (Google Form)</th>
                        <th>Upload the Answer-sheet</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
            {formData.nacecode === 'Technical Area' &&
              formData.standard === '13' && (
                <div className="mt-4">
                  <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                    Select Technical Area
                  </h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>IAF/EA Code(s)</th>
                        <th>NACE Rev2</th>
                        <th>QMS-Risk</th>
                        <th>Key Process involved</th>
                        <th>Quality Control</th>
                        <th>Product Requirement</th>
                        <th>Applicable legal & statutory requirements</th>
                        <th> Link with Question Bank (Google Form)</th>
                        <th>Upload the Answer-sheet</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
            {formData.nacecode === 'Technical Area' &&
              (formData.standard === '62' || formData.standard === '11') && (
                <div className="mt-4">
                  <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                    Select Technical Area
                  </h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Main Technical Area for SCSMS / SRSMS</th>
                        <th>Sub-Technical Area SCSMS / SRSMS</th>
                        <th>Supply Chain related experience</th>
                        <th>
                          Link with Competence Matrix Form No. 81 (Google Form)
                        </th>
                        <th>Submit the Duly filled Form No. 81</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
            {formData.nacecode === 'Technical Area' &&
              formData.standard === '54' && (
                <div className="mt-4">
                  <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                    Select Technical Area
                  </h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Master Technical Area for EOMS</th>
                        <th>Processes involved</th>
                        <th>Competence required</th>
                        <th>
                          Legal / accreditation requirement [Legal Requirements
                          & Admission Process(s), as applicable]
                        </th>
                        <th>Process of Monitoring</th>
                        <th>
                          Link with Competence Matrix Form No. 128 (Google Form)
                        </th>
                        <th>Submission the Duly filled Form No. 128</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
            {formData.nacecode === 'Technical Area' &&
              formData.standard === '36' && (
                <div className="mt-4">
                  <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                    This screen should be reflected as
                  </h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th rowSpan="2">Main Technical Area (MTA)</th>
                        <th rowSpan="2">Sub Technical Area (STA)</th>
                        <th colSpan="2">PRODUCT RELATED KNOWLEDGE</th>
                        <th colSpan="2">PROCESS RELATED KNOWLEDGE</th>
                      </tr>
                      <tr>
                        <th>
                          List out few Products and services related to this
                          technical area
                        </th>
                        <th>
                          List at least 3 examples of typical
                          defects/non-conformances in this Technical Area
                        </th>
                        <th>
                          List at least 3 main critical processes in this
                          Technical Area and briefly describe one process
                        </th>
                        <th>
                          List at least 3 main critical processes in this
                          Technical Area and briefly describe one process
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <select>
                            <option value="">Drop Down for Selection</option>
                            <option value="MTA1">Main Technical Area 1</option>
                            <option value="MTA2">Main Technical Area 2</option>
                          </select>
                        </td>
                        <td>
                          <select>
                            <option value="">Drop Down for Selection</option>
                            <option value="STA1">Sub Technical Area 1</option>
                            <option value="STA2">Sub Technical Area 2</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Box for Type the Details"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Box for Type the Details"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Box for Type the Details"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Box for Type the Details"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
          </div>
        )}
        {formData.standard === '21' && (
          <div className="mt-4">
            <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
              Generic Knowledge About ISO 14001
            </h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>The Environmental Terminology Used</th>
                  <th>
                    About techniques involved for Evaluation of Environmental
                    Aspect & Impact and their significance
                  </th>
                  <th>
                    Knowledge of Environmental Emergencies preparedness &
                    response. Mitigation associated with adverse Environmental
                    Impact
                  </th>
                  <th>Knowledge of operational control with respect to</th>
                  <th>
                    For Factors Related to Geography, Climate, Hydrogeology,
                    Topography soil condition resulting in potential
                    environmental impacts
                  </th>
                  <th>
                    During Design stage: Approach / concept of application
                    related to environmental aspect / impact / life cycle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
        {formData.standard === '22' && (
          <div className="mt-4">
            <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
              Generic Knowledge About ISO 45001
            </h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    Terminology, principles, processes and concepts of OH&S
                  </th>
                  <th>
                    About techniques involved for Hazard Identification & Risk
                    Assessment and Eliminating hazards and reducing OH&S risks
                  </th>
                  <th>
                    Knowledge of Occupational Health & Safety Measurement &
                    Monitoring Technique
                  </th>
                  <th>Methodology and approach for Incident investigation</th>
                  <th>
                    Knowledge of methodologies for consultation and
                    participation, including obstacles and barriers
                  </th>
                  <th>
                    Operational Control Measure for Prevention of Injuries & Ill
                    Health
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
        {(formData.standard === '21' ||
          formData.standard === '43' ||
          formData.standard === '8' ||
          formData.standard === '22') && (
          <div className="w-full mt-4">
            <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
              Select EA/IAF Codes and Risk Category
            </h2>
            <div className="flex justify-between mb-4">
              {' '}
              {/* Add flex container */}
              <div className="flex flex-col w-1/2 pr-2">
                <label
                  htmlFor="applyFor"
                  className="font-medium text-black dark:text-white mb-1"
                >
                  EA/IAF Codes
                </label>
                <Form.Select
                  aria-label="Select Application Type"
                  className="mt-2"
                >
                  <option>Select</option>
                  <option value="PDF">
                    01(Agriculture & Fishing & Forestry)
                  </option>
                  <option value="PDF">02(Mining & Quarrying)</option>
                  <option value="PDF">
                    03(Food products , beverages and tobacco)
                  </option>
                  <option value="PDF">08(Publishing Companies)</option>
                  <option value="PDF">09(Printing Companies)</option>
                  <option value="PDF">18(Machienry and equipments)</option>
                  <option value="PDF">
                    19(Electrical and optical equipment)
                  </option>
                  <option value="PDF">20(Shipbuilding)</option>
                  <option value="PDF">09(Aerospace)</option>
                  <option value="PDF">09(Other transport equipment)</option>
                </Form.Select>
              </div>
              <div className="flex flex-col w-1/2 pl-2">
                <label
                  htmlFor="applyFor"
                  className="font-medium text-black dark:text-white mb-1"
                >
                  Risk Category
                </label>
                <Form.Select
                  aria-label="Select Application Type"
                  value={formData.riskCategory}
                  onChange={handleriskCategoryChange}
                  className="mt-2"
                >
                  <option>Select</option>
                  <option value="Technical Area">Technical Area</option>
                  {/* Add more options */}
                </Form.Select>
              </div>
            </div>

            {formData.riskCategory === 'Technical Area' &&
              formData.standard === '21' && (
                <div className="mt-4">
                  <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                    Technical Area
                  </h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>IAF/EA Code(s)</th>
                        <th>IAF/EA Code(s) Part Wise</th>
                        <th>EMS-Risk</th>
                        <th>Key Processes/Activities</th>
                        <th>Sector Specific environmental aspects</th>
                        <th>Sector Specific operational control</th>
                        <th>Sector Specific environmental legal</th>
                        <th>Applicable legal & statutory requirements</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}

            {formData.riskCategory === 'Technical Area' &&
              formData.standard === '22' && (
                <div className="mt-4">
                  <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                    Technical Area
                  </h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>IAF/EA Code(s)</th>
                        <th>IAF/EA Code(s) Part Wise</th>
                        <th>OHS-Risk</th>
                        <th>Key Processes/Activities/Services involved</th>
                        <th>Sector Specific related hazards</th>
                        <th>Sector Specific potential emergencies</th>
                        <th>Sector Specific workplace monitoring</th>
                        <th>Sector Specific OH&S Legal & Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}

            {formData.riskCategory === 'Technical Area' &&
              formData.standard === '43' && (
                <div className="mt-4">
                  <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                    Technical Area
                  </h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Master Technical Area for EnMS</th>
                        <th>Energy Related Experience</th>
                        <th>Reflect the relevant Question Bank</th>
                        <th>Submit the Answersheets</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <select>
                            <option value="">Drop Down for Selection</option>
                            <option value="MTA1">Main Technical Area 1</option>
                            <option value="MTA2">Main Technical Area 2</option>
                          </select>
                        </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}

            {formData.riskCategory === 'Technical Area' &&
              formData.standard === '8' && (
                <div className="mt-4">
                  <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
                    Technical Area
                  </h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Sectors</th>
                        <th>IAF / EA Code(s)</th>
                        <th>IT related Experience</th>
                        <th>Link with Question Bank (Google Form)</th>
                        <th>Submit the Answersheets</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <select>
                            <option value="">Select Details</option>
                            <option value="Detail1">Detail 1</option>
                            <option value="Detail2">Detail 2</option>
                            <option value="Detail3">Detail 3</option>
                          </select>
                        </td>{' '}
                        <td>
                          <select>
                            <option value="">Select Details</option>
                            <option value="Detail1">Detail 1</option>
                            <option value="Detail2">Detail 2</option>
                            <option value="Detail3">Detail 3</option>
                          </select>
                        </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
          </div>
        )}
        {/* <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
          Select EA/IAF Codes and Risk Category
        </h2> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3"> */}
        {/* Field: Apply For */}
        {/* <div className="flex flex-col">
            <label
              htmlFor="applyFor"
              className="font-medium text-black dark:text-white mb-1"
            >
              EA/IAF Codes
            </label>
            <Form.Select aria-label="Select Application Type" className="mt-2">
              <option>Select</option>
              <option value="PDF">01(Agriculture & Fishing & Forestry)</option>
              <option value="PDF">02(Mining & Quarrying)</option>
              <option value="PDF">03(Food products , beverages and tobacco)</option>
              <option value="PDF">08(Publishing Companies)</option>
              <option value="PDF">09(Printing Companies)</option>
              <option value="PDF">18(Machienry and equipments)</option>
              <option value="PDF">19(Electrical and optical equipment)</option>
              <option value="PDF">20(Shipbuilding)</option>
              <option value="PDF">09(Aerospace)</option>
              <option value="PDF">09(Other transport equipment)</option>
            </Form.Select>
          </div> */}
        {/* <div className="flex flex-col">
            <label
              htmlFor="applyFor"
              className="font-medium text-black dark:text-white mb-1"
            >
              Risk Category
            </label>
            <Form.Select aria-label="Select Application Type" className="mt-2">
              <option>Select</option>
            </Form.Select>
          </div>
        </div> */}
        {/* <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
          Select Nacecodes
        </h2> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3"> */}
        {/* <div className="flex flex-col">
            <label
              htmlFor="applyFor"
              className="font-medium text-black dark:text-white mb-1"
            >
              Select Nacecodes(Rev1)
            </label>
            <Form.Select aria-label="Select Application Type" className="mt-2">
              <option>Select</option>
              <option value="PDF">E 40.11(Production of electricity)</option>
              <option value="Word">O 93.01(Washing and dry cleaning of textile and fur products)</option>
              <option value="Excel">O 93.02(Hair dressing and other beauty treatment)</option>
              <option value="Excel">O 93.03(Funeral and related activities)</option>
              <option value="Excel">O 93.04(Physical and well-being activities)</option>
              <option value="Excel">O 93.05(Other services activities n.e.c)</option>
              <option value="Excel">K 72.10(hardware Consultancy)</option>
              <option value="Excel">K 72.21(Publishing of software)</option>
              <option value="Excel">K 72.22(Other software consultancy and supply)</option>
              <option value="Excel">K 72.3(Data processing)</option>
              <option value="Excel">K 72.4(Database activities)</option>
            </Form.Select>
          </div> */}
        {/* <div className="flex flex-col">
      <label
        htmlFor="applyFor"
        className="font-medium text-black dark:text-white mb-1"
      >
        Select Nacecodes (Rev2)
      </label> */}
        {/* <Form.Select
        aria-label="Select Application Type"
        className="mt-2"
        onChange={handleSelectChange}
      >
        <option value="">Select</option>
        <option value="Technical Area">Technical Area</option>
        <option value="PDF">81.22 (Other building and industrial cleaning activities)</option>
        <option value="Word">81.29 (Other cleaning activities)</option>
        <option value="Excel">81.3 (Landscape service activities)</option>
        <option value="Excel">82.11 (Combined administrative services activities)</option>
        <option value="Excel">82.19 (Photocopying, document preparation, and other specialized office support activities)</option>
        <option value="Excel">82.2 (Activities of call centers)</option>
        <option value="Excel">82.3 (Organizations of conventions and trade shows)</option>
        <option value="Excel">82.91 (Activities of collection agencies and credit bureaus)</option>
        <option value="Excel">82.92 (Packaging activities)</option>
        <option value="Excel">82.99 (Other business support service activities n.e.c)</option>
       
      </Form.Select> */}
        {/* Conditionally render the table when "Technical Area" is selected */}
        {/* {selectedOption === 'Technical Area' && (
        <div className="mt-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>IAF/EA Code(s)</th>
                <th>NACE Rev2</th>
                <th>QMS-Risk</th>
                <th>Key Process involved</th>
                <th>Quality Control</th>
                <th>Product Requirement</th>
                <th>Applicable legal & statutory requirements</th>
              
              </tr>
            </thead>
           
          </Table>
        </div>
      )}
    </div>
        </div> */}
        {/* <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
          Select Category / Sub-Category Codes
        </h2> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
          <div className="flex flex-col">
            <label
              htmlFor="applyFor"
              className="font-medium text-black dark:text-white mb-1"
            >
              Category
            </label>
            <Form.Select aria-label="Select Application Type" className="mt-2">
              <option>Select</option>
              <option>Technical Area</option>
              <option>D(Processing 2(Perishable vegetal products))</option>
              <option>
                E(Processing 3(Product with long shelf life at ambient
                temperature))
              </option>
              <option>
                C(Processing 1(Perishable animal products)including all
                activities after farming e.g. slaughtering)
              </option>
              <option>F(Feed Production)</option>
              <option>G(Catering)</option>
              <option>H(Distribution)</option>
              <option>I(Services)</option>
              <option>J(Transport and storage)</option>
              <option>K(Production of (Bio) Chemicals)</option>
              <option>L((Bio)chemical manufacturing)</option>
              <option>M(Packaging material manufacturing)</option>
              <option>Ayurvedic(Ayurvedic)</option>

              
            </Form.Select>
            {/* {selectedOption === 'Technical Area' && (
              <Table striped bordered hover className="mt-4">
                <thead>
                  <tr>
                    <th>Cluster</th>
                    <th>Categories</th>
                    <th>Subcategory</th>
                    <th>IRQS Subcategory</th>
                    <th>Risk</th>
                  </tr>
                </thead>
                
              </Table>
            )} 
          </div>*/}
        {/* <div className="flex flex-col">
            <label
              htmlFor="applyFor"
              className="font-medium text-black dark:text-white mb-1"
            >
              Sub Category
            </label>
            <Form.Select aria-label="Select Application Type" className="mt-2">
              <option>Select</option>
            </Form.Select>
          </div> 
        </div> */}
        {/* Buttons */}
        <div className="flex flex-row justify-end items-end mt-4 space-x-2">
          <button
            className="flex justify-center shadow rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-md dark:border-strokedark dark:text-white"
            type="button"
          >
            Close
          </button>
          <button
            className="flex justify-center rounded bg-[#152238] py-2 px-6 font-medium text-white hover:bg-opacity-90"
            type="submit"
          >
            Save Changes
          </button>
        </div>
        <div>
          {/* <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3 mb-3">
          General knowledge about ISO 14001
        </h2>
        <div>
        <div className="flex flex-col">
            <label
              htmlFor="emailId"
              className="font-medium text-black dark:text-white mb-1"
            >
              The Environmental Technology Used
            </label>
            <Form.Control
              id=""
              type=""
              className="border rounded-lg"
              aria-label=""
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="emailId"
              className="font-medium text-black dark:text-white mb-1"
            >
              About technniques involved for Evaluation of environmental aspect & imapct & theri significance
            </label>
            <Form.Control
              id=""
              type=""
              className="border rounded-lg"
              aria-label=""
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="emailId"
              className="font-medium text-black dark:text-white mb-1"
            >
              Knowledge of Environmental Emergencies preparedness & response. Mitigation associated with adverse Environmental impact
            </label>
            <Form.Control
              id=""
              type=""
              className="border rounded-lg"
              aria-label=""
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="emailId"
              className="font-medium text-black dark:text-white mb-1"
            >
              Knowledge of operational control with respect to
            </label>
            <Form.Control
              id=""
              type=""
              className="border rounded-lg"
              aria-label=""
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="emailId"
              className="font-medium text-black dark:text-white mb-1"
            >
             For factors related to Geography,Climate,Hydrogeology,Topography,soil condition resulting in potential environmental impacts
            </label>
            <Form.Control
              id=""
              type=""
              className="border rounded-lg"
              aria-label=""
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="emailId"
              className="font-medium text-black dark:text-white mb-1"
            >
            During Design stage: Approach/concept of application related environmental aspect/impact/life cycle
            </label>
            <Form.Control
              id=""
              type=""
              className="border rounded-lg"
              aria-label=""
              placeholder="Enter"
            />
          </div>
          </div> */}
        </div>
      </form>
    </>
  );
};

export default BiodataInfo;
