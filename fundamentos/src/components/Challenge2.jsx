import React from 'react'



const Challenge2 = () => {
    const valeur1 = 10
const valeur2= 12
const somme = valeur1 + valeur2

  return (
    <div>
        <button onClick={
            () => {
                alert("La somme de " + valeur1 + " et de " + valeur2 + " est de " + somme)
            }
        }>Cliquer pour faire la somme</button>
    </div>
  )
}

export default Challenge2