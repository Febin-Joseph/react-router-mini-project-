import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import  Navbar from './Components/Navbar'
import PlacingOrder from './Components/PlacingOrder'
import PageNotFound from './Components/PageNotFound'
import Product from './Components/Product'
import Featured from './Components/Featured'
import New from './Components/New'
import Users from './Components/Users'
import UserDetails from './Components/UserDetails'
import Admin from './Components/Admin'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = '/' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='orderItem' element={<PlacingOrder />}/>
      <Route path='*' element={<PageNotFound />} />
      <Route path='product' element={<Product />} >
        <Route index element={<Featured />}/>
        <Route path='Featured' element={<Featured /> } />
        <Route path='New' element={<New /> }/>
      </Route>
      <Route path='users' element={<Users />} >
        <Route path=':id' element={<UserDetails />} />
        <Route path='admin' element={<Admin />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
