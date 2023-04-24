import "./App.css";
import Movie from "./Movies";
import Header from "./Header";
// import { data } from "./movie";
import { data } from "./movie";

function App() {
  console.log("data", data);
  return (
    <div className="App">
      <Header />
      <div className="main">
        {data.map((element) => {
          {
            console.log("element", element);
          }
          return (
            <Movie
              title={element.Title}
              year={element.Year}
              img={element.Poster}
              imdbd={element.imdbID}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
