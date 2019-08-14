import React from 'react';
import AddOption from './addOption.js';
import Options from './Options.js';
import Header from './Header.js';
import Action from './Action.js';
import OptionModal from './OptionModal.js';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }


  handleDeleteOptions = ()=> {
    this.setState(()=> ({options: []}) ); //shorthand syntax for arrow function
  }
  handleDeleteOption = (optionToRemove)=> {
    this.setState((prevState)=> {
      return {
        options: prevState.options.filter((option)=> {
          return optionToRemove !== option;
        })
      }
    });
  }
  handlePick = ()=> {
      const picker = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[picker];
      this.setState(()=>{
        return {
          selectedOption: option
        }
      })
  }
  handleAddOption = (option)=>{
    if (!option) {
      return 'Enter valid value to add item';
    }else if (this.state.options.indexOf(option) > -1) {
      return "this option already exisits";
    }
    this.setState((prevState)=>{
      return {
        options: prevState.options.concat(option)
      }
    });
  }

  handleModal = ()=> {
    this.setState(()=>{
      return {
        selectedOption: undefined
      }
    })
  }


  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(()=>( {options: options }) );
      }
    } catch (e) {
      //do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {

  }


  render(){
    const subtitle = 'task shuffle';
    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className='container'>
          <Action
            hasOptions={this.state.options.length>0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>

          <OptionModal
            selectedOption={this.state.selectedOption}
            handleModal={this.handleModal}
          />
        </div>

      </div>
    )
  }
}

export default IndecisionApp;
