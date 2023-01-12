import styled from "styled-components";

export const Section = styled.section`
  width: 40rem;
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 0.5rem;
  background: #202124;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  color: #fff;
  padding: 2rem;
  border: 2px solid transparent;
  font-family: var(--type-second);

  &:hover {
    border: 2px solid rgb(79, 250, 123);
  }
`;
export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;

  img {
    margin-left: 20px;
    cursor: pointer;
  }
`;

export const P = styled.p`
  margin-bottom: 0.5rem;
  padding: 0.5rem 2rem;
  border-bottom: 2px solid #444;
  text-align: center;
  margin-right: 5px;
`;

/* https://covid19-brazil-api.now.sh/api/report/v1/


https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp


https://covid19-brazil-api.now.sh/api/report/v1/brazil


https://covid19-brazil-api.now.sh/api/report/v1/countries 


https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/CE.png
*/
