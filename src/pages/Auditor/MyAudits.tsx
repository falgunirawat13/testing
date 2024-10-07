import React from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const FileDropdown = () => {
  const navigate = useNavigate();

  const handleOpenNonConfirmity = () => {
    navigate('/nonConfirmity'); // Navigate to the NonConfirmity component
  };

  const handleOpenNoticeOfChange = () => {
    navigate('/noticeOfChange'); // Navigate to the NoticeOfChange component
  };

  const handleOpenScopeOfCertification = () => {
    navigate('/scopeOfCertification'); // Navigate to the ScopeOfCertification component
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-black mb-4">My Audits</h1>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-3">
        {/* Field 1 */}
        <div className="flex flex-col w-full md:w-[300px]">
          <label
            htmlFor="textfield1"
            className="font-medium text-black dark:text-white mb-1"
          >
            Client Name
          </label>
          <Form.Control
            id="textfield1"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Text Field 1"
          />
        </div>

        {/* Field 2 */}
        <div className="flex flex-col w-full md:w-[300px]">
          <label
            htmlFor="textfield2"
            className="font-medium text-black dark:text-white mb-1"
          >
            Audit Status
          </label>
          <Form.Control
            id="textfield2"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Text Field 2"
          />
        </div>

        {/* Certification Type */}
        <div className="flex flex-col w-full md:w-[300px]">
          <label
            htmlFor="textfield3"
            className="font-medium text-black dark:text-white mb-1"
          >
            Certification Type
          </label>
          <Form.Control
            id="textfield3"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Text Field 3"
          />
        </div>

        {/* Standards */}
        <div className="flex flex-col w-full md:w-[300px]">
          <label
            htmlFor="textfield4"
            className="font-medium text-black dark:text-white mb-1"
          >
            Standards
          </label>
          <Form.Control
            id="textfield4"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Text Field 4"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-3">
        {/* Field 1 */}
        <div className="flex flex-col w-full md:w-[300px]">
          <label
            htmlFor="textfield5"
            className="font-medium text-black dark:text-white mb-1"
          >
            Audit Type
          </label>
          <Form.Control
            id="textfield5"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Text Field 5"
          />
        </div>

        {/* Zone */}
        <div className="flex flex-col w-full md:w-[300px]">
          <label
            htmlFor="textfield6"
            className="font-medium text-black dark:text-white mb-1"
          >
            Zone
          </label>
          <Form.Control
            id="textfield6"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Text Field 6"
          />
        </div>

        {/* NACE Code1 */}
        <div className="flex flex-col w-full md:w-[300px]">
          <label
            htmlFor="textfield7"
            className="font-medium text-black dark:text-white mb-1"
          >
            NACE Code1
          </label>
          <Form.Control
            id="textfield7"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Text Field 7"
          />
        </div>

        {/* NACE Code2 */}
        <div className="flex flex-col w-full md:w-[300px]">
          <label
            htmlFor="textfield8"
            className="font-medium text-black dark:text-white mb-1"
          >
            NACE Code2
          </label>
          <Form.Control
            id="textfield8"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Text Field 8"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-3">
        {/* Start Date */}
        <div className="flex flex-col w-full md:w-[290px]">
          <label
            htmlFor="textfield9"
            className="font-medium text-black dark:text-white mb-1"
          >
            Start Date
          </label>
          <Form.Control
            id="textfield9"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Text Field 9"
          />
        </div>

        {/* Closing Date */}
        <div className="flex flex-col w-full md:w-[285px]">
          <label
            htmlFor="textfield10"
            className="font-medium text-black dark:text-white mb-1"
          >
            Closing Date
          </label>
          <Form.Control
            id="textfield10"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Text Field 10"
          />
        </div>

        {/* Modified Date */}
        <div className="flex flex-col w-full md:w-[285px]">
          <label
            htmlFor="textfield11"
            className="font-medium text-black dark:text-white mb-1"
          >
            Modified Date
          </label>
          <Form.Control
            id="textfield11"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Text Field 11"
          />
        </div>
      </div>

      {/* Links */}
      <p
        onClick={handleOpenNoticeOfChange}
        className="text-blue-600 cursor-pointer mt-3"
      >
        Notice of Change
      </p>
      <p
        onClick={handleOpenNonConfirmity}
        className="text-blue-600 cursor-pointer"
      >
        Non Conformity
      </p>
      <p
        onClick={handleOpenScopeOfCertification}
        className="text-blue-600 cursor-pointer"
      >
        Scope of Certification
      </p>
      <p className="text-blue-600 cursor-pointer">
        NC Closure
      </p>
    </div>
  );
};

export default FileDropdown;
