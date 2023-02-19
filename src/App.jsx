
import {products as initialsProducts } from './mocks/products.json'
import Products from './components/Products'
import Header from './components/Header'
import Cart from './components/Cart'
import { useFilters } from './components/hooks/useFilters'
import { CartProvider } from './context/cart'



function App () {
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(initialsProducts)
  return (
    <CartProvider>
    <Header products={filteredProducts}/>
    <Cart />
    <Products products={filteredProducts}/>
    </CartProvider>
  )
}

export default App
