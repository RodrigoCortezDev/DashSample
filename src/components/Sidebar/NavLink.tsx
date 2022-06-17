import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';
import { ElementType } from 'react';
import {
	Icon,
	Link as ChakraLink,
	LinkProps as ChakraLinkProps,
	Text
	} from '@chakra-ui/react';

interface NavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	children: string;
	href: string;
}

export default function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
	return (
		<ActiveLink href={href} passHref>
			<ChakraLink display={'flex'} alignContent="center" {...rest}>
				<Icon as={icon} fontSize="20" />
				<Text ml="4" fontWeight={'medium'}>
					{children}
				</Text>
			</ChakraLink>
		</ActiveLink>
	);
}
