import React, { Component } from 'react'

export default class doplnovac extends Component {
  state = {
    selectedIndex:0
    
  }
  changeSelection = (event) => {
    let selected = (this.state.selectedIndex > 2 || this.state.selectedIndex === 0) ? this.state.selectedIndex-2 : this.state.selectedIndex; 
    if(event.ctrlKey || event.shiftKey){
      this.state.index = selected === 1 ? 4 : 3
    this.setState({
      selectedIndex:selected === 1 ? 4 : 3
    })
    }else {
      this.state.index = selected === 1 ? 2 : 1
    this.setState({
      selectedIndex:selected === 1 ? 2 : 1
    })
    }
    this.props.triggeredChange(this.props.index,this.state.selectedIndex);
    
  }
  render() {
    let selectedIndex = this.state.selectedIndex;
    let options = this.props.options;
    // console.log(selectedIndex,options);
    return (
      <span index={this.props.index} className={"doplnovac " + (this.props.activeStatus ? ((this.props.spravne === options[selectedIndex]) ? "spravne" : "spatne" ) : "")} onClick={this.changeSelection}>
        {options[selectedIndex]}
      </span>
    )
  }
}
