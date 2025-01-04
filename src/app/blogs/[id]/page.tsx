// import { client } from "@/sanity/lib/client";

// interface IBlog {
//   imageUrl: string;
//   title: string;
//   content: string;
//   detailContent: string;
//   date: string;
// }

// async function getBlogById(id: string) {
//   const fetchdata = await client.fetch(
//     `
//     *[_type == "blogPost" && _id == $id][0] {
//       title,
//       content,
//       detailContent,
//       date,
//       author,
//       "imageUrl": image.asset->url
//     }
//   `,
//     { id }
//   );
//   return fetchdata;
// }

// export default async function BlogDetail({
//   params,
// }: {
//   params: { id: string }; 
// }) {
//   const blog: IBlog = await getBlogById(params.id);

//   return (
//     <div className="p-4 sm:p-6 max-w-4xl mx-auto shadow-2xl my-5">
//       <img
//         src={blog.imageUrl}
//         alt={blog.title}
//         className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-6"
//       />
//       <h1 className="text-2xl sm:text-3xl font-bold mb-3">{blog.title}</h1>

//       <p className="text-sm sm:text-lg text-sky-600 mb-3">
//         <strong>Published on:</strong>{" "}
//         {new Intl.DateTimeFormat("en-GB", {
//           day: "numeric",
//           month: "long",
//           year: "numeric",
//         }).format(new Date(blog.date))}
//       </p>

//       <p className="text-sm sm:text-base text-gray-600 mb-6">
//         {blog.detailContent}
//       </p>

//       <div>
//         <h2 className="text-xl sm:text-2xl font-semibold mb-4">
//           Leave a Comment
//         </h2>
//         <form className="space-y-4">
//           <textarea
//             placeholder="Write your comment here..."
//             required
//             className="w-full p-3 sm:p-4 border-2 rounded-lg text-sm sm:text-base"
//             rows={4}
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-600 text-sm sm:text-base"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


import { client } from "@/sanity/lib/client";

interface IBlog {
  imageUrl: string;
  title: string;
  content: string;
  detailContent: string;
  date: string;
}

async function getBlogById(id: string) {
  const fetchdata = await client.fetch(
    `
    *[_type == "blogPost" && _id == $id][0] {
      title,
      content,
      detailContent,
      date,
      author,
      "imageUrl": image.asset->url
    }
  `,
    { id }
  );
  return fetchdata;
}

export default async function BlogDetail({
  params: promiseParams,
}: {
  params: Promise<{ id: string }>; // Correcting to promise-based type
}) {
  const { id } = await promiseParams; // Awaiting params to resolve the promise
  const blog: IBlog = await getBlogById(id);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto shadow-2xl my-5">
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-6"
      />
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">{blog.title}</h1>

      <p className="text-sm sm:text-lg text-sky-600 mb-3">
        <strong>Published on:</strong>{" "}
        {new Intl.DateTimeFormat("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(new Date(blog.date))}
      </p>

      <p className="text-sm sm:text-base text-gray-600 mb-6">
        {blog.detailContent}
      </p>

      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Leave a Comment
        </h2>
        <form className="space-y-4">
          <textarea
            placeholder="Write your comment here..."
            required
            className="w-full p-3 sm:p-4 border-2 rounded-lg text-sm sm:text-base"
            rows={4}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-600 text-sm sm:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
