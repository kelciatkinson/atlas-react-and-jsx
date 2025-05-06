import day from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg";


function Greeting() {
  const hour = new Date().getHours();
  let time = 'night';
  let message = '';

  if (hour >= 5 && hour < 12) {
    time = 'morning';
  }
  else if (hour >= 12 && hour < 17) {
    time = 'afternoon';
  }
  else if (hour >= 17 && hour < 21) {
    time = 'evening';
  }
  switch (time) {
    case 'morning':
      message = <h1 className="greeting">
        <img src={day} alt="day" />
        <p>Good Morning!</p>
      </h1>;
      break;
    case 'afternoon':
      message = <h1 className="greeting">
        <img src={day} alt="day" />
        <p>Good Afternoon!</p>
      </h1>;
      break;
    case 'evening':
      message = <h1 className="greeting">
        <img src={evening} alt="evening" />
        <p>Good Evening!</p>
      </h1>;
      break;
    default:
      message = <h1 className="greeting">
        <img src={night} alt="night" />
        <p>Good Night!</p>
      </h1>;
  }

  return <div>{message}</div>
}

export default Greeting;