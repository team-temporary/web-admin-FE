import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import {
  ContentsPage,
  MailPage,
  MainPage,
  ProfilePage,
  ReportPage,
  UsersPage,
} from '@/pages';
import { Header, MenuTab } from '@/components';
import { styled } from 'styled-components';

const Layout = () => {
  return (
    <>
      <Header />
      <MenuTab />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/default" element={<ProfilePage />} />
      <Route path="/default/mail" element={<MailPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/contents" element={<ContentsPage />} />
      <Route path="/stat" element={<ReportPage />} />
    </Route>
  )
);

export default Router;

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0 25px;
`;