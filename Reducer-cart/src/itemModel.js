import { useGlobalContext } from './context'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import { RiDeleteBinLine } from 'react-icons/ri'

const Model = ({ item }) => {

  const { increase, decrease, remove } = useGlobalContext()
  const { title, price, amount, } = item

  function hoverState() {
    document.getElementById(`${item.id}`).firstChild.className = 'my-auto shake';
    setTimeout(() => {
      document.getElementById(`${item.id}`).firstChild.className = 'my-auto';
    }, 1100)
  }

  return (
    <div id={item.id} className='d-flex justify-content-center align-items-center my-5'>
      <div className='my-auto'>
        <img src={item.img} alt='phone' />
      </div>

      <div className='d-flex flex-column p-1 w-50'>
        <h4 className=' text-capitalize'>{title}</h4>
        <p className=' fs-5 opacity-50'>${price}</p>
        <button className='text-danger border-0 bg-transparent fs-5' onMouseEnter={() => hoverState()} onClick={() => remove(item)}><RiDeleteBinLine /></button>
      </div>

      <div className='d-flex flex-column  text-center '>
        <button className='border-0 bg-transparent mx-auto btn-control-inc text-info fs-4' onClick={() => increase(item)}><BsChevronUp /></button>
        <p className='my-auto fs-5'>{amount}</p>
        <button className='border-0 bg-transparent mx-auto btn-control-dec text-info fs-4' onClick={() => decrease(item)}><BsChevronDown /></button>
      </div>
    </div>
  )
}

export default Model