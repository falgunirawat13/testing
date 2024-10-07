import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const OtherInformation = () => {
  const [users, setUsers] = useState([]); // State to hold user data
  const [filteredUsers, setFilteredUsers] = useState([]); // State for filtered user data

  useEffect(() => {
    const staticUsers = [
      {
        id: 1,
        auditType: 'Internal',
        standard: 'ISO 9001',
        mandays: 5,
        naceCode1: '1234',
        naceCode2: '5678',
        iafCode: '01',
        risk: 'Low',
        subCategory: 'Category A'
      },
      {
        id: 2,
        auditType: 'External',
        standard: 'ISO 14001',
        mandays: 7,
        naceCode1: '2345',
        naceCode2: '6789',
        iafCode: '02',
        risk: 'High',
        subCategory: 'Category B'
      },
      // Add more static users as needed
    ];
    
    setUsers(staticUsers);
    setFilteredUsers(staticUsers);
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold text-black mb-1">Other Information</h1>
      <div className=" my-3">
        <div className="table-responsive">
          <Table hover className="table-striped table-borderless">
            <thead className="thead-light">
              <tr>
                <th className="py-2 px-4">Audit Type</th>
                <th className="py-2 px-4">Standard</th>
                <th className="py-2 px-4">Mandays</th>
                <th className="py-2 px-4">NACE code1</th>
                <th className="py-2 px-4">NACE code2</th>
                <th className="py-2 px-4">IAF code</th>
                <th className="py-2 px-4">Risk</th>
                <th className="py-2 px-4">SubCategory(FSMS)</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td className="py-2 px-4">{user.auditType}</td>
                  <td className="py-2 px-4">{user.standard}</td>
                  <td className="py-2 px-4">{user.mandays}</td>
                  <td className="py-2 px-4">{user.naceCode1}</td>
                  <td className="py-2 px-4">{user.naceCode2}</td>
                  <td className="py-2 px-4">{user.iafCode}</td>
                  <td className="py-2 px-4">{user.risk}</td>
                  <td className="py-2 px-4">{user.subCategory}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default OtherInformation;
