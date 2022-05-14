const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

app.use(express.json())
app.use(cors())

let yarnDB = [
  {
    id: 1,
    name: "I Feel Like Dyeing Sock 75/25",
    weight: "Fingering",
    meters: 299.7
  },
  {
    id: 2,
    name: "Magpie Fibers Swanky Sock",
    weight: "Fingering",
    meters: 1097.3
  },
  {
    id: 3,
    name: "Rowan Alpaca Colour",
    weight: "DK",
    meters: 18
  },
  {
    id: 4,
    name: "Malabrigo Yarn Rios",
    weight: "Worsted",
    meters: 192
  }
]

app.get('/', (req, res) => {
  res.send('Welcome to the yarn server!')
})

// app.get('/yarn', (req, res) => {
//   res.send('This is all of the yarn data!')
// })

// app.get('/yarn/:id', (req, res) => {
//   res.send(`This is the yarn data for ${req.params.id}.`)
// })

// app.get('/yarn/:id', (req, res) => {
//   if (isNaN(req.params.id)) {
//     res.status(404).send("No id no yarn!")
//   } else {
//     res.status(200).send(`This is the yarn data for ${req.params.id}.`)
//   }
// })

app.get('/yarn', (req, res) => {
  let yarns = yarnDB.map(yarn => `Yarn ${yarn.id} is named ${yarn.name}. It is ${yarn.weight} weight and you have ${yarn.meters} meters.`)

  res.send(yarns)
})

app.get('/yarn/:id', (req, res) => {
  let yarn

  for (let i=0; i < yarnDB.length; i++) {
    if (yarnDB[i].id === parseInt(req.params.id)) {
      yarn = yarnDB[i]
    }
  }

  if (yarn) {
    res.send(`Yarn ${req.params.id} is named ${yarn.name}. It is ${yarn.weight} weight and you have ${yarn.meters} meters.`)
  } else {
    res.status(404).send("No yarn with that id.")
  }
})

app.delete('/yarn/delete/:id', (req, res) => {
  let index

  for (let i=0; i < yarnDB.length; i++) {
    if (yarnDB[i].id === parseInt(req.params.id)) {
      index = i
    }
  }

  if (index === 0 || index) {
    yarnDB.splice(index, 1)
    console.log(yarnDB)
    res.send(`Yarn id ${req.params.id} deleted!`)
  } else {
    res.status(404).send("No yarn with that id.")
  }
})

app.post('/yarn/create', (req, res) => {
  let yarn = req.body.yarn
  if (yarn.id && yarn.name && yarn.weight && yarn.meters) {
    yarnDB.push(yarn)
    console.log(yarnDB)
    res.send("Yarn added to database!")
  } else {
    res.status(400).statusMessage("Yarn object not formatted correctly.")
  }
})

const { default: axios } = require('axios');
global.Buffer = global.Buffer || require('buffer').Buffer;

function setAuthenticationHeader() {
    let data = `${USERNAME}:${PASSWORD}`;
    let buff = new Buffer.from(data);
    let base64data = buff.toString('base64');
    axios.defaults.headers.common['Authorization'] = 'Basic ' + base64data;      
}

app.use(cors());
app.get('/projects/:user', (req, res) => {
    setAuthenticationHeader();
    let user = req.params.user;
    let url = `https://api.ravelry.com/projects/${user}/list.json`;
    axios.get(url).then((response) => res.send(response.data))
    .catch((error) => res.send(error.response.data))
})

function setAuthenticationHeader() {
  let token = `YOUR_TOKEN`;
  let buff = new Buffer.from(token);
  let base64data = buff.toString('base64');
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + base64data;      
}

app.listen(port, () => {
  console.log("Server is running on port 8080...")
})