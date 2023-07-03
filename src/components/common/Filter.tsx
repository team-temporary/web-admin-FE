import { ICFilter } from '@/ui';
import { styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Filter = ({ children }: Props) => {
  return (
    <Base>
      <section>
        <ICFilter />
        <p>필터</p>
      </section>
      <section>{children}</section>
    </Base>
  );
};

export default Filter;

const Base = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
  > section {
    display: flex;
    align-items: center;
    &:first-child {
      gap: 10px;
    }
    p {
      font-size: 14px;
      color: #58667e;
    }
  }
`;
