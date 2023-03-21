import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";
import Shop from "./Components/Shop/Shop";
import PageNotFound from "./PageNotFound";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Product/:id" element={<Product />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </section>
        </div>
      </Router>{" "}
    </div>
  );
}

export default App;
