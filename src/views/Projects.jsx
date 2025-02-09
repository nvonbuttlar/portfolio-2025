import TicTacToe from '../components/TicTacToe'
import Counter from '../components/Counter'

export default function Fun() {
  return (
    <div className="view">
      <h1>Projects</h1>
      <div>
        <TicTacToe />
        <Counter />
      </div>
    </div>
  );
}