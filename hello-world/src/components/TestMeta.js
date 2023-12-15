import React from 'react';


function TestMeta(props) {

  const {title} = props;
  return (
    <>
    <title>{ title } | React App</title>
    <meta charSet="utf-8" />
    <link rel="icon" href="./src/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="./src/logo192.png" />
    <link rel="manifest" href="./src/manifest.json" />
    </>
  );
}

export default TestMeta;