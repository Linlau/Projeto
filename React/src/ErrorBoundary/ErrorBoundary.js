import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        temErro: false,
        menssagemErro: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({temErro: true, menssagemErro: error})

    }

    render() {
        if(this.state.temErro){
            return <h1>{this.state.menssagemErro}</h1>
        } else {
          return  this.props.children
        }        
    }
}

export default ErrorBoundary;