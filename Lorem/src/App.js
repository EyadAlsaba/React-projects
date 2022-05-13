import './index.css';
import text from './data';
import { useState } from 'react';
function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(text);
  const [textIndex, setTextIndex] = useState(0);
  function submitForm(e) {
    e.preventDefault();
    let userInput = document.getElementById('input')
    setTextIndex(parseInt(userInput.value));
  }

  return (
    <div className="container-fluid">
      <header className='text-center p-5'>
        <h1 className='text-capitalize'>lorem text generator</h1>
        <p className='text-capitalize'>tired of boring lorem ipsum?</p>
      </header>
      <main>
        <form className='m-2 text-center' onSubmit={submitForm}>
          <label className='text-capitalize px-2 fs-5'>paragraph</label>
          <input id='input' type='number' className='p-1 mx-1 w-25' placeholder='0' min={0} max={data.length - 1} />
          <button className='p-1 fw-bold text-uppercase'>generate</button>
        </form>
        <div className='lorem-box mt-5 w-75 text-center mx-auto'>
          {
            // eslint-disable-next-line array-callback-return
            data.map((para, index) => {
              if (textIndex > index) {
                return (
                  <p className='m-2 py-2 fs-5' key={index}>{para}</p>
                )
              }
            })
          }
        </div>
      </main>
    </div>
  );
}

export default App;
