import '../App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Category from './Header/Category';
import Products from './Products/Products';

const App = () => {
  return (
    <div className="Container">
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/*" element={<Navigate to="/" />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
