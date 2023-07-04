import { styled } from 'styled-components';

const Close = () => {
  return (
    <Base>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#000000"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Base>
  );
};

export default Close;

const Base = styled.div`
  width: 30px;
  height: 30px;
`;
