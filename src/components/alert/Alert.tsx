import { useContext } from "react";
import { ConvertContext } from "@/context";
import style from "./style.module.scss";

const Alert = ({ message }: IAlertProps) => {
  const { setIsAlert } = useContext(ConvertContext);

  const handleClick = () => {
    setIsAlert(false);
  };
  return (
    <div className={style.alertContainer}>
      <span className={style.closeAlert} onClick={handleClick}>
        &times;
      </span>
      <p className={style.alertMessage}>{message}</p>
    </div>
  );
};

export default Alert;
