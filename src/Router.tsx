import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import {
  MailPage,
  MainPage,
  ProfilePage,
  UsersReportPage,
  UsersDropPage,
  UsersPage,
  BannerPage,
  PopUpPage,
  AskPage,
  CommentsPage,
  ContentsReportPage,
} from '@/pages';
import { Header, Login, MenuTab } from '@/components';
import { styled } from 'styled-components';

const Layout = () => {
  const isAuth = true;

  return (
    <>
      <Header isAuth={isAuth} />
      {isAuth ? (
        <>
          <MenuTab />
          <Container>
            <Outlet />
          </Container>
        </>
      ) : (
        <Login />
      )}
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
      <Route path="/users/drop" element={<UsersDropPage />} />
      <Route path="/users/report" element={<UsersReportPage />} />
      <Route path="/contents" element={<BannerPage />} />
      <Route path="/contents/pop" element={<PopUpPage />} />
      <Route path="/contents/ask" element={<AskPage />} />
      <Route path="/contents/comments" element={<CommentsPage />} />
      <Route path="/contents/report" element={<ContentsReportPage />} />
    </Route>
  )
);

export default Router;

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0 25px;
`;
