import React from "react";
import { filterData} from "../data";

function Filter({filterData})
{
    return (
    <div>
       {
        filterData.map( (data)  => {
            return(
            <button >
               {data.title}
            </button>
            );
        })}
    </div>
);
}

export default Filter;