import React, { useState } from 'react';
import TableOne from '../../components/Tables/TableOne';
import HeaderWithButton from '../../components/Header/HeaderWithButton';
import { useNavigate } from 'react-router-dom';
import TableFive from '../../components/Tables/TableFive';

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
              title="Create Auditor Login"
              buttonLabel="Create New Auditor Login" onButtonClick={undefined}        // onButtonClick={handleRoute}
      />

      <div className="flex flex-col gap-10">
        <TableFive />
        {/* <TableTwo />
        <TableThree /> */}
      </div>

      {/* {isPopupVisible && <Popup onClose={hidePopup} />} */}
    </>
  );
};

export default Tables;
