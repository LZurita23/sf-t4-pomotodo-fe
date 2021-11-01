import './App.css';
import Timer from './features/Timer/components/TimerComponent';
import Todo from './features/Todo/components/TodoComponent';

function App() {
  return (
    <div
      className="
        max-w-sm
        mx-auto
        rounded-xl
        overflow-hidden
        sm:max-w-2xl
        md:max-w-4xl
        md:mt-10
        font-serif
    "
    >
      <div className="sm:flex items-start">
        <div className="p-8 sm:w-full">
          <Timer />
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
