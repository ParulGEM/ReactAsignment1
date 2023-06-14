import React from "react";

export default function Table(prop) {
  return (
    <div>
      <table className="table mt-3 mx-3 table-bordered border-warning">
        <thead className="table-warning">
          <tr>
            <th scope="col">Item No</th>
            <th scope="col">Item</th>
           
          </tr>
        </thead>
        <tbody>
          {prop.data.map((ele) => {
            return(
            
            <tr className="table-warning" key={ele.sn} style={{background:ele.sn%5===0?'lightblue':'white'}}>
            <th scope="row">{ele.sn}</th>
            <td>{ele.name}</td>
          </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
