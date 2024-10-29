import Product from "./components/product/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Routes>
        <Route></Route>
      </Routes>
    )
  );

  return (
    <>
      <Product />
    </>
  );
}

export default App;
