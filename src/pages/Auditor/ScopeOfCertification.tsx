import React from 'react';
import Form from 'react-bootstrap/Form';
const ScopeOfCertification = () => {
  return (
    <>
      
      <h1 className="text-3xl font-bold text-black mb-4">
        Scope of Certification
      </h1>
      <h2 className="font-bold text-black text-2xl dark:text-white mr-2 mt-3 mb-3">
        General Information
      </h2>
      <div className="flex flex-col w-full">
        <h3 className="font-bold text-black dark:text-white">
          Recommanded Scope Statement
        </h3>
        {/* Textarea for Contract Review Remarks */}
        <Form.Control
          as="textarea"
          aria-label="recommendedScopestatement"
          className="mt-2 p-2 border rounded-lg resize-none w-full"
          rows={2} // Adjust the number of rows as needed
          placeholder="Recommended Statement"
        />
      </div>
      <div className="flex flex-col w-full mt-3">
        <h3 className="font-bold text-black dark:text-white">
          Exclusion(s) [For eg. applicable clauses of MS standard,
          site(s),boundaries, process(es),product(s)etc.]
        </h3>
        {/* Textarea for Contract Review Remarks */}
        <Form.Control
          as="textarea"
          aria-label="recommandedScopestatement"
          className="mt-2 p-2 border rounded-lg resize-none w-full"
          rows={2} // Adjust the number of rows as needed
          placeholder="Exclusion"
        />
      </div>
     
      <div className="mt-3">
      <h3 className="font-bold text-black dark:text-white">Is scope different from Questionnaire?</h3>

        <div className="flex flex-row space-x-4 mt-2">
          <div className="flex items-center space-x-2 ">
            <input
              type="radio"
              id="scope"
              name="scope"
              value="yes"
            //   className="mr-2"
            />
            <label
              htmlFor="accreditationYes"
              className="font-medium text-black dark:text-white"
            >
              Yes
            </label>
            <input
              type="radio"
              id="scope"
              name="scope"
              value="no"
            //   className="mr-2"
            />
            <label
              htmlFor="accreditationNo"
              className="font-medium text-black dark:text-white"
            >
              No
            </label>
          </div>

          {/* <div className="flex items-center ">
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
          </div> */}
        </div>
      </div>
      <div className="flex flex-col w-full mt-3">
        <h3 className="font-bold text-black dark:text-white">Justification</h3>
        {/* Textarea for Contract Review Remarks */}
        <Form.Control
          as="textarea"
          aria-label="recommandedScopestatement"
          className="mt-2 p-2 border rounded-lg resize-none w-full"
          rows={2} // Adjust the number of rows as needed
          placeholder="Justification"
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
    </>
  );
};

export default ScopeOfCertification;
