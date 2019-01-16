import styled from 'styled-components';

export const Container = styled.div`
  padding: 1em;
  flex: 1 0 40%; /* needed to be less than 50% because of padding */
  align-content: center;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #ddd;
  :nth-last-of-type(-n + 2) {
    border-bottom-width: 0;
  }
`;
