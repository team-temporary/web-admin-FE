import { Button, ICEyeSlash, Input } from '@/ui';
import { styled } from 'styled-components';

const Login = () => {
  return (
    <>
      <Background />
      <Base>
        <div className="login-column">
          <ICEyeSlash />
          <p>로그인 후, 서비스 이용이 가능합니다.</p>
          <div className="input-row">
            <Input placeholder="아이디" type="text" width="155px" />
            <Input placeholder="비밀번호" type="text" width="155px" />
            <Button types={'primary'} text="로그인" />
          </div>
        </div>
      </Base>
    </>
  );
};

export default Login;

const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8fafd;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Base = styled.div`
  width: 100%;
  .login-column {
    width: 1230px;
    margin: 150px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    > p {
      color: #58667e;
      text-align: center;
      font-size: 22px;
      font-weight: 500;
    }
  }
  .input-row {
    display: flex;
    gap: 15px;
    margin-top: 35px;
  }
`;
