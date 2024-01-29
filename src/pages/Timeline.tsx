import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Timeline.css";

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

      <Tweet />
      <Tweet />
    </main>
  );
}
