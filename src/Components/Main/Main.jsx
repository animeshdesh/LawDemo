import { Box, Button, Container, Grid, Grow, Typography } from "@mui/material";
import { ReactComponent as Email } from "../../Assets/Email.svg";
import { ReactComponent as Gift } from "../../Assets/Gift.svg";
import { ReactComponent as Arrow01 } from "../../Assets/Arrow01.svg";
import { ReactComponent as Arrow02 } from "../../Assets/Arrow02.svg";
import { ReactComponent as Logo } from "../../Assets/Logo.svg";
import Image01 from "../../Assets/Rectangle01.jpg";
import Image02 from "../../Assets/Rectangle02.jpg";
import Image03 from "../../Assets/Rectangle03.jpg";
import Image04 from "../../Assets/Rectangle04.jpg";
import Image05 from "../../Assets/Rectangle05.jpg";
import Image06 from "../../Assets/Rectangle06.jpg";
import person01 from "../../Assets/person01.png";
import person02 from "../../Assets/person02.png";
import person03 from "../../Assets/person03.png";
import Team01 from "../../Assets/Team01.png";
import Team02 from "../../Assets/Team02.png";
import Team03 from "../../Assets/Team03.png";
import Team04 from "../../Assets/Team04.png";
import Team05 from "../../Assets/Team05.png";
import Team06 from "../../Assets/Team06.png";
import Guy from "../../Assets/Guypointing.png";
import React from "react";

const Main = () => {
  return (
    <>
      <div style={{ backgroundColor: "#111111" }}>
        <Container sx={{ backgroundColor: "#111111", paddingBottom: "150px" }}>
          <Grid container spacing={1} sx={{ paddingTop: "55px", gap: "100px" }}>
            <Grid
              md={6}
              sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              <Typography
                sx={{ color: "white", paddingTop: "100px" }}
                variant="h2"
              >
                You don’t have to Fight them Alone.
              </Typography>
              <Typography
                sx={{ color: "#FFFFFF", opacity: "30%", width: "80%" }}
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
                curabitur sodales conubia ut inceptos faucibus himenaeos tortor
                eget, hac massa gravida arcu interdum proin curae.
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#404040",
                  height: "74px",
                  width: "80%",
                  alignItems: "center",
                  borderRadius: "43px",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    color: "#ffffff",
                    opacity: "20%",
                    marginLeft: "20px",
                    gap: "10px",
                  }}
                >
                  <Email />
                  <Typography>Enter Your Email address</Typography>
                </Box>

                <button
                  style={{
                    backgroundColor: "#E3B748",
                    opacity: "100%",
                    borderRadius: "43px",
                    height: "62px",
                    width: "137px",
                    fontWeight: "bold",
                  }}
                >
                  Lets Talk
                </button>
              </Box>
            </Grid>
            <Grid>
              <img src={Guy} alt="Guy" />
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Lets Introduce Ourself --------------------------------------------> */}
      <div style={{ backgroundColor: "#262626" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid
              md={6}
              sx={{
                color: "white",
                height: "35vh",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{ borderRight: "2px solid #666666" }}
              >
                Let’s Introduce Ourself
              </Typography>
            </Grid>
            <Grid
              md={6}
              sx={{
                color: "white",
                height: "35vh",
                alignItems: "left",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
                paddingLeft: "120px",
              }}
            >
              <Typography variant="h4">Criminal Lawyer</Typography>
              <Typography sx={{ width: "80%", opacity: "20%" }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit
                Exercitation.
              </Typography>
            </Grid>
          </Grid>
          {/* Why Choose us? --------------------------------------------->*/}
          <Container
            sx={{
              color: "white",
              textAlign: "center",
              marginTop: "75px",
            }}
          >
            <Typography variant="h3">Why Choose us?</Typography>
            <Grid container spacing={0} sx={{ marginTop: "75px" }}>
              <Grid md={4}>
                <Box
                  sx={{
                    height: "23rem",
                    width: "22rem",
                    border: "2px solid #404040",
                    borderRadius: "14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    textAlign: "start",
                    justifyContent: "space-evenly",
                    paddingLeft: "30px",
                  }}
                >
                  <Box
                    sx={{
                      width: "101px",
                      height: "101px",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Gift />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontWeight: "600", fontSize: "24px" }}
                  >
                    98% Success Rate
                  </Typography>
                  <Typography
                    sx={{ width: "90%", fontSize: "14px", opacity: "30%" }}
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequatduis enim velit mollit
                    Exer.
                  </Typography>
                  <button
                    style={{
                      backgroundColor: "#E3B748",
                      width: "121px",
                      height: "43px",
                      borderRadius: "24px",
                    }}
                  >
                    Read More
                  </button>
                </Box>
              </Grid>
              <Grid md={4}>
                <Box
                  sx={{
                    height: "23rem",
                    width: "22rem",
                    border: "2px solid #404040",
                    borderRadius: "14px",
                    backgroundColor: "#2E2E2E",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    textAlign: "start",
                    justifyContent: "space-evenly",
                    paddingLeft: "30px",
                  }}
                >
                  <Box
                    sx={{
                      width: "101px",
                      height: "101px",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Gift />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontWeight: "600", fontSize: "24px" }}
                  >
                    100% Success Rate
                  </Typography>
                  <Typography
                    sx={{ width: "90%", fontSize: "14px", opacity: "30%" }}
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequatduis enim velit mollit
                    Exer.
                  </Typography>
                  <button
                    style={{
                      backgroundColor: "#E3B748",
                      width: "121px",
                      height: "43px",
                      borderRadius: "24px",
                    }}
                  >
                    Read More
                  </button>
                </Box>
              </Grid>
              <Grid md={4}>
                <Box
                  sx={{
                    height: "23rem",
                    width: "22rem",
                    border: "2px solid #404040",
                    borderRadius: "14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    textAlign: "start",
                    justifyContent: "space-evenly",
                    paddingLeft: "30px",
                  }}
                >
                  <Box
                    sx={{
                      width: "101px",
                      height: "101px",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Gift />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontWeight: "600", fontSize: "24px" }}
                  >
                    100% Success Rate
                  </Typography>
                  <Typography
                    sx={{ width: "90%", fontSize: "14px", opacity: "30%" }}
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequatduis enim velit mollit
                    Exer.
                  </Typography>
                  <button
                    style={{
                      backgroundColor: "#E3B748",
                      width: "121px",
                      height: "43px",
                      borderRadius: "24px",
                    }}
                  >
                    Read More
                  </button>
                </Box>
              </Grid>
            </Grid>
          </Container>
          {/* Area of practise ----------------------------------------------> */}
          <Container
            sx={{
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            <Typography variant="h4" sx={{ color: "white" }}>
              Area of Practice
            </Typography>

            <Grid container spacing={5} sx={{ marginTop: "15px" }}>
              <Grid md={8}>
                <Box>
                  <img
                    src={Image01}
                    style={{ borderRadius: "14px" }}
                    alt="image01"
                  />
                </Box>
              </Grid>
              <Grid md={4}>
                <Box>
                  <img
                    src={Image02}
                    style={{
                      borderRadius: "14px",
                      width: "752px",
                      height: "342px",
                    }}
                    alt="image02"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={5} sx={{ marginTop: "15px" }}>
              <Grid md={4}>
                <Box>
                  <img
                    src={Image03}
                    style={{ borderRadius: "14px" }}
                    alt="image03"
                  />
                </Box>
              </Grid>
              <Grid md={8}>
                <Box>
                  <img
                    src={Image04}
                    style={{
                      borderRadius: "14px",
                      width: "752px",
                      height: "342px",
                    }}
                    alt="image04"
                  />
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "#fff",
                      padding: "8px",
                      borderRadius: "8px",
                      fontSize: "16px",
                    }}
                  >
                    Hiii
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={5} sx={{ marginTop: "15px" }}>
              <Grid md={8}>
                <Box>
                  <img
                    src={Image05}
                    style={{
                      borderRadius: "14px",
                      width: "752px",
                      height: "342px",
                    }}
                    alt="image05"
                  />
                </Box>
              </Grid>
              <Grid md={4}>
                <Box>
                  <img
                    src={Image06}
                    style={{ borderRadius: "14px" }}
                    alt="image06"
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
          {/* What says our happy clients --------------------------------------------> */}
          <Container sx={{ marginTop: "50px" }}>
            <Grid container>
              <Grid md={6} sx={{}}>
                <Typography variant="h3" sx={{ color: "white", width: "70%" }}>
                  What says our happy Clients
                </Typography>
              </Grid>
              <Grid
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  width: "50%",
                }}
              >
                <Box
                  sx={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Arrow01 />
                </Box>
                <Box
                  sx={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: "#E3B748",
                    borderRadius: "50%",
                    marginLeft: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Arrow02 />
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={0} sx={{ marginTop: "75px" }}>
              <Grid md={4}>
                <Box
                  sx={{
                    height: "23rem",
                    width: "22rem",
                    border: "2px solid #404040",
                    borderRadius: "14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    textAlign: "start",
                    justifyContent: "space-evenly",
                    paddingLeft: "30px",
                  }}
                >
                  <Box
                    sx={{
                      width: "101px",
                      height: "101px",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={person03} alt="person3" />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontWeight: "600", fontSize: "24px" }}
                  >
                    Jane Cooper
                  </Typography>
                  <Typography sx={{ color: "white" }}>Ceo of Hunth</Typography>
                  <Typography
                    sx={{
                      width: "90%",
                      fontSize: "14px",
                      opacity: "30%",
                      color: "white",
                    }}
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequatduis enim velit mollit
                    Exer. sit aliqua dolor do amet sint. Velit officia
                  </Typography>
                </Box>
              </Grid>
              <Grid md={4}>
                <Box
                  sx={{
                    height: "23rem",
                    width: "22rem",
                    border: "2px solid #404040",
                    borderRadius: "14px",
                    backgroundColor: "#2E2E2E",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    textAlign: "start",
                    justifyContent: "space-evenly",
                    paddingLeft: "30px",
                  }}
                >
                  <Box
                    sx={{
                      width: "101px",
                      height: "101px",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={person02} alt="person2" />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontWeight: "600", fontSize: "24px" }}
                  >
                    Devon Lane
                  </Typography>
                  <Typography sx={{ color: "white" }}>Ceo of Hunth</Typography>
                  <Typography
                    sx={{
                      width: "90%",
                      fontSize: "14px",
                      opacity: "30%",
                      color: "white",
                    }}
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequatduis enim velit mollit
                    Exer. sit aliqua dolor do amet sint. Velit officia
                  </Typography>
                </Box>
              </Grid>
              <Grid md={4}>
                <Box
                  sx={{
                    height: "23rem",
                    width: "22rem",
                    border: "2px solid #404040",
                    borderRadius: "14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    textAlign: "start",
                    justifyContent: "space-evenly",
                    paddingLeft: "30px",
                  }}
                >
                  <Box
                    sx={{
                      width: "101px",
                      height: "101px",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={person01} alt="person1" />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontWeight: "600", fontSize: "24px" }}
                  >
                    Robert Fox
                  </Typography>
                  <Typography sx={{ color: "white" }}>Ceo of Hunth</Typography>
                  <Typography
                    sx={{
                      width: "90%",
                      fontSize: "14px",
                      opacity: "30%",
                      color: "white",
                    }}
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequatduis enim velit mollit
                    Exer. sit aliqua dolor do amet sint. Velit officia
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
          {/* Our Team---------------------------------------------------------> */}
          <Container sx={{ marginTop: "80px" }}>
            <Typography
              variant="h2"
              sx={{ color: "white", textAlign: "center" }}
            >
              Our Team
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: "80px" }}>
              <Grid md={4}>
                <Box
                  sx={{
                    height: "109px",
                    width: "344px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <img src={Team01} alt="Team01" />
                  <Box sx={{ color: "white" }}>
                    <Typography variant="h5">Danial Def</Typography>
                    <Typography sx={{ opacity: "30%" }}>301 Cases</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid md={4}>
                <Box
                  sx={{
                    height: "109px",
                    width: "344px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: "15px",
                    backgroundColor: "#E3B748",
                    borderRadius: "14px",
                  }}
                >
                  <img src={Team02} alt="Team02" />
                  <Box sx={{ color: "black" }}>
                    <Typography variant="h5">Sanfole</Typography>
                    <Typography sx={{ opacity: "70%" }}>850 Cases</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid md={4}>
                <Box
                  sx={{
                    height: "109px",
                    width: "344px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <img src={Team03} alt="Team03" />
                  <Box sx={{ color: "white" }}>
                    <Typography variant="h5">Colleen</Typography>
                    <Typography sx={{ opacity: "30%" }}>180 Cases</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: "25px" }}>
              <Grid md={4}>
                <Box
                  sx={{
                    height: "109px",
                    width: "344px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <img src={Team04} alt="Team04" />
                  <Box sx={{ color: "white" }}>
                    <Typography variant="h5">Haldone</Typography>
                    <Typography sx={{ opacity: "30%" }}>212 Cases</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid md={4}>
                <Box
                  sx={{
                    height: "109px",
                    width: "344px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <img src={Team05} alt="Team05" />
                  <Box sx={{ color: "white" }}>
                    <Typography variant="h5">Nik Jeo</Typography>
                    <Typography sx={{ opacity: "30%" }}>Nik Jeo</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid md={4}>
                <Box
                  sx={{
                    height: "109px",
                    width: "344px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <img src={Team06} alt="Team06" />
                  <Box sx={{ color: "white" }}>
                    <Typography variant="h5">Nik Jeo</Typography>
                    <Typography sx={{ opacity: "30%" }}>Nik Jeo</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
          {/* FAQ---------------------------------------------------------------> */}
          <Typography variant="h4" sx={{ color: "white", marginTop: "35px" }}>
            FAQ
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ marginTop: "50px", paddingBottom: "50px" }}
          >
            <Grid md={6}>
              <Typography
                sx={{
                  color: "white",
                  opacity: "30%",
                  width: "70%",
                  marginLeft: "18px",
                  marginTop: "25px",
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </Typography>
            </Grid>
            <Grid md={6}>
              <Typography variant="h5" sx={{ color: "white" }}>
                Do I need a personal injury report?
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  opacity: "30%",
                  marginTop: "25px",
                  marginBottom: "25px",
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
              <Box
                sx={{
                  borderTop: "2px solid grey",
                  borderBottom: "2px solid grey",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    margin: "40px 0px 40px 0px",
                    color: "white",
                  }}
                >
                  How much is my case worth?
                </Typography>
                <Box
                  sx={{
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#E3B748",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h5">+</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  borderBottom: "2px solid grey",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    margin: "40px 0px 40px 0px",
                    color: "white",
                  }}
                >
                  What should I do right after car accidect
                </Typography>
                <Box
                  sx={{
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#E3B748",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h5">+</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  borderBottom: "2px solid grey",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    margin: "40px 0px 40px 0px",
                    color: "white",
                  }}
                >
                  How much is my case worth?
                </Typography>
                <Box
                  sx={{
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#E3B748",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h5">+</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Container sx={{ marginTop: "25px", backgroundColor: "#47474780" }}>
            <Box sx={{ padding: "30px 30px" }}>
              <Typography
                variant="h3"
                sx={{ textAlign: "center", color: "white" }}
              >
                Subscribe Our Newsletter
              </Typography>
            </Box>
          </Container>
        </Container>
        <Box
          sx={{
            backgroundColor: "#111111",
            height: "10vh",
            fontFamily: "inter",
            marginTop: "80px",
          }}
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
      </div>
    </>
  );
};

export default Main;
