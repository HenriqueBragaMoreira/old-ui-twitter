import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Timeline.css";

export function Timeline() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    "Meu dia está sendo bem alegre",
    "Gosto quando me elogiam",
    "Estar aprendendo a programar é incrivel",
  ]);

  function createNewTweet(e: FormEvent) {
    e.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/HenriqueBragaMoreira.png"
            alt="Henrique Braga"
          />
          <textarea
            id="tweet"
            placeholder="What's happening ?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(e) => {
              setNewTweet(e.target.value);
            }}
          />
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
