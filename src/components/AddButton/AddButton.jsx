import React from 'react';

const AddButton = ({ onAddButtonClick, restaurant }) => {
  return (
    <button onClick={() => onAddButtonClick(restaurant)}>Add to list</button>
  );
};

export default AddButton;
