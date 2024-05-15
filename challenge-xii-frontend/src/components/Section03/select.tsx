import styled from "styled-components";
import { theme } from "@/app/theme";

export interface Option {
  id: string;
  displayName: string;
}

interface SelectInputProps {
  id: string;
  onChange: (optionId: Option["id"]) => void;
  options: Option[];
  first?: boolean;
}

const InputOption = styled.select`
  height: 60px;
  padding: 12px 17px;
  margin-top: 24px;
  color: ${theme.colors.white};
  background-color: transparent;
  outline: none;
  border: 1px solid ${theme.colors.white};
  border-radius: 4px;
  caret-color: ${theme.colors.golden};
  &:focus {
    border-color: ${theme.colors.golden};
  }
`;

const Options = styled.option`
  color: ${theme.colors.post_background};
`;

export default function SelectInput({
  id,
  onChange,
  options,
  first,
}: SelectInputProps) {
  return (
    <InputOption id={id} onChange={(e) => onChange(e.target.value)}>
      {first && (
        <Options key={"S"} value={""}>
          {"Select a country first"}
        </Options>
      )}
      {options.map((option) => (
        <Options key={option.id} value={option.displayName}>
          {option.displayName}
        </Options>
      ))}
    </InputOption>
  );
}
