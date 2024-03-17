import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Home = ({ user, setUser }) => {
  const handleLogout = async () => {
    try {
      setUser(null);

      Swal.fire({
        icon: "success",
        title: "¡Cierre de sesión exitoso!",
        text: "Esperamos verte de nuevo pronto.",
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);

      Swal.fire({
        icon: "error",
        title: "Error al cerrar sesión",
        text: "Hubo un problema al intentar cerrar sesión. Por favor, inténtalo de nuevo más tarde.",
      });
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Hola {user.email}!!
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            est a leo egestas euismod. Phasellus facilisis lacus vel blandit
            eleifend. Nunc vitae justo ut urna faucibus blandit.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">Lorem ipsum dolor sit amet.</Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
