type Props = {
  id: number;
  description?: string;
  name: string;
};
import styles from "./style.module.scss";
export const Task: React.FC<Props> = (props: Props) => {
  return (
    <li key={props.id} className={styles["task_line"]}>
      <details>
        {props.description}
        <summary>  {props.name}</summary>
      </details>
      <div>
        <button>/\</button>
        <button>\/</button>
      </div>
    </li>
  );
};
