import { Route, Routes, Link } from 'react-router-dom'
import { Headline } from "./componets/Headline"
import { Search } from "./componets/Search"
import { useState } from 'react'


function App() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="w-full min-h-screen">
      <div>
        <h1 className='text-center my-5 font-extrabold text-4xl'>IN.FO</h1>
        <div className='flex border text-lg border-black shadow-lg rounded-full items-center px-3 justify-between  w-[90%] m-auto max-w-3xl '>
          <input type="text" className='px-2 py-2 rounded-full outline-none' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='search' />
          <Link to={`/search/${searchValue}`}>

            <button>search</button>
          </Link>

        </div>
        <div>
          <Routes>
            <Route path="/" element={<Headline />} />
            <Route path='search/:term' element={<Search />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
