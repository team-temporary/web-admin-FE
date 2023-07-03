import { Dispatch, SetStateAction, useState } from 'react';
import { styled } from 'styled-components';

type Props = {
  setImageFile: Dispatch<SetStateAction<File>>;
};

const FileUploader = ({ setImageFile }: Props) => {
  const [file, setFile] = useState('선택된 파일 없음');

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.value);

    const file = e.target?.files[0];
    if (file && file.type.substring(0, 5) === 'image') {
      setImageFile(file);
    } else {
      setImageFile(null);
    }
  };

  return (
    <Base>
      <label htmlFor="file">파일 선택</label>
      <p>{file}</p>
      <input type="file" id="file" accept="image/*" onChange={onUpload} />
    </Base>
  );
};

export default FileUploader;

const Base = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  > label {
    padding: 10px 20px;
    background: #3861fb;
    font-weight: 500;
    font-size: 12px;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: #244de3;
      color: RGBA(255, 255, 255, 0.8);
      transition: 0.2s;
    }
    &:active {
      background: #1c42cd;
      color: RGBA(255, 255, 255, 0.8);
    }
  }
  > p {
    font-size: 12px;
    color: #a6b0c3;
  }
  > input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;
