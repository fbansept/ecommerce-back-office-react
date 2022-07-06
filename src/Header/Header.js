import React from 'react'
import Bouton from '../Bouton/Bouton'
import './Header.scss'

export default function Header() {
    
    return (
        <header>
            <div className="conteneur-gauche">
                <img className="logo" src={process.env.PUBLIC_URL + "/logo.png"} />
                <ul className="menu">
                    <li>Dashboard</li>
                    <li>Utilisateurs</li>
                    <li>Produits</li>
                    <li>Catégories</li>
                </ul>
            </div>
            <div className="conteneur-droite">
                <Bouton lien="connexion" icone="user-lock">Connexion</Bouton>
                <Bouton lien="inscription" icone="user-plus">Inscription</Bouton>
            </div>

        </header>
    )
}


