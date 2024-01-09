import { Button, TextField, Label, Input } from 'react-aria-components';
import styled from 'styled-components';

const StyledText = styled(TextField)`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8em;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 220px);
    grid-row-gap: 0.4em;
`;

const StyledButton = styled(Button)`
    width: 180px;
    padding: 0.35em;
`;

export default function InputForm() {
  return (
    <>
      <StyledText>
        <Label>Enter text from which to generate anagrams:</Label>
        <Input style={{ width: "180px", height: "1.8em" }} />
      </StyledText>
      <Grid>
        <StyledButton>Compute via WASM</StyledButton>
        <StyledButton>Compute via Javascript</StyledButton>
      </Grid>
    </>
  );
}
