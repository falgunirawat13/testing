// import React from 'react'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import TableComponent from '../../components/Tables/TableTwo';
import { useState } from 'react';

function Contract() {
  const columns = [
    { header: 'File No.', accessor: 'fileNo' },
    { header: 'Client Name', accessor: 'clientName' },
    { header: 'CR Status', accessor: 'crStatus' },
    { header: 'Certification Type', accessor: 'certificationType' },
    { header: 'Standards', accessor: 'standards' },
    { header: 'Zone', accessor: 'zone' },
    { header: 'Questionnaire Received Date', accessor: 'questionnaireReceivedDate' },
    { header: 'CR Prepared Date', accessor: 'crPreparedDate' },
    { header: 'CR Approved Date', accessor: 'crApprovedDate' },
    { header: 'CR Prepared By', accessor: 'crPreparedBy' },
    { header: 'CR Approved By', accessor: 'crApprovedBy' },
    { header: 'Quotation Submission Date', accessor: 'quotationSubmissionDate' },
    { header: 'Order Received Date', accessor: 'orderReceivedDate' },
    { header: 'CR Modified By', accessor: 'crModifiedBy' },
  ];
  
    const [leadData, setLeadData] = useState([
      { 
        fileNo: 'B/4/Q', 
        clientName: 'bajbj', 
        crStatus: 'Forwarded For Quotation', 
        certificationType: 'New', 
        standards: 'ISO 9001:2015', 
        zone: 'West Zone', 
        questionnaireReceivedDate: '27/10/2017', 
        crPreparedDate: '27/10/2017', 
        crApprovedDate: '27/10/2017', 
        crPreparedBy: 'Raj Malwankar', 
        crApprovedBy: 'Mohit Tandel', 
        quotationSubmissionDate: '27/10/2017', 
        orderReceivedDate: '27/10/2017', 
        crModifiedBy: 'Raj Malwankar' 
      },
      { 
        fileNo: 'B/4/Q', 
        clientName: 'poiuytr', 
        crStatus: 'Forwarded For Quotation', 
        certificationType: 'New', 
        standards: 'ISO 9001:2015', 
        zone: 'West Zone', 
        questionnaireReceivedDate: '27/10/2017', 
        crPreparedDate: '27/10/2017', 
        crApprovedDate: '27/10/2017', 
        crPreparedBy: 'Raj Malwankar', 
        crApprovedBy: 'Mohit Tandel', 
        quotationSubmissionDate: '27/10/2017', 
        orderReceivedDate: '27/10/2017', 
        crModifiedBy: 'Raj Malwankar' 
      },
      { 
        fileNo: 'B/4/Q', 
        clientName: 'gyui', 
        crStatus: 'Forwarded For Quotation', 
        certificationType: 'New', 
        standards: 'ISO 9001:2015', 
        zone: 'West Zone', 
        questionnaireReceivedDate: '27/10/2017', 
        crPreparedDate: '27/10/2017', 
        crApprovedDate: '27/10/2017', 
        crPreparedBy: 'Raj Malwankar', 
        crApprovedBy: 'Mohit Tandel', 
        quotationSubmissionDate: '27/10/2017', 
        orderReceivedDate: '27/10/2017', 
        crModifiedBy: 'Raj Malwankar' 
      },
      // Add more rows as needed
    ]);
  
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(leadData);
  
    const handleSearch = () => {
      if (searchTerm.trim() === '') {
        setFilteredData(leadData);
      } else {
        const filtered = leadData.filter(item =>
          item.clientName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
      }
    };
  
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
      if (e.target.value.trim() === '') {
        setFilteredData(leadData);
      }
    };
  
    const handleDelete = (index) => {
      const newData = leadData.filter((a, i) => i !== index);
      console.log(newData)
      setLeadData(newData);
      setFilteredData(newData); // Update filtered data if search is active
    };
  
    return (
      <>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Contract View
          </h2>
        </div>
        <div className="container mt-4">
          <div className="d-flex mb-3">
            <FormControl
              placeholder="Search by Name"
              className="p-3 me-2 flex-grow-1"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <Button variant="outline-secondary" onClick={handleSearch}>Search</Button>
          </div>
          <TableComponent data={filteredData} columns={columns} onDelete={handleDelete} />
        </div>
      </>
    );
  }
  
  export default Contract;