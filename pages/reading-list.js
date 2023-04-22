import Link from '@/components/Link'
import readingListData from '@/data/readingListData'
import ReadingListCard from '@/components/ReadingListCard'

export default function ReadingList() {
  return (
    <div>
      {readingListData.map((r) => (
        <ReadingListCard key={r.href} href={r.href} title={r.title} />
      ))}
    </div>
  )
}
