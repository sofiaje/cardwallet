import './App.scss'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'


//pages
import Root from './pages/Root'
import Addcard from './pages/addCard/AddCard'
import Cards from './pages/cards/Cards'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Cards/>} />
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
