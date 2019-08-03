import React, { Component } from 'react';
import estilo from './Pessoa.css';

class Pessoa extends Component {
    render(){
        return (
            <div className={estilo.Pessoa}>
                <p onClick={this.props.click}>Eu sou {this.props.nome} e tenho {this.props.idade} anos</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.mudar} value={this.props.nome}/>
            </div>         
        
        )

    }
};

export default Pessoa;