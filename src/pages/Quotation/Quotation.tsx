import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import TableComponent from '../../components/Tables/TableTwo';
import { useState } from 'react';
import HeaderWithButton from '../../components/Header/HeaderWithButton';
import { useNavigate } from 'react-router-dom';

function Contract() {

  const navigate=useNavigate();
  const columns = [
    { Header: 'File No.', accessor: 'fileNo' },
    { Header: 'Client', accessor: 'client' },
    { Header: 'Any Discount', accessor: 'anyDiscount' },
    { Header: 'Discount', accessor: 'discount' },
    { Header: 'Quotation Status', accessor: 'quotationStatus' },
    { Header: 'Final Quotation Amount', accessor: 'finalQuotationAmount' },
    { Header: 'Standards', accessor: 'standards' },
    { Header: 'Certificate Type', accessor: 'certificateType' },
    { Header: 'Zone', accessor: 'zone' },
    { Header: 'First Year Value', accessor: 'firstYearValue' },
    { Header: 'Questionnaire Received Date', accessor: 'questionnaireReceivedDate' },
    { Header: 'Contract Review Approval Date', accessor: 'contractReviewApprovalDate' },
  ];

  const [leadData, setLeadData] = useState([
    { 
      fileNo: '', 
      client: 'IRQ5', 
      anyDiscount: 'No', 
      discount: 0, 
      quotationStatus: 'Incomplete', 
      finalQuotationAmount: 0, 
      standards: 'BRC FOOD', 
      certificateType: 'Certification', 
      zone: 'East Zone', 
      firstYearValue: 0, 
      questionnaireReceivedDate: '25/10/2017', 
      contractReviewApprovalDate: '25/10/2017'
    },
    { 
      fileNo: 'T984/En', 
      client: 'Tata', 
      anyDiscount: 'Yes', 
      discount: 40, 
      quotationStatus: 'Order Received', 
      finalQuotationAmount: 188520, 
      standards: 'ISO 9001:2014', 
      certificateType: 'Certification', 
      zone: 'East Zone', 
      firstYearValue: 44200, 
      questionnaireReceivedDate: '24/10/2017', 
      contractReviewApprovalDate: '24/10/2017' 
    },
    { 
      fileNo: 'M94/ FSSAI, GMP, BRC FOOD, FSMS', 
      client: 'Megha Pvt Ltd', 
      anyDiscount: 'No', 
      discount: 0, 
      quotationStatus: 'Submitted', 
      finalQuotationAmount: 95000, 
      standards: 'FSSC 22000 Version 3', 
      certificateType: 'Certification', 
      zone: 'East Zone', 
      firstYearValue: 50000, 
      questionnaireReceivedDate: '03/08/2017', 
      contractReviewApprovalDate: '03/08/2017' 
    }
    // Add more rows as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(leadData);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setFilteredData(leadData);
    } else {
      const filtered = leadData.filter(item =>
        item.client.toLowerCase().includes(searchTerm.toLowerCase())
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
    console.log(newData);
    setLeadData(newData);
    setFilteredData(newData); // Update filtered data if search is active
  };
  const handleRoute=()=>{
    // console.log("Quotation")
    navigate("/business/quotation/form")


  }

  return (
    <>
      <HeaderWithButton
      title="Quotation"
      buttonLabel="Create New Quotation"
      onButtonClick={handleRoute}
      
      />
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
