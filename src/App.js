import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import user from './img/User.jpg';

import ApplicationWidget from './components/ApplicationWidget';

const userData = { /*subtitle: `165.7 KB`,*/ borrower: {name: {first: 'Васечкин', middle: 'Иван', last: 'Андреевич'}, contacts: [{type: 'phone', text: '+7 (960) 468-40-71'}]}, rieltor: {name: {first: 'Гущин', middle: 'Данил', last: 'Андреевич'}, photo: user, contacts: [{type: 'phone', text: '+7 (960) 468-40-72'}, {type: 'email', text: 'danilgushchin1@gmail.com'}]}};

function App() {
  return (
    <div className="App">

      <ApplicationWidget role='valuerAdmin' type='onAdjustment' {...userData} />

    </div>
  );
}

export default App;
