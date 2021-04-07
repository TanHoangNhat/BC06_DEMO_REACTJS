import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Carousel from "./components/Carousel.js";
import ProductList from "./components/ProductList.js";
import Promotion from "./components/Promotion.js";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Carousel />
        <ProductList />
        <Promotion />
      </div>
    </div>
  );
}

export default App;
