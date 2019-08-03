import React from 'react';
import estilo from './Cockpit.css';

const cockpit = (props) => {

    let btnClass = ''
    if(props.mostrarPessoas){
        btnClass = estilo.vermelho
    }
    

    const classes = []
    if(props.pessoas.length <=2){
      classes.push(estilo.vermelho)
    } 
    if (props.pessoas.length <=1 ){
      classes.push(estilo.bold)
    }

    return (
        <div className={estilo.Cockpit}>
        <h1>{props.titulo}</h1>
          <p className={classes.join(' ')}>          
            Ta funcionando
          </p>
          {/* Sintaxe de arrowfunction para alterar valores não recomendada, usar somente se necessario */}                   
          <button
          className={btnClass}
          onClick={props.clicar}>Alternar Pessoas</button>
        </div>
    )
}

export default cockpit;