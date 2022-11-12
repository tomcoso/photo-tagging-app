import ReactDOM from "react-dom";

const Target = (props) => {
  const target = props.target;

  const top = (+target.yend + +target.ystart) / 2;
  const left = (+target.xend + +target.xstart) / 2;

  const coords = {
    top: top.toFixed(0) + "px",
    left: left.toFixed(0) + "px",
    // height: target.yend - target.ystart + 40 + "px",
    // width: target.xend - target.xstart + 40 + "px",
  };
  return ReactDOM.createPortal(
    <span style={coords} className="target">
      &#10060;
    </span>,
    document.getElementById("game-img")
  );
};

export default Target;
