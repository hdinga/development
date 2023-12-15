import PropTypes from "prop-types";

function Props(props) {
  return <div>Hello World {props.name}</div>;
}
export default Props;

/*
export default function Props({ style}:any) {

  Props.defaultProps {
    style: "default"
  }
  return <div>Hello World {style}</div>;
}

*/
