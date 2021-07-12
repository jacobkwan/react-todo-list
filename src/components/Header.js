import PropTypes from "prop-types";
import { useLocation } from "react-router";
import Button from "./Button";

const Header = ({ title, showAddTask, onClickAddBtn }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAddTask ? "steelBlue" : "green"}
          text={showAddTask ? "Hide" : "Add"}
          onClick={onClickAddBtn}
        />
      )}
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
