import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    Heading,
    Button,
} from '@chakra-ui/react';
import Builder from './Builder';
import ResumePreview from './ResumePreview';
import ThemeSelect from './Theme/ThemeSelect';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../Context';
import { MdOutlineFileDownload } from 'react-icons/md';
import {Link, useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";

const Main = () => {
    
    const [isLogin , setIsLogin] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        const token2 = localStorage.getItem('token2');
        if(token || token2){
            setIsLogin(true)
        }
    },[])

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }

    const { printElem } = useResume();

    const handlePrint = useReactToPrint({
        content: () => printElem.current,
    });

    return (
        <Container
            bg={'gray.50'}
            minW={'full'}
            py={10}
            id='builder'
        >

            <Heading as='h4' size='lg' textAlign={'center'} color={'gray.700'} style={{ fontFamily: 'Poppins' }} fontWeight={'medium'}>Builder Dashboard</Heading>

            <Container maxW={'7xl'} px={8} my={3}>

                <Stack justifyContent={'space-between'} pt={4} direction={{ base: 'column', sm: 'row' }}>
                    <ThemeSelect />
                    <Link to={"/templets"} style={{marginLeft:"680px"}}> 
                    <Button colorScheme={'purple'}>Templates</Button>
                    </Link>
                    <Button rightIcon={<MdOutlineFileDownload />} onClick={isLogin ? handlePrint : handleLogin } disabled={isLogin ? false : true} colorScheme={'purple'}>{isLogin ? 'Download' : "Login to Download"}</Button>
                </Stack>

            </Container>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                // mt={16}
                gap={4}
                mx={{ base: 2, md: 12 }}
                my={8}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
            >
                <Builder />
                <ResumePreview />
            </Stack>
        </Container>
    )
}

export default Main
