import './index.css';
import Values from 'values.js'
import { useState, useEffect } from 'react';
import ModelColor from './model'
function App() {
  const [isValid, setIsValid] = useState(true);
  const [list, setList] = useState(new Values('skyblue').all(10));

  useEffect(() => {
    let userInput = document.getElementById('query');
    const timeout = setTimeout(() => {
      setIsValid(true);
      userInput.placeholder = '#hex, rgb(), color name'
      userInput.style.color = 'inherit'
      userInput.disabled = false;
    }, 3000)
    return () => clearTimeout(timeout)
  }, [isValid]);

  function userSubmit(e) {
    e.preventDefault();
    let userInput = document.getElementById('query');
    try {
      let colors = new Values(userInput.value.trim()).all(10)
      userInput.value = ''
      setList(colors);
    } catch (error) {
      setIsValid(false);
      userInput.value = ''
      userInput.placeholder = 'invalid query'
      userInput.style.color = '#ff6666'
      userInput.disabled = true;
    }
  }

  return (
    <div className="container  p-0">
      <header className='p-3 mt-2 text-center text-capitalize fw-bold'>
        <h1>color generator</h1>
        <p className='mx-auto p-2'>Shake and bake</p>
      </header>
      <main>
        <form className='my-5 mx-auto text-center fs-4' onSubmit={userSubmit}>
          <label className='text-capitalize mx-1'>color</label>
          <input className=' mx-1 px-1 shadow-sm rounded border border-muted' placeholder='#hex, rgb(), color name' id='query' style={{ backgroundColor: '#eee' }} />
          <button className=' mx-1 text-uppercase fw-bold px-3 shadow-sm rounded border border-muted' style={{ color: `${isValid ? 'inherit' : '#ff6666'}` }}>submit</button>
        </form>
        <div className='d-flex align-items-center flex-wrap'>
          {
            list.map((color, index) => {
              return (
                <ModelColor key={index} color={color} index={index} />
              )
            })
          }
        </div>
      </main>
    </div >
  );
}

export default App;
