import { useEffect, useState } from 'react';
import './index.css';
import { useFetch } from './useFetch';
import ModelItem from './modelItem';
function App() {
  let URL = 'https://course-api.com/react-tours-project';
  const DATA = useFetch(URL);
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    const filterUserQuery = () => {
      // eslint-disable-next-line array-callback-return
      let sortedDATA = [...DATA].sort((a, b) => {
        let A = a.price.replace(',', '.');
        let B = b.price.replace(',', '.')
        let aNum = parseFloat(A);
        let bNum = parseFloat(B);
        switch (sortType) {
          case 'price-low':
            return aNum - bNum
          case 'price-high':
            return bNum - aNum;
          default:
            setProducts(DATA);
        }
      });
      setProducts(sortedDATA);
    }
    filterUserQuery();
  }, [DATA, sortType])

  function filterProducts(id) {
    const deletedElement = document.getElementById(id);
    setProducts(products.filter((products) => products.id !== deletedElement.id));
  }

  return (
    <div className="container-fluid">
      <header className='py-4 my-3'>
        <h1 className='text-center fw-bold m-auto border-bottom border-3 border-info w-25'>Our Tours</h1>
      </header>
      <div className='w-25 mx-auto mb-5'>
        <select className="form-select form-select-sm p-2 text-info text-capitalize fs-4 " aria-label=".form-select-sm" id='filter' name='filter-select' onChange={(e) => setSortType(e.target.value)}>
          <option defaultValue='default'>filter</option>
          <option id='price' value="price-low">price low first</option>
          <option id='price' value="price-high">price high first</option>
        </select>
      </div>
      {
        products && products.map((item) => {
          if (products.length === 1) {
            return (
              <div className='w-50 mx-auto text-center'>
                <h1 className='m-4'>That is all we have</h1>
                <button type="button" className="btn btn-info p-3 text-light fw-bold fs-5" onClick={() => setProducts(DATA)}>Refresh</button>
              </div>
            )
          }
          return (
            <ModelItem key={item.id} filterProducts={filterProducts} item={item} />
          )
        })
      }
    </div >
  );
}

export default App;
