import className from "classnames";
function Button({ onChange, children, ...rest }) {
  const classes = className(
    rest.className,
    " px-2 rounded-full border"
  );
  return <button onClick={onChange} className={classes}>{children}</button>;
}
export default Button;
