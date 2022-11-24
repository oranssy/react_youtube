import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams, Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Videos, Loader } from './index'

const VideoConts = () => {
  const [videoDetail, setvideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      // console.log(data.items[0])
      setvideoDetail(data.items[0])
    )

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  // 정보가 없으면 오류나는 것 해결
  if (!videoDetail?.snippet) return <Loader />

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail

  return (
    <section className="videoConts">
      <div className="container">
        <div className="videoConts__inner">
          <div className="videoFrame">
            <div className="videoPlay">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
            </div>
            <div className="videoSubject">
              {/* <div className="videoSub_tit">{videoDetail.snippet?.title}</div>
              <div className="videoSub_view">
                {videoDetail.snippet?.viewCount}
              </div>
              <div className="videoSub_like">
                {videoDetail.statistics?.likeCount}
              </div> */}
              <div className="videoSub_tit">{title}</div>
              <div className="videoSub_channel">
                <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
              </div>
              <div className="videoSub_view">{viewCount}</div>
              <div className="videoSub_like">{likeCount}</div>
            </div>
          </div>
          <div className="videoList side">
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoConts
