import {IconButton, useColorMode} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

function ToggleColorModeButton() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            mb={10}
            aria-label="DarkMode Switch"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
        />
    );
}

export default ToggleColorModeButton;