import React, { useState } from 'react';
import TableOne from '../../components/Tables/TableOne';
import HeaderWithButton from '../../components/Header/HeaderWithButton';
import { useNavigate } from 'react-router-dom';
import TableFour from '../../components/Tables/TableFour';

const Tables = () => {
  const navigate=useNavigate();
  // const [isPopupVisible, setIsPopupVisible] = useState(false);

  // const showPopup = () => {
  //   setIsPopupVisible(true);
  // };

  // const hidePopup = () => {
  //   forms/form-elementssetIsPopupVisible(false);
  // };

  const handleRoute=()=>{
    // navigate('/forms/form-elements')
    navigate('/form-elements')
  }

  return (
    <>
      {/* Use the reusable HeaderWithButton component */}
      <HeaderWithButton
        title="AuditList"
        buttonLabel="Create New Audit"
        onButtonClick={handleRoute}
      />

      <div className="flex flex-col gap-10">
        <TableFour />
        {/* <TableTwo />
        <TableThree /> */}
      </div>

      {/* {isPopupVisible && <Popup onClose={hidePopup} />} */}
    </>
  );
};

export default Tables;
