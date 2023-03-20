import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

export default function Todo() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask(e) {
    e.preventDefault();
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.floor(Math.random() * Date.now()),
        name: newTask,
        completed: false,
      },
    ]);
    setNewTask("");
  }

  function handelComplateTask(id) {
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(updateTask);
  }

  function handelRemoveTask(id) {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  }

  return (
    <Card>
      <Card.Title>Todo</Card.Title>
      <Card.Body>
        <form action="">
          <div className="flex items-center gap-x-2">
            <Input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <Button onClick={handleAddTask} text={"Add Task"} />
          </div>
        </form>
        {tasks.length > 0 ? (
          <ol className={"space-y-2 mt-4"}>
            {tasks.map((task) => (
              <li key={task.id} className={"flex items-center justify-between"}>
                <span>
                  {task.name}
                  {task.completed ? " ✅" : " ❎"}
                </span>
                <div className={"flex items-center gap-x-2"}>
                  <button
                    className={"px-2 py-1 border text-xs"}
                    onClick={() => handelComplateTask(task.id)}
                  >
                    Mark as {task.completed ? "Completed" : "Incompleted"}
                  </button>
                  <button
                    className={"px-2 py-1 border text-xs"}
                    onClick={() => handelRemoveTask(task.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ol>
        ) : null}
      </Card.Body>
      <Card.Footer>You have {tasks.length} task</Card.Footer>
    </Card>
  );
}
