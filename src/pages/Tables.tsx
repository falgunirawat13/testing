import React, { useState } from 'react';
import TableOne from '../components/Tables/TableOne';
import HeaderWithButton from '../components/Header/HeaderWithButton';
import Popup from './Modal/Popup';

const Tables = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => {
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      {/* Use the reusable HeaderWithButton component */}
      <HeaderWithButton
        title="Tables"
        buttonLabel="Create New User"
        onButtonClick={showPopup}
      />

      <div className="flex flex-col gap-10">
        <TableOne />
        {/* <TableTwo />
        <TableThree /> */}
      </div>

      {isPopupVisible && <Popup onClose={hidePopup} />}
    </>
  );
};

export default Tables;
