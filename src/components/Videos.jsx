import React from 'react'

import { VideoCard, Loader } from './index'

const Videos = ({ videos }) => {
  // ? 를 붙여야 에러가 나지 않음
  if (!videos?.length) return <Loader />

  return (
    // <article className={`"videos__inner ${ layout }"`}>
    <article className="videos__inner">
      {/* {videos.map((video, idx) => (   에러 나면 지웠다가 다시 리플래시 시켜야함 */}
      {videos.map((item, idx) => (
        // <div key={idx}>{item.id.videoId}</div>
        <div key={idx}>{item.id.videoId && <VideoCard video={item} />}</div>
      ))}
    </article>
  )
}

export default Videos
