import { CheckBox, ICDown } from '@/ui';
import { styled } from 'styled-components';

type Props = {
  headList: { id: number; head: string; sort: boolean }[];
  children: React.ReactNode;
  selectedItemsLength: number;
  handleAllCheck: (isChecked: boolean) => void;
};

const Table = ({
  headList,
  children,
  selectedItemsLength,
  handleAllCheck,
}: Props) => {
  return (
    <Base>
      <thead>
        <tr>
          <th>
            <CheckBox
              value={'all'}
              isChecked={selectedItemsLength === 20}
              onChange={e => handleAllCheck(e.target.checked)}
            />
          </th>
          {headList.map(({ id, head, sort }) => (
            <th key={id}>
              {head}
              {sort && (
                <button>
                  <ICDown />
                </button>
              )}
            </th>
          ))}
        </tr>
      </thead>
      {children}
    </Base>
  );
};

export default Table;

const Base = styled.table`
  width: 1230px;
  margin-top: 20px;
  border-collapse: collapse;
`;
