import { FaRegTrashAlt } from "react-icons/fa";

const Item = ({ item, removeItem, index }) => {
  return (
    <div className='p-4 d-flex justify-content-between align-items-center' id={item.id}>
      <p className="p-0 m-0 fs-5">{index + 1}- {item.title}</p>
      <p className="p-0 m-0 fs-5 text-primary">${item.price}</p>
      <button onClick={() => removeItem(item.id)} className='btn btn-outline-danger'><FaRegTrashAlt /></button>
    </div>
  )
}
export default Item