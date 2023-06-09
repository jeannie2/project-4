import Link from 'next/link'
import withAuth from '@/hoc/withAuth'
import { useMyCards } from '@/contexts/myCards'

function MyCardsIndex() { // export default function MyCardsIndex() {
  const { myCards, isLoading, error } = useMyCards()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  // const folder = myCard.iframe?.replace(/\d+/g, '') // added

  return (
    <div id="my-cards-index" className="container-fluid p-3">
      <div className="row">
        {myCards.map((card) => (
          <div key={card.id} className="col-12 col-sm-6 col-lg-3">

            <iframe
              src={`/templates/${card?.iframe?.replace(/\d+/g, '')}/${card.iframe}.html`}
              className="mb-2 card-img-top border embed-responsive-item"
              allowFullScreen
              height="auto"
            />

            <div className="card-body text-center">
              <div>To: {card.recipientName} </div>
              <div>Delivery date: {card.deliveryDate} </div>
              <Link href={`/my/cards/${card.id}?recipient=${card.recipientName}`}>Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default withAuth(MyCardsIndex)
