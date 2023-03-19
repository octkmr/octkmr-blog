import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });
console.log(inter);
const theme = extendTheme({
    styles: {
        global: ({ colorMode }: { colorMode: string }) => ({
            'html, body': {
                fontSize: 'sm',
                font: inter,
                color: colorMode === 'dark' ? 'white' : 'gray.600',
                lineHeight: 'tall',
            },
            a: {
                color: colorMode === 'dark' ? 'teal.300' : 'teal.500',
            },
        }),
    },
    // ...他のテーマ設定を定義する
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}