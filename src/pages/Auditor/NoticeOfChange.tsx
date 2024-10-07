import React from 'react';
import Form from 'react-bootstrap/Form';
import HeaderWithButton from '../../components/Header/HeaderWithButton';

const NoticeOfChange = () => {
  // Sample data for dropdown and text areas
  const [tableData, setTableData] = React.useState([
    { changes: '', justification: '', details: '' },
  ]);

  // Handler to update table data
  const handleInputChange = (index, field, value) => {
    const updatedData = [...tableData];
    updatedData[index][field] = value;
    setTableData(updatedData);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-4">Notice of Changes</h1>
      <h2 className="font-bold text-black text-lg dark:text-white mr-2 mt-3">
        General Information
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-3 mb-3">
  {/* Field 1 */}
  <div className="flex flex-col w-full">
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
  <div className="flex flex-col w-full">
    <label
      htmlFor="textfield2"
      className="font-medium text-black dark:text-white mb-1"
    >
      Audit Criteria
    </label>
    <Form.Control
      id="textfield2"
      type="text"
      className="p-2 border rounded-lg"
      aria-label="Text Field 2"
    />
  </div>
</div>

      <HeaderWithButton
        buttonLabel="New Change"
        title="Changes affecting the Scope of Certification"
        onButtonClick={undefined}
      />
      <div className="   my-4">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
            <thead className="bg-white">
              <tr>
                <th className="px-6 py-3 text-left text-xm font-medium text-black border border-gray-900">
                  Changes
                </th>
                <th className="px-6 py-3 text-left text-xm font-medium text-black border border-gray-900">
                  Justification
                </th>
                <th className="px-6 py-3 text-left text-xm font-medium text-black border border-gray-900">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-900">
              {tableData.map((row, index) => (
                <tr key={index}>
                  {/* Dropdown for Changes */}
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-900">
                    <Form.Control
                      as="select"
                      value={row.changes}
                      onChange={(e) =>
                        handleInputChange(index, 'changes', e.target.value)
                      }
                      className="p-2 border rounded-lg"
                    >
                      <option value="">Select Change</option>
                      <option value="Update Policy">Update Policy</option>
                      <option value="Add Feature">Add Feature</option>
                      <option value="Remove Data">Remove Data</option>
                      {/* Add more options as needed */}
                    </Form.Control>
                  </td>

                  {/* Textarea for Justification */}
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-900">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={row.justification}
                      onChange={(e) =>
                        handleInputChange(index, 'justification', e.target.value)
                      }
                      className="p-2 border rounded-lg"
                    />
                  </td>

                  {/* Textarea for Details */}
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-900">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={row.details}
                      onChange={(e) =>
                        handleInputChange(index, 'details', e.target.value)
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
      <h2 className="font-bold text-black text-lg dark:text-white mr-2 mt-3">
        Administrative Information
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-3 mb-3">
  {/* Field 1 */}
  <div className="flex flex-col w-full">
    <label
      htmlFor="textfield1"
      className="font-medium text-black dark:text-white mb-1"
    >
      Client Contact Name
    </label>
    <Form.Control
      id="textfield1"
      type="text"
      className="p-2 border rounded-lg"
      aria-label="Text Field 1"
    />
  </div>

  {/* Field 2 */}
  <div className="flex flex-col w-full">
    <label
      htmlFor="textfield2"
      className="font-medium text-black dark:text-white mb-1"
    >
      Designation
    </label>
    <Form.Control
      id="textfield2"
      type="text"
      className="p-2 border rounded-lg"
      aria-label="Text Field 2"
    />
  </div>

  {/* Field 3 */}
  <div className="flex flex-col w-full">
    <label
      htmlFor="textfield3"
      className="font-medium text-black dark:text-white mb-1"
    >
      Phone
    </label>
    <Form.Control
      id="textfield3"
      type="text"
      className="p-2 border rounded-lg"
      aria-label="Text Field 3"
    />
  </div>
</div>

<div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-3 mb-3">
  {/* Field 4 */}
  <div className="flex flex-col w-full">
    <label
      htmlFor="textfield4"
      className="font-medium text-black dark:text-white mb-1"
    >
      Fax
    </label>
    <Form.Control
      id="textfield4"
      type="text"
      className="p-2 border rounded-lg"
      aria-label="Text Field 4"
    />
  </div>

  {/* Field 5 */}
  <div className="flex flex-col w-full">
    <label
      htmlFor="textfield5"
      className="font-medium text-black dark:text-white mb-1"
    >
      Email
    </label>
    <Form.Control
      id="textfield5"
      type="text"
      className="p-2 border rounded-lg"
      aria-label="Text Field 5"
    />
  </div>

  {/* Field 6 */}
  <div className="flex flex-col w-full">
    <label
      htmlFor="textfield6"
      className="font-medium text-black dark:text-white mb-1"
    >
      Location
    </label>
    <Form.Control
      id="textfield6"
      type="text"
      className="p-2 border rounded-lg"
      aria-label="Text Field 6"
    />
  </div>
</div>

      <div className="flex flex-col w-1/3">
          <label
            htmlFor="textfield2"
            className="font-medium text-black dark:text-white mb-1"
          >
            Postal Address
          </label>
          <Form.Control
            id="textfield2"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Text Field 2"
          />
        </div>
    </>
  );
};

export default NoticeOfChange;
