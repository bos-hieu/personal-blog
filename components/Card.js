import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <article className="panel group h-full transition-colors hover:border-primary-300 dark:hover:border-primary-700">
    {imgSrc &&
      (href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />
      ))}
    <div className="p-6">
      <h2 className="mb-3 font-display text-xl font-semibold leading-snug text-slate-800 dark:text-slate-100">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
      {href && (
        <Link href={href} className="eyebrow link-underline" aria-label={`Link to ${title}`}>
          Learn more &rarr;
        </Link>
      )}
    </div>
  </article>
)

export default Card
