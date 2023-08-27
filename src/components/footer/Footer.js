// import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { LinkedIn, Instagram, GitHub } from "@mui/icons-material";
import { Box, Toolbar } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0476c1",
        p: 6,
        mt:2,
        color:"white",

      }}
    >
        <Toolbar />
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6"   gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2"  >
              World Explorer is a web app built on react to enable users to get information about different countries around the globe.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6"   gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2"  >
              Pune,Maharastra
            </Typography>
            <Typography variant="body2"  >
              Email: jainvaibhav0111it181110@gmail.com
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6"   gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.github.com/vaibhav1073" color="inherit">
              <GitHub />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://in.linkedin.com/in/vaibhav-jain-370477222" color="inherit">
              <LinkedIn />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2"   align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              World Explorer
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
