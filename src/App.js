import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import "./App.css";

function App() {
  const [multiColumnList, setMultiColumnList] = useState([
    {
      id: 1,
      name: "shrek",
      imageUrl:
        "https://cdn.britannica.com/51/93451-050-4C57C2D5/Shrek-sidekick-Donkey.jpg",
    },
    {
      id: 2,
      name: "fiona",
      imageUrl:
        "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Princess-Fiona.Shrek.webp",
    },
    {
      id: 3,
      name: "fiona",
      imageUrl:
        "https://i.pinimg.com/736x/70/be/82/70be8281804f30054e1c6ca111beb634.jpg",
    },
    {
      id: 4,
      name: "fiona",
      imageUrl:
        "https://s1.r29static.com/bin/entry/259/430x516,85/1579799/image.webp",
    },
  ]);

  const [oneColumnList, setOneColumnList] = useState([
    {
      id: 1,
      name: "shrek",
      imageUrl:
        "https://cdn.britannica.com/51/93451-050-4C57C2D5/Shrek-sidekick-Donkey.jpg",
    },
    {
      id: 2,
      name: "fiona",
      imageUrl:
        "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Princess-Fiona.Shrek.webp",
    },
    {
      id: 3,
      name: "fiona",
      imageUrl:
        "https://i.pinimg.com/736x/70/be/82/70be8281804f30054e1c6ca111beb634.jpg",
    },
    {
      id: 4,
      name: "fiona",
      imageUrl:
        "https://s1.r29static.com/bin/entry/259/430x516,85/1579799/image.webp",
    },
  ]);
  return (
    <div className="App">
      <ReactSortable list={multiColumnList} setList={setMultiColumnList} className="imagesWrapper">
        {multiColumnList.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} className="image" width="100" height="100" alt={item.name} />
          </div>
        ))}
      </ReactSortable>

      <ReactSortable list={oneColumnList} setList={setOneColumnList}>
        {oneColumnList.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} className="image" width="100" height="100" alt={item.name} />
          </div>
        ))}
      </ReactSortable>
    </div>
  );
}

export default App;
