import React, { Fragment } from 'react';
import './App.css';

class App extends React.Component {
  state = {
    activebox: null,
    counter: 0,
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selected: 0,
  };

  render() {
    const { items, activebox, selected } = this.state;
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {items.map((element, i) => {
            if ((i + 1) % 5 === 0) {
              return (
                <Fragment>
                  <div
                    style={{
                      width: "19vw",
                      height: "20vw",
                      border: "1px solid #000000",
                      boxSizing: "border-box"
                    }}
                    onClick={() =>
                      this.setState({ 
                        activebox: Math.ceil((i + 1) / 5) * 5,
                        selected: element
                      })
                    }
                  >
                    { element }
                  </div>
                  {activebox === i + 1 && (
                    <div
                      style={{
                        width: "96%",
                        height: "20vw",
                        border: "1px solid #000000",
                        boxSizing: "border-box"
                      }}
                    >
                      { selected }
                      <input
                        style={{
                          border: "1px solid #000000"
                        }}
                      />
                    </div>
                  )}
                </Fragment>
              );
            } else {
              return (
                <div
                  style={{
                    width: "19vw",
                    height: "20vw",
                    border: "1px solid #000000",
                    boxSizing: "border-box"
                  }}
                  onClick={() =>
                    this.setState({ 
                      activebox: Math.ceil((i + 1) / 5) * 5,
                      selected: element
                    })
                  }
                >
                  {element}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default App;
