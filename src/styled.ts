import styled from "styled-components";

export const Main = styled("main")`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  min-height: 400px;
  margin: 0px auto;
`;

export const Row = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled("button")`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 22px;
  width: 200px;
  height: 50px;
  margin: 20px auto;
  background-color: gray;
  color: white;
`;
