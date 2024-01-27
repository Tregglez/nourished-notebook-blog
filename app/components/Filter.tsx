import Link from "next/link";

export default function Filter() {
  return (
    <div className="flex justify-center pt-12">
      <div className="flex justify-between w-1/2 px-4 font-playfairItalic italic border-solid border-2 rounded-2xl">
        <Link href="/">
          <p>all</p>
        </Link>

        <Link href="/">
          <p>lifestyle</p>
        </Link>

        <Link href="/">
          <p>gut health</p>
        </Link>

        <Link href="/">
          <p>womens health</p>
        </Link>

        <Link href="/">
          <p>reciepes</p>
        </Link>

        <Link href="/">
          <p>travel</p>
        </Link>
      </div>
    </div>
  );
}
