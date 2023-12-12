import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 60px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  padding: 20px;
`;

export const CoBack = styled.h3`
  text-align: center;
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const OverwiewText = styled.p`
  font-size: 16px;
  color: #444;
  line-height: 22px;
`;

export const ScoreSpan = styled.span`
  color: #2e859e;
  font-weight: bold;
`;

export const GenresText = styled.p`
  background-color: #5f5f5f;
  color: #fff;
`;

export const GenresBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const LinkBox = styled.ul`
  display: flex;
  gap: 100px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

export const StyledLinkMovie = styled(NavLink)`
  color: #5f5f5f;

  font-size: 25px;
  line-height: 22px;
  font-weight: bold;

  &.active {
    color: orange;
  }
`;
