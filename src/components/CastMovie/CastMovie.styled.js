import styled from 'styled-components';

export const CastPhoto = styled.li`
  width: calc((100% - 96px) / 5);
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastCharacter = styled.span`
  text-align: center;
  padding: 10px;
  color: black;
`;

export const CastTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: #2e859e;
  font-weight: bold;
  line-height: 16px;
  font-size: 16px;
  padding: 10px;
  text-align: center;
`;

export const CastPhotoBox = styled.div`
  min-height: 414px;
`;
