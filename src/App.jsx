import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";


function App() {
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
  </div>
  
}


export default App;
