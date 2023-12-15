
import * as React from "react";
import * as ReactDOM from "react-dom";


export default function Head() {
  const head = document.head;
  return ReactDOM.createPortal (
    <>
      <title>React App 3</title>
      <meta charSet="utf-8" />
      <link rel="icon" href="./src/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="dummy lorem ipsum content" />
      <link rel="apple-touch-icon" href="./src/logo192.png" />
    </>,
    head
  );
}