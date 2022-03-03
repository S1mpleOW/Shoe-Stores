import React from 'react';
import { useController } from 'react-hook-form';

const Input = ({ control, ...props }) => {
	const { field } = useController({
		control,
		name: props.name,
	});
	return (
		<input
			className="p-4 bg-[#E7ECF3] rounded-xl outline-none border border-secondary focus:border-primary focus:border"
			{...field}
			{...props}
		></input>
	);
};

export default Input;
