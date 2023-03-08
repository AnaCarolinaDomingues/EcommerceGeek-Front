import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/PageHome'
import PageLogin from '../pages/PageLogin'
import ListaProdutos from '../pages/PageProdutos'



export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ListaProdutos />} />        
        <Route path="/login" element={<PageLogin />} />
        
      </WrapperRoutes>
    </BrowserRouter>
  )
}

