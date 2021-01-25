import React from "react";

import "./index.css";

import birthdays from "./components/birthdays";
function App() {
  const IMG_LENGTH = 100;
  const IMG_HEIGTH = 100;
  return (
    <div className="cards">
      <h1 style={{ alignContent: "center" }}>
        {birthdays.length} birthdays today
      </h1>
      <h3>
        {birthdays.map((person) => {
          return (
            <div className="card">
              <table>
                <tr>
                  <td>
                    <img
                      src={person.img}
                      alt=""
                      height={IMG_HEIGTH}
                      width={IMG_LENGTH}
                    />
                  </td>
                  <td>
                    <h3>{person.name}</h3>
                    <h5>{person.age}</h5>
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
      </h3>
    </div>
  );
}

export default App;
