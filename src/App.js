import React, { useState, useEffect } from "react";
import ParentComponent from "./ParentComponent";

function App() {
  const [QQ, setQQ] = useState([]);
  const [AA, setAA] = useState(1);

  const handleClick = () => {
    // setQQ([{"policy_id":"5263a1c8-db3d-44c0-88cd-aa53e898f265","policy_name":"t1","policy_engine_id":"452894830859649047","groups":["anonymous"],"enabled":true,"create_time":1679475955,"update_time":1679475955,"created_by":"1749ddca-2ee0-42d6-9848-9b5c7d21e1a9","updated_by":"1749ddca-2ee0-42d6-9848-9b5c7d21e1a9","creator":"admin","updater":"admin","tags":[""]}]);
    QQ[0].enabled = !QQ[0].enabled;
    console.log(QQ);
    setQQ(QQ);
    console.log(QQ);

    // setAA(AA+1)
  };

  useEffect(() => {
    setQQ([
      {
        policy_id: "5263a1c8-db3d-44c0-88cd-aa53e898f265",
        policy_name: "t1",
        policy_engine_id: "452894830859649047",
        groups: ["anonymous"],
        enabled: true,
        create_time: 1679475955,
        update_time: 1679475955,
        created_by: "1749ddca-2ee0-42d6-9848-9b5c7d21e1a9",
        updated_by: "1749ddca-2ee0-42d6-9848-9b5c7d21e1a9",
        creator: "admin",
        updater: "admin",
        tags: [""],
      },
    ]);
  }, []);

  return (
    <div className="App">
      <button onClick={handleClick}>Toggle Check</button>
      <ParentComponent qq={QQ}/>
    </div>
  );
}

export default App;
