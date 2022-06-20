import * as yup from 'yup';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function SignIn() {
	const SignInFormSchema = yup.object().shape({
		email: yup.string().required('Email requerido').email('Email invalido'),
		password: yup.string().required('Senha requerida'),
	});
	const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(SignInFormSchema) });
	const { errors } = formState;

	type SignInFormData = {
		email: string;
		password: string;
	};

	const handleSignIn: SubmitHandler<SignInFormData> = async values => {
		await new Promise(resolve => setTimeout(resolve, 2000));
		console.log(values);
	};

	return (
		<Flex w="100vw" h="100vh" align="center" justify="center">
			<Flex
				as="form"
				flexDir="column"
				w="100%"
				maxWidth={360}
				bg="gray.800"
				p="8"
				borderRadius={8}
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing={4}>
					<Input name="email" label="E-mail" type="email" error={errors.email} {...register('email')} />
					<Input name="password" label="Senha" type="password" error={errors.password} {...register('password')} />
				</Stack>
				<Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
