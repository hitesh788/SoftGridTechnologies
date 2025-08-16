import React, { useEffect, useState } from "react";
import "./Blog3.css";
import blog3Image from "../../assets/blog3.jpg";
import recommendedBlog1 from "../../assets/blog4.jpg";
import recommendedBlog2 from "../../assets/blog5.jpg";
import recommendedBlog3 from "../../assets/blog6.jpg";
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaLink,
  FaArrowCircleUp,
} from "react-icons/fa";

const features = [
  "Intuitive User Interface (UI)",
  "Fast Performance & Smooth Animations",
  "Offline Accessibility",
  "Personalization & Customization",
  "Robust Security Measures",
];

const shareUrls = {
  facebook: (url) =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  linkedin: (url) =>
    `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      url
    )}`,
  twitter: (url, text) =>
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text)}`,
};

const recommendedBlogs = [
  {
    id: 1,
    title: "The Future of AI in Business Strategy",
    image: recommendedBlog1,
    category: "Design",
    date: "March 12, 2025",
    url: "/blogs/future-of-ai-in-business-strategy",
  },
  {
    id: 2,
    title: "UX/UX for E-commerce Success",
    image: recommendedBlog2,
    category: "Marketing",
    date: "April 25, 2025",
    url: "/blogs/ui-ux-for-e-commerce-success",
  },
  {
    id: 3,
    title: "Top Cybersecurity Trends to Follow",
    image: recommendedBlog3,
    category: "Growth",
    date: "May 30, 2025",
    url: "/blogs/top-cybersecurity-trends-to-follow",
  },
];

function generateFeatureDescription(feature) {
  switch (feature) {
    case "Intuitive User Interface (UI)":
      return (
        <p>
          Your app’s interface is the very first thing users see, and first
          impressions matter a lot. Just like walking into a well-organized
          store makes you want to browse, a clean and simple UI instantly makes
          your app feel inviting and easy to use. An intuitive layout means
          users can find what they’re looking for without having to dig through
          complicated menus or guess where trends are hidden. This isn’t just
          about making things “look pretty”; it’s about creating a smooth,
          natural flow where buttons, menus, and actions feel exactly where they
          should be. Clear icons, readable fonts, and consistent design patterns
          help people feel comfortable right away. When users don’t have to
          think twice about how to navigate, they can focus on actually enjoying
          what your app offers. The easier it is for them to get from point A to
          point B, the more likely they are to stick around and even become
          loyal advocates for your app.
        </p>
      );
    case "Fast Performance & Smooth Animations":
      return (
        <p>
          A truly responsive app makes every interaction feel instant, whether
          it’s opening a screen, submitting a form, or switching between
          features. But speed alone isn’t enough. Smooth animations elevate the
          experience by adding a sense of flow and polish. Thoughtful
          transitions, fluid scrolling, and subtle motion cues help guide the
          user’s eyes, making the interface feel more natural and intuitive.
          These little touches may seem minor, but they add up to an app that
          feels premium and well-crafted. Think of it like driving a well-tuned
          car: it’s not just about how quickly it accelerates, but also how
          smooth and comfortable the ride feels. The same applies to your
          app, speed combined with graceful motion creates a user experience that
          feels effortless, enjoyable, and worth coming back to again and again.
        </p>
      );
    case "Offline Accessibility":
      return (
        <p>
          A great mobile app doesn’t stop being useful the moment the internet
          drops. Whether a user is traveling, stuck in a remote location,
          dealing with patchy network coverage, or simply trying to save mobile
          data, offline accessibility ensures they can still access important
          features and content without frustration. Instead of locking them out
          with a “No connection” error, a well-built app intelligently stores
          essential data locally so users can keep reading, editing, creating,
          or interacting without interruptions. Then, once a stable connection
          returns, it syncs seamlessly in the background, keeping everything up
          to date without extra effort from the user. This capability isn’t just
          a convenience; it’s a sign of reliability and thoughtfulness. Users
          feel valued when an app adapts to their circumstances instead of
          forcing them to adapt to the app’s limitations.
        </p>
      );
    case "Personalization & Customization":
      return (
        <p>
          In a world filled with countless mobile apps, users naturally
          gravitate toward the ones that feel like they were designed
          specifically for them. Personalization is all about understanding
          individual preferences and tailoring the experience accordingly, from
          greeting users by name to suggesting content based on their past
          activity, interests, or location. It’s about making the app feel
          smarter and more relevant with every use, so users feel valued and
          understood. Customization takes this a step further by putting the
          power directly in the user’s hands. Instead of a one-size-fits-all
          interface, give people the ability to change themes, adjust layouts,
          choose notification preferences, or even rearrange features based on
          what matters most to them. These options not only make the app more
          functional for each individual but also foster a deeper sense of
          ownership.
        </p>
      );
    case "Robust Security Measures":
      return (
        <p>
          No matter how beautiful or feature-rich your app is, it won’t succeed
          if users can’t trust it. In today’s digital landscape, security isn’t
          just a technical requirement; it’s a fundamental part of the user
          experience. People share sensitive information with mobile apps every
          day, from personal details and payment data to private conversations,
          and they expect that data to be protected at all times. Implementing
          strong encryption, secure authentication methods, and regular security
          updates helps ensure that their information stays safe from hackers,
          data leaks, and unauthorized access. But robust security measures go
          beyond what’s under the hood. Clear privacy policies, transparent
          permissions, and visible signs of protection help users feel confident
          using your app.
        </p>
      );
    default:
      return null;
  }
}

const Blog3 = () => {
  const currentUrl = window.location.href;
  const shareText =
    "Discover the 5 essential features every successful mobile app needs!";
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      setShowButton(scrollY >= 2 * viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        const tooltip = document.createElement("div");
        tooltip.className = "blog3-copy-tooltip";
        tooltip.textContent = "Copied!";
        document.body.appendChild(tooltip);
        setTimeout(() => tooltip.remove(), 2000);
      })
      .catch(() => alert("Failed to copy link."));
  };

  const navigateToBlog = (url) => {
    window.location.href = url;
  };

  return (
    <div className="blog3-blog-container">
      <div className="blog3-blog-header">
        <div className="blog3-breadcrumb">
          {showButton && (
            <button
              className="blog3-scroll-to-top"
              title="Scroll to top"
              onClick={scrollToTop}
            >
              <FaArrowCircleUp />
            </button>
          )}
        
        </div>

        <div className="blog3-header-content">
          <h1 className="blog3-blog-title">
            5 Essential Features for Successful Mobile Apps
          </h1>
          <div className="blog3-meta-info">
            <span className="blog3-author">
              <FaUser
                style={{
                  marginRight: "6px",
                  marginBottom: "3px",
                  verticalAlign: "middle",
                  color: "navy",
                }}
              />
              By Abhishek Kunwar
            </span>
            <span className="blog3-publish-date">
              <FaCalendarAlt
                style={{
                  marginRight: "6px",
                  marginBottom: "3px",
                  verticalAlign: "middle",
                  color: "navy",
                }}
              />
              June 23, 2025
            </span>
            <span className="blog3-read-time">
              <FaClock
                style={{
                  marginRight: "6px",
                  verticalAlign: "middle",
                  color: "navy",
                }}
              />
              15 min read
            </span>
          </div>
        </div>
      </div>

      <div className="blog3-featured-image-container">
        <img
          src={blog3Image}
          alt="Successful Mobile Apps"
          className="blog3-featured-image"
        />
        <div className="blog3-image-caption">
          Make your app unforgettable with these core features
        </div>
      </div>

      <div className="blog3-blog-content">
        <aside className="blog3-sidebar">
          <div className="blog3-sidebar-content">
            <h3 className="blog3-sidebar-title">Jump to Features</h3>
            <ol className="blog3-feature-nav">
              {features.map((feature, i) => (
                <li key={i}>
                  <a href={`#feature-${i + 1}`} className="blog3-nav-link">
                    {feature}
                  </a>
                </li>
              ))}
            </ol>

            <div className="blog3-recommended-blogs">
              <h3 className="blog3-sidebar-title">Recommended Reads</h3>
              <div className="blog3-recommended-list">
                {recommendedBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="blog3-recommended-item"
                    onClick={() => navigateToBlog(blog.url)}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog3-recommended-image"
                    />
                    <div className="blog3-recommended-info">
                      <span className="blog3-recommended-category">
                        {blog.category}
                      </span>
                      <h4 className="blog3-recommended-title">{blog.title}</h4>
                      <span className="blog3-recommended-date">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="blog3-share-widget">
              <h3 className="blog3-share-title">Share This Article</h3>
              <div className="blog3-share-buttons">
                <a
                  href={shareUrls.facebook(currentUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="blog3-share-button blog3-facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={shareUrls.linkedin(currentUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="blog3-share-button blog3-linkedin"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={shareUrls.twitter(currentUrl, shareText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="blog3-share-button blog3-twitter"
                >
                  <FaTwitter />
                </a>
                <button
                  onClick={copyToClipboard}
                  className="blog3-share-button blog3-copy-link"
                  aria-label="Copy link to clipboard"
                >
                  <FaLink />
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="blog3-article-content">
          <div className="blog3-article-intro">
            <p className="blog3-lead-paragraph">
              Standing out in today’s ever-crowded mobile app jungle isn’t just
              about showing up; it’s about packing your digital creation with
              the right features that truly delight users, spark their
              curiosity, and keep them coming back for more. In a world where
              swiping left or right can mean instant rejection, apps have to do
              more than just function. They have to resonate, inspire trust, and
              offer genuine value at every tap and scroll. It’s this delicate
              balance of usability, innovation, and thoughtful design that
              transforms casual users into loyal fans. But what exactly are
              those magic ingredients? What are the must-have essentials that
              separate the apps that fade into obscurity from the ones that
              dominate our screens and lives? Let’s dive deep into the five key
              features that successful apps never compromise on, the
              foundational pillars that build unforgettable user experiences and
              keep your audience hooked long after their first download.
            </p>
          </div>

          {features.map((feature, i) => (
            <section
              key={i}
              id={`feature-${i + 1}`}
              className="blog3-feature-section"
            >
              <div className="blog3-section-header">
                <span className="blog3-section-number">{i + 1}</span>
                <h2 className="blog3-section-title">{feature}</h2>
              </div>
              <div className="blog3-section-content">
                {generateFeatureDescription(feature)}
              </div>
              {i < features.length - 1 && (
                <hr className="blog3-section-divider" />
              )}
            </section>
          ))}

          <div className="blog3-article-footer">
            <div className="blog3-tags-container">
              <span className="blog3-tags-label">Tags:</span>
              <span className="blog3-tag">Mobile Apps</span>
              <span className="blog3-tag">User Experience</span>
              <span className="blog3-tag">App Development</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blog3;
