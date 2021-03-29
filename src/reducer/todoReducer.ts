
interface Todo {
	id: number,
	description: string,
	done: boolean,
}

const initialState = [{
	id: 1,
	description: "Comer PAn",
	done: false,
}];

type ActionType = { type: "POST", payload: Todo } | { type: "DELETE", payload: number } | { type: "DONE", payload: number };


export const todoReducer = (state: typeof initialState, action: ActionType) => {

	switch (action.type) {
		case 'POST':
			return [...state, action.payload]

		case 'DELETE':
			return state.filter(x => x.id !== action.payload)

		case 'DONE':
			return state.map(todo => (
				todo.id === action.payload) ? {
				...todo,
				done: !todo.done
			} : todo)


		default:
			return state;
	}


}