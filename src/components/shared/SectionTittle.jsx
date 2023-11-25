import { Container, Typography } from "@mui/material"
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
const SectionTittle = ({tittle,desc}) => {
    return (
     <Container sx={{marginX:'auto',marginTop:'120px'}}>
        
<Typography color='#f38005' sx={{textAlign:'center',textTransform:'uppercase'}} variant="h3">
<FastForwardIcon  color='secondary' sx={{marginRight:'8px'}}></FastForwardIcon>{tittle}<FastRewindIcon color='secondary' sx={{marginLeft:'8px'}}></FastRewindIcon>
</Typography>
<Typography sx={{textAlign:'center',color:'#9c9b9',paddingTop:'10px'}}>
-- {desc} --
</Typography>
     </Container>
    );
};

export default SectionTittle;