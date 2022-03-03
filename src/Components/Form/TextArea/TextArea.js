import React from 'react';
import { useController } from 'react-hook-form';

const TextArea = ({ control, ...props }) => {
	const { field } = useController({
		control,
		name: props.name,
	});
	const [text, setText] = React.useState('');
	const textareaRef = React.useRef(null);
	const [textareaHeight, setTextareaHeight] = React.useState('auto');
	const handleOnInput = (e) => {
		setTextareaHeight('auto');
		setText(e.target.value);
	};
	React.useEffect(() => {
		textareaRef.current && setTextareaHeight(`${textareaRef.current?.scrollHeight}px`);
	}, [text]);
	return (
		<textarea
			className="py-3 outline-none w-full border-b-[1px] border-b-third focus:border-b-primary transition-colors resize-none overflow-hidden"
			{...field}
			{...props}
			value={text}
			style={{ height: textareaHeight }}
			onInput={handleOnInput}
			ref={textareaRef}
		></textarea>
	);
};

export default TextArea;
