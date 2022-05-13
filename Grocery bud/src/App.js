import './index.css';
import { useEffect, useState } from "react";
import Item from './model';
import { getLocalStorage, totalSum } from './localStorageHandler'
function App() {

  const [item, setItem] = useState('');
  const [listItems, setListItems] = useState(getLocalStorage());
  const [indicator, setIndicator] = useState({ show: false, msg: '', type: '' });
  const [sum, setSum] = useState(totalSum())

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(listItems));
    localStorage.setItem('total', sum)
    let interval = setTimeout(() => {
      setIndicator({ show: false, msg: '', type: '' });
    }, 2500);
    return () => clearTimeout(interval)
  }, [listItems, indicator, sum]);

  function handelSubmit(e) {
    e.preventDefault();
    if (!item) {
      setIndicator({ show: true, msg: 'please add item', type: 'warning' })
    } else {
      const price = setPrice();
      const newItem = { id: new Date().getTime().toString(), title: item, price: price };
      setListItems([...listItems, newItem]);
      setIndicator({ show: true, msg: 'item added', type: 'success' })
      setItem('');
      setSum(sum + newItem.price)
    }
  }

  const clearList = () => {
    setIndicator({ show: true, msg: 'empty list', type: 'warning' });
    setListItems([]);
    setSum(0)
  };

  const removeItem = (id) => {
    if (listItems.length < 2) {
      setIndicator({ show: true, msg: 'empty list', type: 'warning' });
    } else {
      setIndicator({ show: true, msg: 'item removed', type: 'warning' });
    }
    // eslint-disable-next-line array-callback-return
    listItems.find((item) => {
      if (item.id === id) {
        setSum(sum - item.price)
      }
    })

    setListItems(listItems.filter((item) => {
      return item.id !== id
    }));
  };

  const setPrice = () => {
    let num = Math.floor(Math.random() * 10);
    return num === 0 ? 1 : num
  }

  return (
    <main className='container-fluid text-capitalize p-0 m-0'>
      <div className='w-75 mx-auto mt-5 shadow-lg bg-body rounded py-5'>
        <header className='text-center'>
          <h1>grocery bud</h1>
        </header>
        <form className='text-center my-5' onSubmit={handelSubmit}>
          <input type='text' value={item} onChange={(e) => setItem(e.target.value)} placeholder='e.g. bread' className='rounded px-1' />
          <button className='btn mx-1 text-capitalize rounded border-0 p-1 btn-success' >add item</button>
        </form>
        <div className='items-box'>
          {indicator.show && <p className='text-center fs-5' style={{ color: `${indicator.type === 'success' ? 'green' : 'red'}` }}> {indicator.msg}</p>}
          {
            listItems && listItems.map((item, index) => {
              return (
                <Item item={item} removeItem={removeItem} key={item.id} index={index} />
              )
            })
          }
        </div>
        <div className='pt-4 px-4 d-flex justify-content-between align-items-center'>
          {
            listItems.length > 0 && (<button onClick={() => clearList()} className='btn btn-outline-danger'>clear list</button>)
          }
          {
            listItems.length > 0 && <p className='text-primary p-0 m-0 text-center fs-4'>total: {sum}$</p>
          }
        </div>
      </div>
    </main >
  );
}

export default App;
