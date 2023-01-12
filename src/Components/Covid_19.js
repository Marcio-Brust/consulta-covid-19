import React from "react";
import { Link } from "react-router-dom";
import { Section, Div, P, H2 } from "../styles";

const Covid_19 = () => {
  const [consultas, setConsultas] = React.useState([]);

  React.useEffect(() => {
    async function consulta(url) {
      const resposta = await fetch(url);
      const respostaJson = await resposta.json();
      setConsultas(respostaJson.data);
    }
    consulta("https://covid19-brazil-api.now.sh/api/report/v1/");
  }, []);

  return (
    <Section className="animeLeft">
      <Div>
        <H2>📍 Estado</H2>
        <H2>🚨 Casos</H2>
        <H2>💀 Mortes</H2>
      </Div>
      {consultas.map((json) => (
        <Div key={json.uf}>
          <div>
            <Link to={`/estado?uf=${json.uf}`}>
              <img
                id={json.uf}
                src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${json.uf}.png`}
                alt="foto"
              />
            </Link>
            <P>{json.uf}</P>
          </div>
          <P>{json.cases}</P>
          <P>{json.deaths}</P>
        </Div>
      ))}
    </Section>
  );
};

export default Covid_19;
