import { IconButton } from '@chakra-ui/button';
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
} from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Stack
            p={5}
            bg={'gray.50'}
            as='header'
            >
            <Flex
                w='full'
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Heading as='h3' ml={{ base: 0, sm: 8 }} size='lg' fontWeight={'thin'} color='#1170CD' style={{ fontFamily: "Pacifico" }}>Quick-CV</Heading>
                <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' style={{ fontFamily: 'Poppins' }}>
                    <Text as='a' href='#' fontSize='lg'>Home</Text>
                    <Text as='a' href='#' fontSize='lg'>Templates</Text>
                    <Text as='a' href='#' fontSize='lg'>About</Text>
                    <Text colorScheme={'purple'} fontWeight={'medium'}>Contact</Text>
                </HStack>
                <HStack>
                    <Button className = "logSbtn" style={{
                        background:"#5245A8",
                        color:"white"
                    }}>Login</Button>
                    <Button className = "logSbtn" style={{
                        background:"#5245A8",
                        color:"white"
                    }}>Signup</Button>
                </HStack>
            </Flex>

        </Stack>
    )
}

export default Navbar
