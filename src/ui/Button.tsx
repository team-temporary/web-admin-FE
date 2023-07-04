import styled from 'styled-components';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  types: 'primary' | 'secondary';
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ type, types, text, children, onClick }: Props) => {
  return (
    <Base types={types} onClick={onClick} type={type}>
      {text ? text : children}
    </Base>
  );
};

export default Button;

const Base = styled.button<{ types: string }>`
  min-height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: ${({ types }) => (types === 'primary' ? '10px 20px' : '10px')};
  background: ${({ types }) => (types === 'primary' ? '#3861FB' : '#FFFFFF')};
  font-weight: 700;
  font-size: 12px;
  color: ${({ types }) => (types === 'primary' ? '#FFFFFF' : '#58667E')};
  border: ${({ types }) =>
    types === 'primary' ? 'none' : '1px solid #CFD6E4'};
  border-radius: 5px;
  &:hover {
    background: ${({ types }) => (types === 'primary' ? '#244DE3' : '#F8FAFD')};
    color: ${({ types }) =>
      types === 'primary' ? 'RGBA(255, 255, 255, 0.8)' : '#58667E'};
    border: ${({ types }) =>
      types === 'primary' ? 'none' : '1px solid #BDC5D6'};
    transition: 0.2s;
  }
  &:active {
    background: ${({ types }) => (types === 'primary' ? '#1C42CD' : '#F8FAFD')};
    color: ${({ types }) =>
      types === 'primary' ? 'RGBA(255, 255, 255, 0.8)' : '#58667E'};
    border: ${({ types }) =>
      types === 'primary' ? 'none' : '1px solid #8D97AD'};
  }
`;
