import styled from 'styled-components';

export const HomeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const HomeItem = styled.li`
  width: calc((100% - 96px) / 5);
  height: auto;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;

export const HomeTitlePage = styled.h1`
  margin-left: 40px;
  margin-bottom: 20px;
`;

export const HomeTitle = styled.div`
  color: #2e859e;
  font-weight: bold;
  line-height: 16px;
  font-size: 16px;
  padding: 10px;
  text-align: center;
`;
