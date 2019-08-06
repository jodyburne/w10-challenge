import React, {useState} from 'react'

export default function Temp() {
const [state, setState] = useState(null)

function setTemp(e){
    setState(e.target.value)
}

const styleCold = {
  color: 'blue'
}

const styleHot = {
  color: 'red'
}

  let answer
  if (state < 10) {
    answer = <p style={styleCold}>
      I's cold, brrr <span>❄️</span>
    </p>
  }
  else if (state >= 10 && state <= 30) {
    answer = <p>
      It's nice <span> 🌼 </span>
    </p>
  }
  else if (state > 30){
     answer = <p style={styleHot}>
      It's nice <span> ☀️ </span>
    </p>
  }
  return (
    <div>
      <h1>Temperature</h1>
      <input type="number" name="temp" value={state} onChange={setTemp} placeholder='Temperature in ºC'/>

{state && answer}

    </div>
  )
}