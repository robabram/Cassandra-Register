import {Routes, Route, Link} from 'react-router-dom';

import RegisterMainPage from "./main";


const Test1 = () => <span>Test1 Test1 Test1 Test1 Test1 Test1 Test1 </span>;
const Test2 = () => <span>Test2 Test2 Test2 Test2 Test2 Test2 Test2 </span>;
const Test3 = () => <span>Test3 Test3 Test3 Test3 Test3 Test3 Test3 </span>;


function RegisterRoutes() {

  return (
    <Routes>
      <Route path={'test1'} element={<Test1 />} />
      <Route path={'test2'} element={<Test2 />} />
      <Route path={'test3'} element={<Test3 />} />
      <Route path={'/'} element={<RegisterMainPage />} />
    </Routes>
  );
}

export default RegisterRoutes;