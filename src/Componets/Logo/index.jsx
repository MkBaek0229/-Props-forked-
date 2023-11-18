import reactLogo from "./react.svg";
import PropTypes from "prop-types";
// defalut props 설정해주는 방법 1번
// export default function Logo(size ={400}) {
export default function Logo(size) {
  return (
    <div>
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        <img
          src={reactLogo}
          className="logo react"
          alt="React logo"
          style={{ width: size, height: size }}
        />
      </a>
    </div>
  );
}
// defalut props 설정해주는 방법 2번
Logo.defaultProps = {
  size: "50px",
};

// props type을 어떤 타입으로줄지(정수: size ={100},문자열 = "100px")
Logo.propTypes = {
  size: PropTypes.number,
};
