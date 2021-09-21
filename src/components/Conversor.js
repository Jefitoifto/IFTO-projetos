import React, { Component } from 'react'; //todo componente retorna apenas uma div

export default class Conversor extends Component{

constructor(props){ //acessando as propriedades que vem de lá 
    super(props);

    this.state = {
        moedaA_valor:"", //aqui entra o valor digitado pelo usuário
        moedaB_valor: 0, //aqui entra o valor calculado
    }

    this.converter = this.converter.bind(this); //passando o objeto dentro do bind referenciado pelo this, 
    //poderia ser qualquer objeto mas como eu estou dentro do construtor, o this existe aqui.
}


converter(){
    console.log(this.state)
}

render(){ //o onChange irá disparar um evento, este evento vai conseguir pegar quem é o target que é o elemento input
    // e o valor que tiver dentro dele é oque eu quero.
    //no input button, eu chamei um onClick para chamar a função converter
    return(
        <div className="conversor">
            <h2>{this.props.moedaA} para {this.props.moedaB}USD para BRL</h2>
            
        <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input> 
        <input type="button" value="Converter" onClick={this.converter}></input>
        <h2>valor convertido</h2> 
        </div> 
    )
}
}