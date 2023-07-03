import { Menu } from '@/ui';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from '/logo.svg';

const Header = () => {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  const [selectedValue, setSelectedValue] = useState('');

  const onSelect = (text: string) => setSelectedValue(text);

  useEffect(() => {
    const menu = HEADER_LIST.find(({ text }) => text === selectedValue);
    if (menu) navigate(menu.url);
  }, [selectedValue, navigate]);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setSelectedValue('홈(대시보드)');
        break;
      case '/default':
        setSelectedValue('기본 설정');
        break;
      case '/users':
        setSelectedValue('회원');
        break;
      case '/contents':
        setSelectedValue('컨텐츠');
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <Base>
      <section>
        <button onClick={() => navigate('/')}>
          <img src={logo} alt="로고" />
        </button>
        <div className="menu-wrapper">
          {HEADER_LIST.map(({ id, text }) => (
            <Menu
              key={id}
              text={text}
              isHeader
              isSelected={text === selectedValue}
              onClick={() => onSelect(text)}
            />
          ))}
        </div>
        <button className="button-logout">로그아웃</button>
      </section>
    </Base>
  );
};

export default Header;

const HEADER_LIST = [
  {
    id: 0,
    text: '홈(대시보드)',
    url: '/',
  },
  {
    id: 1,
    text: '기본 설정',
    url: '/default',
  },
  {
    id: 2,
    text: '회원',
    url: '/users',
  },
  {
    id: 3,
    text: '컨텐츠',
    url: '/contents',
  },
  {
    id: 4,
    text: '통계',
    url: '/stat',
  },
];

const Base = styled.div`
  width: 100%;
  height: 105px;
  border-bottom: 1px solid #eff2f5;
  > section {
    width: 1280px;
    height: 105px;
    margin: 0 auto;
    padding: 50px 25px 0 25px;
    display: flex;
    align-items: center;
    gap: 160px;
  }
  > img {
    width: 55px;
    height: 36px;
  }
  & .menu-wrapper {
    display: flex;
    gap: 45px;
  }
  & .button-logout {
    margin-left: 310px;
  }
`;
