import React from "react";
import { contentStyle1, contentArrow1, Task, iconStyle1, contentStyleTaplife, iconStyleTaplife } from "./timelineStyle"

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "@material-ui/icons/Work"
import atlantis1 from "../image/atlantis_1.jpg"
import atlantis2 from "../image/atlantis_2.jpg"
import atlantis3 from "../image/atlantis_3.png"


import { Regency, Company } from "./timelineStyle";

import strs from "../stringDefine";

import YouTube from "react-youtube";
import ImageViewer from "./ImageViewer";



export default class TapLifeThree extends React.Component {

    render() {
        return (<VerticalTimelineElement
            contentStyle={contentStyleTaplife}
            contentArrowStyle={contentArrow1}
            iconStyle={iconStyleTaplife}
            icon={<WorkIcon />}
            date={strs.spiritbomb_date_1} >
            <Regency content={strs.spiritbomb_regency_1} />
            <Company content={strs.spirit_bomb} />
            <Task content={strs.spiritbomb_task_1_1} />
            <Task content={strs.spiritbomb_task_1_2} />
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <ImageViewer
                    list={[atlantis1, atlantis2, atlantis3]}
                    width={100} />
                    <YouTube videoId="5Q1jzMT1GyI"
                    opts={{ width: "200", height: "150" }} />
                     <YouTube videoId="IbXH1NqjJIU"
                    opts={{ width: "200", height: "150" }} />
                    

            </div>

        </VerticalTimelineElement>);
    }
}