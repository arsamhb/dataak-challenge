import { Quiz } from "./features/quiz/components/Quiz";
import { useState } from "react";
import ToggleBox from "./components/ToggleBox/ToggleBox";

function App() {
  const [whichChallenge, setWhichChallenge] = useState("easy");

  return (
    <main>
      <div>
        <button onClick={() => setWhichChallenge("easy")}>
          click to see first task
        </button>
        <button onClick={() => setWhichChallenge("hard")}>
          click to see second task
        </button>
      </div>
      {whichChallenge === "hard" && <Quiz />}
      {whichChallenge === "easy" && (
        <ToggleBox
          title="click to see loren ipsum"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti, omnis fugit ad quo numquam. Atque, expedita! Ea neque ullam vel? Fugiat eligendi, placeat illum deserunt sed perferendis distinctio cum."
        />
      )}
    </main>
  );
}

export default App;
