import styled from "styled-components";

export const Container = styled.div`
  max-width: 350px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardsContainer = styled.div`
  height: 480px;
  background: #f8f8f8;
  border: none;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 20px 0;
  overflow-y: scroll;
`;

export const Title = styled.h2`
  color: purple;
  text-transform: uppercase;
  text-align: center;
`;
