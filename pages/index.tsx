import Header from "@/components/molucules/Header";
import Sidebar from "@/components/organisms/Sidebar";
import { ReactElement } from "react";
import {Box, Container, Flex, Grid, GridItem} from "@chakra-ui/react";
import ToggleColorModeButton from "@/components/atoms/ToggleColorModeButton/ToggleColorModeButton";

export default function Home(): ReactElement {
    return (
        <>
        <Header />
        <Container maxW="container.xl" py={8}>
            <Grid
                h='3000'
                templateRows='repeat(16, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={3} colSpan={2} bg='tomato' />
                <GridItem rowSpan={16} colSpan={1} bg='tomato' />

                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />

                <GridItem rowSpan={1} colSpan={2} bg='tomato' />
            </Grid>
        </Container>
        <Header />
        </>
    );
}
