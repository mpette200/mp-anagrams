import { ProgressBar, TextField, Label, TextArea } from 'react-aria-components';
import styled from 'styled-components';

import type { ProgressBarProps } from 'react-aria-components';
import type { HTMLProps } from 'react';

const Grid = styled.div`
    display: grid;
    margin-top: 1em;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-column-gap: 1em;
    grid-row-gap: 0.4em;
`;

const StyledText = styled(TextField)`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8em;
`;


interface LoadingBarProps extends ProgressBarProps {
  hidden?: boolean;
}

function LoadingBar({hidden, ...props}: LoadingBarProps) {
  const StyledProgressBar = styled(ProgressBar)`
  .bar {
    width: 40%;
    margin: 0.5em;
    border-radius: 0.4em;
    height: 0.6em;
    overflow: hidden;
    will-change: transform;
  }

  .fill {
    background: lightsteelblue;
    height: 100%;
  }

  &:not([aria-valuenow]) {
    .fill {
      width: 30%;
      border-radius: inherit;
      animation: indeterminate 1.2s infinite ease-in;
      will-change: transform;
    }
  }

  @keyframes indeterminate {
    from {
      transform: translateX(-80%);
    }

    to {
      transform: translateX(280%);
    }
  }
`;
  return (
    <StyledProgressBar {...props}>
      {({percentage}) => <>
        <div className="bar" hidden={hidden}>
          <div className="fill" style={{width: percentage + '%'}} />
        </div>
      </>}
    </StyledProgressBar>
  );
}

interface OutputBoxProps extends HTMLProps<HTMLDivElement> {
  wasmRunning: boolean;
  scriptRunning: boolean;
}

export default function OutputBox(props: OutputBoxProps) {
  return (
    <Grid>
      <StyledText>
        <Label>WASM</Label>
        <LoadingBar isIndeterminate={props.wasmRunning} />
        <TextArea rows={6} style={{ resize: "vertical" }} />
      </StyledText>
      <StyledText>
        <Label>Javascript</Label>
        <LoadingBar isIndeterminate={props.scriptRunning} />
        <TextArea rows={6} style={{ resize: "vertical" }} />
      </StyledText>
    </Grid>
  );
}
