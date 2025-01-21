import {
    Text,
    Button,
    Image,
    Heading,
    Stack,
    Flex,
    Box,
    Container,
} from '@chakra-ui/react';
import hero from '../../images/hero.svg';

const Header = () => {

    return (
        <>
            <Container maxW='7xl' as='main'>

                <Stack
                    py={{ base: 8, md: 20 }}
                    spacing={{ base: 4, md: 10 }}
                    direction={{ base: 'column', md: 'row' }}
                    align='center'>

                    <Stack flex={1} direction={'column'} spacing={4}>
                        <Heading
                            fontSize={{ base: '3xl', md: '5xl' }}
                            bgGradient="linear(to-r, purple.500, blue.600)"
                            bgClip="text">
                            If you want to succeed, start with QuickCv.
                        </Heading>

                        <Text color={'gray.600'} lineHeight={1.7} style={{ fontFamily: 'Poppins' , marginTop : "15px"}}>
                        QuickCv is an automated tool that allows you to quickly follow a template and input your information. It enables you to build, print, and download a professional resume for free in just minutes.
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}
                        >
                            <Button
                                as={'a'}
                                href={'#builder'}
                                rounded={'md'}
                                size={'lg'}
                                px={6}
                                backgroundColor="#7E5AD4"
                                color="white"
                                _hover={{backgroundColor : "#5245A8"}}
                            >
                                Build Resume
                            </Button>
                        </Stack>

                    </Stack>

                    <Flex
                        flex={1}
                    >
                        <Box
                            position={'relative'}
                            height={'400px'}
                            width={'full'}
                            overflow={'hidden'}
                        >
                            <Image
                                alt={'Hero Image'}
                                fit={'contain'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={hero}
                                draggable='false'
                            />
                        </Box>
                    </Flex>
                </Stack>

            </Container>
        </>
    )
}

export default Header
