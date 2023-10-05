import { Routes, Route } from 'react-router-dom'
import { Home, Navigation, Authentication } from './router/index'
const Shop = () => {
  return (
    <>
      <div>This is shop page</div>
    </>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
