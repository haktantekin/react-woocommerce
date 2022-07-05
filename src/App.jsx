import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import styled from "styled-components";

function App() {
  return (
  <Router>
        <div>
          <Nav>
            <List>
              <ListItem>
                <NavLink className={(navData) => navData.isActive ? "active" : "" }  to="/projects/react-wocommerce/">Home</NavLink>
              </ListItem>
              <ListItem>
                <NavLink className={(navData) => navData.isActive ? "active" : "" }  to="/projects/react-wocommerce/cart">Cart</NavLink>
              </ListItem>
              <ListItem>
                <NavLink className={(navData) => navData.isActive ? "active" : "" }  to="/projects/react-wocommerce/productList">ProductList</NavLink>
              </ListItem>
              <ListItem>
                <NavLink className={(navData) => navData.isActive ? "active" : "" }  to="/projects/react-wocommerce/register">Register</NavLink>
              </ListItem>
              <ListItem>
                <NavLink className={(navData) => navData.isActive ? "active" : "" }  to="/projects/react-wocommerce/login">Login</NavLink>
              </ListItem>
            </List>
          </Nav>

          <Routes>
            <Route exact path="/projects/react-wocommerce/" element={<Home />}></Route>
            <Route path="/projects/react-wocommerce/cart" element={<Cart />}></Route>
            <Route path="/projects/react-wocommerce/productList" element={<ProductList />}></Route>
            <Route path="/projects/react-wocommerce/register"  element={<Register />}></Route>
            <Route path="/login"  element={<Login />}></Route>
          </Routes>
        </div>
    </Router>
  )

}


const Nav = styled.nav`
  display: block;
  width:100%;

`
const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20px;
  padding:20px 0;
`
const ListItem = styled.li`
  list-style: none;
  a{
    text-decoration: none;
    font-weight: bold;
    color:#000;
  }
`

export default App;