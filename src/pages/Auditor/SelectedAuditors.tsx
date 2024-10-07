import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const SelectedAuditors = () => {
  const [auditors, setAuditors] = useState([]); // State to hold auditor data

  useEffect(() => {
    // Static data for auditors
    const staticAuditors = [
      {
        id: 1,
        name: 'John Doe',
        naceCodes1: '1234',
        subcategory: 'Category A',
        iafCode: '01',
        standard: 'ISO 9001',
        mandays: 5,
        roleInAudit: 'Lead Auditor',
      },
      {
        id: 2,
        name: 'Jane Smith',
        naceCodes1: '2345',
        subcategory: 'Category B',
        iafCode: '02',
        standard: 'ISO 14001',
        mandays: 7,
        roleInAudit: 'Auditor',
      },
      // Add more static auditors as needed
    ];

    setAuditors(staticAuditors); // Set the static data to the auditors state
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold text-black mb-1">Selected Auditors</h1>
      <div className="my-3">
        <div className="table-responsive">
          <Table hover className="table-striped table-borderless">
            <thead className="thead-light">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">NaceCodes1</th>
                <th className="py-2 px-4">Subcategory</th>
                <th className="py-2 px-4">IAF Code</th>
                <th className="py-2 px-4">Standard</th>
                <th className="py-2 px-4">Mandays</th>
                <th className="py-2 px-4">Role in Audit</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {auditors.map((auditor) => (
                <tr key={auditor.id}>
                  <td className="py-2 px-4">{auditor.name}</td>
                  <td className="py-2 px-4">{auditor.naceCodes1}</td>
                  <td className="py-2 px-4">{auditor.subcategory}</td>
                  <td className="py-2 px-4">{auditor.iafCode}</td>
                  <td className="py-2 px-4">{auditor.standard}</td>
                  <td className="py-2 px-4">{auditor.mandays}</td>
                  <td className="py-2 px-4">{auditor.roleInAudit}</td>
                  <td className="py-2 px-4">
                    {/* <Button variant="danger" size="sm">
                      Remove
                    </Button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default SelectedAuditors;
