import { CheckBox } from '@/ui';
import { styled } from 'styled-components';

const SettingForm = () => {
  return (
    <Base>
      <div className="type-wrapper">
        <p>회원</p>
        <p>관리자</p>
      </div>
      {SETTING_MENUS.map(({ id, menu }) => (
        <div className="menu-wrapper" key={id}>
          <p>{menu}</p>
          <div className="checkbox-wrapper">
            <CheckBox id="회원" />
            <CheckBox id="관리자" />
          </div>
        </div>
      ))}
    </Base>
  );
};

export default SettingForm;

const SETTING_MENUS = [
  { id: 0, menu: '회원 가입' },
  { id: 1, menu: '문의 등록' },
  { id: 2, menu: '문의 답변' },
];

const Base = styled.div`
  width: 278px;
  .type-wrapper {
    width: 100%;
    display: flex;
    gap: 11px;
    justify-content: flex-end;
    padding: 8px 11px;
    > p {
      color: #58667e;
      font-size: 12px;
      text-align: center;
    }
  }
  .menu-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 13px 20px;
    border-top: 1px solid #eff2f5;
    > p {
      color: #222531;
      font-size: 14px;
    }
  }
  .checkbox-wrapper {
    display: flex;
    gap: 24px;
  }
`;
