import * as React from 'react';
import { TimeTimerVisualizer } from './TimeTimerVisualizer'

interface ITimeTimerIndicatorProps {
}

interface ITimeTimerIndicatorState {
}

type CanvasRenderer = (cvs: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => [HTMLCanvasElement, CanvasRenderingContext2D];

export class TimeTimerIndicator extends React.Component<ITimeTimerIndicatorProps, ITimeTimerIndicatorState> {
  public readonly state: ITimeTimerIndicatorState;
  private canvas: React.RefObject<HTMLCanvasElement>;
  constructor(props: ITimeTimerIndicatorProps) {
    super(props);
    this.canvas = React.createRef();
    this.state = {
    }
  }

  componentDidMount() {
    const canvas = this.canvas.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const radius = canvas.height / 2;
    let ang;
    let num;
    ctx.translate(radius, radius);
    // draw numbers
    ctx.fillStyle = "black"
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 7; num++) {
      const time = num * 10
      ang = num * Math.PI / 3;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(time.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  drawCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, fns: CanvasRenderer[]) {
    fns.reduce(([cvs, ctxx], f) => f(cvs as HTMLCanvasElement, ctxx as CanvasRenderingContext2D), [canvas, ctx])
  }

  // drawCircle(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): CanvasRenderer {
  //   let radius = canvas.height / 2;
  //   ctx.translate(radius, radius)
  //   radius = radius * 0.90
  //   ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  //   ctx.fillStyle = "white";
  //   ctx.fill();
  //   const newLocal = [canvas, ctx];
  //   return newLocal
  // }

  public render() {
    return (
      <canvas ref={this.canvas} className="tt-indicator" width={250} height={250}>
        <TimeTimerVisualizer />
      </canvas>
    );
  }
}
