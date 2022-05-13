import './index.css';
import { FaQuoteRight, FaArrowCircleLeft, FaArrowCircleRight, } from "react-icons/fa";
import USERS from './data'
import { useState } from 'react';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(USERS)
  return (
    <div className="container w-50 mx-auto shadow-lg bg-body rounded h-100">
      <header className='p-5 text-center mb-3'>
        <h1 className='fw-bold'><span className='px-1 text-info'>/</span>Reviews</h1>
      </header>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner h-100">
          {
            data.map((user, userIndex) => {
              if (userIndex === 0) {
                return (
                  <div className="carousel-item active h-100" data-bs-interval="5000" key={user.id} data-bs-pause='hover' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Slider paused on hover">
                    <div className='h-25'>
                      <img src={user.image} className="mx-auto d-block rounded-circle shadow  mb-5 bg-body rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} alt="..." />
                    </div>
                    <div className="text-center mt-2">
                      <h5 className='fs-3 text-capitalize fw-bold'>{user.name}</h5>
                      <h6 className='mb-5 text-info opacity-75 text-capitalize'>{user.title}</h6>
                      <FaQuoteRight className='text-info fs-4 mb-2' />
                      <p className='fs-4 mt-2 px-2'>{user.quote}</p>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className="carousel-item h-100" data-bs-interval="5000" key={user.id} data-bs-pause='hover' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Slider paused on hover">
                    <div className='h-25'>
                      <img src={user.image} className="mx-auto d-block rounded-circle shadow  mb-5 bg-body rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} alt="..." />
                    </div>
                    <div className="text-center mt-2">
                      <h5 className='fs-3 text-capitalize fw-bold'>{user.name}</h5>
                      <h6 className='mb-5 text-info opacity-75 text-capitalize'>{user.title}</h6>
                      <FaQuoteRight className='text-info fs-4 mb-2' />
                      <p className='fs-4 mt-2 px-2'>{user.quote}</p>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
        <button className="carousel-control-prev fs-2" style={{ height: 'fit-content', top: '20vh' }} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <FaArrowCircleLeft className='text-info m-2' />
        </button>
        <button className="carousel-control-next fs-2" style={{ height: 'fit-content', top: '20vh' }} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <FaArrowCircleRight className='text-info m-2' />
        </button>
      </div>
    </div >
  );
}

export default App;
/*
        ---------------------------
       Alternative logic could be explicit like below!
       Where we can use interval to increase the index and display it!
       interval.js file has this functionality ready to use!
        ---------------------------
        { <section classNameName='main-sec'>
          {
          data.map((user, userIndex) => {
            if (userIndex === index) {
              return (
                <div key={user.id} classNameName='sub-sec'>
                  <article classNameName='article'>
                    <img src={user.image} alt='pic' />
                    <h4 classNameName='name'>{user.name}</h4>
                    <p classNameName='title'>{user.title}</p>
                    <FaQuoteRight />
                    <p classNameName='quote'>{user.quote}</p>
                  </article>
                  <div classNameName='slider-control'>
                    <button classNameName='btn btn-left' onClick={() => setIndex(index + 1)}>
                      <FaArrowCircleLeft />
                    </button>
                    <button classNameName='btn btn-right' onClick={() => setIndex(index - 1)}>
                      <FaArrowCircleRight />
                    </button>
                  </div>
                  <div classNameName='slider-state'>
                    <button classNameName='btn-state' onClick={() => setSlideState(!slideState)}>
                      {
                        slideState ? <FaPauseCircle /> : <FaPlayCircle />
                      }
                    </button>
                  </div>
                </div>
              )
            }
          })
        }
      </section>}
*/