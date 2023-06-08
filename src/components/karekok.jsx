import React, { useState } from "react";
import "./karekok.css"

const Karekok = () =>{
const [valid,setvalid] = useState();
const [entered,setentered] = useState();


const handle = (e) =>{
e.preventDefault();

const sayi = parseFloat(entered);

const karekok = Math.sqrt(sayi);

setvalid(karekok);

setentered("");
}

const handlechange = (e) =>{
    setentered(e.target.value);
}

    return (
        <div className="container">
          <div className="row">
            <form onSubmit={handle}>
              <input type="text" name="gösterilen" id="gösterilen" readOnly placeholder="gösterilen"  value={valid || ""} />
              <button className="btn" type="submit">Hesapla</button>
              <input type="text" name="girilen" id="girilen" placeholder="girilen" value={entered} onChange={handlechange}/>
            </form>
          </div>
        </div>
      );
    };
export default Karekok;