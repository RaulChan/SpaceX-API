import { HiCalendar } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Box, Text , Flex, Spacer, Tag, Button, Icon } from '@chakra-ui/react';
import dayjs from "dayjs";
import "dayjs/locale/es";


export function LaunchItem(launch) {
    return (
      <Box  bg="gray.100" p={4} m={4} borderRadius="lg">
        <Flex>
          <Text fontSize="2x1" color="gray.900">
            Mission <strong> {launch.name} </strong>
          </Text>
          <Spacer/>
          <Tag p={2} colorScheme={launch.success ? "green" : "red" }>
            {launch.success ? "Success" : "Failure" }
          </Tag>
        </Flex>
        
        <Flex align="center">          
          <Icon as={HiCalendar} color="gray.500"/>
          <Text fontSize="sm" ml={1} color="gray.500">
            { dayjs(launch.date_local).locale("es").format("D MMMM, YYYY") }
          </Text>
        </Flex>
        <Link to={`/launch/${launch.id}`}>
        <Button mt={2} colorScheme="blue">More Details</Button>
        </Link>
      </Box>
    )
}