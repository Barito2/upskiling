import './App.css';
import { Component, useEffect, useState } from 'react';
import CounterCountiner from './counter/CounterCountiner';

function App() {
  const [status, setStatus] = useState(true)
  const [title, setTitle] = useState('')
  const [data, setData] = useState([])
  const [user, setUser] = useState([])

  const fetchData = () => {
    return new Promise(() => {
      setTimeout(() => {
        setData([
          {
            id: 1,
            name: "aa",
          },
          {
            id: 2,
            name: "bb",
          },
        ])
      }, 1000);
    })
  }

  console.log(user);

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = () => {
    user.id = data.length + 1
    setData([...data, user])
  }

  useEffect(() => {
    if (status) {
      setTitle('React App Title')
    } else {
      setTitle('Change Title')
    }
  }, [status])
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => setStatus(!status)}>Change Title</button>
      {
        data.map((item, i) => {
          return (
            <h1 key={i}>{item.name}</h1>
          )
        })
      }
      <input type="text" placeholder="Name" name="name" onChange={(e) => handleInputChange(e)} />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <>
//         <CounterCountiner />
//       </>
//     )
//   }
// }

export default App;
