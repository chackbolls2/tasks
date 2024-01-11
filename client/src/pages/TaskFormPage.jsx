import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useTasks } from "../context/tasksContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

const TaskFormPage = () => {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, [params.id, getTask, setValue]);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">Título</Label>
        <Input
          type="text"
          name="title"
          placeholder="Título"
          {...register("title",{required:true})}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese un título.</p>
        )}

        <Label htmlFor="description">Descripción</Label>
        <Textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Descripción"
          {...register("description", {required:true})}
          autoFocus
        >

        </Textarea>
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese una descripción.</p>
        )}


        <Button type="submit">Guardar</Button>
      </form>
    </Card>
  );
};

export default TaskFormPage;
