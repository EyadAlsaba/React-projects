import './index.css';
import { useFetch } from './useFetchHook'
import { useEffect, useState } from 'react'
// import { BsFillAlarmFill } from "react-icons/bs";
function App() {
  // App State
  const API = useFetch('https://course-api.com/react-tabs-project')
  const [data, setData] = useState([]);
  const [person, setPerson] = useState('TOMMY')
  // Effecters
  useEffect(() => {
    setData(API)
  }, [API]);

  // Return
  return (

    <div className="container">
      <header className='header-box'>
        <h1>Experience</h1>
      </header>
      <main>
        <div className='btn-box'>
          {
            data.map((item, index) => {
              return (
                <div key={index}>
                  <button className='btn' value={item.company} onClick={(e) => setPerson(e.target.value)}>
                    {item.company}
                  </button>
                </div>
              )
            })
          }
        </div>
        <div className='content-box'>
          {
            // eslint-disable-next-line array-callback-return
            data.map((item) => {
              if (item.company === person) {
                return (
                  <div key={item.id} className='title-box'>
                    <h3 className='title'>{item.title}</h3>
                    <h5 className='name'>{item.company}</h5>
                    <p className='date'>{item.dates}</p>
                    <div className='duty-box'>
                      {
                        item.duties.map((duties, index) => {
                          return (
                            <p key={index} className='paragraph'><span>{'>'}</span> {duties}</p>
                          )
                        })
                      }
                    </div>
                  </div>
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
