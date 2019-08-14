class Visibility extends React.Component {
  constructor(props){
    super(props);
    this.toggler = this.toggler.bind(this);
    this.state = {
      visibility: false
    }
  }
  toggler() {
    this.setState((prevState)=> {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggler}>
        {this.state.visibility? 'hide items': 'show items'}
        </button>
        {this.state.visibility && <p>peeka boo!!</p>}
      </div>
    );
  }
}
const appRoot = document.getElementById('app');
ReactDOM.render(<Visibility/>, appRoot);
