import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {filterData, apiUrl} from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl); // Use `apiUrl` here
        const output = await res.json();
        // console.log(data);

        setCourses(output.data);

      } 
      catch (error) {
        toast.error("something went wrong");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <Navbar/>
        <Filter
          filterData = {filterData}
        />
        <Cards courses={courses}/>
    </div>
  );
};

export default App;
