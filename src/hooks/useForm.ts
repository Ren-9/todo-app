import { ChangeEvent, useState } from "react";

export const useForm = (initialState: any = {}) => {
	const [value, setValue] = useState(initialState);

	const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setValue({
			...value,
			[target.name]: target.value,
		});
	};

	const reset = () => {
		setValue(initialState);
	};

	return [value, handleInputChange, reset];
};
