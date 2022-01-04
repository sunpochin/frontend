import React, { Component } from 'react'
const DemoOutput = (props) => {
  console.log('DemoOutput Running..');

  return (
    <div>
    {props.show && <p>This is new!</p>}
    </div>
  )
}

export default React.memo(DemoOutput);
//export default DemoOutput;
