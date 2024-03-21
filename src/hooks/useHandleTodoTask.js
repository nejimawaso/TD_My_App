import { useState, useEffect } from "react";

export const useHandleTodoTask = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    const [task, setTask] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, {todos});

    const handleNewTask = (event) => {
        setTask(event.target.value);
    };

    // 追加
    const handleSubmit = (event) => {
        event.preventDefault();
        if(task === '') return;
        setTodos((todos) => [...todos, { task, isCompleted: false }]);
        setTask('');
    };

    // 削除
    const handleRemoveTask = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    // タスクの更新
    const handleUpdateTask = (index) => {
        const newTodos = todos.map((todo, todoIndex) => {
            if(todoIndex === index) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const handleRemoveAllTask = (index) => {
        const newTodos = [...todos];
        newTodos.splice(0);
        setTodos(newTodos);
    };

    return {todos,task,handleNewTask,handleSubmit,handleRemoveTask,handleUpdateTask,handleRemoveAllTask}
}