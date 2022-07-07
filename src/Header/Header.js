import React from 'react'
import Bouton from '../Bouton/Bouton'
import './Header.scss'
import { Link } from 'react-router-dom'
import { menu } from '../menu'

export default function Header({ utilisateurConnecte, setUtilisateurConnecte }) {

    return (
        <header>
            <div className="conteneur-gauche">
                <img className="logo" src={process.env.PUBLIC_URL + "/logo.png"} />
                <nav className="menu">
                    {menu.map((element) => (
                        <Link key={element.lien} to={element.lien}>{element.titre}</Link>
                    ))}
                </nav>
            </div>
            <div className="conteneur-droite">
                {utilisateurConnecte
                ?   <>
                        <span>Bienvenu {utilisateurConnecte.prenom} {utilisateurConnecte.nom}</span>
                        <Bouton lien="deconnexion" icone="user-plus">Se déconnecter</Bouton>
                    </>
                :   <>
                        <Bouton onClick={onClickConnexion} icone="user-lock">Connexion</Bouton>
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


