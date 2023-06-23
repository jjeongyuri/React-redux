import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Machines from "./page/Machines";
import WishList from "./page/WishList";
// import store from "./store";

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<Machines/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
