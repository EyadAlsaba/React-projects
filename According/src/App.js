import './index.css';
import questions from './data';
import { useState } from 'react'

function App() {
  const [data, setData] = useState(questions);

  return (
    <main className="w-100 h-100 bg-success bg-gradient position-relative">
      <article className='article w-50  shadow-lg bg-body rounded position-absolute top-50 start-50 translate-middle'>
        <div className="box h-100 d-flex justify-content-between bg-light p-2">

          <section className='section w-25 h-100 mt-4 px-2'>
            <h2 className="fw-bold">Questions and answers about login</h2>
          </section>

          <section className='section w-75 h-100 d-flex justify-content-around'>
            <div className="w-100 d-flex flex-column justify-content-evenly me-2">
              {
                data.map((question) => {
                  return (
                    <Question key={question.id} {...question} />
                  )
                }
                )}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

const Question = ({ title, info }) => {
  const [switcher, setSwitcher] = useState(false);
  return (
    <div className="w-100 card shadow p-2 bg-body rounded my-2">
      <div className="d-flex flex-column align-items-center  py-3">
        <div className='w-100 d-flex justify-content-between  px-2 align-items-center '>
          <h6 className='fs-4 fw-bold'>{title}</h6>
          <button type="button" className="btn btn-success rounded-circle fs-2 fw-bold" onClick={() => setSwitcher(!switcher)}>{switcher ? '-' : '+'}</button>
        </div>
        <div className='show-box w-100 px-4 py-2'>
          {switcher && <p className='opacity-75 fs-5 fw-bold'>{info}</p>}
        </div>
      </div>
    </div>
  )
}
export default App;
