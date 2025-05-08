export default function Section(props) {
  return (
    <section className="section">
      <h1>{props.title}</h1>
      {props.children}
    </section>
  )
}
