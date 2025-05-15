import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import HelpfulResource from "./components/HelpfulResource.jsx";
import AboutMe from "./components/AboutMe.jsx";


function App() {
  function OpenLink() {

  }
  return <div className="app">
    <Header />
    <Section title="What is react?">
      <p>React is a JavaScript library that has become very popular for building web apps for user interfaces. It's also used for it's reusable componenets that are able to manage their own state.</p>
    </Section>
    <Section title="Benefits of react">
      <ul>
        <li>Component-Based Architecture</li>
        <li>Virtual DOM</li>
        <li>Declarative Syntax</li>
        <li>SEO Friendly</li>
        <li>Easy to Learn</li>
      </ul>
    </Section>
    <Section title="Helpful Resources">
      <HelpfulResource link="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started" label="MDN Web Docs" />
      <HelpfulResource link="https://react.dev/learn" label="React.dev" />
      <HelpfulResource link="https://atlas-jswank.github.io/blog/react-state/" label="React State: useState" />
    </Section>
    <AboutMe />
  </div> 
}

export default App;
