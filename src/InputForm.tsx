import { Button, TextField, Label, Input } from 'react-aria-components';
import styled from 'styled-components';

import type { PressEvent, TextFieldProps } from 'react-aria-components';

const StyledText = styled(TextField)`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8em;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 180px);
    grid-column-gap: 1em;
    grid-row-gap: 0.4em;
`;

const StyledButton = styled(Button)`
    border-radius: 1em;
    border-width: 0.1em;
    padding: 0.35em;
    background-color: lightgrey;
    &[data-hovered] {
      background-color: lightgreen;
    }
    &[data-focused] {
      border-width: 0.2em;
    }
`;

interface InputFormProps extends TextFieldProps {
  wasmHandler: (e: PressEvent) => void;
  scriptHandler: (e: PressEvent) => void;
}

export default function InputForm(props: InputFormProps) {
  return (
    <>
      <StyledText>
        <Label>Enter text from which to generate anagrams:</Label>
        <Input style={{ width: "180px", height: "1.8em" }} />
      </StyledText>
      <Grid>
        <StyledButton onPress={props.wasmHandler}>Compute via WASM</StyledButton>
        <StyledButton onPress={props.scriptHandler}>Compute via Javascript</StyledButton>
      </Grid>
    </>
  );
}
