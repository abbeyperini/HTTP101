import React from 'react';

function Fetch() {

  function getRequest() {
    fetch("http://localhost:8080/yarn")
    .then(response => response.json())
    .then(data => console.log(data[0]))
    .catch(error => console.log(error))
  }

  function postRequest() {

    let bodyString = JSON.stringify({
      yarn: {
        id: 5,
        name: "Wonderland Yarns & Frabjous Fibers Mary Ann",
        weight: "Light Fingering",
        meters: 539.5
      }
    })

    fetch("http://localhost:8080/yarn/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: bodyString
    }).then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  function deleteRequest() {
    fetch("http://localhost:8080/yarn/delete/2", {
      method: "DELETE"
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  return (
    <section>
      <button onClick={getRequest}>GET</button>
      <button onClick={postRequest}>POST</button>
      <button onClick={deleteRequest}>DELETE</button>
    </section>
  )
}

export default Fetch;