import './index.css';
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa";
import { useState } from 'react';
import reviews from './data';
function App() {
  const [review, setReview] = useState(0)
  const { name, job, image, text } = reviews[review];

  function handelNextReview() {
    review >= 0 && review !== reviews.length - 1 ? setReview(review + 1) : setReview(0);
  }
  function handelPreviousReview() {
    review === 0 ? setReview(reviews.length - 1) : setReview(review - 1);
  }
  function randomReview() {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === review && review !== reviews.length - 1) {
      random = review + 1;
    } else if (random === review && review === reviews.length - 1) {
      random = review - 1
    }
    setReview(random);
  }

  return (
    <div className="container-fluid h-100 p-0">

      <div className='h-25 d-flex flex-column justify-content-center align-items-center'>
        <h1 className='w-100 text-center fw-bold'>Our Reviews</h1>
        <p className='w-25 border-bottom border-4 pt-2 border-info'></p>
      </div>

      <div className=" p-3 w-50 mx-auto card border-0 shadow bg-body">
        <div className='img-box mx-auto'>
          <img src={image} className="card-img-top rounded-circle" alt="..." />
          <span className='quote text-center text-light bg-info'>
            <FaQuoteRight />
          </span>
        </div>
        <div className='mx-auto'>
          <h4 className='text-capitalize text-center mb-0 mt-2'>{name}</h4>
          <p className='text-uppercase text-center text-info mt-1 opacity-75'>{job}</p>
        </div>

        <div className="w-100 text-card mx-auto text-center px-2 h-100">
          <p className="opacity-75 fs-4 text-break m-0">{text}</p>
        </div>

        <div className='mx-auto'>
          <button className="arrow btn text-info fs-1" onClick={() => handelPreviousReview()}>
            <FaAngleLeft />
          </button>
          <button className="arrow btn text-info fs-1" onClick={() => handelNextReview()}>
            <FaAngleRight />
          </button>
          <button className='reload-btn d-block mx-auto mt-2 text-info btn btn-sm bg-info bg-opacity-10 fw-bold text-capitalize' onClick={() => randomReview()}>surprise me</button>
        </div>

      </div>
    </div >
  );
}

export default App;
