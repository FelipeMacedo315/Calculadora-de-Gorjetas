import React from "react";
function Label(props) {
  return (
    <fieldset>
      <legend>{props.name}</legend>
      <input type='text'/>
    </fieldset>
  );
}
export default Label
