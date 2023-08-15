import React from 'react'
import './playlist.css'
export default class Playlist extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='playlist'>
          <div className=''>
            <input placeholder={'New PlayList'} className='inputbar'></input>
          </div>
          <div className='butt'>
            <button className='button plus'><i class='bx bx-plus'></i></button>
          </div>
          </div>
      </div>
    )
  }
}

