// import React, { useEffect, useState } from 'react'

// import { fetchAPI } from '../utils/fetchApi'
// import { Category, Video } from './'

// const MainConts = () => {
//   const [selectCategory, setselectCategory] = useState('webstoryboy')
//   const [videos, setVideos] = useState(null)

//   useEffect(() => {
//     fetchAPI(`search?part=snippet&q=webstoryboy`).then((data) =>
//       console.log(data)
//     )
//   }, [])

//   return (
//     <main id="main">
//       <aside id="aside">
//         <Category
//           // 변수
//           selectCategory={selectCategory}
//           // 함수
//           setselectCategory={setselectCategory}
//         />
//       </aside>
//       <section id="contents">
//         <h2>
//           <em>{selectCategory}</em>맛있는케이크
//         </h2>
//         <Video videos={videos} />
//       </section>
//     </main>
//   )
// }

// export default MainConts

// import React, { useEffect, useState } from 'react'

// import { fetchAPI } from '../utils/fetchAPI'
// import { Category, Video } from './'

// const MainConts = () => {
//   const [selectCategory, setSelectCategory] = useState('orange')
//   const [videos, setVideos] = useState(null)

//   useEffect(() => {
//     fetchAPI(`search?part=snippet&q=orange`).then((data) => console.log(data))
//   }, [])

//   return (
//     <main id="main">
//       <aside id="aside">
//         <Category
//           selectCategory={selectCategory}
//           setSelectCategory={setSelectCategory}
//         />
//       </aside>
//       <section id="contents">
//         <h2>
//           <em>{selectCategory}</em> 레시피
//         </h2>
//         <Video videos={videos} />
//       </section>
//     </main>
//   )
// }

// export default MainConts

import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../utils/fetchAPI'
import { Category, Video } from './index'

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('Vito ASMR')
  const [videos, setVideos] = useState(null)
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=Vito ASMR`).then((data) =>
      console.log(data)
    )
  }, [])
  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          <em>{selectCategory}</em>유튜버
        </h2>
        <Video videos={videos} />
      </section>
    </main>
  )
}
export default MainConts
