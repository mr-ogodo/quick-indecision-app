console.log('app is running');

const app = {
  title: "INDECISION APP",
  subtitle: "let the force take charge",
  options: []
}

const onFormSubmit =  (e)=>{
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const removeAll = () =>{
  app.options = [];
  renderApp();
}

const onMakeDecision = () =>{
  const randomNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomNum]) ;
}


const appRoot = document.getElementById('app');



const renderApp = ()=>{
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h3>{app.subtitle}</h3>}
      {app.options.length > 0 ? <p>here are your options</p>: "no options available"}
      <p>{app.options.length}</p>
      <button onClick={onMakeDecision} disabled={app.options.length===0}>what should i do</button>
      <button onClick={removeAll}>remove all</button>
      <ol>
        {
          app.options.map((option)=> <li key={option}> {option} </li>)
        }
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderApp();
