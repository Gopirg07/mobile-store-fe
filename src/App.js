import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "./Components/Auth/Signin";
import Signup from "./Components/Auth/Signup";
import Activation from "./Components/Auth/Activation";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import ResetPassword from "./Components/Auth/ResetPassword";
import Home from "./Components/Home/Home"; 
import Mobiles from "./Components/Mobiles/Mobiles";
import Buypage from "./Components/Mobiles/Buypage";
import Addmobile from "./Components/Mobiles/Addmobile";

export const url="http://localhost:8000" 


function App() {
  const [mode, setMode] = useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{marginTop:"61px" }}>  
        <div className="App">
        <Routes>   
        <Route path="/signin" element={<Signin/>}/> 
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signUpActivation/:id" element={<Activation/>} />
        <Route path="/forget" element={<ForgotPassword/>}/>
        <Route path="/reset-password/:id" element={<ResetPassword/>} />

        <Route path="/home" element={<Home mode={mode} setMode={setMode}/>}/> 
         <Route path="/mobiles" element={<Mobiles mode={mode} setMode={setMode}/>} />  
         <Route path="/mobiles/buy" element={<Buypage mode={mode} setMode={setMode}/>} />  
         <Route path="/AddMobile" element={<Addmobile mode={mode} setMode={setMode}/>} />  
        {/* <Route path="/Movie/:abc" element={<MovieDetail movielists={movieList}/>} /> 
      <Route path="/Movie/edit/:abc" element={<EditMovie/>} />    */}
      <Route path="/*" element={<Navigate to="/signin"/>}/> 
      </Routes> 
        </div> 

      {/* Pass In Comp For Theme mode={mode} setMode={setMode}  */}
        {/* <Navbar mode={mode} setMode={setMode} />
        <main>This app is using the dark mode</main> */}
      </Paper>
    </ThemeProvider>
  );
}

export default App;
