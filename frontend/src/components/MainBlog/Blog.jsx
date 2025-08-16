import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Blog.css";

import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";
import blog5 from "../../assets/blog5.jpg";
import blog6 from "../../assets/blog6.jpg";
import BlogSubscribeSection from "./BlogSubscribeSection";

const blogData = [
  {
    id: 1,
    title: "10 Web Development Trends to Watch",
    description:
      "Explore the latest web development trends shaping the future.",
    category: "Technology",
    date: "June 25, 2025",
    image: blog1,
    alt: "Web Development Trends",
    link: "/blogs/top-10-web-development-trends",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Digital Marketing ROI",
    description: "Learn how to maximize your digital marketing returns.",
    category: "Marketing",
    date: "April 28, 2025",
    image: blog2,
    alt: "Digital Marketing ROI",
    link: "/blogs/the-ultimate-guide-to-digital-marketing-roi",
  },
  {
    id: 3,
    title: "5 Essential Features for Successful Mobile Apps",
    description: "Make your mobile app stand out and engage users.",
    category: "Mobile",
    date: "January 12, 2025",
    image: blog3,
    alt: "Successful Mobile Apps",
    link: "/blogs/essential-features-for-successful-mobile-apps",
  },
  {
    id: 4,
    title: "The Future of AI in Business Strategy",
    description: "Discover how AI is transforming modern business.",
    category: "AI",
    date: "July 18, 2025",
    image: blog4,
    alt: "AI in Business Strategy",
    link: "/blogs/future-of-ai-in-business-strategy",
  },
  {
    id: 5,
    title: "UX/UX for E-commerce Success",
    description: "Improve conversion with better design principles.",
    category: "Design",
    date: "May 30, 2025",
    image: blog5,
    alt: "E-commerce UX/UI",
    link: "/blogs/ui-ux-for-e-commerce-success",
  },
  {
    id: 6,
    title: "Top Cybersecurity Trends to Follow",
    description: "Stay ahead with the latest updates in cybersecurity.",
    category: "Security",
    date: "August 1, 2025",
    image: blog6,
    alt: "Cybersecurity Trends",
    link: "/blogs/top-cybersecurity-trends-to-follow",
  },
];

const Blog = () => {
  const [viewAll, setViewAll] = useState(false);
  const blogRef = useRef(null);
  const blogsToShow = viewAll ? blogData : blogData.slice(0, 3);

  const handleToggle = () => {
    if (viewAll && blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setViewAll(!viewAll);
  };

  return (
    <>
      <section id="blog" className="blog-section" ref={blogRef}>
        <h2 className="title">Latest Insights</h2>
        <p className="subtitle">
          Stay updated with the latest trends, tips, and insights in the digital
          world.
        </p>

        <div className="blog-grid">
          {blogsToShow.map((blog) => (
            <article className="blog-card" key={blog.id}>
              <img
              draggable="false"
                src={blog.image}
                alt={blog.alt}
                loading="lazy"
                className="blog-image"
                width="400"
                height="250"
              />
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{blog.category}</span>
                  <span className="blog-date">{blog.date}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>

                <Link
                  to={blog.link}
                  className="read-more"
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="button-wrapper">
          <button
            onClick={handleToggle}
            className="view-all-btn"
            aria-expanded={viewAll}
            aria-controls="blog"
          >
            {viewAll ? "Show Less" : "View More"}
          </button>
        </div>
      </section>
      <BlogSubscribeSection />
    </>
  );
};

export default Blog;
