import { styled } from 'styled-components';

type Props = {
  id: string;
};

const CheckBox = (props: Props) => {
  return <Base type="checkbox" {...props} />;
};

export default CheckBox;

const Base = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
`;
