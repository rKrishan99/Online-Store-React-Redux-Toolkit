import Product from "./components/product/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Cart from "./components/cart/Cart";
import RootLayout from "./components/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Route>
    )
  ); 

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
