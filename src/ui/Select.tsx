import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';
import { ICDown } from '.';

type Props = {
  options: { id: number; option: string }[];
  setSelectedValue: Dispatch<SetStateAction<string>>;
};

const Select = ({ options, setSelectedValue }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedValue(e.target.value);

  return (
    <Base>
      <SelectBox onChange={onChange}>
        <option defaultValue={'전체'}>전체</option>
        {options.map(({ id, option }) => (
          <option key={id} value={option}>
            {option}
          </option>
        ))}
      </SelectBox>
      <ICDown />
    </Base>
  );
};

export default Select;

const Base = styled.div`
  position: relative;
  > div {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const SelectBox = styled.select`
  width: 108px;
  min-height: 37px;
  background: #ffffff;
  border: 1px solid #cfd6e4;
  border-radius: 5px;
  padding: 10px;
  font-weight: 500;
  font-size: 12px;
  color: #222531;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: 1px solid #a6b0c3;
  }
`;
