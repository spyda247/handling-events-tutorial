import React, { useState } from 'react'
import './FileNamer.css'

function FileNamer() {
  const [name, setName ] = useState('')
  const [alert, setAlert] = useState(false)

  const validate = event => {
    if (/\*/.test(name)) {
      event.preventDefault()
      setAlert(true)
      return
    }
    setAlert(false)
  }
  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview: {name}.js</h2>
      </div>
      <form action="">
        <label htmlFor="file-name">
          <p>Name:</p>
          <input 
            type="text" 
            id="file-name"
            autoComplete="off"
            onChange={event => {setName(event.target.value)}} />
        </label>
        {alert && 
          <div>
            <span role="img" aria-label="allowed"></span>
            <span role="img" aria-label="not-allowed"></span>
          </div>}
        <div>
            <button onClick={validate}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default FileNamer