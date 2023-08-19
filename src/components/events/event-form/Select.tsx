import React from "react";
import { Color } from "../../../Data/ColorData";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Color[];
}

const Select: React.FC<SelectProps> = ({ value, onChange, options }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}>
    {options.map((option) => (
      <option key={option.code} value={option.code}>
        {option.name}
      </option>
    ))}
  </select>
);

export default Select;
