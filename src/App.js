import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import ProductDescription from "./Components/ProductDescription";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" exact element={<Home />} />
          <Route path="/products/:id" element={<ProductDescription />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
