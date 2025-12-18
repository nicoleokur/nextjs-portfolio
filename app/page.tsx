import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hi! I am Nicole Okur. I am currently a junior student at Villanova University. 
          I am majoring in computer engineering and minoring in computer science and electrical
          engineering. I enjoy getting involved on campus in clubs such as IEEE, Chi Omega, and 
          the Society of Women Engineers. Thank you for visiting my website!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
