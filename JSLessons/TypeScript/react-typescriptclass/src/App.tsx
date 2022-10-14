import React, { Component } from 'react';
type AppProps = {
  listOne: string,
  listTwo:number
}
type dataType={
  myvalue:string
}

class List extends Component<AppProps, dataType>{
  data={
    myvalue:"new value"
  }
  render(): React.ReactNode {
    return(
      <ul>
        <li>{this.props.listOne}</li>
        <li>{this.props.listTwo}</li>
        <li>{this.data.myvalue}</li>
      </ul>
    )
  }
}

class App extends Component {
  render(){
    return(
      <>
      <List listOne="test1" listTwo={20}/>
      
      
      </>
    )
  }
    
}

export default App;
