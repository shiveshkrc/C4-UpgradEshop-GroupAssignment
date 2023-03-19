import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import SignInPage from "./components/SignIn/SignIn";
import SignUpPage from "./components/SignUp/SignUp";
import AddProductsPage from "./components/AddProducts/AddProducts";
import ModifyProductsPage from "./components/ModifyProducts/ModifyProducts";
import ProductCard from "./components/ProductCard/ProductCard";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductDetailsConfirm from "./components/ProductDetailsConfirm/ProductDetailsConfirm";
import AddressDetails from "./components/AddressDetails/AddressDetails";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

import "./App.css";
import { useState } from "react";

function App() {
  const [userStatus, setUserStatus] = useState({
    isLogin: false,
    isAdmin: false,
  });

  return (
    <BrowserRouter>
      <section>
        <Navigation userStatus={userStatus} setUserStatus={setUserStatus} />
        <Routes>
          {/* <Route path="/" element={<NavigationBar />}></Route> */}
          <Route
            path="/login"
            element={
              <SignInPage
                userStatus={userStatus}
                setUserStatus={setUserStatus}
              />
            }
          ></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/addproducts" element={<AddProductsPage />}></Route>
          <Route
            path="/modifyproducts"
            element={<ModifyProductsPage />}
          ></Route>
          <Route path="/productcard" element={<ProductCard />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/productdetails" element={<ProductDetails />}></Route>
          <Route
            path="/productdetailsconfirm"
            element={<ProductDetailsConfirm />}
          ></Route>
          <Route path="/addressdetails" element={<AddressDetails />}></Route>
          <Route path="/orderdetails" element={<OrderDetails />}></Route>
          <Route path="/placeorder" element={<PlaceOrder />}></Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
