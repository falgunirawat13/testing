import React from 'react';
import Form from 'react-bootstrap/Form';
import TechnicalReview from './TechnicalReview';

const AdequacyInformation = () => {
  const [tableData, setTableData] = React.useState([
    {
      criteria:
        'Is the audit documentation complete (as defined in the master list of form)?',
      changes: '',
      input1: '',
      input2: '',
    },
    {
      criteria: 'Is the relevant applicable version of document in use',
      changes: '',
      input1: '',
      input2: '',
    },
  ]);

  // Handler to update table data
  const handleInputChange = (index, field, value) => {
    const updatedData = [...tableData];
    updatedData[index][field] = value;
    setTableData(updatedData);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-4">
        Adequacy Checklist Information
      </h1>
      <h2 className="font-bold text-black text-2xl dark:text-white mr-2 mt-3 mb-3">
        General Information
      </h2>
      <div>
        {/* Responsive Flex Container for Form Fields */}
        <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
          {/* Client Name Field */}
          <div className="flex flex-col w-full mb-4 md:mb-0">
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

          {/* File No. Field */}
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="textfield2"
              className="font-medium text-black dark:text-white mb-1"
            >
              File No.
            </label>
            <Form.Control
              id="textfield2"
              type="text"
              className="p-2 border rounded-lg"
              aria-label="Text Field 2"
            />
          </div>

         
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="textfield3"
              className="font-medium text-black dark:text-white mb-1"
            >
              Audit Type
            </label>
            <Form.Control
              id="textfield3"
              type="text"
              className="p-2 border rounded-lg"
              aria-label="Text Field 3"
            />
          </div>
        </div>

        {/* Second Row of Form Fields */}
        <div className="flex flex-col md:flex-row md:space-x-4 mt-3">
          {/* From Date Field */}
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="textfield4"
              className="font-medium text-black dark:text-white mb-1"
            >
              From Date
            </label>
            <Form.Control
              id="textfield4"
              type="text"
              className="p-2 border rounded-lg"
              aria-label="Text Field 4"
            />
          </div>

          {/* To Date Field */}
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="textfield5"
              className="font-medium text-black dark:text-white mb-1"
            >
              To Date
            </label>
            <Form.Control
              id="textfield5"
              type="text"
              className="p-2 border rounded-lg"
              aria-label="Text Field 5"
            />
          </div>

          {/* Report Submission Date Field */}
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="textfield6"
              className="font-medium text-black dark:text-white mb-1"
            >
              Report Submission Date
            </label>
            <Form.Control
              id="textfield6"
              type="text"
              className="p-2 border rounded-lg"
              aria-label="Text Field 6"
            />
          </div>

          {/* Core Process Activities Done By Field */}
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label
              htmlFor="textfield7"
              className="font-medium text-black dark:text-white mb-1"
            >
              Core Process Activities Done By?
            </label>
            <Form.Control
              id="textfield7"
              type="text"
              className="p-2 border rounded-lg"
              aria-label="Text Field 7"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full mt-3">
        <h3 className="font-medium text-black dark:text-white">Remarks</h3>
        <Form.Control
          as="textarea"
          aria-label="remarks"
          className="mt-2 p-2 border rounded-lg resize-none w-full"
          rows={2}
          placeholder="Enter remarks here"
        />
      </div>

      <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3">
        Package Review Status
      </h2>
      <div className="">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
            <thead className="bg-white">
              <tr>
                <th className="px-6 py-3 text-left text-xm font-medium text-black border border-gray-900 w-1/2">
                  Criteria
                </th>
                <th className="px-6 py-3 text-left text-xm font-medium text-black border border-gray-900 w-1/4">
                  Audit Report Reviewer
                </th>
                <th className="px-6 py-3 text-left text-xm font-medium text-black border border-gray-900 w-1/4">
                  Decision Maker
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-900">
              {tableData.map((row, index) => (
                <tr key={index}>
                  {/* Criteria */}
                  <td className="px-6 py-4 whitespace-normal border border-gray-900 w-1/2">
                    {row.criteria}
                  </td>

                  {/* Dropdown and Textarea for Audit Report Reviewer */}
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-900 w-1/4">
                    <Form.Control
                      as="select"
                      value={row.changes}
                      onChange={(e) =>
                        handleInputChange(index, 'changes', e.target.value)
                      }
                      className="p-2 mb-2 border rounded-lg"
                    >
                      <option value="">Select</option>
                      <option value="NC">NC</option>
                      {/* Add more options as needed */}
                    </Form.Control>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={row.input1}
                      onChange={(e) =>
                        handleInputChange(index, 'input1', e.target.value)
                      }
                      className="p-2 border rounded-lg"
                    />
                  </td>

                  {/* Dropdown and Textarea for Decision Maker */}
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-900 w-1/4">
                    <Form.Control
                      as="select"
                      value={row.changes}
                      onChange={(e) =>
                        handleInputChange(index, 'changes', e.target.value)
                      }
                      className="p-2 mb-2 border rounded-lg"
                    >
                      <option value="">Select</option>
                      <option value="NC">NC</option>
                      {/* Add more options as needed */}
                    </Form.Control>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={row.input2}
                      onChange={(e) =>
                        handleInputChange(index, 'input2', e.target.value)
                      }
                      className="p-2 border rounded-lg"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <TechnicalReview />
    </>
  );
};
export default AdequacyInformation;
