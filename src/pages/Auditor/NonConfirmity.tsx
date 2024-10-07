import React from 'react';
import HeaderWithButton from '../../components/Header/HeaderWithButton';
import Form from 'react-bootstrap/Form';

const NonConfirmity = () => {
  return (
    <>
    {/* <div className="p-4 bg-gray-100 border border-gray-300 rounded"> */}
      {/* Content for NonConfirmity */}
      <HeaderWithButton
        buttonLabel="New Non Conformity"
        title="Non-Conformity"
        onButtonClick={undefined}
      />
      <h2 className="font-bold text-black text-lg dark:text-white mr-2 mt-3">
        General Information
      </h2>

      {/* Use flex for the container to align items side by side */}
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
  {/* First column for NC Number input */}
  <div>
    <h3 className="font-bold text-black dark:text-white mt-3">NC Number</h3>
    <Form.Control
      type="text" // Set the input type to text
      placeholder="NC_1" // Set a placeholder
      aria-label="Enter Proposed Date"
      className="mt-2 w-full md:w-72" // Full width on small screens, fixed width on medium+
    />
  </div>

  {/* Second column for Monitoring Planned options */}
  <div>
    <p className="font-bold text-black dark:text-white mt-3">Is Major NC?</p>

    {/* Flex container for radio buttons */}
    <div className="flex space-x-4 mt-2">
      {/* Radio Button for Yes */}
      <div className="flex items-center">
        <input
          type="radio"
          id="monitoringYes"
          name="majorNC"
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
          name="majorNC"
          value="no"
          className="mr-2"
        />
        <label
          htmlFor="monitoringNo" // Changed to correct "id" for consistency
          className="font-medium text-black dark:text-white"
        >
          No
        </label>
      </div>
    </div>
  </div>
</div>

<h3 className="font-bold text-black dark:text-white mr-2 mt-3">
  NC raised by
</h3>
<Form.Control
  as="textarea"
  aria-label="NC raised by"
  className="mt-2 border rounded-lg resize-none w-full md:w-[800px]" // Full width on small screens, fixed width on medium+
  rows={2} // Adjust the number of rows as needed
/>

<div className="flex flex-col md:flex-row md:space-x-4 mt-3">
  {/* Contract Review Remarks Section */}
  <div className="flex flex-col w-full md:w-1/2">
    <h3 className="font-bold text-black dark:text-white">
      Standard Clause
    </h3>
    {/* Textarea for Standard Clause */}
    <Form.Control
      as="textarea"
      aria-label="standardClause"
      className="mt-2 p-2 border rounded-lg resize-none w-full"
      rows={2} // Adjust the number of rows as needed
    />
  </div>
  
  <div className="flex flex-col w-full md:w-1/2  md:mt-0">
    <h3 className="font-bold text-black dark:text-white">
      Process/Function/Dept:
    </h3>
    {/* Textarea for Process/Function/Dept */}
    <Form.Control
      as="textarea"
      aria-label="Process/Function/Dept"
      className="mt-2 p-2 border rounded-lg resize-none w-full"
      rows={2} // Adjust the number of rows as needed
    />
  </div>
</div>

      <h3 className="font-bold text-black text-lg dark:text-white mr-2 mt-4 mb-4">
        Non Conformity Statement and Object evidence observed
      </h3>
      <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
  {/* Finding/Statement Section */}
  <div className="flex flex-col w-full md:w-1/2">
    <h3 className="font-bold text-black dark:text-white">
      Finding/Statement:
    </h3>
    {/* Textarea for Finding/Statement */}
    <Form.Control
      as="textarea"
      aria-label="finding/statement"
      className="mt-2 p-2 border rounded-lg resize-none w-full"
      rows={2} // Adjust the number of rows as needed
    />
  </div>

  <div className="flex flex-col w-full md:w-1/2 mt-3 md:mt-0">
    <h3 className="font-bold text-black dark:text-white">
      Objective Evidence
    </h3>
    {/* Textarea for Objective Evidence */}
    <Form.Control
      as="textarea"
      aria-label="Process/Function/Dept"
      className="mt-2 p-2 border rounded-lg resize-none w-full"
      rows={4} // Adjust the number of rows as needed
    />
  </div>
</div>

      <div className="flex flex-col w-full">
      <h3 className="font-bold text-black dark:text-white">
            Requirements
          </h3>
        <Form.Control
          as="textarea" // Correct the 'type' attribute to 'as' for textarea in react-bootstrap
          aria-label="requirements"
          className="mt-2 border rounded-lg resize-none w-full" // Use w-full here to fill the div width
          rows={4}
        />
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
    {/* </div> */}
    </>
  );
};

export default NonConfirmity;
