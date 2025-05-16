import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
//import { AppState } from "../../store";
import { postTasksRequest } from "../../actions/taskActions/postTastActions";
import { UnknownAction } from "@reduxjs/toolkit";

const CreateTask: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((previousState) => ({
      ...previousState,
      [name]: `${value}`,
    }));
  }, []);

  const dispatch = useDispatch();
  // const { loading, tasks, error } = useSelector(
  //   (state: AppState) => state.task
  // );

  const sendTaskBody = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Форма отправлена, но страница не перезагружается!");
      console.dir(formData);

      // useEffect(() => {
      dispatch(postTasksRequest(formData) as unknown as UnknownAction);
      // }, [dispatch]);
    },
    [dispatch, formData]
  );

  return (
    <form onSubmit={sendTaskBody}>
      <label htmlFor="taskName">description</label>
      <input
        type="text"
        name="name"
        id="taskName"
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <label htmlFor="taskDescription">description</label>
      <input
        type="text"
        name="description"
        placeholder="Description"
        id="taskDescription"
        onChange={handleChange}
        required
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default CreateTask;
