import { Button, FileUploader, Input, PageLayout } from '@/ui';
import { Profile } from '@/components';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState('');
  const [nickname, setNickname] = useState('admin');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setImageSrc(null);
    }
  }, [imageFile]);

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onChangePassword2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword2(e.target.value);

  const onClick = () => {};

  return (
    <PageLayout>
      <Base>
        <section>
          <h1>프로필 미리보기</h1>
          <Profile username="admin386" nickname={nickname} image={imageSrc} />
        </section>
        <section>
          <h1>프로필 이미지 수정</h1>
          <FileUploader setImageFile={setImageFile} />
        </section>
        <section>
          <h1>닉네임 수정</h1>
          <div className="wrapper">
            <Input
              placeholder="닉네임"
              type="text"
              width="155"
              defaultValue={nickname}
              onChange={onChangeNickname}
            />
            <Button types="primary" text="수정" onClick={onClick} />
          </div>
        </section>
        <section>
          <h1>비밀번호 재설정</h1>
          <div className="wrapper">
            <Input
              placeholder="비밀번호"
              type="password"
              width="155"
              onChange={onChangePassword}
            />
            <Input
              placeholder="비밀번호 확인"
              type="password"
              width="155"
              onChange={onChangePassword2}
            />
            <Button types="primary" text="재설정" onClick={onClick} />
          </div>
        </section>
      </Base>
    </PageLayout>
  );
};

export default ProfilePage;

const Base = styled.div`
  width: 1280px;
  section {
    width: 100%;
    &:first-child {
      padding-bottom: 35px;
      border-bottom: 1px solid #eff2f5;
    }
  }
  & .wrapper {
    display: flex;
    gap: 15px;
  }
`;
