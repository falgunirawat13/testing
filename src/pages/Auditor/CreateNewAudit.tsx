import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Form from 'react-bootstrap/Form'; // Importing Form component from Bootstrap
import Button from 'react-bootstrap/Button'; // Importing Button component from Bootstrap
import HeaderWithButton from '../../components/Header/HeaderWithButton';
import AuditorTable from './AuditorTable';
import OtherInformation from './OtherInformation';
import SelectedAuditors from './SelectedAuditors';

const AuditPlan = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-4">
        Auditor Allocation Information
      </h1>
      <div className="audit-plan-container flex flex-col mt-4">
      {/* General Information Section */}
      <div className="flex flex-col mb-4">
        <h3 className="font-medium text-black dark:text-white">
          General Information
        </h3>
        {/* Dropdown for General Information */}
        <Form.Select
          aria-label="Select General Information"
          className="mt-2 w-full md:w-1/2"
        >
          <option>Select General Info</option>
          <option value="1">General Info Option 1</option>
          <option value="2">General Info Option 2</option>
          <option value="3">General Info Option 3</option>
        </Form.Select>
      </div>

      {/* Audit Types and Proposed Date Sections */}
      <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
        {/* Audit Types Section */}
        <div className="flex flex-col mb-4 md:mb-0 w-full md:w-auto">
          <h3 className="font-medium text-black dark:text-white">
            Audit Types
          </h3>
          {/* Dropdown for Audit Types */}
          <Form.Select
            aria-label="Select Audit Type"
            className="mt-2 w-full md:w-[290px]"
          >
            <option>Select Audit Type</option>
            <option value="1">Audit Type Option 1</option>
            <option value="2">Audit Type Option 2</option>
            <option value="3">Audit Type Option 3</option>
          </Form.Select>
        </div>

        {/* Proposed Date Section */}
        <div className="flex flex-col w-full md:w-auto">
          <h3 className="font-medium text-black dark:text-white">
            Proposed Date
          </h3>
          {/* Input for Proposed Date */}
          <Form.Control
            type="text"
            placeholder="Enter Proposed Date"
            aria-label="Enter Proposed Date"
            className="mt-2 w-full md:w-[290px]"
          />

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row md:justify-end items-center mt-4 space-y-2 md:space-y-0 md:space-x-2">
            <button
              className="w-full md:w-auto flex justify-center shadow-md rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-lg dark:border-strokedark dark:text-white"
              type="submit"
            >
              Close
            </button>
            <button
              className="w-full md:w-auto flex justify-center rounded bg-[#152238] py-2 px-2 font-medium text-white hover:bg-opacity-90"
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Auditor Allocation Section */}
      <h1 className="text-3xl font-bold text-black mb-4">Auditor Allocation</h1>
      <div className="flex flex-col md:flex-row mb-4 space-y-4 md:space-y-0 md:space-x-6">
      {/* Select Zone Section */}
      <div className="flex flex-col w-full md:w-auto">
        <h3 className="font-medium text-black dark:text-white">
          Select Zone
        </h3>
        {/* Dropdown for Proposed Date */}
        <Form.Select
          aria-label="Select Proposed Date"
          className="mt-2 w-full md:w-[290px]"
        >
          <option>Select Proposed Date</option>
          <option value="1">Proposed Date Option 1</option>
          <option value="2">Proposed Date Option 2</option>
          <option value="3">Proposed Date Option 3</option>
        </Form.Select>

        {/* Buttons Section */}
        <div className="flex justify-start items-end mt-2">
        <button
              className="w-full md:w-auto flex justify-center rounded bg-[#152238] py-2 px-2 font-medium text-white hover:bg-opacity-90"
              type="submit"
            >
              Get Auditors
            </button>
        </div>
      </div>

      {/* Contract Review Remarks Section */}
      <div className="flex flex-col w-full">
        <h3 className="font-medium text-black dark:text-white">
          Contract Review Remarks
        </h3>
        {/* Textarea for Contract Review Remarks */}
        <Form.Control
          as="textarea"
          aria-label="Contract Review Remarks"
          className="mt-2 p-2 border rounded-lg resize-none w-full md:w-[800px]"
          rows={2} // Adjust the number of rows as needed
        />

        <div className="flex flex-col mt-2 ">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <span className="font-medium text-black dark:text-white mb-2 md:mb-0 md:mr-4">
              Plan by Nacecode-
            </span>
            <div className="flex flex-row">
              <div className="flex items-center mr-2">
                <Form.Check
                  type="radio"
                  id="radio1"
                  label="Revision1"
                  name="reviewOption"
                />
              </div>
              <div className="flex items-center">
                <Form.Check
                  type="radio"
                  id="radio2"
                  label="Revision2"
                  name="reviewOption"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <OtherInformation />
      <SelectedAuditors />

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
      {/* Contract Review Remarks Section */}
      <div className="flex flex-col w-full md:w-1/2">
        <h3 className="font-bold text-black dark:text-white">
          Requested Scope
        </h3>
        {/* Textarea for Contract Review Remarks */}
        <Form.Control
          as="textarea"
          aria-label="Contract Review Remarks"
          className="mt-2 p-2 border rounded-lg resize-none w-full"
          rows={2} // Adjust the number of rows as needed
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <h3 className="font-bold text-black dark:text-white">
          Exclusions if applicable
        </h3>
        {/* Textarea for Contract Review Remarks */}
        <Form.Control
          as="textarea"
          aria-label="Contract Review Remarks"
          className="mt-2 p-2 border rounded-lg resize-none w-full"
          rows={2} // Adjust the number of rows as needed
        />
      </div>
    </div>

      {/* ------------------------------------------------------------------------------------------------ */}
      <div className="flex flex-col mt-3">
        <div className="flex">
          <h3 className="font-bold text-black dark:text-white mr-2">
            Planner notes -
          </h3>
          <p>
            1) Monitoring/Evaluation Detail, 2) Onetime approval, 3) Date of
            multisite Audit, 4) Change in mandays if any, 5) Any other
            information as appropriate
          </p>
        </div>

        {/* Full-Width Textarea */}
        <Form.Control
          as="textarea"
          aria-label="Planner Notes"
          className="mt-2 p-2 border rounded-lg resize-none w-full" // w-full ensures the textarea spans full width
          rows={2} // Adjust the number of rows as needed
        />
      </div>
      {/* ---------------------------------------------------------------------------------------------------- */}

      <div className="flex flex-col md:flex-row md:space-x-4 mt-3 space-y-4 md:space-y-0">
  {/* Field 1 */}
  <div className="flex flex-col w-full md:w-1/4">
    <label
      htmlFor="textfield1"
      className="font-medium text-black dark:text-white mb-1"
    >
      No. of AOCs
    </label>
    <Form.Control
      id="textfield1"
      type="text"
      className="p-2 border rounded-lg"
      aria-label="Text Field 1"
    />
  </div>

  {/* Field 2 */}
  <div className="flex flex-col w-full md:w-1/4">
    <label
      htmlFor="textfield2"
      className="font-medium text-black dark:text-white mb-1"
    >
      No. of Major NCs
    </label>
    <Form.Control
      id="textfield2"
      type="text"
      className="p-2 border rounded-lg"
      aria-label="Text Field 2"
    />
  </div>

  {/* Field 3 */}
  <div className="flex flex-col w-full md:w-1/4">
    <label
      htmlFor="textfield3"
      className="font-medium text-black dark:text-white mb-1"
    >
      No. of OFI
    </label>
    <Form.Control
      id="textfield3"
      type="text"
      className="p-2 border rounded-lg"
      aria-label="Text Field 3"
    />
  </div>

  {/* Field 4 */}
  <div className="flex flex-col w-full md:w-1/4">
    <label
      htmlFor="textfield4"
      className="font-medium text-black dark:text-white mb-1"
    >
      No. of Minor NCs
    </label>
    <Form.Control
      id="textfield4"
      type="text"
      className="p-2 border rounded-lg"
      aria-label="Text Field 4"
    />
  </div>
</div>


      {/* -------------------------------------------------------------------------------------------------------------- */}
      <div className="mt-10">
        <p className="font-medium text-black dark:text-white">
          Is any Monitoring Planned?
        </p>
        {/* Container for radio buttons */}
        <div className="flex flex-row space-x-4 mt-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="monitoringYes"
              name="monitoringPlanned"
              value="yes"
              className="mr-2"
            />
            <label
              htmlFor="monitoringYes"
              className="font-medium text-black dark:text-white"
            >
              Yes
            </label>
          </div>

          {/* Radio Button for No */}
          <div className="flex items-center">
            <input
              type="radio"
              id="monitoringNo"
              name="monitoringPlanned"
              value="no"
              className="mr-2"
            />
            <label
              htmlFor="monitoringNo"
              className="font-medium text-black dark:text-white"
            >
              No
            </label>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="font-medium text-black dark:text-white">
          Is any Accreditation Body involved?
        </p>
        <div className="flex flex-row space-x-4 mt-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="accreditationYes"
              name="accreditationBody"
              value="yes"
              className="mr-2"
            />
            <label
              htmlFor="accreditationYes"
              className="font-medium text-black dark:text-white"
            >
              Yes
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="accreditationNo"
              name="accreditationBody"
              value="no"
              className="mr-2"
            />
            <label
              htmlFor="accreditationNo"
              className="font-medium text-black dark:text-white"
            >
              No
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end items-end mt-2">
        <button
          className="mr-2 flex justify-center shadow-5 rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-2 dark:border-strokedark dark:text-white"
          type="submit"
        >
          Close
        </button>
        <button
          className="flex justify-center rounded bg-[#152238] py-2 px-2 font-medium text-gray hover:bg-opacity-90"
          type="submit"
        >
          Save Changes
        </button>
      </div>
    </>
  );
};

export default AuditPlan;
