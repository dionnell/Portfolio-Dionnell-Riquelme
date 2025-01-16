import { Box, Grid2, Typography } from "@mui/material"
import '@fontsource/roboto/300.css';

export const Perfil = () => {
  return (
    <Box
      sx={{ padding: '20px'}}
      className="Glassmorphism"
    >
      
      <Grid2
        container
        spacing={2}
        direction={{ xs:'column-reverse',sm: 'column-reverse', md:'row', lg: 'row'}}
        
      >
        <Grid2 size={{ md: 12, lg: 12}}>
          <Box sx={{textAlign: 'center', marginBottom: '10px'}}>
            <Typography variant="p"
              
              className="cloud-text cloud-title "
            >
              Desarrollador FullStack
            </Typography>
          </Box>
          <Box
            sx={{ fontFamily: 'Roboto', textAlign: 'center'}}
            fontStyle={{ sm: 'italic', md: 'italic', lg: 'italic'}}
            fontSize={{ sm: '1.3rem', md: '1.5rem', lg: '1.7rem'}}
            padding={{ sm: '5px', md: '25px', lg: '30px'}}
            width={{ sm: '100%', md: '80%', lg: '80%'}}
            marginX={{ sm: 'auto', md: 'auto', lg: 'auto'}}
            lineHeight={{ sm: '1.5', md: '1.5', lg: '1.2'}}
          >
            <Box>
              <Typography variant="p">
                Desarrollador Full Stack con experiencia en el desarrollo y mantenimiento de aplicaciones web, especializado en la creación de soluciones dinámicas, eficientes y escalables. 
                <br/> He liderado proyectos en Emasa Comercial, donde implementé mejoras significativas en la gestión de bases de datos y la construcción de páginas estáticas y dinámicas. 
                <br/>Cuento con amplias habilidades en tecnologías de backend, como Django, Node.js, Express y Sequelize , y frontend, como HTML5, CSS, JavaScript, React.js, Swiper, Bootstrap, Tailwind CSS, Material UI y Axios.
              </Typography>
            </Box>
            <Box>
              <Typography variant="p">
                Mi experiencia trabajando con metodologías ágiles y herramientas como Postman, Jira, Slack, Asana y GitHub me ha permitido destacar en la colaboración en equipo y la autogestión. Estoy motivado por el crecimiento profesional constante y busco seguir desarrollando soluciones innovadoras en el ámbito del desarrollo web.
              </Typography>
            </Box>
          </Box>
        </Grid2>
        
      </Grid2>
    
    </Box>
  )
}
