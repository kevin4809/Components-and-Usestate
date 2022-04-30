import React, { useState } from 'react'
import phrases from './quotes.json'
import './Style.css'
const QuoteBox = () => {

  
  const [count, setCount] = useState(0);
  const changeColors = ["lightgreen", "lightcoral", "lightblue", "aquamarine", "lightgray", "lightsalmon", "lightseagreen", "chocolate", "lightsteelblue"]

  const next = () => {
    let random = Math.round(Math.random() * phrases.length);
    setCount(random)
  }

  let randomColors = Math.round(Math.random() * changeColors.length);

  document.body.style = `background: ${changeColors[randomColors]}`


  return (
    <div className='container' style={{ color: changeColors[randomColors] }}>
      <div className="card">
        <i className="fa-solid fa-quote-left com"></i>
        <h1>{phrases[count].quote}</h1>
        <h2>{phrases[count].author}</h2>
        <div className="button">
          <button className="fa-solid fa-angle-right" onClick={next} style={{ background: changeColors[randomColors] }}></button>
        </div>

      </div>
    </div>
  )
}

export default QuoteBox