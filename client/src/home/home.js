import * as React from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./navbar";
import Header from "./header";
import Register from "./register";
import About from "./about";
import Footer from "./footer";

const sections = [
  { title: "Home", url: "#" },
  { title: "About", url: "#about" },
  { title: "Register", url: "#register" },
  { title: "Contact", url: "#contact" },
];

const theme = createTheme();

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ backgroundColor: "#ecf0f1" }}>
        <Navbar sections={sections} />

        <main>
          <Header />
          <Register />
          <br />
          <br />
          <About />

          <Footer />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
