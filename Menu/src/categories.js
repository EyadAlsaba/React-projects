
function Categories({ items, filterItems }) {
  return (
    <section className="w-100 d-flex justify-content-center align-items-center align-content-center my-5">
      {
        items.map((category, index) => {
          return (
            <div className="d-flex mx-2" key={index}>
              <button type="button" className="btn btn-warning m-1 p-3 fs-5 text-capitalize" onClick={() => filterItems(category)}>{category}</button>
            </div>
          )
        })
      }
    </section>
  )
}
export default Categories