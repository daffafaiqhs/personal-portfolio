function BackgroundBox(props) {
  return (
    <div
      className={`rounded-2xl border border-gray-500 bg-white px-3 py-6 md:rounded-[2.5rem] md:px-10 md:py-7 2xl:w-2xl ${props.className ?? props.className}`}
    >
      {props.children}
    </div>
  );
}
export default BackgroundBox;
