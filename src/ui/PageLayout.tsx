import { styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return <Base>{children}</Base>;
};

export default PageLayout;

const Base = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    padding-top: 35px;
    padding-bottom: 20px;
    font-weight: 400;
    color: #58667e;
    font-size: 16px;
  }
`;
