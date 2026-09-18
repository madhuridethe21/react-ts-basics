import { useRef } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    //   const formData = new FormData(event.currentTarget);
    //   console.log(formData.get('goal'));

    //with refs
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div>
        <label className="text-yellow-100 block text-left" htmlFor="goal">
          Your Goal
        </label>
        <input
          name="goal"
          ref={goal}
          className="w-full border rounded-lg p-2"
          id="goal"
          type="text"
        />
      </div>
      <div>
        <label className="text-yellow-100 block text-left" htmlFor="summary">
          Short Summary
        </label>
        <input
          ref={summary}
          className="w-full border rounded-lg p-2"
          id="summary"
          type="text"
        />
      </div>
      <div>
        <button className="w-full rounded-lg bg-yellow-100 p-2 text-blac">
          Add Goal
        </button>
      </div>
    </form>
  );
}
