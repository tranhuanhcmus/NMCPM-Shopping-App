import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux"
import Logout from "./pages/logout/Logout";
import NotFoundAdmin from "./pages/notFoundAdmin/NotFoundAdmin";

function App() {

  const user = useSelector((state) => state.user.currentUser);
  const admin = user.isAdmin;

  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          {!admin &&(<>
            <Route path="/users" element={<NotFoundAdmin />} />
            <Route path="/newUser" element={<NotFoundAdmin />} />
            <Route path="/products" element={<NotFoundAdmin />} />
            <Route path="/product/:productId" element={<NotFoundAdmin />} />
            <Route path="/newproduct" element={<NotFoundAdmin />} />
            
          </>)

          }
          <Route exact path="/login" element={admin ? <Navigate replace to="/logout" /> : <Login />} />
          <Route path="/logout" element={!admin ? <Navigate replace to="/login" /> : <Logout />}/>
          <Route path="/" element={admin ? <Navigate replace to="/logout" /> : <Login />}/>

          {admin && (<>
            <Route path="/logout" element={<Logout />} />

            <Route path="/users" element={<UserList />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </>)}
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
