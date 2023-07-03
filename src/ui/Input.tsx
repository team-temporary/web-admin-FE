import { styled } from 'styled-components';

type Props = {
  placeholder: string;
  type: string;
  width: string;
  defaultValue?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholder,
  type,
  width,
  defaultValue,
  name,
  value,
  onChange,
}: Props) => {
  return (
    <Base
      placeholder={placeholder}
      type={type}
      width={width}
      defaultValue={defaultValue}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

const Base = styled.input<{ width: string }>`
  min-width: ${({ width }) => `${width}px`};
  height: 38px;
  background: #ffffff;
  border: 1px solid #eff2f5;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 12px;
  color: #58667e;
  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    color: #a6b0c3;
  }
  &:focus {
    outline: 1px solid #a6b0c3;
  }
`;
