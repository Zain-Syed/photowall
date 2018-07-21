//import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './Styles/stylesheet.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));

//NOT DRY CODE
// const element = React.createElement('ol', null,
//  React.createElement('li', null, 'Takeout the trash'),
//  React.createElement('li', null, 'Takeout the trash'),
//  React.createElement('li', null, 'Takeout the trash')
//  );


//THIS BECOMES TEDIOUS ==> SOLUTION ==> JSX
// const tasks = ['take out the trash ', 'shovel the driveway ', 'walk the dog ', 'take out the trash '];
// const element = React.createElement('ol', null, 
// 	tasks.map((task, index) => React.createElement('li', {key: index}, task))
// );
// ReactDOM.render(element, document.getElementById('root'));

//===============================================================JSX=================================//

//const tasks = ['Take out the trash ', 'Shovel the driveway ', 'Walk the dog ', 'Take out the trash '];
//// const element = <ol> 
//// 	{tasks.map((task) => <li>{task}</li>)}		
//// </ol>
//tasks.push('Read the book ');
//tasks.push('Write the book');
////this is compiled the same way as React.createElement, but using JSX...this is compiled as JS behind the scenes
//const element = 
//	<div>
//		<h1> Task List </h1>
//		<ol> 
//			{tasks.map((task, index) => <li key={index}>{task}</li>)}		
//		</ol>
//	</div>
//ReactDOM.render(element, document.getElementById('root'));


//COMPONENTS=================================================================================//

//const tasks = ['Take out the trash ', 'Shovel the driveway ', 'Walk the dog ', 'Take out the trash '];

//class List extends Component {
//    render() {
//        return (    <ol> 
//			            {this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}		
//		            </ol>)
//    }

//}

//class Title extends Component {
//    render() {
//        return (<h1>{this.props.title}</h1>)
//    }
//}

//class Main extends Component {
//    render() {
//        return (<div>
//            <Title title={'To-Do List'}/>
//            <List tasks={['Mow the lawn', 'Walk the Dog', 'Make lunch']}/>
//            <List tasks={['Hose the driveway', 'Study for React']}/>
//                </div >
//          )
//    }
//}



