import { useDispatch } from "react-redux";
import styles from "./style.module.css";
import { moveDownTask, moveUpTask } from "../../actions/taskActions/movetask";
import { UnknownAction } from "@reduxjs/toolkit";

type Props = {
  description?: string;
  name: string;
  index: number;
};
export const Task: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();

  const moveUp = () => {
    console.log(props)
    dispatch(moveUpTask(props.index) as unknown as UnknownAction);
  };

  const moveDown = () => {
    dispatch(moveDownTask(props.index) as unknown as UnknownAction);
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
