import { Button, CheckBox, ICClose, Input, ModalLayout } from '@/ui';
import { Profile } from '@/components';

type Props = {
  username: string;
  nickname: string;
  name: string;
  closeModal: () => void;
};

const UserModal = ({ username, nickname, name, closeModal }: Props) => {
  return (
    <ModalLayout closeModal={closeModal}>
      <div className="modal-title">
        <p>회원 상세 정보</p>
        <button onClick={closeModal}>
          <ICClose />
        </button>
      </div>
      <div className="modal-subtitle">
        <p>미리보기</p>
        <Profile username={username} nickname={nickname} />
      </div>
      <div className="modal-subtitle">
        <p>계정</p>
        <Input
          placeholder="계정"
          type="text"
          width="100%"
          defaultValue={username}
        />
      </div>
      <div className="modal-subtitle">
        <p>닉네임</p>
        <Input
          placeholder="닉네임"
          type="text"
          width="100%"
          defaultValue={nickname}
        />
      </div>
      <div className="modal-subtitle">
        <p>이름</p>
        <Input
          placeholder="이름"
          type="text"
          width="100%"
          defaultValue={name}
        />
      </div>
      <div className="subtitle-wrapper">
        <div className="modal-subtitle">
          <p>성별</p>
          <Input
            placeholder="성별"
            type="text"
            width="100%"
            defaultValue={'남'}
          />
        </div>
        <div className="modal-subtitle">
          <p>생년월일</p>
          <Input
            placeholder="생년월일"
            type="text"
            width="100%"
            defaultValue={'1990-00-00'}
          />
        </div>
      </div>
      <div className="modal-subtitle">
        <p>이메일</p>
        <Input
          placeholder="이메일"
          type="text"
          width="100%"
          defaultValue={'sara.kasongo@gmail.com'}
        />
      </div>
      <div className="modal-subtitle">
        <p>전화번호</p>
        <Input
          placeholder="전화번호"
          type="text"
          width="100%"
          defaultValue={'010-0000-0000'}
        />
      </div>
      <div className="modal-subtitle">
        <p>주소</p>
        <Input
          placeholder="주소"
          type="text"
          width="100%"
          defaultValue={'서울시 서대문구 연희로 2안길 20,'}
        />
        <Input
          placeholder="상세주소"
          type="text"
          width="100%"
          defaultValue={'1동 111호'}
        />
      </div>
      <div className="subtitle-wrapper">
        <div className="modal-subtitle">
          <p>가입일</p>
          <Input
            placeholder="가입일"
            type="text"
            width="100%"
            defaultValue={'2023-00-00'}
          />
        </div>
        <div className="modal-subtitle">
          <p>수정일</p>
          <Input
            placeholder="수정일"
            type="text"
            width="100%"
            defaultValue={'2023-00-00'}
          />
        </div>
      </div>
      <div className="marketing-row">
        <CheckBox value={'개인정보 활용 동의'} isChecked={true} />
        마케팅 정보 활용 동의 여부
      </div>
      <Button text="확인" types={'primary'} />
    </ModalLayout>
  );
};

export default UserModal;
