import styled from "styled-components";

export const Section = styled.section`
  width: 40rem;
  margin: 5rem auto;
  border-radius: 0.5rem;
  background: #202124;
  color: #fff;
  padding: 2rem;
  border: 2px solid transparent;
  font-family: monospace;

  &:hover {
    border: 2px solid rgb(79, 250, 123);
  }
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 2px solid #444;

  img {
    cursor: pointer;
    width: 30px;
  }
  div {
    display: grid;
    grid-template-columns: 50px 10px;
    align-items: center;
  }
`;

export const DivUf = styled(Div)`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  border-bottom: 2px solid transparent;
  text-align: center;
  img {
    margin: 20px auto;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const H2 = styled.h2`
  font-family: var(--type-second);
  text-align: start;
`;

export const P = styled.p`
  padding: 1rem 2rem;
  text-align: start;
  margin-right: 5px;

  &:hover {
    font-weight: 700;
  }
`;

export const DivPesquisa = styled.div`
  box-sizing: border-box;
  height: 10rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #444;
`;

export const H1Pesquisa = styled.h1`
  margin: 0 auto;
  font-family: var(--type-second);
  font-size: 2rem;
  text-align: center;
`;

export const Input = styled.input`
  margin: 0 auto;
  display: inline-block;
  width: 350px;
  height: 40px;
  text-transform: uppercase;
  background: #444;
  padding: 20px 30px;
  border: solid 2px transparent;
  color: #fff;
  ::placeholder {
    color: #fff;
  }
`;

export const Button = styled.button`
  height: 44px;
  width: 44px;
  background: #444;
  border: none;
  border-radius: 0.5rem;

  &:hover,
  &active {
    border: 2px solid rgb(79, 250, 123);
  }
`;

/* https://covid19-brazil-api.now.sh/api/report/v1/


https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp


https://covid19-brazil-api.now.sh/api/report/v1/brazil


https://covid19-brazil-api.now.sh/api/report/v1/countries 


https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/CE.png
*/
