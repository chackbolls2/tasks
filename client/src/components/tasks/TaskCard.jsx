import { useTasks } from "../../context/tasksContext";
import { Button, ButtonLink, Card } from "../ui";
import { FormControlLabel, Switch, } from "@mui/material";


export function TaskCard({ task }) {
  const { deleteTask , tasks, getTasks, changeState } = useTasks();

  const handleChangeState = async (taskId) => {
    const taskToUpdate = tasks.find((task) => task._id === taskId);

    if (!taskToUpdate) {
      return;
    }

    try {
      const updatedtasks = tasks.map((task) =>
        task._id === taskId ? { ...task, state: !task.state } : task
      );

      await changeState(taskId);
      await getTasks(); 

    } catch (error) {

      const updatedtasks = tasks.map((task) =>
        task._id === taskId ? { ...task, state: !task.state } : task
      );
    }
  };

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteTask(task._id)}>Eliminar</Button>
          <ButtonLink to={`/tasks/${task._id}`}>Editar</ButtonLink>
          <td>
                  <FormControlLabel
                    control={
                      <Switch
                        sx={{ m: 0.00002 }}
                        defaultChecked={task.state}
                        onChange={() => handleChangeState(task._id)}
                      />
                    }
                  />
                </td>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      {/* format date */}

    </Card>
  );
}
