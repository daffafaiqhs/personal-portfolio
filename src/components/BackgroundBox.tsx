import clsx from "clsx";
import React from "react";

function BackgroundBoxComponent(props: React.ComponentProps<"div">, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <div
      className={clsx("rounded-2xl border border-gray-500 bg-white", props.className)}
      ref={ref}
    >
      {props.children}
    </div>
  );
}

export const BackgroundBox = React.forwardRef(BackgroundBoxComponent);
