import React, { Component } from 'react'
import YaI from './YaI';
export default class doplnovacka extends Component {
  state = {
    text:"",
    mytext:"",
    pravopis:[],
    dom:"",
    showResults:false,
    showOriginalText:true
  }
  componentDidMount() {


  }

  parseText(text){
    let ptext = [];
    let cutPart = text;
    for(let i = 0; i < text.length; i++){
      let nextBreakPoint = cutPart.search(/(y|ý|i|í)+/)
      if(nextBreakPoint >= 0){
          ptext.push({type:"text", data:cutPart.slice(0,nextBreakPoint)})
          i = nextBreakPoint;
          
          ptext.push({type:"dopln", data:cutPart[nextBreakPoint]})
          cutPart = cutPart.slice(nextBreakPoint+1,cutPart.length);
      }

    }
    // ptext.pop();
    ptext.push({type:"text",data:cutPart})
    console.log(ptext);
    return ptext;
  }
  generateDoplnovacka= (text)=>{
    text = this.state.text;
    let ptext = this.parseText(text);
    
     let pravopis = [];
    let dom = ptext.map((e,index) => 
    {if(e.type === "dopln") 
    {pravopis.push({spravne:e.data,selected:""}); 
      return <YaI activeStatus={this.state.showResults} spravne={e.data} key={index} index={pravopis.length-1} triggeredChange={this.triggeredChange} checkChange={this.checkChange}></YaI>} 
    else 
    { return <React.Fragment key={index}>{e.data}</React.Fragment>}
    })
   this.setState({pravopis,dom,showOriginalText:false});
    
  }
  prevest = ()  => {
     
  }
  triggeredChange = (index,right) =>  {
    console.log(index, right);
  this.state.pravopis[index].selected = right
   this.setState({
     pravopis:[...this.state.pravopis]
   })
  }
  vyhodnotit = () => {
    this.state.showResults = true;
    this.generateDoplnovacka();
  }
  render() {
    return (
      <div style={{textAlign:"center"}}>
      <div   style={{display:this.state.showOriginalText ? "block" : "none"}}>
 <textarea onChange={e => this.setState({text:e.target.value})}  style={{display:"block",maxWidth:960,width:960,minHeight:300,margin:"auto"}}></textarea>
          <button onClick={this.generateDoplnovacka} style={{background:"linear-gradient(to right, blue,darkblue)", color:"white", border:"none",borderRadius:10,padding:20,margin:10,fontSize:30}}>Prevest</button>
                   <hr />
      </div>
          <div  style={{textAlign:"justify",display:!this.state.showOriginalText ? "block" : "none", maxWidth:960,margin:"auto", marginTop:100}}>
         {
          this.state.dom
        }

        <br />
        <div style={{textAlign:"center"}}>

        <button onClick={this.vyhodnotit}>Vyhodnotit</button>
        </div>
          </div>
       
      </div>
    )
  }
}
