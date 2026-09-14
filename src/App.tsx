import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    const newGoal: CourseGoal = {
      title: "React Course",
      description: "Complete the typescript React Course",
      id: Math.random(),
    };
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }
  return (
    <div className="bg-gray-900 p-5">
      <Header image={{ src: goalsImg, alt: "a list of goals" }}>
        <h1 className="text-gray-200"> Your course goals</h1>
      </Header>
      <button
        className="p-2 rounded-md items-center bg-indigo-500 hover:bg-fuchsia-500 text-white"
        onClick={handleAddGoal}
      >
        Add Goal
      </button>
      <div className="grid grid-cols-2 gap-4">
        {goals.map((goals) => (
          // <li className="list-none" key={goals.id}>
            <CourseGoal key={goals.id} title={goals.title}>
              <span>{goals.description}</span>
            </CourseGoal>
          // </li>
        ))}
      </div>
    </div>
  );
}

export default App;
