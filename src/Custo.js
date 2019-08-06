import React, {useState} from 'react'


export default function Custo() {
const [size, setSize] = useState(110)
const [url, setUrl] = useState('https://thumbs.dreamstime.com/t/sad-face-drawing-white-background-87538264.jpg')

function update(e) {
if (e.target.type === 'range')
    setSize(e.target.value)
if (e.target.type === 'text')
    setUrl(e.target.value)
}

  return (
    <div>
      <h1>Custo im</h1>
<input type='text' onChange={update} value={url}/> <br/>
<input type='range' onChange={update} value={size} min='0' max='200'/> 

  {size &&
    <p> {size} x {size} px </p>
  } 
  <br/>

  {url &&
  <img src={url} height={size} width={size} alt=''/>
  }

    </div>
  )
}