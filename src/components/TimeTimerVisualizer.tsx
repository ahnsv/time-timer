import * as React from "react";
import { TimeTimerKnob } from './TimeTimerKnob'

interface ITimeTimerVisualizerProps {
}

interface ITimeTimerVisualizerState {
}

export class TimeTimerVisualizer extends React.Component<ITimeTimerVisualizerProps, ITimeTimerVisualizerState> {
    public readonly state: ITimeTimerVisualizerState;
    private canvas: React.RefObject<HTMLCanvasElement>;
    constructor(props: ITimeTimerVisualizerProps) {
        super(props);
        this.canvas = React.createRef();
        this.state = {
        };
    }

    public componentDidMount() {
        this.drawCircle();
    }

    public render() {
        return (
            <canvas className="tt-vis" ref={this.canvas} width={250} height={250}>
                <TimeTimerKnob />
            </canvas>
        );
    }

    // TODO: Draw a rounded rectangular for time timer
    private drawCircle() {
        const canvas = this.canvas.current as HTMLCanvasElement;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        const radius = canvas.height / 2
        ctx.translate(radius, radius);
        ctx.arc(0, 0, radius * 0.95, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}
