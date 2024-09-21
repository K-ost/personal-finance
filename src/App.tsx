import { Box, Typography, useTheme } from "@mui/material";

function App() {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h1">Vite + React</Typography>
      <Box className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Box>
      <Typography color={theme.palette.custom.secondary.green}>
        Click on the Vite and React logos to learn more
      </Typography>
    </>
  );
}

export default App;
