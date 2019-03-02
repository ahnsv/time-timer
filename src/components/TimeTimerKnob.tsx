import * as React from "react";

interface ITimeTimerKnobProps {
}

interface ITimeTimerKnobState {
    angle: number;
}

export class TimeTimerKnob extends React.Component<ITimeTimerKnobProps, ITimeTimerKnobState> {
    public readonly state: ITimeTimerKnobState;
    private canvas: React.RefObject<HTMLCanvasElement>;
    constructor(props: ITimeTimerKnobProps) {
        super(props);
        this.canvas = React.createRef();
        this.state = {
            angle: 0,
        };
    }

    // TODO: make rotation happen for knob
    public handleRotate() {

    }

    public handleTouchStart(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
        e.preventDefault()
        console.log('touch start')
    }

    public drawCanvas() {
        const canvas = this.canvas.current as HTMLCanvasElement;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        const radius = canvas.height;
        // draw needle
        ctx.beginPath();
        ctx.lineWidth = radius * 0.07;
        ctx.lineCap = "round";
        ctx.moveTo(0, 0);
        ctx.rotate(0);
        ctx.lineTo(0, -radius * 0.5);
        ctx.stroke();
        ctx.rotate(-0);
    }

    public componentDidMount() {
        this.drawCanvas()
    }

    public render() {
        return (

            <canvas className="tt-knob" ref={this.canvas} width={50} height={50} onMouseDown={this.handleTouchStart} />

        );
    }
}
