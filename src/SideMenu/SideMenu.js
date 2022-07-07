
import './SideMenu.scss'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menu } from '../menu'

export default function SideMenu() {

  const [sousMenu, setSousMenu] = useState([]);

  let location = useLocation();

  useEffect(() => {

    const elementActuelMenu = menu
      .filter(element => element.lien == location.pathname)[0]

    setSousMenu(elementActuelMenu ? elementActuelMenu.sousMenu : [])

  }, [location]);
  

  return (
    <nav className="side-menu">

      {sousMenu &&
        sousMenu.map((element) => (
          <Link key={element.lien} to={element.lien}>
            <i className={"fa-solid fa-" + element.icone}></i>
            {element.titre}
          </Link>
        ))
      }
    </nav>
  )
}
