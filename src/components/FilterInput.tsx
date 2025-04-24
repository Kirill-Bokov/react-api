import { FilterInputProps } from "../interfaces/FilterInputProps";

export function FilterInput({ value, onChange }: FilterInputProps) {
  return (
    <input
      type="text"
      className="input"
      placeholder="Фильтр по имени"
      value={value}
      onChange={(evt) => onChange(evt.target.value)}
    />
  );
}
