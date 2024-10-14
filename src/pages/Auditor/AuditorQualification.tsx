import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the type for auditor types
interface AuditorType {
  id: string; // Or number, depending on your backend
  name: string;
}

const AuditorQualification = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    zone: '',
    auditorSelectType: '',
    mobileNo: '',
    email: '',
    scheme: '',
    selectCV: null,
    remark: '',
  });
  const [auditorTypes, setAuditorTypes] = useState<AuditorType[]>([]); // Specify the type
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/auditor-qualifications/auditortypes')
      .then((response) => {
        setAuditorTypes(response.data.auditorTypes); // Ensure response matches type
      })
      .catch((error) => {
        console.error('Error fetching auditor types:', error);
      });
  }, []);

  // Handle change for all form inputs
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { id, value, files } = e.target;
    if (id === 'selectCV' && files) {
      setFormData({ ...formData, selectCV: files[0] }); // Handle file input
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append('name', formData.name);
    formDataToSend.append('education', formData.education);
    formDataToSend.append('zone', formData.zone);
    formDataToSend.append('auditorSelectType', formData.auditorSelectType);
    formDataToSend.append('mobileNo', formData.mobileNo);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('scheme', formData.scheme);
    formDataToSend.append('remark', formData.remark);

    // Append file (if present)
    if (formData.selectCV) {
      formDataToSend.append('selectCV', formData.selectCV);
    }

    console.log(formDataToSend);
    const token = localStorage.getItem('token');
    console.log(token);

    try {
      const response = await axios.post(
        'http://localhost:8000/api/auditor-qualifications/',
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('submit');
      toast.success('Form submitted successfully!');
    } catch (err) {
      console.log('err');
      toast.error('Error submitting form!');
    }
    // .then(response => {
    //   console.log('Success:', response.data);
    //   toast.success('Form submitted successfully!');
    // })
    // .catch(error => {
    //   console.error('Error submitting form:', error);
    //   toast.error('Error submitting form!');
    // });
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">
          Auditor Qualification
        </h1>

        {/* Form fields */}
        <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
          {/* Name Field */}
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="name"
              className="font-medium text-black dark:text-white mb-1"
            >
              Name
            </label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Name"
              className="p-2 border rounded-lg"
              aria-label="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Education Field */}
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="education"
              className="font-medium text-black dark:text-white mb-1"
            >
              Education
            </label>
            <Form.Control
              id="education"
              type="text"
              placeholder="Education"
              className="p-2 border rounded-lg"
              aria-label="Education"
              value={formData.education}
              onChange={handleChange}
            />
          </div>

          {/* Zone Field */}
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="zone"
              className="font-medium text-black dark:text-white mb-1"
            >
              Zone
            </label>
            <Form.Control
              id="zone"
              type="text"
              placeholder="Zone"
              className="p-2 border rounded-lg"
              aria-label="Zone"
              value={formData.zone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Auditor Type Field */}

        {/* Other fields */}
        <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
          {/* Mobile No */}

          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="auditorSelectType"
              className="font-medium text-black dark:text-white mb-1"
            >
              Auditor Type
            </label>
            <Form.Control
              id="auditorSelectType"
              as="select"
              className="p-2 border rounded-lg"
              value={formData.auditorSelectType}
              onChange={handleChange}
            >
              <option value="">Select Auditor Type</option>
              {auditorTypes.map((type) => (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              ))}
            </Form.Control>
          </div>
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="mobileNo"
              className="font-medium text-black dark:text-white mb-1"
            >
              Mobile No.
            </label>
            <Form.Control
              id="mobileNo"
              type="text"
              placeholder="Mobile No."
              className="p-2 border rounded-lg"
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="email"
              className="font-medium text-black dark:text-white mb-1"
            >
              Email
            </label>
            <Form.Control
              id="email"
              type="text"
              placeholder="Email"
              className="p-2 border rounded-lg"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* <div className="flex flex-col w-full mb-4 md:mb-0">
          <label htmlFor="email" className="font-medium text-black dark:text-white mb-1">
            Password
          </label>
          <Form.Control
            id="password"
            type="text"
            placeholder="Password"
            className="p-2 border rounded-lg"
            value={formData.password}
            onChange={handleChange} />
        </div> */}

          {/* Scheme */}
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="scheme"
              className="font-medium text-black dark:text-white mb-1"
            >
              Scheme
            </label>
            <Form.Control
              id="scheme"
              type="text"
              placeholder="Scheme"
              className="p-2 border rounded-lg"
              value={formData.scheme}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* CV Upload */}
        <div className="flex flex-col mt-3">
          <label
            htmlFor="selectCV"
            className="font-medium text-black dark:text-white mb-1"
          >
            Select CV
          </label>
          <Form.Control
            type="file"
            id="selectCV"
            className="mt-2"
            aria-label="Upload File"
            onChange={handleChange}
          />
        </div>

        {/* Remark Field */}
        <div className="flex flex-col w-full mb-4 mt-2">
          <label
            htmlFor="remark"
            className="font-medium text-black dark:text-white mb-1"
          >
            Remark
          </label>
          <Form.Control
            id="remark"
            as="textarea"
            placeholder="Remark"
            className="p-2 border rounded-lg"
            value={formData.remark}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-2">
          <button
            className="rounded bg-[#152238] py-2 px-4 text-white hover:bg-[#0a1628]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AuditorQualification;
