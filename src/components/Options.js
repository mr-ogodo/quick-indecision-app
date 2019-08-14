import React from 'react';
import Option from './Option.js';

const Options = (props)=> {
  return (
    <div>
      <div className='widget-header'>
        <h3 className='widget-header__title'>your options </h3>
        <button
          className='button button--link'
          onClick={props.handleDeleteOptions}
        >
          remove all
        </button>
      </div>


      {props.options.length === 0 && <p className='widget__element'>Please Enter option to start</p>}
      {
        props.options.map((option, index)=> {
          return <Option
            key={option}
            optionText={option}
            count={index+1}
            handleDeleteOption={props.handleDeleteOption}
          />
        })
      }
    </div>
  );
}

export default Options;
