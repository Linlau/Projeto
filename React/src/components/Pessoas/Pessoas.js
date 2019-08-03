import React, {Component} from 'react';
import Pessoa from './Pessoa/Pessoa'

class Pessoas extends Component {
    static getDerivedStateFromProps(props, state){
        console.log('[Pessoas.js] getDerivedStateFromProps')
        return state
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Pessoas.js] shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Pessoas.js] getSnapshotBeforeUpdate')
        return {mensagem: 'Xablau mothafucka'}

    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Pessoas.js] componentDidUpdate')
        console.log(snapshot)
    }

    render(){
        console.log('[Pessoas.js] rendering...')
        return (
            this.props.pessoas.map((pessoa, index) => {
                return <Pessoa
                click = {() => this.props.clicar(index)}
                nome = {pessoa.nome}
                idade = {pessoa.idade}
                key = {pessoa.id}
                mudar = {(event) => this.props.mudar(event, pessoa.id)}
                />
                })

        )

    }
} 

export default Pessoas;