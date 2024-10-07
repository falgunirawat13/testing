import React from 'react';
import HeaderWithButton from '../../components/Header/HeaderWithButton';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { BsTypeH4 } from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
const DraftCertificate = () => {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">
        Generate Draft Certificate
      </h1>
      <HeaderWithButton
        buttonLabel="New Draft Certificate"
        title=""
        onButtonClick={undefined}
      />
      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-3 space-y-4 sm:space-y-0">
        <div className="flex flex-col w-full">
          <label
            htmlFor="fileNo"
            className="font-medium text-black dark:text-white mb-1"
          >
            Draft Prepared Date
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
            Draft Issued Date
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
            Mode Of Communication
          </label>
          <Form.Select aria-label="Select Zone" className="p-2">
            <option>Select</option>
            {/* <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option> */}
          </Form.Select>
        </div>
      </div>
      <p className="mt-3">
        Please use below options when you want to send mail to Zone/Client with
        draft certificate attached
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-1  sm:space-y-0">
        <div className="flex flex-row items-center w-1/2">
          <label
            htmlFor="draftIssued"
            className="font-medium text-black dark:text-white mb-1 mr-2"
          >
            Send to client
          </label>
          <Form.Check
            id="draftIssued"
            type="checkbox"
            className="p-2"
            aria-label="Draft Issued Date"
          />
        </div>
        <div className="flex flex-row items-center w-full">
          <label
            htmlFor="draftIssued"
            className="font-medium text-black dark:text-white mb-1 mr-2"
          >
            Send to zone
          </label>
          <Form.Check
            id="draftIssued"
            type="checkbox"
            className="p-2"
            aria-label="Draft Issued Date"
          />
        </div>
      </div>
      <div className="flex flex-col w-full mt-3">
        <h3 className="font-medium text-black dark:text-white">Remarks</h3>
        <Form.Control
          as="textarea"
          aria-label="recommandedScopestatement"
          className="mt-2 p-2 border rounded-lg resize-none w-full"
          rows={2}
          placeholder="remarks"
        />
      </div>
      <div className="flex flex-row justify-start items-end mt-2">
        <Button variant="primary" className="mb-2 bg-[#152238]">
          Update
        </Button>
      </div>
      <h2 className="font-bold text-black text-lg sm:text-xl dark:text-white mr-2 mt-3 mb-3">
        Draft Certificate History
      </h2>
      <p className="font-bold text-black text-xs sm:text-xl dark:text-white mr-2  mb-3">
       (Generate draft certificates can ce viewed from View Document Section)
      </p>
      <div className="my-3">
        <div className="table-responsive">
          <Table hover className="table-striped table-borderless">
            <thead className="thead-light">
              <tr>
                <th className="py-2 px-4">Version</th>
                <th className="py-2 px-4">Prepared Date </th>
                <th className="py-2 px-4">Issued Date</th>
                <th className="py-2 px-4">Mode of Communication</th>
                <th className="py-2 px-4">Created</th>
                <th className="py-2 px-4">Action</th>
            </tr>
            </thead>
            
          </Table>
        </div>
      </div>
    </>
  );
};

export default DraftCertificate;
