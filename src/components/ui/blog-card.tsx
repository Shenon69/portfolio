import Link from "next/link";

type EventCardProps = {
  title: string;
  duration: string;
  date: string;
  image: string;
  link: string;
}

export default function BlogCard({ title, duration, date, image, link }: EventCardProps) {
  const imgUrl = `/images/${image}`;

  return (
    <div className="relative max-w-sm group overflow-hidden rounded-2xl">
      <Link href={link} target="_blank">
        <div
          className="h-96 bg-cover group-hover:scale-110 duration-500 transition-all"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
        </div>
        <div className="absolute flex flex-col justify-end top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black">
          <div className="flex flex-col p-5 gap-5">
            <div className="flex flex-col gap-2">
              <h4 className="text-3xl font-bold">
                {title}
              </h4>
              <div className="flex flex-row justify-between">
                <span className="text-sm">
                  {date}
                </span>
                <span className="text-sm">
                  {duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
