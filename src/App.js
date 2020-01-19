import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      legend: '0',
      inputValue: '',
      inputLegend: '',
      selectValue: '0',
      selectLegend:''
    }

    this.onClickButton = this.onClickButton.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);

  }

  onClickButton(e) {
    // console.log(e);
    console.log(e.target.id);

    if(e.target.id == "boton1"){
        this.setState( { legend:'Botón 1 Activado' } )
    }else if(e.target.id == "boton2") {
        this.setState( { legend:'Botón 2 Activado' } )
    }else {
        this.setState( { legend:'Botón 3 Activado' } )
    }
  }

  onChange(e){
    console.log(e.target.value);
    this.setState ( { inputValue:e.target.value } );
    this.setState ( { inputLegend:e.target.value } );
  }

  onChangeSelect(e){
    // console.log(e)
    this.setState ( { selectValue:e.target.value } );
    this.setState ( { selectLegend:e.target.value } );
  }

  render(){
      return(
          <div>

            <div>
              <button
                      onClick={ this.onClickButton }
                      id="boton1">BOTON 1</button>
              <button
                      onClick={ this.onClickButton }
                      id="boton2">BOTON 2</button>
              <button
                      onClick={ this.onClickButton }
                      id="boton3">BOTON 3</button>

              <label className="App-label"> { this.state.legend } </label>
            </div>

            <div>
              <input
                    type="text"
                    id="input1"
                    value={this.state.inputValue}
                    onChange={this.onChange} />

              <label className="App-label"> { this.state.inputLegend } </label>

            </div>

            <div>
              <select onChange={this.onChangeSelect} value={this.state.selectValue}>
                <option value="Mexico">Mexico</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Italia">Italia</option>
              </select>

              <label className="App-label"> { this.state.selectLegend } </label>

            </div>

          </div>
      )
  }

}

export default App;
