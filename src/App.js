import React, { useState } from "react";
import Box from "@mui/material/Box";
import TopHeading from "./Component/TopHeading";
import EmojiContainer from "./Component/EmojiContainer";
import { styled } from "@mui/material/styles";

const Skewed1 = styled("div")({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  width: "100%",
  height: "26%",
  background: "#24846D",
  transform: "skewY(-7deg)",
  transformOrigin: "top left",
  zIndex: -1,
});

const Skewed2 = styled("div")({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  width: "100%",
  height: "35%",
  background: "#35CDA9",
  transform: "skewY(23deg)",
  transformOrigin: "top right",
  zIndex: 0,
});

const Skewed3 = styled("div")({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  width: "100%",
  height: "32%",
  zIndex: -2,
  background: "#67FFDB",
  transform: "skewY(0deg)",
  transformOrigin: "top right",
});

const App = ({ sentfunction }) => {
  const [value, setValue] = useState("");
  function sentFunction(receivedValue) {
    setValue(receivedValue);
  }
  return (
    <Box>
      <TopHeading sentFunction={sentFunction} />
      <Box component="section">
        <Skewed1 />
        <Skewed2 />
        <Skewed3 />
      </Box>
      <EmojiContainer emoji={value} />
    </Box>
  );
};

export default App;
