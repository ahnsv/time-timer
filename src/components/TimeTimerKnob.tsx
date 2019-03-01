import * as React from "react";

interface ITimeTimerKnobProps {
}

interface ITimeTimerKnobState {
    angle: number;
}

export class TimeTimerKnob extends React.Component<ITimeTimerKnobProps, ITimeTimerKnobState> {
    public readonly state: ITimeTimerKnobState;
    private canvasElem: React.RefObject<HTMLCanvasElement>;
    constructor(props: ITimeTimerKnobProps) {
        super(props);
        this.canvasElem = React.createRef();
        this.state = {
            angle: 0,
        };
    }

    public handleRotate() {

    }

    public drawCanvas() {
        const canvas = this.canvasElem.current as HTMLCanvasElement;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.moveTo(250 / 2, 250 / 2);
        ctx.lineTo(0, 10);
        ctx.stroke();
        ctx.rotate(30)
    }
    public componentDidMount() {
        this.drawCanvas()
    }

    public render() {
        return (
            <div>
                <canvas ref={this.canvasElem} width={250} height={250} />
            </div>
        );
    }
}
