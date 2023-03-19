import { Text } from '@chakra-ui/react'

const MyName = () => {
    const myName: string = 'octkmr';
    return (
        <>
            <Text fontSize="3xl" fontWeight="700" mt="4">
                { myName }
            </Text>
        </>
    )
}

export default MyName