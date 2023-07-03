import { styled } from 'styled-components';

const Down = () => {
  return (
    <Base>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#58667E"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </Base>
  );
};

export default Down;

const Base = styled.div`
  width: 15px;
  height: 15px;
`;
