import { useState } from 'react'

import Notice from './components/motiveOn/Notice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Notice></Notice>
    </>
  )
}

export default App