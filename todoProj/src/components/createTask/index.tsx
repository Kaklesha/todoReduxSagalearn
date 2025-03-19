import React, { useCallback, useState } from "react";

const CreateTask: React.FC = () => {
  const [formData, setFormData] = useState({
    description: "",
    name: "",
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }, []);

  const sentTaskBody = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Форма отправлена, но страница не перезагружается!");
      console.dir(formData);
    },
    [formData]
  );

  return (
    <form onSubmit={sentTaskBody}>
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
