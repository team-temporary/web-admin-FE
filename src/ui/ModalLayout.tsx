import { styled } from 'styled-components';

type Props = {
  closeModal: () => void;
  children: React.ReactNode;
};

const ModalLayout = ({ closeModal, children }: Props) => {
  return (
    <>
      <Background onClick={closeModal} />
      <Base>{children}</Base>
    </>
  );
};

export default ModalLayout;

const Background = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Base = styled.div`
  min-width: 480px;
  min-height: 1100px;
  padding: 50px 80px;
  background: white;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 18px;
  & .modal-title {
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    > p {
      color: #000000;
      font-size: 22px;
      font-weight: 700;
    }
  }
  & .modal-subtitle {
    display: flex;
    flex-direction: column;
    gap: 5px;
    > p {
      color: #58667e;
      font-size: 14px;
    }
  }
  & .subtitle-wrapper {
    display: flex;
    gap: 20px;
  }
  .marketing-row {
    display: flex;
    gap: 5px;
    align-items: center;
    color: #222531;
    font-size: 14px;
    font-weight: 500;
  }
  > button {
    margin-top: 40px;
  }
`;
