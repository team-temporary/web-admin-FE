import { Button, ICDownload } from '@/ui';
import { styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
};
const TableInfo = ({ children }: Props) => {
  return (
    <Base>
      {children}
      <Button types="secondary">
        <ICDownload />
        내보내기
      </Button>
    </Base>
  );
};

export default TableInfo;

const Base = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  > p {
    color: #58667e;
    font-size: 14px;
    span {
      color: #3861fb;
    }
  }
`;
