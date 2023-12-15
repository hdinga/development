import React from "react";

/* function Greet() {
  return <h1>Hello Triggercell</h1>
} */

//const Greet = () => <h5>Hello Triggercell Designs</h5>
const Greet = (props) => {

  const { name, className, heroName } = props;

  console.log(name, className, heroName);
  return (
    <div>
      <h5 className={className}>Hello Triggercell Designs {name} also {heroName}</h5>
      {props.children}
    </div>
    
  )
}


export default Greet