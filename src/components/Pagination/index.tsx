import PaginationItem from './PaginationItem';
import { Box, Stack } from '@chakra-ui/react';

export default function Pagination() {
	return (
		<Stack direction={'row'} mt="8" justify={'space-between'} align="center" spacing={6}>
			<Box>
				<strong>0</strong> - <strong>10</strong> de <strong>100</strong>
			</Box>
			<Stack direction={'row'} spacing="2">
				<PaginationItem isCurrent pageNumber={1} />
				<PaginationItem pageNumber={2} />
				<PaginationItem pageNumber={3} />
				<PaginationItem pageNumber={4} />
				<PaginationItem pageNumber={5} />
				<PaginationItem pageNumber={6} />
			</Stack>
		</Stack>
	);
}
