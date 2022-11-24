import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchAPI } from '../utils/fetchAPI'
import { Videos } from './'

const SearchConts = () => {
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      // console.log(data) // 데이터 나오는지 확인
      setVideos(data.items)
    )
  }, [searchTerm]) // 무한이 걸려서 트래픽 걸릴 수도 있으므로 [searchTerm] 넣어줌

  return (
    <>
      <div className="result">{searchTerm}을 검색하였습니다.</div>
      <div>
        <Videos videos={videos} />
      </div>
    </>
  )
}

export default SearchConts
