import Style from "./css/LoadingIndicator.module.css"
export default function LoadingIndicator() {
    return (
      <div className={Style.ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }