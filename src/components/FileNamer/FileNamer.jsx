import React, { useState, useEffect, useCallback } from "react";
import "./FileNamer.css";

function FileNamer() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => window.removeEventListener("click", handleWindowClick);
  }, [alert, setAlert]);

  const handleWindowClick = (event) => {
    if (!event.target.type) setAlert(false);
  };
  const validate = (event) => {
    event.preventDefault();
    if (/\*/.test(name) || name === "") {
      setAlert(true);
    } else {
      setAlert(false);
      setName("");
      console.log(`creating file ${name}.js`);
    }
  };

  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview: {name}.js</h2>
      </div>
      <form action={`/?name=${name}`}>
        <label htmlFor="file-name">
          <p>Name:</p>
          <input
            type="text"
            id="file-name"
            autoComplete="off"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </label>
        <div className="information-wrapper">
          <button
            className="information"
            onClick={() => setAlert(true)}
            type="button"
            name="information"
          >
            more information
          </button>
          {alert && (
            <div className="popup">
              <span role="img" aria-label="allowed">
                ✅
              </span>
              Only alphanumeric characters allowed
              <span role="img" aria-label="not-allowed">
                ⛔
              </span>
              * Not allowed
            </div>
          )}
        </div>
        <div>
          <button onClick={validate}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default FileNamer;
