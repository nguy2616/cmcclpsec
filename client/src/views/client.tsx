import { useEffect, useState } from "react";
import { dataInterface } from "../interface/dataInterface";
import { socket } from "../utils/utils";

// initial data at start of the page
const initialBlue: dataInterface = {
  color: 'blue',
  count: 0
}

const initialOrange: dataInterface = {
  color: 'orange',
  count: 0
}
function Client() {

  const [blue, setBlue] = useState(initialBlue);
  const [orange, setOrange] = useState(initialOrange);


  function handleClick(clickButton: dataInterface) {
    console.log(clickButton)
    socket.emit('handleClick', clickButton)
    clickButton.count += 1
    if (clickButton.color === 'blue') {
      setBlue(clickButton);
    } else {
      setOrange(clickButton);
    }

  }
  // tell server to reset data to zero
  useEffect(() => {
    socket.emit('initData')
  }, [])

  return (
    <div style={{   display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}>
      <button style={{
   
      backgroundColor: 'skyblue',
      width: '100px' }} onClick={() => handleClick(blue)}>BLUE</button>
      <button style={{
      backgroundColor: 'orange',
      width: '100px'
       }} onClick={() => handleClick(orange)}>ORANGE</button>
    </div>

  );
}

export default Client;
