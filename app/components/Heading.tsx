import Link from "next/link";

export default function Heading() {
  return (
    <div className="mx-auto pt-16 px-4 sm:px-6 lg:px-8 w-7/12">
      <div className="flex justify-center">
        <div className="flex justify-center flex-col items-center w-full">
          <h1 className="font-playfair text-7xl">The Nourished Notebook</h1>
          <div className="flex justify-between w-full px-4 font-playfairItalic italic">
            <Link href="/">
              <p>blog</p>
            </Link>

            <Link href="/">
              <p>about</p>
            </Link>

            <Link href="/">
              <p>contact</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
