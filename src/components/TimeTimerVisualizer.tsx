import * as React from "react";

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
        this.roundRect();
    }

    public render() {
        return (
            <div>
                <canvas ref={this.canvas} width={250} height={250} />
            </div>
        );
    }

    // TODO: Draw a rounded rectangular for time timer
    private roundRect() {
        const canvas = this.canvas.current as HTMLCanvasElement;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.beginPath();
        ctx.moveTo(5 + 0, 5);
        ctx.lineTo(5 + 50 - 0, 5);
        ctx.quadraticCurveTo(5 + 50, 5, 5 + 50, 5 + 0);
        ctx.lineTo(5 + 50, 5 + 50 - 0);
        ctx.quadraticCurveTo(5 + 50, 5 + 50, 5 + 50 - 0, 5 + 50);
        ctx.lineTo(5 + 0, 5 + 50);
        ctx.quadraticCurveTo(5, 5 + 50, 5, 5 + 50 - 0);
        ctx.lineTo(5, 5 + 0);
        ctx.quadraticCurveTo(5, 5, 5 + 0, 5);
        ctx.closePath();
    }
}
