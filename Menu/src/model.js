const Model = ({ items }) => {
  return (
    <section className="d-flex justify-content-center flex-wrap ">
      {
        items.map(({ img, title, desc, price, id }) => {
          return (
            <article className=" info d-flex justify-content-between shadow-sm p-2 mx-3 my-3 bg-body rounded" key={id}>
              <div className="img-box">
                <img src={img} alt='pic' className="border border-5 border-warning" />
              </div>
              <div className="head-info px-2 d-flex flex-column">
                <div className="sub-header-info pb-3 border-bottom border-warning border-2 d-flex justify-content-between align-items-center">
                  <h5 className="text-capitalize fw-bold ">{title}</h5>
                  <h5 className="text-capitalize fw-bold text-warning ">${price}</h5>
                </div>
                <p className="fs-5 opacity-75 my-auto">{desc}</p>
              </div>
            </article>
          )
        })
      }
    </section>
  )
}

export default Model;