import { Button, Input, PageLayout } from '@/ui';
import { SettingForm } from '@/components';
import { styled } from 'styled-components';

const MailPage = () => {
  return (
    <PageLayout>
      <Base>
        <section>
          <div className="wrapper">
            <div className="form">
              <h1>자동 메일 설정</h1>
              <div className="input-wrapper">
                <Input
                  placeholder="발신자 메일 주소"
                  type="text"
                  width="205px"
                />
                <Button types={'primary'} text="등록" />
              </div>
              <SettingForm />
            </div>
            <div className="form">
              <h1>발송 문구 미리보기</h1>
              <h3>회원 가입</h3>
              <p>
                (회원) [이름]님 [사이트명] 가입을 환영합니다.
                <br />
                (관리자) [이름]님이 가입하였습니다.
              </p>
              <h3>문의 등록</h3>
              <p>
                (회원) [이름]님의 문의가 정상 접수되었습니다. 빠른 시일 내에
                답변 드리겠습니다.
                <br />
                (관리자) [이름]님의 문의가 접수되었습니다.
              </p>
              <h3>문의 답변</h3>
              <p>
                (회원) [이름]님의 문의에 대한 답변이 완료되었습니다. 감사합니다.
                <br />
                (관리자) [이름]님의 문의에 대한 답변이 등록되었습니다.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="wrapper">
            <div className="form">
              <h1>카카오 알림톡 설정</h1>
              <div className="input-wrapper">
                <Input
                  placeholder="발신자 메일 주소"
                  type="text"
                  width="205px"
                />
                <Button types={'primary'} text="등록" />
              </div>
              <SettingForm />
            </div>
            <div className="form">
              <h1>발송 문구 미리보기</h1>
              <h3>회원 가입</h3>
              <p>
                (회원) [이름]님 [사이트명] 가입을 환영합니다.
                <br />
                (관리자) [이름]님이 가입하였습니다.
              </p>
              <h3>문의 등록</h3>
              <p>
                (회원) [이름]님의 문의가 정상 접수되었습니다. 빠른 시일 내에
                답변 드리겠습니다.
                <br />
                (관리자) [이름]님의 문의가 접수되었습니다.
              </p>
              <h3>문의 답변</h3>
              <p>
                (회원) [이름]님의 문의에 대한 답변이 완료되었습니다. 감사합니다.
                <br />
                (관리자) [이름]님의 문의에 대한 답변이 등록되었습니다.
              </p>
            </div>
          </div>
        </section>
      </Base>
    </PageLayout>
  );
};

export default MailPage;

const Base = styled.div`
  width: 1280px;
  section {
    width: 100%;
    &:first-child {
      padding-bottom: 35px;
      border-bottom: 1px solid #eff2f5;
    }
  }
  .wrapper {
    display: flex;
    gap: 175px;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    > h3 {
      color: #222531;
      font-size: 14px;
      font-weight: 700;
    }
    > p {
      color: #222531;
      font-size: 14px;
    }
  }
  .input-wrapper {
    display: flex;
    gap: 10px;
  }
`;
