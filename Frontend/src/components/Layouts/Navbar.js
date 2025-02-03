import { IconButton } from '@chakra-ui/button';
import {useNavigate} from "react-router-dom"
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Navbar = () => {

     const [isLogin , setIsLogin] = useState(false);
    
        useEffect(()=>{
            const token = localStorage.getItem('token');
            const token2 = localStorage.getItem('token2');
            if(token || token2){
                setIsLogin(true)
            }
        },[])

    const navigate = useNavigate();

    const handleLogin =() => {
        navigate('/login')
    };
    const handleSignUp = () => {
        navigate('/signup');
    }
    const goToHome = () => {
        navigate('/');
    }
    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('token2');
        setIsLogin(false);
        navigate('/login')
    }
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
                    <Button as='a' href='#' fontSize='lg'
                    onClick={goToHome}
                    >Home</Button>
                    <Text as='a' href='#' fontSize='lg'>Templates</Text>
                    <Text as='a' href='#' fontSize='lg'>About</Text>
                    <Text colorScheme={'purple'} fontWeight={'medium'}>Contact</Text>
                </HStack>
                {isLogin? (<HStack>
                    <Button
                    className = "logSbtn" style={{
                        background:"#5245A8",
                        color:"white"
                    }}
                    onClick={handleLogOut}
                    >Logout</Button>
                </HStack>) :
                (<HStack>
                    <Button className = "logSbtn" style={{
                        background:"#5245A8",
                        color:"white"
                    }}
                    onClick={handleLogin}
                    >Login</Button>
                    <Button className = "logSbtn" style={{
                        background:"#5245A8",
                        color:"white"
                    }}
                    onClick={handleSignUp}
                    >Signup</Button>
                </HStack>)}
            </Flex>

        </Stack>
    )
}

export default Navbar
