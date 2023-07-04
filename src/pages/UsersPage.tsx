import {
  Button,
  CheckBox,
  DatePicker,
  FilterItem,
  PageLayout,
  SearchBar,
  Select,
} from '@/ui';
import { Filter, Table, TableInfo, UserModal } from '@/components';
import { useMemo, useState } from 'react';
import { styled } from 'styled-components';
import Pagination from '@mui/material/Pagination/Pagination';
import { useBodyScrollLock } from '@/utils/useBodyScrollLock';

const UsersPage = () => {
  const [firstDate, setFirstDate] = useState('');
  const [secondDate, setSecondDate] = useState('');
  const [level, setLevel] = useState('전체');
  const [block, setBlock] = useState('전체');
  const [searchType, setSearchType] = useState('전체');
  const [keyword, setKeyword] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let keyword = formData.get('keyword');
    setKeyword('');
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const onChangeFirstDate = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFirstDate(e.target.value);

  const onChangeSecondDate = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSecondDate(e.target.value);

  const users = useMemo(
    () => BODY_LIST.map(user => user.username),
    [BODY_LIST]
  );

  const handleAllCheck = (isChecked: boolean) => {
    isChecked ? setSelectedUsers([...users]) : setSelectedUsers([]);
  };

  const handleCheck = (isChecked: boolean, username: string) => {
    isChecked
      ? setSelectedUsers([...selectedUsers, username])
      : setSelectedUsers(selectedUsers.filter(el => el !== username));
  };

  const { lockScroll, openScroll } = useBodyScrollLock();

  const onModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
      openScroll();
    } else {
      setIsModalOpen(true);
      lockScroll();
    }
  };

  return (
    <PageLayout>
      {isModalOpen && (
        <UserModal
          username="username"
          nickname="nickname"
          name="김이름"
          closeModal={onModal}
        />
      )}
      <h1>회원 목록</h1>
      <Base>
        <Filter>
          <FilterItem label="가입일">
            <DatePicker
              firstDate={firstDate}
              onChangeFirstDate={onChangeFirstDate}
              onChangeSecondDate={onChangeSecondDate}
            />
          </FilterItem>
          <FilterItem label="등급">
            <Select options={LEVEL_OPTS} setSelectedValue={setLevel} />
          </FilterItem>
          <FilterItem label="차단 여부">
            <Select options={BLOCK_OPTS} setSelectedValue={setBlock} />
          </FilterItem>
          <FilterItem label="검색 기준">
            <Select options={SEARCH_OPTS} setSelectedValue={setSearchType} />
          </FilterItem>
          <FilterItem label="키워드 검색">
            <form onSubmit={onSubmit}>
              <SearchBar
                type="text"
                placeholder={`${searchType} 검색`}
                name="keyword"
                value={keyword}
                onChange={onSearch}
              />
              <Button type="submit" text="검색" types="primary" />
            </form>
          </FilterItem>
        </Filter>
        <TableInfo>
          <p>
            총 <span>20</span>명 / 가입일 {firstDate} ~ {secondDate}, 등급{' '}
            {level}, 차단 여부 {block}, 검색 "{keyword}"
          </p>
        </TableInfo>
        <Table
          headList={HEAD_LIST}
          selectedItemsLength={selectedUsers.length}
          handleAllCheck={handleAllCheck}
        >
          <tbody>
            {BODY_LIST.map(
              ({
                id,
                nickname,
                username,
                level,
                createdAt,
                count,
                blockDate,
              }) => (
                <tr key={id}>
                  <td>
                    <CheckBox
                      value={username}
                      isChecked={!!selectedUsers.includes(username)}
                      onChange={e => handleCheck(e.target.checked, username)}
                    />
                  </td>
                  <td>{nickname}</td>
                  <td>{username}</td>
                  <td>{level}</td>
                  <td>{createdAt}</td>
                  <td>{count}</td>
                  {blockDate ? (
                    <td className="red-text">
                      차단
                      <br />({blockDate})
                    </td>
                  ) : (
                    <td>-</td>
                  )}
                  <td>
                    <Button types={'secondary'} text="상세" onClick={onModal} />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
        <Pagination count={10} />
      </Base>
    </PageLayout>
  );
};

export default UsersPage;

const LEVEL_OPTS = [
  { id: 0, option: '일반' },
  { id: 1, option: '실버' },
  { id: 2, option: '골드' },
];

const BLOCK_OPTS = [
  { id: 0, option: '차단' },
  { id: 1, option: '허용' },
];

const SEARCH_OPTS = [
  { id: 0, option: '닉네임' },
  { id: 1, option: '계정' },
];

const HEAD_LIST = [
  { id: 0, head: '닉네임', sort: true },
  { id: 1, head: '계정', sort: true },
  { id: 2, head: '등급', sort: true },
  { id: 3, head: '가입일', sort: true },
  { id: 4, head: '글/댓글/문의/신고', sort: false },
  { id: 5, head: '차단 여부', sort: false },
  { id: 6, head: '상세보기', sort: false },
];

const BODY_LIST = [
  {
    id: 0,
    nickname: 'turbulent_statue_31',
    username: 'sara.kasongo@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '2023-01-01',
  },
  {
    id: 1,
    nickname: 'endemic_boy_84endemic_boy_84endemic_boy_84',
    username: 'akash.kaur@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 2,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur1@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 3,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur2@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 4,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur3@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 5,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur4@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 6,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur5@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 7,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur6@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 8,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur7@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 9,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur8@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 10,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur9@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 11,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur10@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 12,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur11@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 13,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur12@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 14,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur13@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 15,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur14@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 16,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur15@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 17,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur16@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 18,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur17@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
  {
    id: 19,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur18@gmail.com',
    level: '일반',
    createdAt: '2023-01-01',
    count: '0/0/0/0',
    blockDate: '',
  },
];

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  thead {
    height: 56px;
    background: #f8fafd;
    border-top: 1px solid #eff2f5;
    border-bottom: 1px solid #eff2f5;
    th {
      color: #58667e;
      font-size: 14px;
      font-weight: 500;
      text-align: left;
      &:nth-child(1) {
        min-width: 100px;
        padding-left: 20px;
      }
      &:nth-child(n + 2):nth-child(-n + 3) {
        min-width: 260px;
      }
      &:nth-child(n + 4):nth-child(-n + 5) {
        min-width: 110px;
      }
      &:nth-child(6) {
        min-width: 135px;
      }
      &:nth-child(7) {
        min-width: 85px;
        text-align: center;
      }
      &:nth-child(8) {
        min-width: 130px;
        padding-right: 20px;
        text-align: center;
      }
    }
  }
  tbody > tr {
    height: 56px;
    border-bottom: 1px solid #eff2f5;
    td {
      color: #222531;
      font-size: 14px;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
      &.red-text {
        color: #ff002e;
      }
      &:nth-child(1) {
        min-width: 100px;
        padding-left: 20px;
      }
      &:nth-child(n + 2):nth-child(-n + 3) {
        min-width: 260px;
        max-width: 260px;
        padding-right: 30px;
      }
      &:nth-child(n + 4):nth-child(-n + 5) {
        min-width: 110px;
      }
      &:nth-child(6) {
        min-width: 135px;
      }
      &:nth-child(7) {
        min-width: 85px;
        text-align: center;
      }
      &:nth-child(8) {
        min-width: 130px;
        height: 56px;
        padding-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
