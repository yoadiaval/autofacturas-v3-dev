import className from "classnames";
function Button({ onChange, children, ...rest }) {
  const classes = className(
    rest.className,
    "bg-white text-black px-2 py-1 rounded-full border m-4 "
  );
  return <button onClick={onChange} className={classes}>{children}</button>;
}
export default Button;
