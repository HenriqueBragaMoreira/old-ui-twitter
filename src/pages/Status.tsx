import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";

const answer = ["Concordo", "Parabéns pelo progresso", "Muito legal mesmo"];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae accusantium a! Quisquam facere eum non, consectetur similique beatae pariatur doloremque facilis illum, aut deleniti quas! Magnam natus laudantium iure!" />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/HenriqueBragaMoreira.png"
            alt="Henrique Braga"
          />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>
        <button type="submit">Answer</button>
      </form>

      {answer.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
}
