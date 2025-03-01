import React, {useState} from 'react'

const DATA = [
{id: 1, title: "Learn React", rating: 5, status: 50},
{id: 2, title: "Learn Vue", rating: 2, status: 80},
{id: 3, title: "Learn Solid", rating: 3, status: 20},
];

function List({data, renderItem}){
  return (
    <ul>
      {data.map(d => {
        if (renderItem) return renderItem(d);
        return (
          <li key={d.id}>{d.title} - {d.rating} </li>
        )
      })}
    </ul>
  )
}

export default function RenderPropsDemo() {
  const [data, setData] = useState(DATA);

  const renderList = (row) => {
    return (
      <div key={row.id}>
        <h2>{row.title}</h2>
        <p>{new Array(row.rating).fill("*").join("")}</p>
      </div>
    )
  }

  return (
    <div>
      <List data={data} renderItem ={(row)=> renderList(row)} />
    </div>
  )
}
