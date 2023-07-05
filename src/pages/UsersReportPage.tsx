import {
  Button,
  CheckBox,
  DatePicker,
  FilterItem,
  PageLayout,
  SearchBar,
  Select,
} from '@/ui';
import { Filter, Table, TableInfo, UserReportModal } from '@/components';
import { useMemo, useState } from 'react';
import { useBodyScrollLock } from '@/utils/useBodyScrollLock';
import { Pagination } from '@mui/material';
import { styled } from 'styled-components';

const UsersReportPage = () => {
  const [reportStartDate, setReportStartDate] = useState('');
  const [reportLastDate, setReportLastDate] = useState('');
  const [dropStartDate, setDropStartDate] = useState('');
  const [dropLastDate, setDropLastDate] = useState('');
  const [status, setStatus] = useState('전체');
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
      : setReportStartDate(e.target.value);

  const onChangeLastDate = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) =>
    type === 'drop'
      ? setDropLastDate(e.target.value)
      : setReportLastDate(e.target.value);

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
      {isModalOpen && <UserReportModal closeModal={onModal} />}
      <h1>신고 / 차단 관리</h1>
      <Base>
        <Filter>
          <FilterItem label="신고일">
            <DatePicker
              firstDate={dropStartDate}
              onChangeFirstDate={e => onChangeStartDate(e, 'report')}
              onChangeSecondDate={e => onChangeLastDate(e, 'report')}
            />
          </FilterItem>
          <FilterItem label="차단일">
            <DatePicker
              firstDate={dropStartDate}
              onChangeFirstDate={e => onChangeStartDate(e, 'drop')}
              onChangeSecondDate={e => onChangeLastDate(e, 'drop')}
            />
          </FilterItem>
          <FilterItem label="상태">
            <Select options={STATUS_OPTS} setSelectedValue={setStatus} />
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
            총 <span>20</span>명 / 신고일 {reportStartDate} ~ {reportLastDate},
            차단일 {dropStartDate} ~ {dropLastDate}, 상태 {status}, 검색 "
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
              ({
                id,
                username,
                nickname,
                level,
                reportCount,
                lastReportDate,
                status,
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
                  <td>{reportCount}</td>
                  <td>{lastReportDate}</td>
                  <td className={blockDate && 'red-text'}>
                    {status}
                    <br />
                    {blockDate && `(${blockDate})`}
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

export default UsersReportPage;

const STATUS_OPTS = [
  { id: 0, option: '신고 접수' },
  { id: 1, option: '확인중' },
  { id: 2, option: '완료' },
  { id: 3, option: '차단' },
];

const SEARCH_OPTS = [
  { id: 0, option: '닉네임' },
  { id: 1, option: '계정' },
];

const HEAD_LIST = [
  { id: 0, head: '닉네임', sort: true },
  { id: 1, head: '계정', sort: true },
  { id: 2, head: '등급', sort: true },
  { id: 3, head: '누적 신고 수', sort: true },
  { id: 4, head: '마지막 신고일', sort: true },
  { id: 5, head: '상태', sort: false },
  { id: 6, head: '더보기', sort: false },
];

const BODY_LIST = [
  {
    id: 0,
    nickname: 'turbulent_statue_31',
    username: 'sara.kasongo@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 1,
    nickname: 'endemic_boy_84endemic_boy_84endemic_boy_84',
    username: 'akash.kaur@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 2,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur1@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '차단',
    blockDate: '2023-01-01',
  },
  {
    id: 3,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur2@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '확인중',
    blockDate: '',
  },
  {
    id: 4,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur3@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '완료',
    blockDate: '',
  },
  {
    id: 5,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur4@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 6,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur5@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 7,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur6@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 8,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur7@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 9,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur8@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 10,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur9@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 11,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur10@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 12,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur11@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 13,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur12@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 14,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur13@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 15,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur14@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 16,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur15@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 17,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur16@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 18,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur17@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
  },
  {
    id: 19,
    nickname: 'endemic_boy_84',
    username: 'akash.kaur18@gmail.com',
    level: '일반',
    reportCount: 1,
    lastReportDate: '2023-01-01',
    status: '신고 접수',
    blockDate: '',
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
      &:nth-child(4) {
        min-width: 100px;
      }
      &:nth-child(n + 5):nth-child(-n + 6) {
        min-width: 140px;
      }
      &:nth-child(7) {
        min-width: 140px;
        text-align: center;
      }
      &:nth-child(8) {
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
      &:nth-child(4) {
        min-width: 100px;
      }
      &:nth-child(n + 5):nth-child(-n + 6) {
        min-width: 140px;
      }
      &:nth-child(7) {
        min-width: 140px;
        text-align: center;
      }
      &:nth-child(8) {
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
