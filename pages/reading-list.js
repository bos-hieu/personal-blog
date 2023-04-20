import Link from '@/components/Link'

export default function ReadingList() {
  return (
    <>
      <ul>
        <li>
          <Link href="https://learn.mongodb.com/learning-paths/mongodb-python-developer-path">
            Mongodb python developer path
          </Link>
        </li>
        <li>
          <Link href="https://levelup.gitconnected.com/use-git-like-a-senior-engineer-ef6d741c898e">
            Use git like a senior engineer
          </Link>
        </li>
        <li>
          <Link href="https://careers.adyen.com">
            Adyen
          </Link>
        </li>
        <li>
          <Link href="https://www.checkout.com/careers">
            Checkout.com
          </Link>
        </li>
        <li>
          <Link href="https://www.uber.com/us/en/careers/">
            Uber
          </Link>
        </li>
      </ul>
    </>
  )
}
