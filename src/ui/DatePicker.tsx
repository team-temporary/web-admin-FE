import { styled } from 'styled-components';
import { DateInput } from '@/ui';

type Props = {
  firstDate: string;
  onChangeFirstDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSecondDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DatePicker = ({
  firstDate,
  onChangeFirstDate,
  onChangeSecondDate,
}: Props) => {
  let today = new Date();
  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let date = ('0' + today.getDate()).slice(-2);
  let todayStr = `${year}-${month}-${date}`;

  return (
    <Base>
      <DateInput max={todayStr} onChange={onChangeFirstDate} /> ~
      <DateInput
        min={firstDate}
        max={todayStr}
        disabled={!firstDate}
        onChange={onChangeSecondDate}
      />
    </Base>
  );
};

export default DatePicker;

const Base = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: #222531;
`;
