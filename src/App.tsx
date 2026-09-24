import CourseGoalList from "./components/CourseGoaList";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useRef, useState } from "react";
import NewGoal from "./components/NewGoal";
import Form from "./components/Form";
import Input from "./components/Input";
import Button from "./components/Button";
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

type FormHandle ={
  clear: ()=> void;
}
function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const formRef = useRef<FormHandle>(null); // FormHandle is Ref type 
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

  function handleSave(data: unknown){
    const extractedData = data as {name: string; age: number};
    console.log(extractedData);
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
      <Form ref={formRef} onSave={handleSave}>
        <Input name='name' type='text' label='Name' id='name'/>
        <Input name= 'age' type='number' label='age' id='age'/>
        <p>
          <Button variant='button' onClick={()=>{}}>Save</Button>
        </p>
      </Form>
    </div>
  );
}

export default App;
