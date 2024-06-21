import className from "classnames";
function Container({ children, ...rest }) {
  const classes = className(rest.className, "border py-2 px-2 m-4 rounded");
  return <div className={classes}>{children}</div>;
}
export default Container;
