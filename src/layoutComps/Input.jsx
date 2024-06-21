import className from "classnames";
function Input({ children, ...rest }) {
  const classes = className(rest.className, "px-1");
  return <input className={classes}>{children}</input>;
}
export default Input;
