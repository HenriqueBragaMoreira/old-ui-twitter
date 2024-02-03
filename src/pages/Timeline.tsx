import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Timeline.css";

const tweets = [
  "Meu dia está sendo bem alegre",
  "Gosto quando me elogiam",
  "Estar aprendendo a programar é incrivel",
];

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/HenriqueBragaMoreira.png"
            alt="Henrique Braga"
          />
          <textarea id="tweet" placeholder="What's happening ?" />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  );
}
