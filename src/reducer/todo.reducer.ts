import { ActionType } from '../common/interfaces/types';

const initialState = [{
	id: 1,
	description: "Comer PAn",
	done: false,
}];



export const todoReducer = (state: typeof initialState, action: ActionType) => {

	switch (action.type) {
		case 'POST':
			return [...state, action.payload]

		case 'DELETE':
			return state.filter(todo => todo.id !== action.payload)

		case 'DONE':
			return state.map(todo => (
				todo.id === action.payload) ? {
				...todo,
				done: !todo.done
			} : todo)
		case 'CLEAR-TODOS':
			return []

		default:
			return state;
	}


}