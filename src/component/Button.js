import React from "react";

const Button = () => {
  return (
      React.createElement(
          'button',
          {
            style: {
              backgroundColor: "green",
              color: "red",
            }
          },
          'click')
  );
}

export default Button;
