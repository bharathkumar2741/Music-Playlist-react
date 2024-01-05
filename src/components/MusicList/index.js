import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicList = props => {
  const {musicListDetails, onDeletes} = props
  const {imageUrl, name, genre, duration, id} = musicListDetails
  const onClickDelete = () => {
    onDeletes(id)
  }
  return (
    <li className="iit">
      <div className="item">
        <div>
          <img className="item-img" alt="track" src={imageUrl} />
        </div>
        <div>
          <p className="head">{name}</p>
          <p className="para">{genre}</p>
        </div>
      </div>
      <div className="icon-btn">
        <p className="pp">{duration}</p>
        <button
          type="button"
          className="deleteButton"
          aria-label="close"
          onClick={onClickDelete}
        >
          <AiOutlineDelete className="deleteIcon" />
        </button>
      </div>
    </li>
  )
}
export default MusicList
