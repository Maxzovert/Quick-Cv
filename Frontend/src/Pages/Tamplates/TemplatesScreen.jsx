import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

import One from "../../images/TempletPreviews/One.png";
import Two from "../../images/TempletPreviews/Two.png";
import Three from "../../images/TempletPreviews/Three.png";
import Four from "../../images/TempletPreviews/Four.png";
import Five from "../../images/TempletPreviews/Five.png";
import { useResume } from "../../Context";
import {useNavigate} from "react-router-dom"

const TemplatesScreen = () => {
  const IMAGES = [
    { id: 1, src: One, alt: "One" },
    { id: 2, src: Two, alt: "Two" },
    { id: 3, src: Three, alt: "Three" },
    { id: 4, src: Four, alt: "Four" },
    { id: 5, src: Five, alt: "Five" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const navigate = useNavigate();
  const { setSelectedTemplate } = useResume();
  const handleSelect = (id) => {
    setSelectedTemplate(String(id)); 
    navigate('/#builder')
  };


  return (
    <Box px={6} py={8}>
      <Text fontSize="2xl" mb={6} textAlign="center">
        Choose a Template
      </Text>
      <Flex wrap="wrap" justify="center" gap={6}>
        {IMAGES.map((IMG, index) => (
          <Box
            key={IMG.id}
            position="relative"
            width={["100%", "45%"]} 
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            transition="transform 0.3s ease, filter 0.3s ease"
            transform={hoveredIndex === index ? "scale(1.05)" : "scale(1)"}
            filter={
              hoveredIndex !== null && hoveredIndex !== index
                ? "blur(3px)"
                : "none"
            }
            borderRadius="md"
            overflow="hidden"
            cursor="pointer"
          >
            <Image
              src={IMG.src}
              alt={IMG.alt}
              width="100%"
              height="auto"
              objectFit="cover"
            />
            <Button
              position="absolute"
              bottom="10px"
              left="50%"
              transform="translateX(-50%)"
              colorScheme="teal"
              variant="solid"
              zIndex={1}
              onClick={() => handleSelect(IMG.id)}
            >
              Select
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default TemplatesScreen;
