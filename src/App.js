import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import { NavBar } from "./components/navigationBar/NavBar";
import { HomePage } from "./components/mainbody/homepage/HomePage";
import Loader from "./components/loader/Loader";
import { box1 } from "./appStyles";
import Footer from "./components/footer/Footer";


const ExploreHome=lazy(()=>import("./components/mainbody/explorepage/ExploreHome"))
const QuizHome=lazy(()=>import("./components/mainbody/quizPage/quizHome/QuizHome"))

function App() {
  return (
    <Box
      sx={box1}
    >
      <NavBar />
      <Toolbar />
      <Suspense  fallback={<Loader />}>
      <Routes>
        
      <Route path="/explore" element={<ExploreHome/>} />
      <Route path="/quiz" element={<QuizHome />} />
      <Route path="/" element={<HomePage />} />
      </Routes>
      </Suspense>
      
      <Footer />
    </Box>
  );
}

export default App;
