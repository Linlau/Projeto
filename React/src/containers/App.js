import React, { Component } from 'react';
import estilo from './App.css';
import Pessoas from '../components/Pessoas/Pessoas';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    pessoas: [
      {id: '1', nome: 'Xablau', idade: 20},
      {id: '2', nome: 'Xablon', idade: 30},
      {id: '3', nome: 'Xupica', idade: 25}
    ],
    mostrarPessoas: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }  

  alterarnomeHandler = (newNome) => {
    //console.log('clicado com sucesso')
    // Não faça assim idiota: this.state.pessoa[0].nome = "Jeff"
    this.setState({pessoas: [
      {nome: newNome, idade: 20},
      {nome: 'Xablon', idade: 30},
      {nome: 'Xupica', idade: 27}
    ]    
  })
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }

  mudarnomeHandler = (event, id) => {
    const pessoaIndex = this.state.pessoas.findIndex(p => {
      return p.id === id
    })    

    const pessoa = {...this.state.pessoas[pessoaIndex]}

    // const pessoa = Object.assign({}, this.state.pessoa[pessoaIndex]) - metodo antigo para pegar Index do objeto/array
    pessoa.nome = event.target.value

    const pessoas = [...this.state.pessoas]

    pessoas[pessoaIndex] = pessoa

    this.setState({pessoas: pessoas})
  }

  alternarPessoaHandler = () => {
    const mostrar = this.state.mostrarPessoas
    this.setState({mostrarPessoas: !mostrar})

  }

  deletarPessoaHandler =(pessoaIndex) =>{
    const pessoas = [...this.state.pessoas] // Cria uma copia do array original e passa para nova array
    pessoas.splice(pessoaIndex, 1)
    this.setState({pessoas: pessoas})

  }

  render(){
    let pessoas = null    
    if(this.state.mostrarPessoas){
      pessoas = <Pessoas 
         pessoas = {this.state.pessoas}
         clicar = {this.deletarPessoaHandler}
         mudar = {this.mudarnomeHandler}
         />
             
      //style.backgroundColor = 'red'     
    }

    //let classes = ['vermelho', 'bold'].join[' '] forma de adicionar CSS + className

    return (      
      <div className={estilo.App}>
      <Cockpit
        titulo = {this.props.appTitle}
        mostrarPessoas = {this.state.mostrarPessoas}
        pessoas = {this.state.pessoas}
        clicar = {this.alternarPessoaHandler}
      />
          {pessoas}          
      </div>        
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Funcionou?'))

  }

}

export default App;
