import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  marginLeft: 0,
  width: "280px",
  // [theme.breakpoints.up("sm")]: {
  //   width: "auto",
  // },
  right: "30px",
  "@media (max-width: 600px)": {
    right: "25px",
  },
  "@media (min-width: 601px) and (max-width: 954px)": {
    position: "relative",
    left: 0,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: "7px 0",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "25ch",
    // [theme.breakpoints.up("xl")]: {
    //   width: "26ch",
    //   "&:focus": {
    //     width: "32ch",
    //   },
    // },
    // "@media (max-width: 600px)": {
    //   width: "32ch",
    // },
  },
}));

const SearchBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    margin: "0 auto",
    position: "relative",
  },
}));

const TopHeading = ({ sentFunction }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        p: "25px 55px",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          zIndex: 1,
          position: "relative",
          right: "20px",
        }}
      >
        <CardMedia
          component="img"
          height={useMediaQuery("(max-width:600px)") ? "100" : "150"}
          image="https://images.pngnice.com/download/2007/Love-Emoji-PNG-HD.png"
          alt="Paella dish"
        />
        <Typography
          sx={{
            color: "white",
            paddingLeft: "20px",
            fontFamily: "cursive",
            "@media (max-width: 954px)": {
              fontSize: "1.7rem",
            },
            // "@media (min-width: 601px) and (max-width: 954px)": {
            //   fontSize: "1.7rem",
            // },
          }}
          variant="h2"
        >
          EMOJiPEDiA
        </Typography>
      </Grid>
      <SearchBox>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={(e) => {
              sentFunction(e.target.value);
            }}
            placeholder="Search from over 500 emojis..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </SearchBox>
    </Grid>
  );
};

export default TopHeading;
