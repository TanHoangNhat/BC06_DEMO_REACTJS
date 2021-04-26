import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Carousel from "./components/Carousel.js";
import ProductList from "./components/ProductList.js";
import Promotion from "./components/Promotion.js";
import DemoDataBinding from "./data-binding/DemoDataBinding";
import ShowRoomCar from "./show-room-car/ShowRoomCar";
import RenderWithMap from "./render-with-map/RenderWithMap";
import Parent from "./props/Parent";
import AppXucXac from "./app-xuc-xac/AppXucXac";
import CauThu from "./AppCauThu/CauThu";

function App() {
  return (
    <div>
      {/* <div>
        <Header />
        <Carousel />
        <ProductList />
        <Promotion />
      </div> */}
      {/* <DemoDataBinding /> */}
      {/* <ShowRoomCar /> */}
      {/* <RenderWithMap /> */}
      {/* <Parent /> */}
      {/* <AppXucXac /> */}
      <CauThu />
    </div>
  );
}

export default App;
