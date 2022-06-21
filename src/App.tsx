import { useState } from "react";
import { Button } from "tdesign-react";
import {invoke} from '@tauri-apps/api/tauri'

function App() {
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    const resp = await invoke('handler_event1',{hello: 'world'});
    console.log(resp)
  }

  return (
    <div className="App">
      <Button
        onClick={handleClick}
      >
        测试
      </Button>
    </div>
  );
}

export default App;
