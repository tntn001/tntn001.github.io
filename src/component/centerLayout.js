import React from "react";

import CenterTop from "./centerTopLayout";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ProgressBarTimeline from "./progressBarTimeline";

import 'react-tabs/style/react-tabs.css';



const containerStyle = {
    flex: 1,
    marginLeft: 5,
    minWidth: 480,
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column"
}

const centerStyle = {
    display: "flex",
    flexDirection: "column"
}

function Center() {
    return (<div style={centerStyle}>
        <ProgressBarTimeline
            listTimeline={[1, 12, 15, 16]} beginYear={2013} />
        {TabComponent()}
    </div>);

}

function TabComponent() {
    return (<Tabs>
        <TabList hidden={true}>
            <Tab></Tab>
            <Tab></Tab>
        </TabList>
        <TabPanel>
            Any content 1
        </TabPanel>
        <TabPanel>
            Any content 2
        </TabPanel>
    </Tabs>);
}


export default () => {
    return (
        <div style={containerStyle}>
            {CenterTop()}
            {Center()}
        </div>
    );
}



