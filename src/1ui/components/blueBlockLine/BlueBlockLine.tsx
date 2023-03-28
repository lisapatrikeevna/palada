import React, {ReactNode, useEffect, useState} from 'react';
import cl from './BlueBlockLine.module.css';
import {Box, Paper, AppBar, Tabs, Tab, Typography, Container} from "@mui/material";
import RoundedSquare from "../roundedSquare/RoundedSquare";

interface TabPanelProps {
    children?: ReactNode;
    index: any;
    value: any;
}

export type RoundedSquareItemInner = {
    title: string
    img: any
    link: string
}
export type RoundedSquarePropsTypeItem = {
    key: string
    arrItem: Array<RoundedSquareItemInner>
}
type propsType = {
    title: string
    arr: Array<RoundedSquarePropsTypeItem>
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className={cl.tabpanel}
        >
            {value === index && children
                // (
                //   <Box>
                // {children}
                //   </Box>
                // )
            }
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const BlueBlockLine = ({title, arr}: any) => {
    const [value, setValue] = useState(0);
    const [arrayKeys, setArrayKeys] = useState<Array<string>>([]);
    useEffect(() => {
        const keys = Object.keys(arr)
        return keys && setArrayKeys(keys)
    }, [])
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    // console.log('arr keys', arrayKeys)
    // console.log('value', value)
    // console.log('arr0', arr[arrayKeys[value]])
    // console.log('arrayKeys[value]rr0', arrayKeys[value])
    return (
        <>
            <div className={cl.root}>
                <Container>
                    <Typography variant="h3" style={{textAlign:"center"}}>{title}</Typography>
                </Container>
            </div>
            <Container>
                <Paper className={cl.paper}>
                    <AppBar position="static" color='transparent'>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            {arrayKeys && arrayKeys.map((title, i) => <Tab label={title} {...a11yProps(i)} />)}
                            {/* <Tab label={arr[0]} {...a11yProps(0)} />
                <Tab label="TRANSPORT" {...a11yProps(1)} />
                <Tab label="DIENSTLEISTUNGEN" {...a11yProps(2)} /> */}
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={value}>
                        {arr[arrayKeys[value]]?.map((i: RoundedSquareItemInner) => <RoundedSquare title={i.title}
                                                                                                  img={i.img}
                                                                                                  link={i.link}/>)}
                    </TabPanel>
                    {/* <TabPanel value={value} index={1}>
        TRANSPORT
        </TabPanel>
        <TabPanel value={value} index={2}>
        DIENSTLEISTUNGEN
        </TabPanel> */}

                </Paper>

                <div>
                </div>
            </Container>
        </>
    );
};

export default BlueBlockLine;


