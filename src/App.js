import './App.css';
import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Utilisateurs from './pages/Utilisateurs/Utilisateurs';
import Produits from './pages/Produits/Produits';
import Categories from './pages/Categories/Categories';
import Page404 from './pages/Page404/Page404';

function App() {

  const [utilisateurConnecte, setUtilisateurConnecte] = useState(null);
  
  return (
    <>
      <Header utilisateurConnecte={utilisateurConnecte} 
              setUtilisateurConnecte={setUtilisateurConnecte}>
      </Header>
      <div className='main'>
        <SideMenu></SideMenu>
        <div className='content'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/utilisateurs" element={<Utilisateurs />} />
              <Route path="/produits" element={<Produits />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
