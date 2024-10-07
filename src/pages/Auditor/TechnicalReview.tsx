import React from 'react';
import Form from 'react-bootstrap/Form';

const TechnicalReview = () => {
  const [tableData, setTableData] = React.useState([
    {
      criteria: 'During Stage1/Renewal/Transfer Audit: Comment on the confirmation of the information provided (by the organization) in the questionnaire which is used in the contract review process',
      changes: '',
      input1: '',
      input2: ''
    },
    {
      criteria: 'Comments on scope of certification based on the coverage of audit report and for the given scope, accreditation available with [RvA/NABCB/ANAB/Unaccredited]',
      changes: '',
      input1: '',
      input2: ''
    },
    {
      criteria: 'Status of Team Competence',
      changes: '',
      input1: '',
      input2: ''
    }
  ]);

  // Handler to update table data
  const handleInputChange = (index, field, value) => {
    const updatedData = [...tableData];
    updatedData[index][field] = value;
    setTableData(updatedData);
  };

  return (
    <>
      <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3">
        Technical Review Checklist
      </h2>
      <div className="">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
            <thead className="bg-white">
              <tr>
                <th className="px-4 py-3 text-left text-xm font-medium text-black border border-gray-900 w-1/2">
                  Criteria
                </th>
                <th className="px-4 py-3 text-left text-xm font-medium text-black border border-gray-900 w-1/4">
                  Audit Report Reviewer
                </th>
                <th className="px-4 py-3 text-left text-xm font-medium text-black border border-gray-900 w-1/4">
                  Decision Maker
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-900">
              {tableData.map((row, index) => (
                <tr key={index}>
                  {/* Criteria */}
                  <td className="px-4 py-4 whitespace-normal border border-gray-900 w-1/2">
                    {row.criteria}
                  </td>

                  {/* Dropdown and Textarea for Audit Report Reviewer */}
                  <td className="px-4 py-4 whitespace-nowrap border border-gray-900 w-1/4">
                    <Form.Control
                      as="select"
                      value={row.changes}
                      onChange={(e) => handleInputChange(index, 'changes', e.target.value)}
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
                      onChange={(e) => handleInputChange(index, 'input1', e.target.value)}
                      className="p-2 border rounded-lg"
                    />
                  </td>

                  {/* Dropdown and Textarea for Decision Maker */}
                  <td className="px-4 py-4 whitespace-nowrap border border-gray-900 w-1/4">
                    <Form.Control
                      as="select"
                      value={row.changes}
                      onChange={(e) => handleInputChange(index, 'changes', e.target.value)}
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
                      onChange={(e) => handleInputChange(index, 'input2', e.target.value)}
                      className="p-2 border rounded-lg"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TechnicalReview;
