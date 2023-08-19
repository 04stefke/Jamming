import React from 'react'
import './Track.css'
export default class Track extends React.Component {
    constructor(props){
        super(props)
        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this)
    };

    renderAction(){
        if(this.props.isRemoval){
            return (
                <button className='track-action' onRemove={this.removeTrack}>-</button>
            )
        }else {
            return (
                <button className='track-action' onAdd={this.removeTrack}>+</button>
            )
        }
    };

    addTrack(){
        this.props.onAdd(this.props.track)
    };

    removeTrack(){
        this.props.onRemove(this.props.track)
    }

    render(){
        return(
            <div className='track'>
                <div className='track-information'>
                    <h3>{this.props.track}adasd</h3>
                    <p>{this.props.track} ad|ads {this.props.track}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}