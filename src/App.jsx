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
      <p>React</p>
    </Section>
    <Section title="Benefits of react">
      <ul>
        <li>1st unordered list item</li>
        <li>2nd unordered list item</li>
        <li>3rd unordered list item</li>
        <li>4th unordered list item</li>
        <li>5th unordered list item</li>
      </ul>
    </Section>
    <Section title="Helpful Resources">
      <HelpfulResource link="https://google.com" label="1st" />
      <HelpfulResource link="https://google.com" label="2nd" />
      <HelpfulResource link="https://google.com" label="3rd" />
    </Section>
    <AboutMe />
  </div> 
}

export default App;
