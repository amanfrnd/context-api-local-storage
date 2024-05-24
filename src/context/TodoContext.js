import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todoData:[
        {
            id:1,
            todo:'msg',
            completed:false
        }
    ],
    addTodo:(todo)=>{

    },
    updateTodo:(id,todo)=>{

    },
    deleteTodo:(id)=>{

    },
    toggleTodo:(id)=>{

    }
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider