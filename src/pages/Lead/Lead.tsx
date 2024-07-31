
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import { FaFilter } from "react-icons/fa6";
import HeaderWithButton from '../../components/Header/HeaderWithButton';
import LeadFormPopup from '../Modal/LeadPop';
function Lead() {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
      setShowPopup(true);
    };
  
    
    const handleClosePopup = () => {
      setShowPopup(false);
    }
    const leadData = [
        { refNo: 'IBMS000503/22/112018', leadFor: 'Certification', companyName: 'NYCE COLOMBIA', source: 'Website Lead', leadType: 'Hot', leadStatus: 'Assigned', followUp: '', executive: 'Kriti Kalekar', createdDate: '27/02/2024', modifiedDate: '' },
        { refNo: 'IBMS000675/01/122018', leadFor: 'Certification', companyName: 'CIVIL GEOTECHNICA PVT LTD', source: 'Digital - Website', leadType: 'Warm', leadStatus: 'Not converted', followUp: '', executive: 'Aftab Alam', createdDate: '16/04/2019', modifiedDate: '' },
        // Add more rows as needed
      ];
  return (
    <>
   <HeaderWithButton  
   title="Active Enquiry Leads"
   buttonLabel="create new lead"
   onButtonClick={handleOpenPopup}
    />

{showPopup && <LeadFormPopup onClose={handleClosePopup} />}

<div className="container mt-4">
<Table striped bordered hover>
  <thead>
    <tr>
        <th></th>
      <th>Lead Ref No.</th>
      <th>Lead For</th>
      <th>Company Name</th>
      <th>Source Of Lead</th>
      <th>Lead Type</th>
      <th>Lead Status</th>
      <th>Followup Reminder Date</th>
      <th>BD Executive Name</th>
      <th>Created Date</th>
      <th>Modified Date</th>
    </tr>
  </thead>
  <tbody>
    {leadData.map((lead, index) => (
      <tr key={index}>
        <td><FaFilter/></td>
        <td>{lead.refNo}</td>
        <td>{lead.leadFor}</td>
        <td>{lead.companyName}</td>
        <td>{lead.source}</td>
        <td>{lead.leadType}</td>
        <td>{lead.leadStatus}</td>
        <td>{lead.followUp}</td>
        <td>{lead.executive}</td>
        <td>{lead.createdDate}</td>
        <td>{lead.modifiedDate}</td>
      </tr>
    ))}
  </tbody>
</Table>
</div>
</>
    
  )
}

export default Lead
