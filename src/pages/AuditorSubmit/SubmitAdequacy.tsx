import React from 'react';
import Form from 'react-bootstrap/Form';

const AdequacyInformation = () => {
  const [tableData, setTableData] = React.useState([
    {
      criteria:
        'Is the audit documentation complete (as defined in the master list of form)?',
      changes: 'NC',
      input1: 'Some input here',
      input2: 'Some more input here',
    },
    {
      criteria: 'Is the relevant applicable version of document in use',
      changes: 'NC',
      input1: 'Another input',
      input2: 'Yet another input',
    },
  ]);

  const [formData, setFormData] = React.useState({
    clientName: 'Client Name Example',
    fileNo: 'File No Example',
    auditType: 'Audit Type Example',
    fromDate: '2024-01-01',
    toDate: '2024-12-31',
    reportSubmissionDate: '2024-01-15',
    coreProcessActivitiesDoneBy: 'Department Example',
    remarks: 'Sample remarks here',
  });

  const [technicalReviewData, setTechnicalReviewData] = React.useState([
    {
      criteria:
        'During Stage1/Renewal/Transfer Audit: Comment on the confirmation of the information provided (by the organization) in the questionnaire which is used in the contract review process',
      changes: 'NC',
      input1: 'Review input here',
      input2: 'Additional review input here',
    },
    {
      criteria:
        'Comments on scope of certification based on the coverage of audit report and for the given scope, accreditation available with [RvA/NABCB/ANAB/Unaccredited]',
      changes: 'NC',
      input1: 'Certification scope comment',
      input2: 'Scope accreditation comment',
    },
    {
      criteria: 'Status of Team Competence',
      changes: 'NC',
      input1: 'Competence status here',
      input2: 'Additional competence status',
    },
  ]);

  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-4">
       Adequacy Checklist View
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6 w-full">
  {/* Card Header with Heading and Horizontal Line */}
  <h2 className="font-bold text-black text-xl dark:text-white mb-2">
    General Information
  </h2>
  <hr className="font-bold border border-black mb-2" />

  {/* Display Form Data */}
  <div className="space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex flex-col">
        <label className="font-semibold text-black mb-2">Client Name</label>
        <div className="text-black">
          {formData.clientName}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-black mb-2">File No.</label>
        <div className="text-black">
          {formData.fileNo}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-black mb-2">Audit Type</label>
        <div className="text-black">
          {formData.auditType}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-black mb-2">From Date</label>
        <div className="text-black">
          {formData.fromDate}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-black mb-2">To Date</label>
        <div className="text-black">
          {formData.toDate}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-black mb-2">Report Submission Date</label>
        <div className="text-black">
          {formData.reportSubmissionDate}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-black mb-2">Core Process Activities Done By?</label>
        <div className="text-black">
          {formData.coreProcessActivitiesDoneBy}
        </div>
      </div>
    </div>

    <div className="flex flex-col">
      <h3 className="font-semibold text-black mb-2">Remarks</h3>
      <div className="text-black">
        {formData.remarks}
      </div>
    </div>
  </div>
</div>


      <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3">
        Package Review Status
      </h2>
      <div>
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
                  <td className="px-6 py-4 whitespace-normal border border-gray-900 w-1/2">
                    {row.criteria}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap border border-gray-900 w-1/4">
                    <p className="p-2 border rounded-lg">{row.changes}</p>
                    <p className="p-2 border rounded-lg">{row.input1}</p>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap border border-gray-900 w-1/4">
                    <p className="p-2 border rounded-lg">{row.changes}</p>
                    <p className="p-2 border rounded-lg">{row.input2}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="font-bold text-black text-xl dark:text-white mr-2 mt-3">
        Technical Review Checklist
      </h2>
      <div>
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
              {technicalReviewData.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-normal border border-gray-900 w-1/2">
                    {row.criteria}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap border border-gray-900 w-1/4">
                    <p className="p-2 border rounded-lg">{row.changes}</p>
                    <p className="p-2 border rounded-lg">{row.input1}</p>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap border border-gray-900 w-1/4">
                    <p className="p-2 border rounded-lg">{row.changes}</p>
                    <p className="p-2 border rounded-lg">{row.input2}</p>
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

export default AdequacyInformation;
