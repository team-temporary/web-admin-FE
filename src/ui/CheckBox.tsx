import { styled } from 'styled-components';

type Props = {
  value: string;
  isChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox = ({ value, isChecked, onChange }: Props) => {
  return (
    <Base
      type="checkbox"
      value={value}
      checked={isChecked}
      onChange={onChange}
    />
  );
};

export default CheckBox;

const Base = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
`;
