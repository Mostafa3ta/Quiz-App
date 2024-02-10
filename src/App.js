import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Settings from './pages/Settings'
import Questions from './pages/Questions'
import Score from './pages/Score'
import './App.css';
import { Box } from '@mui/material';
import Footer from './components/Footer';

let routers = createBrowserRouter([
  { path: '/', element: <Settings /> },
  { path: '/questions', element: <Questions /> },
  { path: '/score', element: <Score /> },
])

function App() {
  return <>
    <Box textAlign='center' mt={8} mb={8}>
      <RouterProvider router={routers}></RouterProvider>
      <Footer></Footer>
    </Box>
  </>
}

export default App;
