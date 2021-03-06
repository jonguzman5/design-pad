import React, { Component } from 'react';
import PadInput from './PadInput';
import DesignBoard from './DesignBoard';
import '../css/DesignContainer.css';

class DesignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleEdit: false,
    }
  }
  
  toggleEdit = () => {
    this.setState({
      toggleEdit: !this.state.toggleEdit
    })
  }

  allowDrop = (e) => {
    e.preventDefault();
  }
  
  drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  }
  
  drop = (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var index = document.getElementById(data).id;
    switch(index){
      case '1':
        e.target.style.backgroundColor = 'red'
        break
      case '2':
        e.target.style.backgroundColor = 'green'
        break
      case '3':
        e.target.style.backgroundColor = 'blue'
        break
      case '4':
        e.target.style.backgroundColor = 'purple'
        break
      case '5':
        e.target.style.backgroundColor = 'black'
        break
      case '6':
        e.target.style.backgroundColor = 'white'
        break
      case '7':
        e.target.style.backgroundColor = 'pink'
        break
      case '8':
        e.target.style.backgroundColor = 'yellow'
        break
      default:
        e.target.style.backgroundColor = 'grey'                        
    }
  }

  render() {
    const { toggleEdit } = this.state;
    const editBtnTF = toggleEdit ? 'editBtnOn' : 'editBtnOff';
    const padInputTF = toggleEdit ? 'padInputOn' : 'padInputOff';
    return (
      <div>
        <div className="app-header">
          <h1>DESIGN PAD</h1>
          <button className={`editBtn ${editBtnTF}`} onClick={this.toggleEdit}>EDIT</button>
        </div>
        <div className="app-body">
          <PadInput 
            padInputTF={padInputTF}
            drag={this.drag}
          />
          <DesignBoard
            allowDrop={this.allowDrop}
            drop={this.drop}          
          />
        </div>        
      </div>
    );
  }

}

export default DesignContainer;
