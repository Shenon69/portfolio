import Link from "next/link";
import { BiCalendar } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

type EventCardProps = {
  title: string;
  event: string;
  date: string;
  location: string;
  image: string;
  link: string;
}

export default function EventCard({ title, event, date, location, image, link }: EventCardProps) {
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
            <div className="flex flex-col">
              <h4 className="text-3xl font-bold">
                {title}
              </h4>
              <span className="text-sm">
                {event}
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex items-center gap-1"><BiCalendar /> <span>{date}</span></div>
              <div className="flex items-center gap-1"><GoLocation /> <span>{location}</span></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
