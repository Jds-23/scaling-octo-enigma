import React from 'react'
import { Flex, Box, Heading, Text, Select, HStack, TagCloseButton, TagLabel, Tag, Input, IconButton, Button, Grid } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { DeleteIcon } from '@chakra-ui/icons/dist/cjs/Delete'
const Login = () => {
    return (
        <Flex bgColor="#A4C772" minHeight="100vh">
            <Box width="25%">
                <Heading as="h1" mt="110px" textAlign="center" textColor="#fff">
                    Empolink
                </Heading>
            </Box>
            <Grid placeItems="center" bgColor="#fff" width="75%">
                <Box width="931px">
                    <Heading as="h1" fontWeight="bold">
                        Sign Up
                </Heading>
                    <Text fontSize="26px" textColor="#707070">Personal Information</Text>
                    <Text fontSize="20px" paddingTop="63px" textColor="#707070">Select a skill(s) from the suggested list or type more skills below. </Text>
                    <Select mt="18px" borderColor="#C7C7C7" width="458px" value={"option1"}>
                        <option value="option1">UI Design</option>
                    </Select>
                    <HStack mt="18px" spacing="20px">
                        <Tag paddingY="17px" fontSize="18px" bgColor="#a4c772" textColor="#fff" borderRadius="20px">
                            <TagLabel>Prototyping</TagLabel>
                            <TagCloseButton />
                        </Tag>
                        <Tag paddingY="17px" border="1px" borderColor="#707070" fontSize="18px" bgColor="#fff" textColor="#707070" borderRadius="20px">
                            <TagLabel>Wireframing</TagLabel>
                            <TagCloseButton />
                        </Tag>
                        <Tag paddingY="17px" fontSize="18px" bgColor="#a4c772" textColor="#fff" borderRadius="20px">
                            <TagLabel>Sketch</TagLabel>
                            <TagCloseButton />
                        </Tag><Tag paddingY="17px" fontSize="18px" bgColor="#a4c772" textColor="#fff" borderRadius="20px">
                            <TagLabel>Figma</TagLabel>
                            <TagCloseButton />
                        </Tag>
                        <Tag paddingY="17px" border="1px" borderColor="#707070" fontSize="18px" bgColor="#fff" textColor="#707070" borderRadius="20px">
                            <TagLabel>Balsamiq</TagLabel>
                            <TagCloseButton />
                        </Tag>
                        <Tag paddingY="17px" border="1px" borderColor="#707070" fontSize="18px" bgColor="#fff" textColor="#707070" borderRadius="20px">
                            Adobe XD                            <TagCloseButton />
                        </Tag>
                    </HStack>
                    <Input mt="18px" borderColor="#C7C7C7" placeholder="More Skills (comma separated, Max. 10 total )" />
                    <HStack mt="44px">
                        <IconButton height="56px" width="56px" borderRadius="50%" opacity="0.6" bgColor="#A4C772" icon={<AddIcon />} />
                        <Text ml="16px" fontSize="20px" textColor="#9A9A9A">
                            Add the selected Specialty and skills
                        </Text>
                    </HStack>
                    <Box mt="18px" border="1px" paddingX="17px" paddingY="13px" borderRadius="21px" borderColor="#707070">
                        <Tag padding="0" fontSize="18px" mt="13px" bg="none" textColor="#000">
                            <TagLabel>UI Design</TagLabel>
                            <DeleteIcon />
                        </Tag>
                        <HStack mb="13px">
                            <Tag size="sm" bgColor="#a4c772" textColor="#fff" >
                                <TagLabel>User interface design</TagLabel>
                                <TagCloseButton />
                            </Tag>
                            <Tag size="sm" bgColor="#a4c772" textColor="#fff" >
                                <TagLabel>User interface design</TagLabel>
                                <TagCloseButton />
                            </Tag>
                            <Tag size="sm" bgColor="#a4c772" textColor="#fff" >
                                <TagLabel>Graphic design</TagLabel>
                                <TagCloseButton />
                            </Tag>
                            <Tag size="sm" bgColor="#a4c772" textColor="#fff" >
                                <TagLabel>Visual design</TagLabel>
                                <TagCloseButton />
                            </Tag>
                        </HStack>
                        <Tag padding="0" fontSize="18px" mt="13px" bg="none" textColor="#000">
                            <TagLabel>UI Design</TagLabel>
                            <DeleteIcon />
                        </Tag>
                        <HStack mb="13px">
                            <Tag size="sm" bgColor="#a4c772" textColor="#fff" >
                                <TagLabel>User interface design</TagLabel>
                                <TagCloseButton />
                            </Tag>
                            <Tag size="sm" bgColor="#a4c772" textColor="#fff" >
                                <TagLabel>User interface design</TagLabel>
                                <TagCloseButton />
                            </Tag>
                            <Tag size="sm" bgColor="#a4c772" textColor="#fff" >
                                <TagLabel>Graphic design</TagLabel>
                                <TagCloseButton />
                            </Tag>
                            <Tag size="sm" bgColor="#a4c772" textColor="#fff" >
                                <TagLabel>Visual design</TagLabel>
                                <TagCloseButton />
                            </Tag>
                        </HStack>
                    </Box>
                    <Grid placeItems="center">
                        <Button alignSelf="center" marginTop="82px" width="458px" bgGradient="linear(to-b,#A4C772,#4E8400)" textColor="#fff">Next</Button>
                    </Grid>
                </Box>
            </Grid>
        </Flex>
    )
}

export default Login
