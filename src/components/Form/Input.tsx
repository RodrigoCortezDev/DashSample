import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
	name: string;
	label: string;
	error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
	return (
		<FormControl isInvalid={!!error}>
			{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
			<ChakraInput
				{...rest}
				name={name}
				id={name}
				focusBorderColor="pink.500"
				bgColor="gray.900"
				variant="filled"
				size="lg"
				_hover={{ bgColor: 'gray.900' }}
				ref={ref}
			/>

			{!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
		</FormControl>
	);
};

export const Input = forwardRef(InputBase);
