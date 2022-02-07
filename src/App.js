import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './Main';
import {useNavigate} from 'react-router-dom'; 


function App(){
     
     return(
          <div>
               <BrowserRouter>
               <Routes>
                    <Route path='/' element={<Main/>}></Route>
                    <Route path="/contactus" element={<Contactus/>}/>
                    <Route path="/aboutus" element={<Aboutus/>}/>
                    <Route path="/branches" element={<Branches/>}/>
                    <Route path="/adminlogin" element={<AdminLogin/>}/>
                    <Route path="/studentlogin" element={<StudentLogin/>}/>



               </Routes>
               </BrowserRouter>
          </div>
     )
}
export default App;



export function Contactus() {
     const Navigate = useNavigate();
     return (
       <>
        
     <h3> Contact Us Component </h3>   
     <button onClick={()=>Navigate("/")} className="btn btn-primary" variant="contained">Back</button> 
        
       </>
     );
   }
  
   export function Aboutus() {
     const Navigate = useNavigate();
     return (
       <>
          
        <h3> About Us Component </h3>    
        <button onClick={()=>Navigate("/")} className="btn btn-primary" variant="contained">Back</button> 
      
       </>
     );
   }
 
   export function Branches() {
     const Navigate = useNavigate();
     return (
       <>
            
          <h3> Branches Component </h3>  
          <button onClick={()=>Navigate("/")} className="btn btn-primary" variant="contained">Back</button>       
       
       </>
     );
   }
 
 
   export function AdminLogin() {
     const Navigate = useNavigate();
     return (
       <>
        <h3> Admin Login Component </h3>      
        <button onClick={()=>Navigate("/")} className="btn btn-primary" variant="contained">Back</button>  
       </>
     );
   }
   export function StudentLogin() {
     const Navigate = useNavigate();
     return (
       <>       
         <h3> Student Login Component </h3>      
         <button onClick={()=>Navigate("/")} className="btn btn-primary" variant="contained">Back</button>  
       </>
     );
   }


 