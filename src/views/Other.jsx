import TicTacToe from '../components/TicTacToe'
import Counter from '../components/Counter'

export default function Other() {
  return (
    <div className="view">
      <div className='view__header'>
        <h1>Other</h1>
      </div>
      
      <div className='view__content'>
        <TicTacToe />
        <Counter />
      </div>
    </div>
  );
}