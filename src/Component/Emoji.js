import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import Grid from "@mui/material/Grid";

const ImageButton = styled(Button)(({ theme }) => ({
  minWidth: "120px",
  borderRadius: "60px",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 600px)": {
    width: 280,
    transform: "translate(-53%, -50%)",
  },
};

export default function Emoji({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        m: 2,
      }}
    >
      <ImageButton onClick={() => setOpen(true)}>
        <CardMedia
          sx={{
            "@media (min-width: 1200px)": {
              "&:hover": {
                transform: "scale(1.3)",
              },
            },
          }}
          component="img"
          height="100"
          image={item.link}
          alt="emoji"
        />
      </ImageButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Avatar
            sx={{ width: 72, height: 72, margin: "0 auto" }}
            alt="Remy Sharp"
            src={item.link}
          />
          <Typography
            sx={{ textAlign: "center", margin: "15px 0" }}
            variant="h5"
          >
            {item.title}
          </Typography>
          <Typography variant="p">{item.desc}</Typography>
        </Box>
      </Modal>
    </Box>
  );
}
