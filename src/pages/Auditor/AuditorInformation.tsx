import { Form } from 'react-bootstrap'; // Ensure this import is correct
import { useLocation, useNavigate } from 'react-router-dom';

const AuditorInformation = () => {
  const location = useLocation();
  const { user = {} } = location.state || {}; // Default to an empty object if user is not provided
  const navigate = useNavigate();
  const handle=()=>{
      navigate("/dashboard")
  }

  return (
    <div className="">
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">
        Enter Auditor Information
      </h1>
      <Form className="space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {/* Name Field */}
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="font-medium text-black mb-1">
              Name
            </label>
            <Form.Control
              id="name"
              type="text"
              className="p-2 border rounded-lg"
              value={user.name || ''} // Default to empty string if name is undefined
              readOnly
            />
          </div>

          {/* Auditor Type Field */}
          <div className="flex flex-col mb-4">
            <label htmlFor="auditorSelectType" className="font-medium text-black mb-1">
              Auditor Type
            </label>
            <Form.Control
              id="auditorSelectType"
              type="text"
              className="p-2 border rounded-lg"
              value={user.auditorSelectType || ''} // Default to empty string if auditorSelectType is undefined
              readOnly
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="font-medium text-black mb-1">
              Email
            </label>
            <Form.Control
              id="email"
              type="email"
              className="p-2 border rounded-lg"
              value={user.email || ''} // Default to empty string if email is undefined
              readOnly
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="font-medium text-black mb-1">
              Password
            </label>
            <Form.Control
              id="password"
              type="password"
              className="p-2 border rounded-lg"
              value={user.password || ''} // Default to empty string if password is undefined
              readOnly
            />
          </div>

          {/* Mobile Number Field */}
          <div className="flex flex-col mb-4">
            <label htmlFor="mobileNo" className="font-medium text-black mb-1">
              Mobile Number
            </label>
            <Form.Control
              id="mobileNo"
              type="text"
              className="p-2 border rounded-lg"
              value={user.mobileNo || ''} // Default to empty string if mobileNo is undefined
              readOnly
            />
          </div>

          {/* Scheme Field */}
          <div className="flex flex-col mb-4">
            <label htmlFor="scheme" className="font-medium text-black mb-1">
              Scheme
            </label>
            <Form.Control
              id="scheme"
              type="text"
              className="p-2 border rounded-lg"
              value={user.scheme || ''} // Default to empty string if scheme is undefined
              readOnly
            />
          </div>

          {/* Zone Field */}
          <div className="flex flex-col mb-4">
            <label htmlFor="zone" className="font-medium text-black mb-1">
              Zone
            </label>
            <Form.Control
              id="zone"
              type="text"
              className="p-2 border rounded-lg"
              value={user.zone || ''} // Default to empty string if zone is undefined
              readOnly
            />
          </div>
        </div>
       <div className="flex flex-row justify-end items-end mt-2">
          <button
            className="mr-2 flex justify-center shadow-5 rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-2 dark:border-strokedark dark:text-white"
            type="button" // Change to type="button" if not submitting
          >
            Close
          </button>
          <button
            className="flex justify-center rounded bg-[#152238] py-2 px-2 font-medium text-gray hover:bg-opacity-90"
            type="button" 
            onClick={handle}
          >
            Save 
          </button>
        </div> 
      </Form>
    </div>
  );
};

export default AuditorInformation;
