import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "content/blog");

export default function BlogPage() {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      slug: data.slug,
      excerpt: data.excerpt || "",
      category: data.category || "General",
      readTime: data.readTime || "5 min read",
      author: data.author || "DigiExperts Team",
    };
  });

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 via-blue-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DigiExperts Blog
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Insights, trends, and expert advice in digital marketing and
              technology
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden group"
            >
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-teal-700 bg-teal-100 rounded-full mb-4">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <Link href={`/blog/${post.slug}`} className="block group">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xs mr-3">
                        {post.author.charAt(0)}
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500 font-medium">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>

                    {/* Read More Arrow */}
                    <div className="flex items-center text-teal-600 font-semibold text-sm group-hover:text-teal-700 transition-colors">
                      Read More
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500"></div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No Posts Yet
            </h3>
            <p className="text-gray-600">
              Check back soon for our latest insights and updates!
            </p>
          </div>
        )}
      </div>

      {/* Newsletter CTA Section */}
      <div className="bg-[#eff2f7] py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-3xl lg:text-6xl text-nowrap font-bold text-black mb-6">
            Stay Updated with DigiExperts
          </h2>
          <p className="text-xl text-black mb-8">
            Get the latest insights delivered straight to your inbox
          </p>
            <iframe
              width="1000"
              height="500"
              src="https://01a84968.sibforms.com/serve/MUIFAK3cGQkac1ovf7E-kngaFQcImgq4Go5qWhL8dph7zWoxL44_wJngnjySDqQOOI84xYICd0WFE7VPqZR765htTC5N6_oBclESpPPTn-ZGzXy270QwIgh20NjA-dwoSF0Yi3j1hY_Oi104-qBFUG11jMxqhP9X4J3m1upPgyyLUK1lZrJPY-uIMw769OGK5lx0LVpmO_EpRTlH"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "100%",
              }}
            />
        </div>
      </div>
    </div>
  );
}
