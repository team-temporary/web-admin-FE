import {
  Button,
  CheckBox,
  Chip,
  DatePicker,
  FilterItem,
  PageLayout,
  SearchBar,
  Select,
} from '@/ui';
import { Filter, Table, TableInfo, UserDropModal } from '@/components';
import { useMemo, useState } from 'react';
import { styled } from 'styled-components';
import Pagination from '@mui/material/Pagination/Pagination';
import { useBodyScrollLock } from '@/utils/useBodyScrollLock';

const UsersDropPage = () => {
  const [dropStartDate, setDropStartDate] = useState('');
  const [dropLastDate, setDropLastDate] = useState('');
  const [deleteStartDate, setDeleteStartDate] = useState('');
  const [deleteLastDate, setDeleteLastDate] = useState('');
  const [level, setLevel] = useState('전체');
  const [searchType, setSearchType] = useState('전체');
  const [keyword, setKeyword] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChangeStartDate = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) =>
    type === 'drop'
      ? setDropStartDate(e.target.value)
      : setDeleteStartDate(e.target.value);

  const onChangeLastDate = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) =>
    type === 'drop'
      ? setDropLastDate(e.target.value)
      : setDeleteLastDate(e.target.value);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let keyword = formData.get('keyword');
    setKeyword('');
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

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
      {isModalOpen && <UserDropModal closeModal={onModal} />}
      <h1>탈퇴 회원 목록</h1>
      <Base>
        <Filter>
          <FilterItem label="탈퇴일">
            <DatePicker
              firstDate={dropStartDate}
              onChangeFirstDate={e => onChangeStartDate(e, 'drop')}
              onChangeSecondDate={e => onChangeLastDate(e, 'drop')}
            />
          </FilterItem>
          <FilterItem label="삭제 예정일">
            <DatePicker
              firstDate={deleteStartDate}
              onChangeFirstDate={e => onChangeStartDate(e, 'delete')}
              onChangeSecondDate={e => onChangeLastDate(e, 'delete')}
            />
          </FilterItem>
          <FilterItem label="등급">
            <Select options={LEVEL_OPTS} setSelectedValue={setLevel} />
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
            총 <span>20</span>명 / 탈퇴일 {dropStartDate} ~ {dropLastDate}, 삭제
            예정일 {deleteStartDate} ~ {deleteLastDate}, 등급 {level}, 검색 "
            {keyword}"
          </p>
        </TableInfo>
        <Table
          headList={HEAD_LIST}
          selectedItemsLength={selectedUsers.length}
          handleAllCheck={handleAllCheck}
        >
          <tbody>
            {BODY_LIST.map(
              ({ id, nickname, username, level, dropDate, deletedAt }) => (
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
                  <td>{dropDate}</td>
                  <td>
                    <Chip>{deletedAt}일 전</Chip>
                  </td>
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

export default UsersDropPage;

const LEVEL_OPTS = [
  { id: 0, option: '일반' },
  { id: 1, option: '실버' },
  { id: 2, option: '골드' },
];

const SEARCH_OPTS = [
  { id: 0, option: '닉네임' },
  { id: 1, option: '계정' },
];

const HEAD_LIST = [
  { id: 0, head: '닉네임', sort: true },
  { id: 1, head: '계정', sort: true },
  { id: 2, head: '등급', sort: true },
  { id: 3, head: '탈퇴일', sort: true },
  { id: 4, head: '삭제 예정', sort: true },
  { id: 5, head: '더보기', sort: false },
];

const BODY_LIST = [
  {
    id: 0,
    nickname: 'turbulent_statue_31',
    username: 'sara.kasongo@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 1,
    nickname: 'endemic_boy_84endemic_boy_84endemic_boy_84',
    username: 'akash.kaur@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    count: '0/0/0/0',
    deletedAt: '1',
  },
  {
    id: 2,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur1@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 3,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur2@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 4,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur3@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 5,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur4@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 6,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur5@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',

    deletedAt: '1',
  },
  {
    id: 7,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur6@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 8,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur7@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    count: '0/0/0/0',
    deletedAt: '1',
  },
  {
    id: 9,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur8@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    count: '0/0/0/0',
    deletedAt: '1',
  },
  {
    id: 10,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur9@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 11,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur10@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 12,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur11@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 13,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur12@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 14,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur13@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 15,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur14@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 16,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur15@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 17,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur16@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 18,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur17@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
  {
    id: 19,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur18@gmail.com',
    level: '일반',
    dropDate: '2023-01-01',
    deletedAt: '1',
  },
];

const Base = styled.div`
  width: 1230px;
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
        min-width: 120px;
      }
      &:nth-child(6) {
        min-width: 115px;
      }
      &:nth-child(7) {
        min-width: 85px;
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
        min-width: 120px;
      }
      &:nth-child(6) {
        width: 115px;
        min-width: 115px;
      }
      &:nth-child(7) {
        width: 85px;
        min-width: 85px;
        height: 56px;
        padding-right: 20px;
        > button {
          margin: 0 auto;
        }
      }
    }
  }
`;
