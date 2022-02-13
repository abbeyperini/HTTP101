import React from 'react';

function XHR() {

  function getRequest() {
    // create a request object
    let gXHR = new XMLHttpRequest()

    // set method and URL
    gXHR.open("GET", "http://localhost:8080/yarn")

    // send GET request
    gXHR.send()

    // what happens when the response is received
    gXHR.onload = function() {
      if (gXHR.status !== 200) {
        console.log(gXHR.status, gXHR.statusText)
      } else {
        let yarns = JSON.parse(gXHR.response)
        console.log(yarns[0])
      }
    }
  }

  function postRequest() {

    let body = JSON.stringify({
      yarn: {
        id: 5,
        name: "Wonderland Yarns & Frabjous Fibers Mary Ann",
        weight: "Light Fingering",
        meters: 539.5
      }
    })

    let pXHR = new XMLHttpRequest()

    pXHR.open("POST", "http://localhost:8080/yarn/create")
    
    // set request header
    pXHR.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    
    pXHR.send(body)

    pXHR.onload = function() {
      if (pXHR.status !== 200) {
        console.log(pXHR.status, pXHR.statusText)
      } else {
        console.log(pXHR.response)
      }
    }
  }

  function deleteRequest() {
    let dXHR = new XMLHttpRequest()

    dXHR.open("DELETE", 'http://localhost:8080/yarn/delete/3')

    dXHR.send()

    dXHR.onload = function() {
      if (dXHR.status !== 200) {
        console.log(dXHR.status, dXHR.statusText)
      } else {
        console.log(dXHR.response)
      }
    }
  }

  return (
    <section>
      <button onClick={getRequest}>GET</button>
      <button onClick={postRequest}>POST</button>
      <button onClick={deleteRequest}>DELETE</button>
    </section>
  )
}

export default XHR;