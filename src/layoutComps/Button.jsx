import className from "classnames";
function Button({ children, ...rest }) {
  const classes = className(
    rest.className,
    "bg-black text-white px-2 py-1 rounded m-4 "
  );
  return <button className={classes}>{children}</button>;
}
export default Button;
