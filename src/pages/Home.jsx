import React, { useState } from 'react' ;

const Home = () => {
  const [inputvalue, setInputvalue] = useState('');
  const [list, setList] = useState([]);

  const addlist = (e) =>{
    e.preventDefault();
    setList([...list, inputvalue]);
    setInputvalue('');
  }

  const removeitem = (deleteitem) =>{
    const newitem = list.filter((items) => items !== deleteitem);
    setList(newitem);
  }

  return (
    <div>
      <input type="text" value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} Placeholder="add value" />
      <button onClick={addlist}>add</button>
      {list.map((item, i) => (
        <div key={i}>
          <li>{item}</li>
          <button onClick={() => removeitem(item)}>x</button>
        </div>
      ))}
    </div>
  )
}

export default Home
