import { useState } from "react";
const ModelItem = ({ item, filterProducts }) => {
  const [readMore, setReadMore] = useState(false);
  const { image, id, name, info, price } = item;
  return (
    <div className="card mx-auto shadow mb-5 bg-body rounded card-box" id={id} key={id}>
      <img src={image} className="card-img-top" alt="img" />
      <div className="card-body p-2 text-center">
        <h4 className="card-title m-2">{name}</h4>
        <h5 className="card-title bg-info py-1 text-info fw-bold bg-opacity-10 mx-auto my-2 w-25">${price}</h5>
        <p className="card-text opacity-75 fs-5">{readMore ? info : `${info.substring(0, 200)}...`}
          <button className='toggle-btn text-info' onClick={() => setReadMore(!readMore)} > {readMore ? 'show less' : 'show more'}</button></p>
        <button href="#" className="p-1 my-3 btn btn-danger" onClick={() => { filterProducts(id) }}>Not Interested</button>
      </div>
    </div>
  )
}

export default ModelItem;