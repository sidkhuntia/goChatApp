import React from "react";
import NameDialog from "../components/NameDialog";

const Home = ({ open, handleClose, name, handleNameChange }) => {
  return (
    <>
      <NameDialog
        open={open}
        handleClose={handleClose}
        name={name}
        handleNameChange={handleNameChange}
      />
    </>
  );
};

export default Home;
