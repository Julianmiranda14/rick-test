import { useEffect, useState } from "react"
import Card from "../Components/Card"


export default function Home(){

  const [character,setCharacter] = useState([])

    const apiUrl = `https://rickandmortyapi.com/api`

 useEffect (() => { 
    fetch (`${apiUrl}/character`)
    .then (res => res.json())
    .then (data => setCharacter(data.results))

},)

    return (
        <div>
        {character.map((character,index) => <Card key={index}  name={character.name} image={character.image} status={character.status} /> )}
        </div>
    )
}