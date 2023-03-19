import { Box, Flex, Spacer, VStack, Text, IconButton, useColorMode } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ProfileArea from "@/components/molucules/ProfileBox";

const Sidebar = () => {
    const { colorMode } = useColorMode();

    const sidebarBgColor = {
        light: 'gray.100',
        dark: 'gray.700'
    };

    const sidebarTextColor = {
        light: 'gray.900',
        dark: 'gray.100'
    };

    const sidebarBorderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    };

    return (
        <Box
            // h="1000px"
            // w="280px"
            // top="250px"
            bg={sidebarBgColor[colorMode]}
            borderLeftColor={sidebarBorderColor[colorMode]}
        >
            <ProfileArea />
        </Box>
    );
};

export default Sidebar;