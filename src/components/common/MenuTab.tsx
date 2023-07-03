import { Menu } from '@/ui';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const MenuTab = () => {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  const [menuList, setMenuList] = useState([]);
  const [title, setTitle] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const onSelect = (text: string) => setSelectedValue(text);

  useEffect(() => {
    const menu = menuList.find(({ text }) => text === selectedValue);
    if (menu) navigate(menu.url);
  }, [selectedValue, navigate]);

  useEffect(() => {
    setSelectedValue(menuList[0]?.text);
  }, [menuList]);

  useEffect(() => {
    switch (pathname) {
      case '/default':
        setMenuList(DEFAULT_LIST);
        setTitle('기본 설정');
        break;
      case '/users':
        setMenuList(USERS_LIST);
        setTitle('회원');
        break;
      case '/contents':
        setMenuList(CONTENTS_LIST);
        setTitle('컨텐츠');
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <>
      {pathname !== '/' && (
        <Base>
          <section>
            <p>{title}</p>
            <div className="menu-wrapper">
              {menuList.map(({ id, text }) => (
                <Menu
                  key={id}
                  text={text}
                  isSelected={text === selectedValue}
                  onClick={() => onSelect(text)}
                />
              ))}
            </div>
          </section>
        </Base>
      )}
    </>
  );
};

export default MenuTab;

const DEFAULT_LIST = [
  {
    id: 0,
    text: '프로필 수정',
    url: '/default',
  },
  {
    id: 1,
    text: '메일 / 알림톡 설정',
    url: '/default/mail',
  },
];

const USERS_LIST = [
  {
    id: 0,
    text: '회원 관리',
    url: '/users',
  },
  {
    id: 1,
    text: '탈퇴 회원 관리',
    url: '/users/drop',
  },
  {
    id: 2,
    text: '신고 / 차단 관리',
    url: '/users/report',
  },
];

const CONTENTS_LIST = [
  {
    id: 0,
    text: '배너 관리',
    url: '/contents',
  },
  {
    id: 1,
    text: '팝업 관리',
    url: '/contents/pop',
  },
  {
    id: 2,
    text: '1:1 문의 관리',
    url: '/contents/ask',
  },
  {
    id: 3,
    text: '댓글 관리',
    url: '/contents/comments',
  },
  {
    id: 4,
    text: '신고 / 차단 관리',
    url: '/contents/report',
  },
];

const Base = styled.div`
  width: 100%;
  height: 188px;
  background: #f8fafd;
  border-bottom: 1px solid #eff2f5;
  > section {
    width: 1280px;
    margin: 0 auto;
    padding: 38px 25px 0 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: 700;
    font-size: 26px;
    color: #000000;
    & .menu-wrapper {
      width: 100%;
      display: flex;
      gap: 32px;
      margin-top: 72px;
    }
  }
`;
