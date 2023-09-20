import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'


//pages
import Root from './pages/Root'
import Addcard from './pages/AddCard'
import Cards from './pages/cards'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index path="/cards" element={<Cards/>} />
      <Route path="/addcard" element={<Addcard />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
