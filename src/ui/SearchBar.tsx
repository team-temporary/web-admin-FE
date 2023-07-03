import { styled } from 'styled-components';
import { ICSearch } from '.';

type Props = {
  placeholder: string;
  type: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = (props: Props) => {
  return (
    <Base>
      <Input {...props} autoComplete="off" />
      <ICSearch />
    </Base>
  );
};

export default SearchBar;

const Base = styled.div`
  min-width: 188px;
  position: relative;
  > div {
    position: absolute;
    top: 8px;
    left: 10px;
  }
`;

const Input = styled.input`
  min-width: 188px;
  height: 38px;
  background: #ffffff;
  border: 1px solid #eff2f5;
  padding: 10px 30px;
  font-weight: 500;
  font-size: 12px;
  color: #58667e;
  &::placeholder {
    font-size: 12px;
    line-height: 17px;
    color: #a6b0c3;
  }
  &:focus {
    outline: 1px solid #a6b0c3;
  }
`;
