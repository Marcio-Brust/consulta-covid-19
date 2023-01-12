import React from "react";
import { Section, Div, P } from "../styles";

const Covid_19 = () => {
  const [covid, setCovid] = React.useState([]);

  React.useEffect(() => {
    async function consulta(url) {
      const response = await fetch(url);
      const json = await response.json();
      setCovid(json.data);
      console.log(json);
    }
    consulta("https://covid19-brazil-api.now.sh/api/report/v1/");
  }, []);

  return (
    <Section>
      <div>
        <P>📍 Estado</P>
        {covid.map((json) => [
          <Div key={json.uf}>
            <img
              key={json.uf}
              src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${json.uf}.png`}
              alt="foto"
            />
            <P key={json.uid}>{json.uf}</P>
          </Div>,
        ])}
      </div>
      <div>
        <P>🚨 Casos</P>
        {covid.map((json) => (
          <P key={json.uid}>{json.cases}</P>
        ))}
      </div>
      <div>
        <P>💀 Mortes</P>
        {covid.map((json) => (
          <P key={json.uid}>{json.deaths}</P>
        ))}
      </div>
    </Section>
  );
};

export default Covid_19;
