import React from 'react';
import ReactDOM from 'react-dom';
function Pessoa(){
    return(
    <div className="pessoa">
        <h1>Xablau</h1>
        <p>Sua idade: 30</p>
    </div>
    );
}
ReactDOM.render(<Pessoa />, 
    document.querySelector('#p1'));