import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// src/App.jsx
const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>;

const Content = ({ parts }) => (
  <div>
    <Part name={parts[0].name} exercises={parts[0].exercises} />
    <Part name={parts[1].name} exercises={parts[1].exercises} />
    <Part name={parts[2].name} exercises={parts[2].exercises} />
  </div>
);

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, p) => acc + p.exercises, 0);
  return <p>Number of exercises {sum}</p>;
};

const App = () => {
  const course = 'Half Stack Application Development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
