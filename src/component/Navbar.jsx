
import React from 'react'
import { Link  as RouterLink} from 'react-router-dom'
// import  {Porducts} from "/Porducts"
import { Box , Link , Flex} from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Box bg="blue.500" p={4} >
        <Flex  justify={"space-around"}>
     <Link as={RouterLink} to="/" fontSize={"xl"}  colorPalette={"yellow"}> Home</Link>
     <Link as ={RouterLink} to="/Porducts"  fontSize={"xl"} colorPalette={"yellow"} >Products</Link>
     </Flex>
    </Box>
    
  )
}

export default Navbar