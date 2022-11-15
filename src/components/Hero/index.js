import React from "react";
import SearchInput from "../../form/SearchInput";
import "./hero.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Hero = ({ walletOpen }) => {
  const [open, setOpen] = React.useState(walletOpen);
  const toggleModal = () => setOpen(false);
  console.log(walletOpen);
  console.log(open);

  return (
    <div className="">
      <Modal
        open={walletOpen}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ></Modal>
      <div className="container hero container-grid">
        <div className="hero-text-content">
          <h1 className="hero-main-text red-rose-font">
            Rent a <span className="purple">Place</span> away from
            <span className="purple">Home</span> in the
            <span className="purple">Metaverse</span>
          </h1>
          <p className="red-rose-font space-round">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <SearchInput />
        </div>
        <div className="hero-image-content">
          <img
            src="assets/img/hero-banner.svg"
            alt="hero banner"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
