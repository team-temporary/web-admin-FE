import {
  Button,
  DatePicker,
  FilterItem,
  PageLayout,
  SearchBar,
  Select,
} from '@/ui';
import { Filter, TableInfo } from '@components/index';
import { useState } from 'react';

const UsersPage = () => {
  const [firstDate, setFirstDate] = useState('');
  const [secondDate, setSecondDate] = useState('');
  const [level, setLevel] = useState('전체');
  const [block, setBlock] = useState('전체');
  const [keyword, setKeyword] = useState('');

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

  return (
    <PageLayout>
      <h1>회원 목록</h1>
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
        <FilterItem label="키워드 검색">
          <form onSubmit={onSubmit}>
            <SearchBar
              type="text"
              placeholder="닉네임 또는 계정 검색"
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
          총 <span>20</span>명 / 가입일 {firstDate} ~ {secondDate}, 등급 {level}
          , 차단 여부 {block}, 검색 "{keyword}"
        </p>
      </TableInfo>
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
