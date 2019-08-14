
class Counter extends React.Component {
  constructor(props){
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    const json = localStorage.getItem('count');
    const countGot = parseInt(json);
    if (!isNaN(countGot)){
      this.setState(()=>({count: countGot}));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count != this.state.count){
      const json = this.state.count;
      //const countStored = parseInt(json);
      localStorage.setItem("count", json);
    }

  }
  addOne() {
    this.setState((prevState)=>{
      return {
        count: prevState.count + 1
      }
    });
  }
  minusOne() {
    this.setState((prevState)=>{
      return {
        count: prevState.count - 1
      }
    });
  }
  reset() {
    this.setState(()=> {
      return{
        count: 0
      }
    });
  }

  render(){
    return (
      <div>
        <h1> Count: {this.state.count} </h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}> reset</button>
      </div>
    );
  }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<Counter />, appRoot);






/* let count = 0
const addOne = ()=>{
  count++;
  renderApp();
};
const minusOne = ()=>{
  count--;
  renderApp();
};
const reset = ()=>{
  count = 0;
  renderApp();
}


const renderApp = ()=>{
  const template2 = (
    <div>
      <h1> Count: {count} </h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}> reset</button>
    </div>
  );
  ReactDOM.render(template2, appRoot );
};

renderApp();
*/
