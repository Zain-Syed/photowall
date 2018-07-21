//import React, { Component } from 'react';
import Photo from './Photo'
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Photowall(props) {
    return (
        <div>
            <Link onClick={props.onNavigate} to="/AddPhoto" className="addIcon"></Link>
            <div className="photoGrid">
                {props.posts
                    .sort((x, y) => {
                        return y.id-x.id
                    })
                    .map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} onNavigate={props.onNavigate} />)}
            </div>
        </div>
        )
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

//class Photowall extends Component {
//    render() {
//        return (
//            <div className="photoGrid">
//                {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
//            </div>
//                )
//    }
//}

export default Photowall
    //< button onClick = { props.onNavigate } className = "addIcon" ></button >