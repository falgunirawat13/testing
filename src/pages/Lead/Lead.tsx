// import { Table, Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import HeaderWithButton from '../../components/Header/HeaderWithButton';
import LeadFormPopup from '../Modal/LeadPop';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import './lead.css'
import TableComponent from '../../components/Tables/TableTwo';

function Lead() {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const leadData = [
        { refNo: 'IBMS000503/22/112018', leadFor: 'Certification', companyName: 'NYCE COLOMBIA', source: 'Website Lead', leadType: 'Hot', leadStatus: 'Assigned', followUp: '', executive: 'Kriti Kalekar', createdDate: '27/02/2024', modifiedDate: '' },
        { refNo: 'IBMS000675/01/122018', leadFor: 'Certification', companyName: 'CIVIL GEOTECHNICA PVT LTD', source: 'Digital - Website', leadType: 'Warm', leadStatus: 'Not converted', followUp: '', executive: 'Aftab Alam', createdDate: '16/04/2019', modifiedDate: '' },
        // Add more rows as needed
    ];
    const columns = [
        'Lead Ref No.',
        'Lead For',
        'Company Name',
        'Source Of Lead',
        'Lead Type',
        'Lead Status',
        'Followup Reminder Date',
        'BD Executive Name',
        'Created Date',
        'Modified Date'
      ];

       

    return (
        <>
            <HeaderWithButton  
                title="Active Enquiry Leads"
                buttonLabel="Create New Lead"
                onButtonClick={handleOpenPopup}
            />

            {showPopup && <LeadFormPopup onClose={handleClosePopup} />}

            <div className="container mt-4">
                <div className="d-flex mb-3">
                    <FormControl
                        placeholder="Search by Name"
                        className="p-3 me-2 flex-grow-1"
                    />
                    <Button variant="outline-secondary">Search</Button>
                </div>
                <TableComponent data={leadData}
                columns={columns} />
            </div>
        </>
    );
}

export default Lead;
