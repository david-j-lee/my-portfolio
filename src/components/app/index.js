import { h } from "preact";
import { Router } from "preact-router";
import Match, { Link } from "preact-router/match";

import Year2022 from "../../routes/2022";
import Year2018 from "../../routes/2018";
import style from "./style.scss";

const App = () => {
  document.title = "David Lee - Software Development";

  return (
    <div id="app" class={style.app}>
      <Match path="/">
        {({ matches }) =>
          !matches && (
            <div class={style.highlight}>
              There is a new portfolio out, click <a href="/">here</a> to see
              it!
            </div>
          )
        }
      </Match>
      <div class={style["app-content"]}>
        <Router>
          <Year2022 path="/" />
          <Year2018 path="/2018/:area?/:id?" />
        </Router>
      </div>
      <div class={style.footer}>
        <div>
          Archived portfolios: <Link href="/2018">2018</Link>
        </div>
      </div>
    </div>
  );
};

export default App;
