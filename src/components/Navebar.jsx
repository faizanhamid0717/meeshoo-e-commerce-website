
import { FiShoppingCart } from 'react-icons/fi';
import { Search2Icon,ArrowForwardIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react';
import { AllRoutes } from './AllRoutes';
import logo from "../images/Logos.jpg"

import { useAuth0 } from "@auth0/auth0-react";

import {
  Box,
  Flex,
  Avatar,
 Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  List,
  Divider,
  chakra,
  Tooltip,
  
 
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { Link } from "react-router-dom";


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { loginWithRedirect,isAuthenticated,user } = useAuth0();
  const { logout } = useAuth0()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}  >
        <Flex h={16} alignItems={'center'} justifyContent={'space-evenly'} width={1100} margin={'auto'}>

          <Box > <Image h={"35px"} w ={"100px"} mt={"20px"}src="https://th.bing.com/th?id=ODLS.416e21d2-89d8-43b8-8ab8-2db69d72773e&w=32&h=32&o=6&pid=13.1"/> </Box>
       
          <Link to="/"> 
         <Box fontSize={"5xl"} fontWeight={"bold"} color={'#F43397'}>meeshoex</Box>
         </Link>

          {/* ****************************Search Bar*************************************** */}
       <InputGroup>     
        <Input ml={"10px"} width={380} placeholder= "try Sari,Kurta or Search by Product Code" type="text" /> 
        <InputRightAddon children={<Search2Icon/>} />
       </InputGroup>   
 
 
{/* 8******************************************************************************* */}

{/* *****************************Download*************************************** */}
          <Menu>
  <MenuButton as={Text} mr={"30px"} color={'gray.500'} >
    Download App
  </MenuButton>
  <MenuList>
    <MenuItem >Download From</MenuItem>
    {/* <MenuItem>Create a Copy</MenuItem> */}
    <MenuItem><img width ="200px" src ="https://images.meesho.com/images/pow/playstore-icon-big.webp"/></MenuItem>
    <MenuItem><img width ="200px" src ="https://images.meesho.com/images/pow/appstore-icon-big.webp"/></MenuItem>
  </MenuList>
</Menu>
{/* 8******************************************************************************* */}

   { isAuthenticated ? (
     <Box ml={"20px"} ><Button   color={'gray.500'} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
     Log Out
   </Button></Box>
   ) :(
    <Box mr={"20px"}><Button  color={'gray.500'}  onClick={() => loginWithRedirect()}>Log In</Button></Box>
   )}
      
     


          <Flex alignItems={'center'}>
          
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Box
                  mr={"30px"}><Text>Profile</Text></Box>

                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'md'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p >Hello User</p> 
                    
                  </Center>
                  <p >{isAuthenticated && <p >{user.name}</p>}</p>

                  <br />
                  <MenuDivider />
                  
                 
                  <MenuItem>My Orders</MenuItem>
                 
                </MenuList>

                <Box
                label="Add to cart"
               
                placement={'top'}
                color={'gray.500'}
                fontSize={'1.2em'}>
                {/* <chakra.a href={'#'} display={'flex'}> */}

                  <Link to="/cart">
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                  
                  </Link>
                
                <Link to="/"> </Link>
                
                {/* </chakra.a> */}
              </Box>  
                
              </Menu>
              
            </Stack> 
          </Flex>
        </Flex>
      </Box>

{/* <br/> */}
      {/* **************************************Drop down nave****************************** */}
     {/* <Divider mt={"5px"} border={"1px solid #F43397"}/> */}

      <Box bg={useColorModeValue('gray.50', 'gray.800')} px={4} h={12}>
      
  <Link to="/products"> 
  <Button rightIcon={<ArrowForwardIcon />} color='#F43397' variant='outline' border={'0.5px solid #F43397'}>
    Products For You
  </Button>
  </Link>
  
<Menu>
    <MenuButton as={Button} bg={0} color='#F43397'>
     Women Ethnic
    </MenuButton>
  <MenuList >
    <MenuItem color={"#F43397"}>Sarees</MenuItem>  
    <MenuItem>All Sarees </MenuItem>
    <MenuItem>Silk Sarees </MenuItem>
    <MenuItem>Cotton Sarees</MenuItem>
    <MenuItem>Chiffon Sarees</MenuItem>
    
    <MenuItem color={"#F43397"}>Kurtis</MenuItem>
    <MenuItem>All Kurtis </MenuItem>
    <MenuItem>Rayon Kurtis </MenuItem>
    <MenuItem>Cotton Kurtis</MenuItem>
    
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} bg={0} color='#F43397'>
   Women Western
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F43397"}>Topwear</MenuItem>
    <MenuItem>Tops</MenuItem>
    <MenuItem>Dresses</MenuItem>
    <MenuItem color={"#F43397"}>Bottemwear</MenuItem>
    <MenuItem>Jeans</MenuItem>
    <MenuItem>Shorts</MenuItem>
    <MenuItem>Skirts</MenuItem>
    <MenuItem color={"#F43397"}>Sleepwear</MenuItem>
    <MenuItem>Babbydolls</MenuItem>
    <MenuItem>Nightsuits</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} bg={0} color='#F43397'>
    Mens
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F43397"}>Topwear</MenuItem>
    <MenuItem>Tshirts</MenuItem>
    <MenuItem>Shirts</MenuItem>
    <MenuItem color={"#F43397"}>Bottomwear</MenuItem>
    <MenuItem>Track Pants</MenuItem>
    <MenuItem>Trousers</MenuItem>
    <MenuItem>Jeans</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} bg={0} color='#F43397'>
   Kids
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F43397"}>Boys & Girls 2+ Years</MenuItem>
    <MenuItem>Dresses</MenuItem>
    <MenuItem color={"#F43397"}>Infant 0-2 Years</MenuItem>
    <MenuItem >Rompers</MenuItem>
    <MenuItem color={"#F43397"}>Babby Care</MenuItem>
    <MenuItem >All Baby Care</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} bg={0} color='#F43397'>
   Home & Kitchen
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F43397"}>Home Decor</MenuItem>
    <MenuItem>Stickers</MenuItem>
    <MenuItem>Clocks</MenuItem>
    <MenuItem color={"#F43397"}>Kitchen & Dining</MenuItem>
    <MenuItem>Kitchen storage</MenuItem>
    <MenuItem>Cookware & Bakewear</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} bg={0} color='#F43397'>
    Beautiful & Health
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F43397"}>Make Up</MenuItem>
    <MenuItem>Face</MenuItem>
    <MenuItem>Eyes</MenuItem>
    <MenuItem>Lips</MenuItem>
    <MenuItem color={"#F43397"}>Wellness</MenuItem>
    <MenuItem>Oralcare</MenuItem>
    <MenuItem>Sanitizers</MenuItem>
    <MenuItem color={"#F43397"}>Skincare</MenuItem>
    <MenuItem>Deadorants</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} bg={0} color='#F43397'>
    Bag & Footwear 
  </MenuButton>
  <MenuList>
    <MenuItem color={"#F43397"}>Women Bags</MenuItem>
    <MenuItem>Handbags</MenuItem>
    <MenuItem>Slingbags</MenuItem>
    <MenuItem color={"#F43397"}>Men Bags</MenuItem>
    <MenuItem>All Men Bags</MenuItem>
    <MenuItem color={"#F43397"}>Men Footwear</MenuItem>
    <MenuItem >Sports Shoes</MenuItem>
    <MenuItem >Formal shoes</MenuItem>
    <MenuItem color={"#F43397"}>Women Footwear</MenuItem>
    <MenuItem>Flats</MenuItem>
    <MenuItem>Juttis</MenuItem>
  </MenuList>
</Menu> 



<Divider border={"0.5px solid gray"}/>

      </Box>
      
      {/* <AllRoutes/> */}
  
    </>
  );
}

