import React from "react";
import { ChakraProvider, chakra } from "@chakra-ui/react";

const Provider =({children}: {children: React.ReactNode}) => {
    return(
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}
export default Provider