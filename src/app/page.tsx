import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Hero from "@/components/Hero/Hero";

interface IBlog {
  id: number;
  _id: string;
  imageUrl: string;
  title: string;
  content: string;
  date: string;
}

async function getData() {
  const fetchdata = await client.fetch(`
    *[_type == "blogPost"] | order(id asc) {
      id,
      _id,
      title,
      content,
      date,
      "imageUrl": image.asset->url
    }
  `);

  return fetchdata;
}

export default async function Home() {
  const blogs: IBlog[] = await getData();

  return (
    <div>
      <Hero />
      <div
        id="blogs"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-5 lg:gap-7 p-0  sm:p-5 md:p-10 mx-5 md:mx-10 mt-10 bg-slate-200 "
      >
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white p-6  rounded-lg  shadow-md md:shadow-xl "
          >
            <Link href={`/blogs/${blog._id}`}>
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-fill rounded-t-lg transform transition duration-300 hover:scale-105"
              />
            </Link>

            <div className="mt-4 ">
              <Link href={`/blogs/${blog._id}`}>
                <h2 className="text-xl font-semibold hover:underline ">
                  {blog.title}
                </h2>
              </Link>
              <p className="text-gray-600 mt-2 ">{`${blog.content.slice(0, 100)}...`}</p>
              <Link
                href={`/blogs/${blog._id}`}
                className="mt-2 inline-block py-2 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg transform transition duration-300 hover:scale-105 "
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* About */}
      <div
        id="about"
        className=" py-8 transform transition duration-300 hover:scale-105"
      >
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h3 className=" text-xl md:text-2xl font-bold mb-4">
            About This Website
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to your ultimate tech destination! This blog website is your
            go-to platform for exploring insights, tutorials, and updates on
            programming languages and technologies like TypeScript, JavaScript,
            React, Next.js, Python, and more. Stay tuned for the latest in tech
            and supercharge your coding journey!
          </p>
        </div>
      </div>
    </div>
  );
}
