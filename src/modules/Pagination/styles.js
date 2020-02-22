import styled from 'styled-components';

export const PaginationCmp = styled.ul`
  display: flex;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid black;
`;
export const PageItem = styled.li`
  padding: 5px;
  border: 1px solid black;
  margin: 3px;
  background-color: ${props => (props.active ? 'white' : 'red')};
`;
