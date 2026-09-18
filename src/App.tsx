import CourseGoalList from "./components/CourseGoaList";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    const newGoal: CourseGoal = {
      title: goal,
      description: summary,
      id: Math.random(),
    };
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  function handleDelete(id: number) {
    setGoals(goals.filter((goal)=> goal.id !== id));
  }
  return (
    <div className="bg-gray-900 p-5 mx-auto w-full max-w-lg rounded-xl border p-6 shadow-sm">
      <Header image={{ src: goalsImg, alt: "a list of goals" }}>
        <h1 className="text-[24px] text-yellow-100"> Your course goals</h1>
      </Header>
      {/* <button
        className="p-2 rounded-md items-center bg-indigo-500 hover:bg-fuchsia-500 text-white"
        onClick={handleAddGoal}
      >
        Add Goal
      </button> */}
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDelete}/>
    </div>
  );
}

export default App;
