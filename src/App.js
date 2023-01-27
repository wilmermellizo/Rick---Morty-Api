import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';
import Cards from "./components/Cards/Cards";
//import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import SideBar from './components/SideBar/SideBar';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import Heat from './Pages/Heat';


function App(){
  return(
    <Router>
      <div className="app">
        <Navbar />
      </div>
      
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/episodes"element={<Episodes />}/>
        <Route path="/location"element={<Location />}/>
        <Route path="/heat"element={<Heat />}/>
      </Routes>
    </Router>
  )
}

const Home = () => {
  
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      
      
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>

          </div>
          
        </div>
      </div>
      
      <Pagination 
        info={info} 
        pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
