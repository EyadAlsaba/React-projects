import { useEffect, useState } from 'react';
import { FaRegCopy } from 'react-icons/fa'

const ModelColor = ({ color, index }) => {
  const [isClipped, setIsClipped] = useState(false)
  let colorSampleHex = color.hexString();
  let colorSampleRgb = color.rgbString();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsClipped(false)
    }, 3000)
    // it's a good habit to clear interval even if not necessary!
    return () => clearTimeout(timeout)
  }, [isClipped]);

  function handelClipBoard() {
    setIsClipped(true)
    navigator.clipboard.writeText(`${colorSampleHex}`)
  }

  return (
    <div className="position-relative m-1 flex-grow-1 w-25 border border-muted shadow-sm rounded" style={{ backgroundColor: `${colorSampleHex}`, color: `${index > 10 ? '#eee' : 'inherit'}` }}>
      <FaRegCopy className='fs-4 m-2 position-absolute top-0 end-0' onClick={() => handelClipBoard()} />
      {isClipped ? <p className='p-0 m-2 fst-italic position-absolute top-0 start-50'>color copied</p> : null}
      <p className="p-1 m-0 fs-5 fw-bold">{colorSampleHex}</p>
      <p className="p-1 m-0 fs-5 fw-bold">%{color.weight}</p>
      <p className="p-1 m-0 fs-5 fw-bold">{colorSampleRgb}</p>
    </div>
  )
}

export default ModelColor