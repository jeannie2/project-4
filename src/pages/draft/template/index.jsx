import { useRouter } from 'next/router'

export default function TemplateIndexPage() {
  const router = useRouter() // if put in {}, router in router.push is undefined QQ

  const url = useRouter()
  const { iframe } = url.query
  const folder = iframe?.replace(/\d+/g, '') // iframe keyword minus number eg bday3 -> bday

  return (
    <div className="container mt-5 mx-auto text-center">
      <div className="row">
        <div className="col-12">
          <iframe src={`/templates/${folder}/${iframe}.html`} className="border embed-responsive-item vh-90" allowFullScreen width="80%" height="500px" />
          <button onClick={() => router.push(`/draft/new?iframe=${iframe}`)} type="button" className="btn btn-light d-block mx-auto">Send</button>
        </div>
      </div>
    </div>

  )
}

// iframe: height: 400px
// console.log(`url query : ${url.query}`)
// console.log(`url.query.iframe : ${url.query.iframe}`) // eslint-disable-line
// console.log(`iframe iframe: ${iframe}`) // eslint-disable-line
