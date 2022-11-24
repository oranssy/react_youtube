import React, { useEffect, useState } from 'react'

import { fetchAPI } from '../utils/fetchAPI'
import { Category, Videos } from './'

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('케이크 레시피')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    // videos -> video로 바꾸면 빈 칸 생기지 않음
    fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
      (data) =>
        // console.log(data.items)
        setVideos(data.items)
    )
  }, [selectCategory])

  return (
    <main id="main">
      <aside id="aside">
        <Category
          // 변수 개념
          selectCategory={selectCategory}
          // 함수 개념
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          <em>{selectCategory}</em> 케이크 만들기
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  )
}
export default MainConts
