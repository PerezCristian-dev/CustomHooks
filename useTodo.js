import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

export const useTodo = () =>{

    const initialState = [];

    const init = () => {
      return JSON.parse(localStorage.getItem("todo")) || [];
    };
    
      const [todos, dispatch] = useReducer(todoReducer, initialState, init);
      const pending = todos.filter((todo) => todo.done === false).length;
      const todosCount = todos.length;
    
      useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todos));
      }, [todos]);
    
      const handleNewTodo = (todo) => {
        const action = {
          type: "[TODO] Add Todo",
          payload: todo,
        };
        dispatch(action);
      };
    
      const handleDelete = (id) => {
        dispatch({
          type: "[TODO] Remove Todo",
          payload: id,
        });
      };
    
      const handleToggleTodo = (id)=>{
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: id
          });
        }
    
    return{
        todos,
        init,
        pending,
        handleNewTodo,
        handleDelete,
        handleToggleTodo,
        todosCount
    }
 

}