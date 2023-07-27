import React from "react";
import { ReactComponent as Logo } from "../../Assets/Logo.svg";
import { Container, Typography, Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{ backgroundColor: "#111111", height: "10vh", fontFamily: "inter" }}
      >
        <Container
          sx={{
            padding: "20px 10px",
            display: "flex",
            color: "white",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "35%",
            }}
          >
            <Typography>Home</Typography>
            <Typography>Attorneys</Typography>
            <Typography>Practice Areas</Typography>
            <Typography>About Us</Typography>
          </Box>
          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              border: "3px solid white",
            }}
          >
            <Typography>Contact now</Typography>
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
