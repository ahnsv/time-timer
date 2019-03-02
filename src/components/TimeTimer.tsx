import * as React from 'react';
import { TimeTimerIndicator } from './TimeTimerIndicator'
import { TimeTimerVisualizer } from './TimeTimerVisualizer'
import { TimeTimerKnob } from './TimeTimerKnob'
import './TimeTimer.css'
import { } from './todo'

interface ITimeTimerProps {
}

export class TimeTimer extends React.Component<ITimeTimerProps> {
    public render() {
        return (
            <div className="tt-wrapper">
                <TimeTimerIndicator />
            </div>
        );
    }
}
