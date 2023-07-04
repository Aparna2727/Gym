// import './App.css';

import { LogInPage } from "./components/Form/LogIn";
import { RegistorPage } from "./components/Form/Registor";
import { MainPage } from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
// import { PricingSection } from "./components/Pricing/Pricing";
// import Trainer from "./components/Training/Trainer";
import AllTrainers from "./components/AllTrainers/AllTrainers";
import { Navbar } from "./components/Main/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
       <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registor" element={<RegistorPage />} />
        <Route path="/login" element={<LogInPage/>} />
        <Route path="/alltrainers" element={<AllTrainers/>} /> 
         </Routes>
         {/* <MainPage /> */}
         
         
          
         {/* <AllTrainers/> */}
         

       
         
       
    </div>
  );
}

export default App;
