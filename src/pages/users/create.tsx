import * as yup from 'yup';
import Header from '../../components/Header';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';
import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	VStack
	} from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

export default function CreateUser() {
	//#region YUP VALIDACOES
	const CreateUserFormSchema = yup.object().shape({
		name: yup.string().required('Nome Obrigatorio'),
		email: yup.string().required('Email requerido').email('Email invalido'),
		password: yup.string().required('Senha requerida').min(6, 'Minimo de 6 caracteres'),
		password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'Senhas devem ser iguais'),
	});
	const { register, handleSubmit, formState, setError, watch } = useForm({
		resolver: yupResolver(CreateUserFormSchema),
		mode: 'onChange',
	});
	const { errors } = formState;

	type CreateUserFormData = {
		name: string;
		email: string;
		password: string;
		password_confirmation: string;
	};
	//#endregion

	//#region VALIDACAO DEBOUNCE
	//1 - Criar o watch da propriedade que quer fazer debounce check
	const watchName = watch('name');

	//2 - Classe que vai realizar a validaçãoq ue deseja
	function handleValidaNomeExiste(value: string) {
		if (!value) return;

		console.log(value);
		setError('name', { message: 'Teste de erro debouce', type: value });
	}

	//3 - Criando a function de debounce, atrelando ela a nossa function que vai validar
	const debounceHandleValidaNomeExiste = useDebouncedCallback(handleValidaNomeExiste, 1000);

	//4 - useEffect para atrelar o debounce cada vem que essa propriedade for alterada
	useEffect(() => {
		debounceHandleValidaNomeExiste(watchName);
	}, [watchName, debounceHandleValidaNomeExiste]);
	//#endregion

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
		await new Promise(resolve => setTimeout(resolve, 2000));
		console.log(values);
	};

	return (
		<Box>
			<Header />

			<Flex w={'100%'} my="6" maxWidth={1480} mx="auto" px={6}>
				<Sidebar />

				<Box
					as="form"
					flex={1}
					borderRadius={8}
					bg="gray.800"
					p={['6', '8']}
					onSubmit={handleSubmit(handleCreateUser)}
				>
					<Heading size={'lg'} fontWeight="normal">
						Criar Usuário
					</Heading>
					<Divider my={6} borderColor="gray.700" />
					<VStack spacing={8}>
						<SimpleGrid minChildWidth={'240px'} spacing={['6', '8']} w="100%">
							<Input name="name" label="Nome Completo" error={errors.name} {...register('name')} />
							<Input name="email" type={'email'} label="E-mail" error={errors.email} {...register('email')} />
						</SimpleGrid>
						<SimpleGrid minChildWidth={'240px'} spacing={['6', '8']} w="100%">
							<Input name="password" label="Senha" error={errors.password} {...register('password')} />
							<Input
								name="password_confirmation"
								type={'password'}
								label="Confirmação de senha"
								error={errors.password_confirmation}
								{...register('password_confirmation')}
							/>
						</SimpleGrid>
					</VStack>
					<Flex mt="8" justify={'flex-end'}>
						<HStack spacing={4}>
							<Link href="/users" passHref>
								<Button as="button" colorScheme={'whiteAlpha'}>
									Cancelar
								</Button>
							</Link>
							<Button type="submit" colorScheme={'pink'} isLoading={formState.isSubmitting}>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
