import React from "react";
function Label(props) {
  return (
    <fieldset>
      <legend>{props.name}</legend>
      {props.input}
    </fieldset>
  );
}
export default Label;
