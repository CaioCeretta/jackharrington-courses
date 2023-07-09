import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import StrictModeState from '../pages/StrictModeState'
import UseEffectMistakes1 from '../pages/UseEffectMistakes-1'
import UseEffectMistakes2 from '../pages/UseEffectMistakes-2'
import TamingUseEffect from '../pages/tamingUseEffect'
import MasteringMemo from '../pages/MasteringMemo'
import MasteringAsync from '../pages/MasteringAsync'
import DoingHooksWrong from '../pages/DoingHooksWrong'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/strict" element={<StrictModeState />}/>
        <Route path="/taming" element={<TamingUseEffect />}/>
        <Route path="/useEffectCommonMistakes1" element={<UseEffectMistakes1 />}/>
        <Route path="/useEffectCommonMistakes2" element={<UseEffectMistakes2 />}/>
        <Route path="/masteringMemo" element={<MasteringMemo />}/>
        <Route path="/masteringAsync" element={<MasteringAsync />}/>
        <Route path="/doingHooksWrong" element={<DoingHooksWrong />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter