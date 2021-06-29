import { extendTheme } from '@chakra-ui/react';

const colors = {
    primary: {
        100: "#E76247",
        200: "#EF8354",
    }
}

const customTheme = extendTheme({colors})
export default customTheme;