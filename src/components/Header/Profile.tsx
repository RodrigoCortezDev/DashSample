import {
  Avatar,
  Box,
  Flex,
  Text
  } from '@chakra-ui/react';

export default function Profile() {
	return (
		<Flex align="center">
			<Box mr="4" textAlign="right">
				<Text>Rodrigo Cortez</Text>
				<Text color="gray.300" fontSize="small">
					rodrigocortezdev@gmail.com
				</Text>
			</Box>
			<Avatar size="md" name="Rodrigo Cortez" />
		</Flex>
	);
}
