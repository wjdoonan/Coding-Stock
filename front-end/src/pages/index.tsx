import Layout from '../../comps/Layout'
import Box from '../../comps/Comps'
import react from 'react'

const boxes = [
      {
            header: 'header 1',
            paragraph: 'paragraph 1'
      },
      {
            header: 'header 2',
            paragraph: 'paragraph 2'
      },
      {
            header: 'header 3',
            paragraph: 'paragraph 3'
      },
      {
            header: 'header 4',
            paragraph: 'paragraph 4'
      }
]

const [caro, caroC] = react.useState(0)

export default function Home() {
      return (
            <Layout title='Home'>
                  <div className="box-car">
                        <button onClick={() => {document.querySelector('#homeBox').props.header = 'yo'}} className="box-con fa-solid fa-chevron-circle-left"></button>
                            <Box id="homeBox" header={boxes[1].header} paragraph={boxes[1].paragraph} />
                        <button className="box-con fa-solid fa-chevron-circle-right"></button>
                  </div>
            </Layout>
      )
}