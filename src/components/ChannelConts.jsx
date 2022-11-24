import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../utils/fetchAPI'
import { useParams } from 'react-router-dom'

import { Videos } from './index'

const ChannelConts = () => {
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`)

      // console.log(data?.items[0])
      setChannelDetail(data?.items[0])

      const videosData = await fetchAPI(
        `search?channelId=${id}&part=snippet&order=date`
      )
      setVideos(videosData?.items)
    }
    fetchResults()
  }, [id])

  return (
    <section id="channelConts">
      <div
        className="channel-header"
        style={{
          // backgroundImage: `url(${channelDetail?.snippet?.thumbnails?.default?.url})`,
          backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
        }}
      ></div>
      <div className="ch__container">
        <div className="channel-info">
          <div className="infoBox-left">
            <img
              src={channelDetail?.snippet?.thumbnails?.medium?.url}
              alt={channelDetail?.snippet?.title}
            />
          </div>
          <div className="infoBox-right">
            <h3>{channelDetail?.snippet?.title}</h3>
            <div className="info-content">
              <span className="subscriberC">
                구독자 수 : {channelDetail?.statistics?.subscriberCount}명
              </span>
              <span className="videoC">
                총 비디오 갯수 : {channelDetail?.statistics?.videoCount}개
              </span>
              <span className="viewC">
                비디오 카운트 : {channelDetail?.statistics?.viewCount}회
              </span>
            </div>
          </div>
        </div>
        <div className="channel-videos">
          <Videos videos={videos} />
        </div>
      </div>
    </section>
  )
}

export default ChannelConts
