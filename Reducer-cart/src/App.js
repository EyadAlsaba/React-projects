import './index.css';
import { useGlobalContext } from './context'
import Model from './itemModel';
import { BsCart4 } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
function App() {
  const { state, reset } = useGlobalContext();
  return (
    <>
      {
        state.loading ?
          <h1 className='text-center fw-bold text-warning pt-5 m-5'>Loading...</h1>
          :
          <main>
            <header className='bg-info py-3 px-5 d-flex justify-content-between align-items-center'>
              {
                state.amount === 0 ?
                  <div className='d-flex justify-content-center flex-column w-100 align-items-center'>
                    <p className='mx-auto p-5 fs-4 text-center'>The cart is empty <br /> please click on refresh button</p>
                    <button className='btn btn-outline-dark d-block fs-5' onClick={() => window.location.reload()}>Refresh</button>
                  </div>
                  :
                  <>
                    <h1>Cart items</h1>
                    <p className='fs-4 p-0 m-0 text-center'>
                      {state.amount}
                      <BsCart4 className='d-block' />
                    </p>
                  </>
              }
            </header>
            <div className='w-100'>
              {
                state.cart.map((item, index) => {
                  return (
                    <Model item={item} key={index} />
                  )
                })
              }
            </div>
            <div className={`${state.amount <= 0 ? 'invisible' : 'visible text-center border-top border-dark pt-5 m-5 fs-4'}`}>
              <div className='w-100 d-flex justify-content-between'>
                <h4>Total</h4>
                <p>${state.total.toFixed(2)}</p>
              </div>
              <button className='btn btn-danger' onClick={() => reset()}>Clear Cart</button>
            </div>
          </main>
      }
      <footer className='w-100 bg-light p-5 text-center fs-2 text-info '>
        <p className='text-capitalize'>powered by React</p>
        <FaReact />
      </footer>
    </>
  );
}

export default App;
