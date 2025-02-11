import TicTacToe from '../components/TicTacToe'
import Counter from '../components/Counter'

export default function Other() {
  return (
    <div className="view">
      <h1>Other</h1>
      <div>
        <TicTacToe />
        <Counter />
      </div>
    </div>
  );
}