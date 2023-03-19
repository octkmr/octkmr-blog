import Me from '@/components/atoms/Me/Me';
import MyName from '@/components/atoms/MyName/MyName';
import { Box, Link, Text } from "@chakra-ui/react";
import exp from "constants";

const ProfileArea = () => {
    const selfIntroduction: string = 'オタクです。最近は抜歯をしました。';
    return (
        <Box
            border="solid"
            borderColor="gray.200"
            borderWidth="4px"
            borderRadius="md"
            p="8"
            flexDirection="column"
            alignItems="center"
            width="280px" /* 4:3の縦横比を設定 */
            height="390px"
        >
            <Me boxSize={200} borderRadiusType={"full"}/>
            <Box mt="4" textAlign="center">
                <MyName />
                <Text fontSize="base">
                    { selfIntroduction }
                </Text>
                <Link href="<https://twitter.com/yourhandle>" isExternal>
                    Twitter
                </Link>
                <Link href="<https://github.com/yourhandle>" isExternal>
                    GitHub
                </Link>
            </Box>
        </Box>
    );
}

export default ProfileArea