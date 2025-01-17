export function BackgroundBox(props) {
  return (
    <div
      className={`rounded-2xl border border-gray-500 bg-white ${props.className ?? props.className}`}
    >
      {props.children}
    </div>
  );
}
