import { Todo } from './todo.interface';
// interface ThemeContext {
// 	mode: string,
// 	toggle(): void;
// }


export type ActionType = { type: "POST", payload: Todo } | { type: "DELETE", payload: number } | { type: "DONE", payload: number } | { type: "FILTER", payload: Todo[], search: string } | { type: "CLEAR-TODOS", };
