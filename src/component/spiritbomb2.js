import React from "react";
import { contentStyle1, contentArrow1, Task, iconStyle1, contentStyleTaplife, iconStyleTaplife } from "./timelineStyle"

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "@material-ui/icons/Work"
import match1 from "../image/match_1.png"
import match2 from "../image/match_2.png"
import match3 from "../image/match_3.png"
import match4 from "../image/match_4.png"
import match5 from "../image/match_5.png"
import car from "../image/car.png"


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
            date={strs.spiritbomb_date_2} >
            <Regency content={strs.spiritbomb_regency_2} />
            <Company content={strs.spirit_bomb} />
            <Task content={strs.spiritbomb_task_2_1} />
            <Task content={strs.spiritbomb_task_2_2} />
            <Task content={strs.spiritbomb_task_2_3} />
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <ImageViewer
                    list={[match1, match2, match3, match4, match5, car]}
                    width={100} />
                    <YouTube videoId="eOqBpoG07jY"
                    opts={{ width: "200", height: "150" }} />

            </div>

        </VerticalTimelineElement>);
    }
}