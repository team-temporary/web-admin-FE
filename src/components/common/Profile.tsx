import { styled } from 'styled-components';
import avatar from '/avatar.svg';

type Props = {
  username: string;
  nickname: string;
  image: string;
};

const Profile = ({ username, nickname, image }: Props) => {
  return (
    <Base>
      <img src={image ? image : avatar} alt="프로필" />
      <p>
        {username}
        <br />
        <span>@{nickname}</span>
      </p>
    </Base>
  );
};

export default Profile;

const Base = styled.div`
  width: 320px;
  min-height: 106px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;
  font-size: 16px;
  color: #222531;
  line-height: 18px;
  border: 1px solid #eff2f5;
  padding: 13px;
  > img {
    width: 78px;
    height: 78px;
    object-fit: contain;
    border: 1px solid #eff2f5;
    border-radius: 78px;
  }
  > p > span {
    font-size: 12px;
    color: #a6b0c3;
  }
`;
