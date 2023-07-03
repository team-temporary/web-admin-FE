import { styled } from 'styled-components';

type Props = {
  min?: string;
  max: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Date = (props: Props) => {
  return <Base type="date" {...props} />;
};

export default Date;

const Base = styled.input`
  min-width: 130px;
  min-height: 37px;
  background: #ffffff;
  border: 1px solid #cfd6e4;
  border-radius: 5px;
  padding: 10px 13px;
  font-weight: 500;
  font-size: 12px;
  color: #222531;
  &:focus {
    outline: 1px solid #a6b0c3;
  }
  &:disabled {
    background: #f8fafd;
    color: #58667e;
  }
`;
