import React from 'react'
import Bouton from '../Bouton/Bouton'
import './Header.scss'
import { Link } from 'react-router-dom'

export default function Header({ utilisateurConnecte, setUtilisateurConnecte }) {
    
    return (
        <header>
            <div className="conteneur-gauche">
                <img className="logo" src={process.env.PUBLIC_URL + "/logo.png"} />
                <nav className="menu">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/utilisateurs">Utilisateurs</Link>
                    <Link to="/produits">Produits</Link>
                    <Link to="/categories">Catégories</Link>
                </nav>
            </div>
            <div className="conteneur-droite">
                {utilisateurConnecte
                ?   <>
                        <span>Bienvenu {utilisateurConnecte.prenom} {utilisateurConnecte.nom}</span>
                        <Bouton lien="deconnexion" icone="user-plus">Se déconnecter</Bouton>
                    </>
                :   <>
                        <Bouton onClick={onClickConnexion} lien="connexion" icone="user-lock">Connexion</Bouton>
                        <Bouton lien="inscription" icone="user-plus">Inscription</Bouton>
                    </>
                }
            </div>

        </header>
    )

    function onClickConnexion() {
        setUtilisateurConnecte({ nom: "bansept", prenom: "franck" })
    }
}


