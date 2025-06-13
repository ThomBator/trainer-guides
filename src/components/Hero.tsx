import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Hero = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography component="h1" variant="h1" paddingTop={5} paddingBottom={2}>
          Trainer Guides
        </Typography>
        <Typography component="p" variant="h5">Build & share home workout plans for physio and personal training clients.</Typography>
      </Box>
    </>
  );
};

export default Hero;
