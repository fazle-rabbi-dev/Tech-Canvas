require("@/mongoose/db");
const { Blogs } = require("@/mongoose");

export default async function handler(req, res) {
  try {
    const { slug, page, limit, home } = req.query;

    /* For home page */
    if (home) {
      let blogs = await Blogs.find();

      let shouldNext = false;
      if (blogs.length > 6) {
        shouldNext = true;
      }

      blogs.reverse();
      blogs = blogs.slice(0, 6);
      return res.status(200).json({
        blogsData: {
          data: blogs,
          shouldNext,
        },
      });
    }

    /* For specific blog */
    if (slug) {
      const post = await Blogs.findOne({ slug });
      return res.status(200).json({
        post,
      });
    }

    /* For page route */
    if (page && limit) {
      const offset = (page - 1) * limit;

      let results = await Blogs.find();
      // .skip(offset)
      // .limit(limit);

      let shouldNext = false;
      if (results.length > offset + 6) {
        shouldNext = true;
      }

      results.reverse();
      results = results.slice(offset, offset + 6);
      return res.status(200).json({
        allBlogs: results,
        shouldNext,
      });
    }
  } catch (e) {
    res.status(200).json({
      message: "Something went wrong",
    });
  }
  
  return res.status(402).json({
    message: "Bad request"
  })
}
