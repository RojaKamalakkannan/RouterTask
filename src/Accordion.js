import  React from 'react';
import './App.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link,Outlet} from 'react-router-dom';
// import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';




function SimpleAccordion() {
  const Navigate=useNavigate();
  return (
      <div>
     <br/>
     
     <button onClick={()=>Navigate("/adminlogin")} variant="contained" className="btn btn-primary"><b>ADMIN LOGIN</b></button>&nbsp;&nbsp;
     <button onClick={()=>Navigate("/studentlogin")} variant="contained" type="buttton" className="btn btn-primary"><b>STUDENT LOGIN</b></button>
     <Outlet />
     
     {/* <Button variant="contained">
     <Link to="/AdminLogin" > Admin Login</Link> &nbsp;
     </Button> &nbsp;&nbsp;&nbsp;

    <Button variant="contained">
    <Link to="/StudentLogin" > Student Login</Link> &nbsp;
    </Button> */}

        {/* <button type="button" className="btn btn-primary">ADMIN LOGIN</button>&nbsp;
       <button type="button" className="btn btn-primary">STUDENT LOGIN</button>
    <br/> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>React JS</Typography>
        </AccordionSummary>
       
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Node JS</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Angular</Typography>
        </AccordionSummary>
      </Accordion>
      <br/>
      <br/>

      <footer className="py-5 container-fluid" style={{height:'100px'}}><br/>
           <Link to="/contactus">CONTACT US</Link>&nbsp;&nbsp;
           <Link to="/aboutus">ABOUT US</Link>&nbsp;&nbsp;
           <Link to="/branches">BRANCHES</Link>&nbsp;&nbsp;
           <Outlet/>
        </footer>

    </div>
  );
}
export default SimpleAccordion;
