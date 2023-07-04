import { styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Chip = ({ children }: Props) => {
  return <Base>{children}</Base>;
};

export default Chip;

const Base = styled.div`
  width: 60px;
  padding: 5px 10px;
  border-radius: 50px;
  background: #eef2ff;
  color: #3861fb;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
