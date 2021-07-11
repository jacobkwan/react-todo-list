import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showAddTask, onClickAddBtn }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "steelBlue" : "green"}
        text={showAddTask ? "Hide" : "Add"}
        onClick={onClickAddBtn}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS, use it e.g <h1 style = {headingStyle}>
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header;
