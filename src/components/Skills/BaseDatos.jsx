import { Box, createTheme, Grid2, ThemeProvider, Typography } from "@mui/material"
import { useState } from "react";


export const BaseDatos = () => {

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

    const [expanded, setExpanded] = useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <ThemeProvider theme={theme}>
        <Box
            spacing={1}
            sx={{ p: 2 }}
        >
            <Box 
                spacing={2}
            >
                <Typography variant="h5" component="h5">
                    Skills
                </Typography>
            </Box>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography component="span">Base de Datos</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>

                    </Box>
                </AccordionDetails>
            </Accordion>
            
            <Grid2 spacing={1} size={1} sx={{marginLeft: '10px'}}>
                <img className="img-Skills" src="./sql2.png" alt="node-js" />
            </Grid2>
            <Grid2 spacing={0} size={1} sx={{ textAlign: 'center' , alignContent: 'center'}}>
                <Typography 
                    variant="p" 
                    component="p"
                    fontSize={25}
                    sx={{ textAlign: 'center', fontWeight: 'bold' }}
                >
                    SQL
                </Typography>
            </Grid2>
        </Box>
    </ThemeProvider>
)
}
