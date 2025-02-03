import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Link,
  useToast,
  Container,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react"



const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

  }

  const togglePasswordVisibility = () => setShowPassword(!showPassword)
  return (
 <Box minHeight="100vh" width="full" backgroundColor="gray.100">
      <Container maxWidth="md" py={12}>
        <Box backgroundColor="white" p={8} borderRadius="lg" boxShadow="lg">
          <VStack spacing={4} align="flex-start" w="full">
            <VStack spacing={1} align="center" w="full">
              <Heading>Signup</Heading>
            </VStack>

            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <VStack spacing={4} align="flex-start" w="full">
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Name</FormLabel>
                  <Input
                    id="name"
                    type="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="***********"
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        // icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={togglePasswordVisibility}
                        variant="ghost"
                        size="sm"
                      />
                    </InputRightElement>
                  </InputGroup>


                </FormControl>
                <Button type="submit" colorScheme="blue" width="full" loadingText="Logging in">
                  Log in
                </Button>
              </VStack>
            </form>

            <Text w="full" textAlign="center">
              Already have an account?{" "}
              <Link color="blue.500" href="/login">
                Login
              </Link>
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}

export default SignUp
