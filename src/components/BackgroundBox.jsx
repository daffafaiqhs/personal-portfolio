import React from "react";

function BackgroundBoxComponent(props, ref) {
  return (
    <div
      className={`rounded-2xl border border-gray-500 bg-white ${props.className ?? props.className}`}
      ref={ref}
    >
      {props.children}
    </div>
  );
}

export const BackgroundBox = React.forwardRef(BackgroundBoxComponent);
