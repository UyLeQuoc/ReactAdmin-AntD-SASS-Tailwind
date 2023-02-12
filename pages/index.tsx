import { Button } from 'antd';
import DatePicker from 'antd/lib/date-picker';
import Empty from 'antd/lib/empty';
import * as React from 'react';
// import Player from '../components/Player';

function App() {
  return <>
  {/* <Player /> */}
  <div className='flex flex-row gap-5'>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button type='primary' className='bg-red-500 text-white flex-grow-[2]'>
      Tailwind CSS, SASS, Rematch
    </Button>
    <DatePicker />
    <Button type="dashed" size="large">
      Test Ant Design
    </Button>
    <Empty />
  </div>
  </>;
}

export default App;
