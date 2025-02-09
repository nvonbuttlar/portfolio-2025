import TicTacToe from '../components/TicTacToe'
import Counter from '../components/Counter'

export default function Fun() {
  return (
    <div className="view">
      <h1>Fun</h1>
      <div>
        <TicTacToe />
        <Counter />
      </div>
    </div>
  );
}