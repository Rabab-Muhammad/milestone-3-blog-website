
// export const blog = {
//   name: "blogPost", 
//   type: "document",
//   title: "Blogs",
//   fields: [
//     {
//       name: "image",
//       title: "Image", 
//       type: "image", 
//       options: {
//         hotspot: true, 
//       },
//     },
//     {
//       name: "id",
//       type: "number",
//     },
//     {
//       name: "title",
//       type: "string",
//     },
//     {
//       name: "content",
//       type: "string",
//     },
//     {
//       name: "detailContent",
//       type: "string",
//     },
//     {
//       name: "date",
//       type: "date",
//     },
//   ],
// };

export default {
  name: "blogPost",
  type: "document",
  title: "Blog Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "content",
      type: "text",
      title: "Content",
    },
    {
      name: "detailContent",
      type: "text",
      title: "Detailed Content",
    },
    {
      name: "date",
      type: "datetime",
      title: "Published Date",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
  ],
};
