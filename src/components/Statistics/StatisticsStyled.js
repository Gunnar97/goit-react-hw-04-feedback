import styled from 'styled-components';
export const StatiList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0 10%;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

export const StaticItem = styled.li`
  text-align: center;
  margin: 18px 0;
  padding: 7.9px 25px;
  transition: all 0.3s;
  background: linear-gradient(to left, #c7d1e0 0%, #eff2f5, #a3a7b5);
  border: 2.5px solid #f1e6e6;
  color: #3b545f;
  transform-style: preserve-3d;
  box-shadow: 0px 0px 6px -1px #1b1919 inset;
`;

export const StaticTitle = styled.span`
  margin: 1em 0 0.5em 0;
  color: #343434;
  font-weight: normal;
  font-family: 'Ultra', sans-serif;
  font-size: 24px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px white, 0 3px #777;
`;
