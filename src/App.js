import "./App.css";

import { loremIpsum } from "lorem-ipsum";
import { List } from "react-virtualized";

const rowCount = 1000000;
const listHeight = 600;
const rowHeight = 50;
const rowWidth = 700;

const list = Array(rowCount)
  .fill()
  .map((_, idx) => {
    return {
      id: idx,
      name: "Sai Ashish",
      image: "http://via.placeholder.com/40",
      text: loremIpsum({
        count: 1,
        units: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 8,
      }),
    };
  });

function renderRow({ index, key, style }) {
  return (
    <div key={key} style={style} className="row">
      <div className="image">
        <img src={list[index].image} alt="" />
      </div>
      <div className="content">
        <div>{list[index].name + " " + (+index + 1)}</div>
        <div>{list[index].text}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="list">
        <List
          width={rowWidth}
          height={listHeight}
          rowHeight={rowHeight}
          rowRenderer={renderRow}
          rowCount={list.length}
          overscanRowCount={3}
        />
      </div>
    </div>
  );
}

export default App;
