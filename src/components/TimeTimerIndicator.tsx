import * as React from 'react';

interface ITimeTimerIndicatorProps {
}

interface ITimeTimerIndicatorState {
}

export class TimeTimerIndicator extends React.Component<ITimeTimerIndicatorProps, ITimeTimerIndicatorState> {
  public readonly state: ITimeTimerIndicatorState;

  constructor(props: ITimeTimerIndicatorProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        Timetimer Indicator
      </div>
    );
  }
}
