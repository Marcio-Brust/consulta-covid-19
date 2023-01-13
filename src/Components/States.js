import React from "react";
import { Link } from "react-router-dom";
import {
  Section,
  DivUf,
  P,
  DivPesquisa,
  Input,
  H1Pesquisa,
  Button,
  DivHome,
} from "../styles";

const States = () => {
  const [consultas, setConsultas] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [carregando, setCarregando] = React.useState(false);

  const searchParams = new URLSearchParams(document.location.search);
  const uf = estado === "" ? searchParams.get("uf") : estado.toUpperCase();

  function hanldeClick() {
    const input = document.querySelector("input");
    setEstado(input.value);
  }

  React.useEffect(() => {
    try {
      setCarregando(true);
      async function consulta(url) {
        const resposta = await fetch(url);
        const respostaJson = await resposta.json();
        setConsultas(respostaJson);
      }
      consulta(
        `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`
      );
    } catch (err) {
    } finally {
      setCarregando(false);
    }
  }, [uf]);

  const link = document.querySelector("link");
  link.setAttribute(
    "href",
    `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`
  );

  if (carregando) return <p>Carregando...</p>;
  if (consultas.state === undefined) {
    <p>Carregando...</p>;
  } else {
    document.title = consultas.state;
  }
  return (
    <Section className="animeLeft">
      <DivHome>
        {" "}
        <Link to="/" end>
          ✖️{" "}
        </Link>
      </DivHome>

      <H1Pesquisa>Pesquise o estado</H1Pesquisa>
      <DivPesquisa>
        <Input placeholder="UF=RJ" type="text" name="uf" maxLength="2" />
        <Button onClick={hanldeClick}>🔍</Button>
      </DivPesquisa>
      <DivUf>
        <img
          src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`}
          alt="foto"
        />
        <h1>{consultas.state}</h1>
        <div>
          <P>🚨 Casos: {consultas.cases}</P>
          <P>⚠️ Suspeitas: {consultas.suspects}</P>
          <P>💀 Mortes: {consultas.deaths}</P>
          <P>🔃 Última atualização: {consultas.datetime}</P>
        </div>
      </DivUf>
    </Section>
  );
};

export default States;
