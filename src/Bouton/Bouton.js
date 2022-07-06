import React from 'react'
import './Bouton.scss'

export default function Bouton({ children, lien, icone, onClick, desactive }) {

  const baliseIcone = <i className={"fa-solid fa-" + icone}></i>;

  const contenu = <>{ children } {icone && baliseIcone}</>;

  if (lien) {
    return (
      <a {... !desactive ? { href: lien } : {}} onClick={onClick} className={"Button" + (desactive ? 'desactive' : '')}>
        {contenu}
      </a>
    )
  } else {

    return (
      <button disabled={desactive} onClick={onClick} className={"Button" + (desactive ? 'desactive' : '')} >
        {contenu}
      </button>
    )
  }
}

