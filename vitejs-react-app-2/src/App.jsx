import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PropsComponent from './components/PropsComponent'
import * as bootstrap from 'bootstrap';

function App() {
  const [count, setCount] = useState(0)

  const data = {
    name: "Jennifer",
    grade: "10",
    year: "2015"
  }

  document.title = "Zookeeper"

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <PropsComponent {...data} />
      <PropsComponent name="Kendall"  />
    </>
  )
}

export default App
