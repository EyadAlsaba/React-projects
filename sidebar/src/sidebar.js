import { social, links } from './data'

const Sidebar = ({ state }) => {
  const { isSidebarOpen, sidebarHandler } = state;
  return (
    isSidebarOpen &&
    <div className='w-100 h-100  d-flex flex-column justify-content-between'>
      <div className='text-end m-3 d-flex justify-content-between align-items-center fs-5'>
        <p className='p-0 m-0 ms-1 fw-bold'>Coding Addict</p>
        <button className={`btn btn-sm btn-outline-dark fw-bold`} onClick={() => sidebarHandler()}>X</button>
      </div>
      <ul className='px-4 m-0 h-75 d-flex flex-column justify-content-evenly text-capitalize fs-4'>
        {
          links.map(({ url, id, text, icon }) => {
            return (
              <li key={id}>
                <a href={url}>
                  <i className='px-2'>{icon}</i>
                  {text}
                </a>
              </li>
            )
          })
        }
      </ul>
      <ul className='px-2 mb-5  d-flex justify-content-around align-items-center fs-5'>
        {
          social.map(({ id, url, icon }) => {
            return (
              <li key={id} className=''>
                <a href={url}><i className='px-2'>{icon}</i></a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar