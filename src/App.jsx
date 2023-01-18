import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import GridTable from './pages/GridTable'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='users'>
            <Route index element={<GridTable isUser={true} />} />
          </Route>
          <Route path='products'>
            <Route index element={<GridTable />} />
          </Route>
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
