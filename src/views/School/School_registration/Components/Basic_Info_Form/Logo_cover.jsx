import React, { useState } from "react";


export  const Logo_cover=()=> {
  const [input, setInput] = useState([]);

  const  img_treat=(e)=> {
    const { files } = e.target;
    let images = [];
    const selecteds = [...[...files]];

    selecteds.forEach(i => images.push(URL.createObjectURL(i)));

    setInput(images);
  }

  return (
    <div >
    
      {input.map(i => (
        <img key={i} src={i} style={{ height: 20 }} alt="" />
      ))}
    </div>
  );
}

