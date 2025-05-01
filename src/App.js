import About from "./pages/about";

import Blog from "./pages/blog";
import Contctus from "./pages/contctus";

import Home from "./pages/home";

import Register from "./pages/register";
import Login from "./pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contctus />} />

     
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
