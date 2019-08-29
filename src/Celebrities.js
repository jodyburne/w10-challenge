import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Celebrities(){
    const [celebs, setCelebs] = useState([])
    const [selected, setSelected] = useState(null)
    useEffect(()=>{

    axios.get('https://api.themoviedb.org/3/person/popular?page=2&api_key=2b7561322778c27ac54a07c035debb43')
        .then(res => {
            setCelebs(res.data.results)
        })
            console.log(celebs)
    }, [])

   function select(c){
       console.log(c)
       setSelected(c)
   }
    return (
        <div>
        <h1>Most Popular Actors</h1>
        {celebs.map(celeb => (
            <div key={celeb.id}>
        <h3>{celeb.name}</h3>
        <img src={`https://image.tmdb.org/t/p/w185${celeb.profile_path}`}
        alt=''
        onClick={() => select(celeb)}
        />
        </div>

        ))}
        {selected && (
         <div>
         <h3>Popularity Score: {selected.popularity}</h3>
        {selected.known_for.length > 0 && (
            selected.known_for.map(film => (
                <div key={film.id}>
                <h3>Greatest hits</h3>
                <p>{film.original_title}</p>
                <img src={`https://image.tmdb.org/t/p/w185${film.poster_path}`}
                 alt=''/>
                 </div>
            ))
        )
        }
        

         </div>
        )
        }
        </div>
    )
}

export default Celebrities