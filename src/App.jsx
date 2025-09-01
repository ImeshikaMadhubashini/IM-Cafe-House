import './App.css'
import Navigation from './Component/Navigation/Navigation'
import Footer from './pages/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeCotainer from './Component/HomeCotainer'
import SubCategory from './pages/SubCategory/SubCategory'




function App() {
  

  return (

  <Router >
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeCotainer />} />
        <Route path="/:subCategoryName" element={<SubCategory />} />
      </Routes>
      <Footer />
      </Router>
  )
}

export default App
