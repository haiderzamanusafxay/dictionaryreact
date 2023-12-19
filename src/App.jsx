import './index.css'
function App() {

  return (
    <>
    <header class="flex-column">
        <h1 class="title">English Dictionary</h1>
        <p class="description">written in JavaScript, consumes dictionaryapi.dev API</p>
    </header>

    <section class="input-container flex-row">
        <input type="text" name="query" placeholder="Search Dictionary" id="query" title="Search Dictionary" autofocus/>
        <button id="search" title="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
    </section>

    <section class="result-container flex-column">
        <section class="welcome-container flex-column">
            <i class="fa-solid fa-face-laugh-beam icon"></i>
            <h4 class="title">Welcome!</h4>
            <p class="description">Don't forget to star the repo on GitHub if you find it helpful.</p>
        </section>
    </section>

    <audio id="audio"></audio>

    <section class="source-code flex-row">
        <a href="http://github.com/thuhtoosan/dictionary-app" target="_blank" class="flex-row" title="Source Code">
            <i class="fa-brands fa-github-alt"></i>
        </a>
    </section>
    </>
  )
}

export default App
