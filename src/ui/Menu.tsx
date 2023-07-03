import { styled } from 'styled-components';

type Props = {
  text: string;
  isHeader?: boolean;
  isSelected?: boolean;
  onClick: () => void;
};

const Menu = ({ text, isHeader, isSelected, onClick }: Props) => {
  return (
    <Base $isHeader={isHeader} $isSelected={isSelected} onClick={onClick}>
      {text}
    </Base>
  );
};

export default Menu;

const Base = styled.button<{ $isHeader: boolean; $isSelected: boolean }>`
  width: auto;
  height: auto;
  padding: ${({ $isHeader }) => ($isHeader ? '0' : '0 0 9px 0')};
  border-bottom: ${({ $isHeader, $isSelected }) =>
    !$isHeader && $isSelected ? '1px solid #000000' : 'none'};
  font-weight: ${({ $isSelected }) => ($isSelected ? '700' : '400')};
  font-size: ${({ $isHeader }) => ($isHeader ? '16px' : '14px')};
  color: ${({ $isSelected }) => ($isSelected ? '#000000' : '#A6B0C3')};
`;
