import './index.css';
import Model from './model';
import Categories from './categories';
import { useState } from 'react'
import menu from './data';

function App() {
  // https://www.w3schools.com/js/js_object_sets.asp
  //A JavaScript Set is a collection of unique values. Each value can only " OCCUR ONCE " in a Set. A Set can hold any value of any data type.
  const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

  const [items, setItems] = useState(menu);
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <div className="container-fluid">
      <header className='mb-5 border-bottom border-5 border-warning pb-4'>
        <h1 className='text-center mx-auto mt-3 fw-bold'>Our menu</h1>
        <p className='text-center mx-auto  opacity-75'>shake and bake</p>
      </header>
      <main className='main'>
        <Categories items={categories} filterItems={filterItems} />
        <Model items={items} />
      </main>
    </div>
  );
}

export default App;
