import {
  Button,
  CheckBox,
  DatePicker,
  FilterItem,
  PageLayout,
  SearchBar,
  Select,
} from '@/ui';
import { Filter, Table, TableInfo } from '@/components';
import { styled } from 'styled-components';
import { useMemo, useState } from 'react';
import { useBodyScrollLock } from '@/utils/useBodyScrollLock';
import { Pagination } from '@mui/material';

const AskPage = () => {
  const [firstDate, setFirstDate] = useState('');
  const [secondDate, setSecondDate] = useState('');
  const [type, setType] = useState('전체');
  const [status, setStatus] = useState('전체');
  const [searchType, setSearchType] = useState('전체');
  const [keyword, setKeyword] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChangeFirstDate = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFirstDate(e.target.value);

  const onChangeSecondDate = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSecondDate(e.target.value);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let keyword = formData.get('keyword');
    setKeyword('');
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const items = useMemo(() => BODY_LIST.map(item => item.id), [BODY_LIST]);

  const handleAllCheck = (isChecked: boolean) => {
    isChecked ? setSelectedItems([...items]) : setSelectedItems([]);
  };

  const handleCheck = (isChecked: boolean, id: number) => {
    isChecked
      ? setSelectedItems([...selectedItems, id])
      : setSelectedItems(selectedItems.filter(el => el !== id));
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
      <h1>1:1 문의 관리</h1>
      <Base>
        <Filter>
          <FilterItem label="작성일">
            <DatePicker
              firstDate={firstDate}
              onChangeFirstDate={onChangeFirstDate}
              onChangeSecondDate={onChangeSecondDate}
            />
          </FilterItem>
          <FilterItem label="유형">
            <Select options={TYPE_OPTS} setSelectedValue={setType} />
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
            총 <span>20</span>건 / 작성일 {firstDate} ~ {secondDate}, 유형{' '}
            {type}, 상태 {status}, 검색 "{keyword}"
          </p>
        </TableInfo>
        <Table
          headList={HEAD_LIST}
          selectedItemsLength={selectedItems.length}
          handleAllCheck={handleAllCheck}
        >
          <tbody>
            {BODY_LIST.map(
              ({ id, title, type, nickname, createdAt, status }) => (
                <tr key={id}>
                  <td>
                    <CheckBox
                      value={id}
                      isChecked={!!selectedItems.includes(id)}
                      onChange={e => handleCheck(e.target.checked, id)}
                    />
                  </td>
                  <td>{title}</td>
                  <td>{type}</td>
                  <td>{nickname}</td>
                  <td>{createdAt}</td>
                  <td className={status === '완료' && 'blue-text'}>{status}</td>
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

export default AskPage;

const TYPE_OPTS = [
  { id: 0, option: '사이즈 문의' },
  { id: 1, option: '재고 문의' },
  { id: 2, option: '기타 문의' },
];

const STATUS_OPTS = [
  { id: 0, option: '문의 접수' },
  { id: 1, option: '확인중' },
  { id: 2, option: '완료' },
];

const SEARCH_OPTS = [
  { id: 0, option: '닉네임' },
  { id: 1, option: '계정' },
];

const HEAD_LIST = [
  { id: 0, head: '제목', sort: true },
  { id: 1, head: '유형', sort: true },
  { id: 2, head: '작성자', sort: true },
  { id: 3, head: '작성일', sort: true },
  { id: 4, head: '상태', sort: false },
  { id: 5, head: '더보기', sort: false },
];

const BODY_LIST = [
  {
    id: 0,
    title: 'Lorem ipsum dolor sit amet, consec',
    type: '사이즈 문의',
    nickname: 'crapulous_flatter_67',
    createdAt: '2023-00-00',
    status: '완료',
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consec',
    type: '사이즈 문의',
    nickname: 'crapulous_flatter_67',
    createdAt: '2023-00-00',
    status: '접수',
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
      padding-right: 30px;
      &:nth-child(1) {
        min-width: 100px;
        padding-left: 20px;
      }
      &:last-child {
        padding-right: -10px;
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
      padding-right: 30px;
      &.blue-text {
        color: #3861fb;
      }
      &:nth-child(1) {
        min-width: 100px;
        padding-left: 20px;
      }
      &:last-child {
        padding-right: -10px;
      }
    }
  }
`;
