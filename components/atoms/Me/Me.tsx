import { Image } from '@chakra-ui/react';

interface MeProps {
    borderRadiusType: 'none' | 'full';
    boxSize: number;
}
const Me = ({ boxSize, borderRadiusType }: MeProps) => {
    return (
        <>
            <Image
                borderRadius={borderRadiusType}
                boxSize={`${boxSize}px`}
                src='/images/octkmr.png'
                alt='octkmr'
            />
        </>
    )
}

export default Me