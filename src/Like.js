import React, {useState} from 'react'
import('./Like.css')


export function Like(props) {

        const [count, updateCount] = useState(props.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleButtonClick = () => {
    if (isLiked) {
      setIsLiked(false);
      updateCount(count - 1);
    } else {
      setIsLiked(true);
      updateCount(count + 1);
    }
  };
    return(
        <>
        <div>
            <button className={isLiked ? "isLiked" : ""} onClick={handleButtonClick}>
        {isLiked ? "Unlike" : "Like"} {count}
      </button>
        </div>
    </>
    )
    
}


