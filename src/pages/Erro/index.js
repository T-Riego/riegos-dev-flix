import { Link } from 'react-router-dom';
import './erro.css'; // Importando o CSS para estilização

function Erro(){
  return (
    <div className="not-found">
      <h1>Erro 404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
}
export default Erro;