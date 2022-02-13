import React from 'react';
import axios from 'axios';

function Axios() {
  function getRequest() {
    axios.get('http://localhost:8080/yarn')
    .then(response => console.log(response.data[0]))
    .catch(error => console.log(error))
  }

  function postRequest() {
    axios.post('http://localhost:8080/yarn/create', {
      yarn: {
        id: 5,
        name: "Wonderland Yarns & Frabjous Fibers Mary Ann",
        weight: "Light Fingering",
        meters: 539.5
      }
    }).then(response => console.log(response.data))
    .catch(error => console.log(error))
  }

  function deleteRequest() {
    axios.delete('http://localhost:8080/yarn/delete/1')
    .then(response => console.log(response.data))
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

export default Axios;