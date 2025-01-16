import { createTheme, Grid2, ThemeProvider, Typography } from "@mui/material"


export const FrontSkill = () => {
  
  const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      }
    },
  });


return (
  <ThemeProvider theme={theme}>
      <Grid2
          container
          spacing={1}
          sx={{ paddingLeft: 2 }}
      >
          <Grid2 spacing={2} size={12}>
              <Typography variant="h6" component="h6">
                  Frontend
              </Typography>
          </Grid2>
          <Grid2 spacing={0} size={1} sx={{marginLeft: '10px'}}>
              <img className="img-Skills" src="./React.png" alt="node-js" />
          </Grid2>
          <Grid2 spacing={0} size={1.5} sx={{ textAlign: 'center' , alignContent: 'center'}}>
              <Typography 
                  variant="p" 
                  component="p"
                  fontSize={25}
                  sx={{ textAlign: 'center', fontWeight: 'bold', marginRight: 'auto' }}
              >
                  ReactJs
              </Typography>
          </Grid2>
          <Grid2 spacing={1} size={1} sx={{marginLeft: '10px'}}>
              <img className="img-Skills" src="./React.png" alt="node-js" />
          </Grid2>
          <Grid2 spacing={0} size={1.7} sx={{ textAlign: 'center' , alignContent: 'center'}}>
              <Typography 
                  variant="p" 
                  component="p"
                  fontSize={25}
                  sx={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                  Tailwind
              </Typography>
          </Grid2>
      </Grid2>
  </ThemeProvider>
)
}