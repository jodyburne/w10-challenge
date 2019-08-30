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

   let cyanStyle = {
       color: 'cyan'
   }

    return (
        <div>
        <h1 style={cyanStyle}>Most Popular Actors</h1>
        <div className='celeb-page'>
            <div className='celeb-list'>
        {celebs.map(celeb => (
        <h3 className='links' key={celeb.id} onClick={() => select(celeb)}>{celeb.name}</h3>

        ))}
        </div>
        {selected && (
         <div style={cyanStyle} className='celeb-detail'>
         <div>
         <h2 >{selected.name}</h2>
        <h3 >Popularity Score: {selected.popularity}</h3>
         <img src={`https://image.tmdb.org/t/p/w185${selected.profile_path}`}
        alt=''
        />
        </div>
        {selected.known_for.length > 0 && (
            <div>
                <h3>Greatest hits</h3>
            <div className='celeb-page'>
            {selected.known_for.map(film => (
                <div >
                <p key={film.id}>{film.original_title}</p>
                <img src={`https://image.tmdb.org/t/p/w185${film.poster_path}`}
                 alt=''/>
                 </div>
            ))}
            </div>
           </div>

        )
        }
        

         </div>
        )
        }
        </div>
        </div>
    )
}

export default Celebrities