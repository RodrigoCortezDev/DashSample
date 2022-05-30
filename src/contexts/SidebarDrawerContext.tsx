import {
	createContext,
	ReactNode,
	useContext,
	useEffect
	} from 'react';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface SidebarDrawerProviderProps {
	children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
	const disclosude = useDisclosure();
	const router = useRouter();

	useEffect(() => {
		disclosude.onClose();
	}, [router.asPath]);

	return <SidebarDrawerContext.Provider value={disclosude}>{children}</SidebarDrawerContext.Provider>;
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
