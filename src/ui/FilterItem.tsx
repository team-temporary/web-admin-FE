import { styled } from 'styled-components';

type Props = {
  label: string;
  children: React.ReactNode;
};

const FilterItem = ({ label, children }: Props) => {
  return (
    <Base>
      <p className="label">{label}</p>
      <div>{children}</div>
    </Base>
  );
};

export default FilterItem;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }
  & .label {
    font-size: 12px;
    color: #58667e;
    padding-bottom: 5px;
  }
  form {
    display: flex;
    gap: 10px;
  }
`;
