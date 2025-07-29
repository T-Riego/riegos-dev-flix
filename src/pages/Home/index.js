import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; // Importando para usar o Link, se necessário
import api from '../../services/api';
import './home.css'; // Importando o CSS para estilização


function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento, ele é um valor boleano que indica se os filmes estão sendo carregados ou não.

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('/movie/popular', { // serve para buscar informações, o await serve para esperar a função carregar
        params: {
          api_key: 'fc880fc9d83d54f4b9123c6dd3ec7ee6',
          language: 'pt-BR',
          page: 1,
        }
      });
      // console.log(response.data.results.slice(0,10)); // Exibe os primeiros 10 filmes no console
      setFilmes(response.data.results.slice(0, 10)); // Atualiza o estado com os primeiros 10 filmes. Ele serve para evitar que a Listagem fique muito longa. o Slice(0, 10) limita a lista a 10 filmes.
      setLoading(false); // Define o estado de carregamento como falso após os filmes serem carregado
    }
    loadFilmes();
  }, []);

 if(loading) { 
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }


  return (
    <div className="lista-filmes">
      <h1>Filmes Populares</h1>
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;