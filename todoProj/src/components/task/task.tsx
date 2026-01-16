import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { moveUDPTask } from "../../actions/taskActions/movetask";
import { UnknownAction } from "@reduxjs/toolkit";

type Props = {
  description?: string;
  name: string;
  index: number;
};
export const Task: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();


  const moveUp = () => {
    const towardUP=true
    console.log(props)
    dispatch(moveUDPTask(props.index, towardUP) as unknown as UnknownAction);
  };

  const moveDown = () => {
     const towardDOWN=false
    dispatch(moveUDPTask(props.index, towardDOWN) as unknown as UnknownAction);
  };

  return (
    <li className={styles["task_line"]}>
      <details>
        {props.description}
        <summary> {props.name}</summary>
      </details>
      <div>
        <button onClick={() => moveUp()}>/\</button>
        <button onClick={() => moveDown()}>\/</button>
      </div>
    </li>
  );
};
