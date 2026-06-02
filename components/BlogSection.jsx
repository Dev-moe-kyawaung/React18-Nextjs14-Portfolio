export default function BlogSection() {
  const posts = [
    {
      slug: "my-first-mdx-blog",
      title: "How I built my 16‑app portfolio with Kotlin & Next.js",
      description: "တစ်ပတ်လုံး တည်ဆောက်ထားတဲ့ ကိုယ်ပိုင် ပရိုဖိုင်လ် နဲ့ အက်ပ် ၁၆ ကို ပြန်လည်ရှင်းပြခြင်း။",
      date: "Jun 2, 2026",
    },
    {
      slug: "pos-ultimate-max",
      title: "POS Ultimate Pro Max: from Android to Web",
      description: "POS အက်ပ်ကို Android ကနေ Web ကို ပိုင်းခွဲ တည်ဆောက်နည်း။",
      date: "May 15, 2026",
    },
    {
      slug: "gravatar-lovable",
      title: "Gravatar + Lovable: Link‑in‑bio strategy for developers",
      description: "Gravatar နဲ့ Lovable ကို ပေါင်းစပ်သုံးနည်း။",
      date: "May 10, 2026",
    },
  ];

  return (
    <section id="blog" className="py-20 px-8">
      <h2 className="mb-10 text-2xl font-bold text-gray-900 dark:text-white">
        Blog
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-md border border-gray-200 p-5 dark:border-gray-700"
          >
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {post.title}
            </h3>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              {post.description}
            </p>
            <div className="mt-2">
              <a
                href={`/blog/${post.slug}`}
                className="text-xs text-teal-600 hover:underline dark:text-teal-400"
              >
                Read more →
              </a>
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-500">
              {post.date}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
