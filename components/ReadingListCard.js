import Link from "@/components/Link";

const ReadingListCard = ({href, title}) => (
    <div>
        <Link href={href}>{title}</Link>
    </div>
)

export default ReadingListCard