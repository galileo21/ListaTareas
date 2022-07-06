import './styles.css';
import {Todo, TodoList} from './classes';
import {crearTodoHTML} from './js/componentes.js';

export const todoList = new TodoList();

todoList.todos.forEach( todo => {
    crearTodoHTML(todo);
    
});

//es lo mismo que todoList.todos.forEach( crearTodoHTML)