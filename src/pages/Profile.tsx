import HeaderWithButton from '../components/Header/HeaderWithButton';
import Popup from './Modal/Popup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import TableComponent from '../components/Tables/TableTwo';
const Profile = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => {
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  const columns = [
    'Opportunity Title',
    'Client Name',
    'Associated Lead',
    'Status',
    'Esti. Quotation Amount',
    'Created By',
    'Created Date',
    'Modified Date'
  ];

  const leadData = [
    {
      opportunitytitle: 'abc',
      clientname: 'Tata',
      associatedlead: 'IRQSE/L-27',
      status: 'Won',
      estiquotationamount: '111111',
      createdby: 'Megha',
      createddate: '24/10/2017',
      modifieddate: '24/10/2017'
    },
    {
      opportunitytitle: 'kjhgf',
      clientname: 'eeeeeer3',
      associatedlead: 'IRQSE/L-4',
      status: 'Open',
      estiquotationamount: '4444444',
      createdby: 'Megha',
      createddate: '05/10/2017',
      modifieddate: '24/10/2017'
    },
    {
      opportunitytitle: 'EXTENDED TS',
      clientname: 'kalpataru india pvt ltd 4',
      associatedlead: 'IRQSE/L-23',
      status: 'Won',
      estiquotationamount: '55555555',
      createdby: 'Megha',
      createddate: '01/10/2017',
      modifieddate: '01/10/2017'
    },
    {
      opportunitytitle: 'extended',
      clientname: 'kalpataru india pvt ltd',
      associatedlead: 'IRQSE/L-15',
      status: 'Follow up',
      estiquotationamount: '140000',
      createdby: 'Megha',
      createddate: '01/10/2017',
      modifieddate: '01/10/2017'
    }
    // Add more rows as needed
  ];

  return (
    <>
    <HeaderWithButton
        title="Opportunities"
        buttonLabel="Create New Opportunities"
        onButtonClick={showPopup}
      />

{isPopupVisible && <Popup onClose={hidePopup} />}

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
};

export default Profile;
