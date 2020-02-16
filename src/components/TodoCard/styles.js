import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 300px;
  margin: 10px auto;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 3px 2px 5px -1px rgba(0, 0, 0, 0.58);
  padding: 10px;
`;

export const Title = styled.h2`
  opacity: 0.8;
  text-transform: uppercase;
`;

export const Content = styled.p``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
