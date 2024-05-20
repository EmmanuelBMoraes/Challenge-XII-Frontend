import { InputOption, Options } from "./styles";

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
