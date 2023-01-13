import React from "react";
import { Link } from "react-router-dom";
import { Section, Div, P, H2 } from "../styles";
import foto from "../assets/img/flag-of-brazil.jpg";

const Covid19 = () => {
  const [consultas, setConsultas] = React.useState([]);

  React.useEffect(() => {
    async function consulta(url) {
      const resposta = await fetch(url);
      const respostaJson = await resposta.json();
      setConsultas(respostaJson.data);
    }
    consulta("https://covid19-brazil-api.now.sh/api/report/v1/");
    document.title = "Consulta Covid-19";
    const link = document.querySelector("link");
    link.setAttribute("href", foto);
  }, [consultas.state]);

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

export default Covid19;
