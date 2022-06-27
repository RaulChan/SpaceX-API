import {  useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Box, Text, Flex, Spacer, Tag, Button } from '@chakra-ui/react';
import * as API from '../services/launches';

export function LaunchDetails() {
    const [launch, setLaunch] = useState({});
    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumer(launchId)
        .then(res => setLaunch(res))
        .catch(err =>console.log(err));

    },[launchId])

    return (
        <Box  bg="gray.100" p={4} m={4} borderRadius="lg">
            {!launch ? ( <div>Loading...</div> ) : 
            (
        <>
            <Flex>
            <Text fontSize="2x1">
                Mission <strong> {launch.name} </strong>
            </Text>
            <Spacer/>
            <Tag p={2} colorScheme={launch.success ? "green" : "red" }>
                {launch.success ? "Success" : "Failure" }
            </Tag>
            </Flex>

            <Box>
                Rocket:  
                <Link to={`/rockets/${launch.rocket}`}>
                <Button mt={2} colorScheme="purple">{launch.rocket}</Button>
                </Link>
            </Box>
        </>
        )
        }
      </Box>
    )
}