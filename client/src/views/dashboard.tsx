import React, { useEffect, useState } from 'react';
import BarChart from '../components/Chart/BarChart';
import { dataInterface } from '../interface/dataInterface';
import { socket } from '../utils/utils';


function Dashboard() {
  const [blue, setBlue] = useState(0)
  const [orange, setOrange] = useState(0)

  useEffect(() => {
    socket.on('returnInitData', () => {
      setBlue(0)
      setOrange(0)
    })
    socket.on('sendToClient', async(data : dataInterface) => {
      if (data.color === 'blue') {
        setBlue(data.count)
      } else {
        setOrange(data.count)
      }
    })
  })
 
  return (
    <div>
       <p>blue {blue}</p>
  <p>orange {orange}</p>
  <BarChart blue={blue} orange={orange} />
    </div>

  );
}

export default Dashboard;
