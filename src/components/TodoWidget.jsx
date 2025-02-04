import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Input, List, Modal } from "antd";
import { GoDot } from "react-icons/go";

const TodoWidget = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };
  const handleCancel = () => {
    setModalOpen(false);
    setTask("");
  };
  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
      setModalOpen(false);
    }
  };
  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-widget">
      <div className="w-100 d-flex align-items-center justify-content-between">
        <h4 className="m-0">To-Do List</h4>
        <CiCirclePlus
          size={30}
          onClick={showModal}
          style={{ cursor: "pointer" }}
        />
      </div>

      <List
        className="todo-list"
        dataSource={tasks}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <CheckCircleOutlined
                key="done"
                style={{
                  color: item.completed ? "green" : "#aaa",
                  cursor: "pointer",
                }}
                onClick={() => toggleComplete(index)}
              />,
              <DeleteOutlined
                key="delete"
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => handleDelete(index)}
              />,
            ]}
          >
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              <GoDot className="dot" /> {item.text}
            </span>
          </List.Item>
        )}
      />

      <Modal
        title="Add Task"
        open={modalOpen}
        onCancel={handleCancel}
        onOk={handleAddTask}
        okText="Add Task"
      >
        <Input
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onPressEnter={handleAddTask}
        />
      </Modal>
    </div>
  );
};

export default TodoWidget;
