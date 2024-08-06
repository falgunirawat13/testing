// import React from 'react'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import TableComponent from '../../components/Tables/TableTwo';
import { useState } from 'react';
function Contract() {
    const columns = [
        'File No.',
        'Client Name',
        'CR Status',
        'Certification Type',
        'Standards',
        'Zone',
        'Questionnaire Received Date',
        'CR Prepared Date',
        'CR Approved Date',
        'CR Prepared By',
        'CR Approved By',
        'Quotation Submission Date',
        'Order Received Date',
        'CR Modified By'
      ];
    
      const leadData = [
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
      ];

      const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(leadData);

  const handleSearch=()=>{
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
                <TableComponent data={filteredData}
                columns={columns} />
            </div>

      </>
  )
}

export default Contract;
