import {
	Avatar,
	Box,
	Flex,
	Text
	} from '@chakra-ui/react';

interface ProfileProps {
	showProfileData: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Rodrigo Cortez</Text>
					<Text color="gray.300" fontSize="small">
						rodrigocortezdev@gmail.com
					</Text>
				</Box>
			)}
			<Avatar size="md" name="Rodrigo Cortez" />
		</Flex>
	);
}
