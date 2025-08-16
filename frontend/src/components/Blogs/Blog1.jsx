import React, { useEffect, useState } from "react";
import "./Blog1.css";
import blog1Image from "../../assets/blog1.jpg";
import recommendedBlog1 from "../../assets/blog2.jpg";
import recommendedBlog2 from "../../assets/blog3.jpg";
import recommendedBlog3 from "../../assets/blog4.jpg";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaLink,
  FaArrowCircleUp,
} from "react-icons/fa";
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";


const trends = [
  "Progressive Web Apps (PWAs)",
  "Jamstack Architecture",
  "AI-Powered Development",
  "Serverless Computing",
  "WebAssembly",
  "Motion UI & Microinteractions",
  "API-First Design",
  "Voice Search Optimization",
  
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
    title: "The Ultimate Guide to Digital Marketing ROI",
    image: recommendedBlog1,
    category: "Technology",
    date: "May 15, 2025",
    url: "/blogs/the-ultimate-guide-to-digital-marketing-roi",
  },
  {
    id: 2,
    title: "5 Essential Features for Successful Mobile Apps",
    image: recommendedBlog2,
    category: "Development",
    date: "June 5, 2025",
    url: "/blogs/essential-features-for-successful-mobile-apps",
  },
  {
    id: 3,
    title: "The Future of AI in Business Strategy",
    image: recommendedBlog3,
    category: "Development",
    date: "June 5, 2025",
    url: "/blogs/future-of-ai-in-business-strategy",
  },
];

const Blog1 = () => {
  const currentUrl = window.location.href;
  const shareText = "Check out these 10 Web Development Trends to Watch!";
  const [showButton, setShowButton] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      if (scrollY >= 2 * viewportHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
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
        tooltip.className = "blog1-copy-tooltip";
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
    <div className="blog1-blog-container">
      <div className="blog1-blog-header">
        <div className="blog1-breadcrumb">
          {showButton && (
            <button
              className="blog1-scroll-to-top"
              title="Scroll to top"
              onClick={scrollToTop}
            >
              <FaArrowCircleUp />
            </button>
          )}
        
        </div>

        <div className="blog1-header-content">
          <h1 className="blog1-blog-title">
            10 Web Development Trends to Watch in 2025
          </h1>
          <div className="blog1-meta-info">
            <span className="blog1-author">
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
            <span className="blog1-publish-date">
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
            <span className="blog1-read-time">
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

      <div className="blog1-featured-image-container">
        <img
          src={blog1Image}
          alt="Web Development Trends"
          className="blog1-featured-image"
        />
        <div className="blog1-image-caption">
          Emerging technologies shaping the future of web development
        </div>
      </div>

      <div className="blog1-blog-content">
        <aside className="blog1-sidebar">
          <div className="blog1-sidebar-content">
            <h3 className="blog1-sidebar-title">Trend Navigation</h3>
            <ul className="blog1-trend-nav">
              {trends.map((trend, i) => (
                <li key={i}>
                  <a href={`#trend-${i + 1}`} className="blog1-nav-link">
                    <span className="blog1-trend-number">{i + 1}.</span> {trend}
                  </a>
                </li>
              ))}
            </ul>

            {/* Recommended Blogs Section */}
            <div className="blog1-recommended-blogs">
              <h3 className="blog1-sidebar-title">Recommended Reads</h3>
              <div className="blog1-recommended-list">
                {recommendedBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="blog1-recommended-item"
                    onClick={() => navigateToBlog(blog.url)}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog1-recommended-image"
                    />
                    <div className="blog1-recommended-info">
                      <span className="blog1-recommended-category">
                        {blog.category}
                      </span>
                      <h4 className="blog1-recommended-title">{blog.title}</h4>
                      <span className="blog1-recommended-date">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="blog1-share-widget">
              <h3 className="blog1-share-title">Share This Article</h3>
              <div className="blog1-share-buttons">
                <a
                  href={shareUrls.facebook(currentUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="blog1-share-button blog1-facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={shareUrls.linkedin(currentUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="blog1-share-button blog1-linkedin"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={shareUrls.twitter(currentUrl, shareText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="blog1-share-button blog1-twitter"
                >
                  <FaTwitter />
                </a>
                <button
                  onClick={copyToClipboard}
                  className="blog1-share-button blog1-copy-link"
                  aria-label="Copy link to clipboard"
                >
                  <FaLink />
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="blog1-article-content">
          <div className="blog1-article-intro">
            <p className="blog1-lead-paragraph">
              The web is a restless tide, forever rolling and reshaping beneath
              our feet, never pausing, never waiting for anyone to catch up. If
              you’re not sprinting to match its pace, you’re already shadows
              behind the curve, fading into obscurity as new tools and ideas
              sweep across the digital horizon. From bleeding-edge frameworks
              that rewrite the rules of how we build, to seismic shifts in user
              experience that challenge what it means to truly engage an
              audience, the landscape is evolving faster than ever before. This
              isn’t just about following trends, it’s about anticipating the
              next wave before it crashes, arming yourself with knowledge and
              insight to stay relevant in a world where yesterday’s innovations
              are tomorrow’s relics. Consider this your frontline dispatch, a
              carefully curated list of the top 10 web development trends that
              are carving the path forward, shaping the digital tomorrow, and
              ready to either make or break your online empire if you’re not
              paying attention.
            </p>
          </div>

          {trends.map((trend, i) => (
            <section
              key={i}
              id={`trend-${i + 1}`}
              className="blog1-trend-section"
            >
              <div className="blog1-section-header">
                <span className="blog1-section-number">{i + 1}</span>
                <h2 className="blog1-section-title">{trend}</h2>
              </div>
              <p className="blog1-section-content">
                {generateTrendDescription(trend)}
              </p>
              {i < trends.length - 1 && (
                <hr className="blog1-section-divider" />
              )}
            </section>
          ))}

          <div className="blog1-article-footer">
            <div className="blog1-tags-container">
              <span className="blog1-tags-label">Tags:</span>
              <span className="blog1-tag">Web Development</span>
              <span className="blog1-tag">Trends</span>
              <span className="blog1-tag">2025</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

function generateTrendDescription(trend) {
  switch (trend) {
    case "Progressive Web Apps (PWAs)":
      return (
        <p className="blog1-section-paragraph">
          <strong>Progressive Web Apps (PWAs) </strong>
          are the digital chameleons of the modern web seamlessly bridging the
          gap between traditional websites and native apps. They bring
          lightning-fast load times that defy the usual web sluggishness,
          letting users dive right in without the wait. But PWAs don’t stop
          there; they work offline, keeping your app alive and kicking even when
          connectivity fades, turning unpredictable networks into a non-issue.
          Imagine delivering an app-like experience without forcing users to
          hunt down downloads or updates a smooth, native feel served straight
          from the browser, anytime and anywhere. In an era where speed and
          accessibility dictate success, PWAs aren’t just an option; they’re a
          necessity for anyone serious about owning the digital space.
        </p>
      );

    case "Jamstack Architecture":
      return (
        <p className="blog1-section-paragraph">
          <strong>Jamstack Architecture</strong> is where speed and security
          collide to forge a digital powerhouse. By boldly decoupling the
          backend from the frontend, Jamstack liberates developers from the
          tangled web of traditional server-side constraints. This modern
          approach empowers creators to craft websites that don’t just load
          quickly, they blaze in with near-instant response times, no matter
          the device or connection. Leaning heavily on pre-rendering pages and
          distributing content through global CDNs, it slashes latency and
          strengthens defenses against cyber threats that often plague
          monolithic setups. What you get is a resilient, scalable platform that
          gracefully handles traffic surges and offers seamless user experiences
          even under pressure. Jamstack honors the timeless wisdom of simplicity
          while boldly embracing the demands of tomorrow’s web proving that
          sometimes, going back to basics is the fastest way forward in a world
          that never stops evolving.
        </p>
      );

    case "AI-Powered Development":
      return (
        <p className="blog1-section-paragraph">
          <strong>AI-Powered Development</strong> has
          moved far beyond the realm of science fiction to become a powerful
          ally in every coder’s toolkit. What was once a futuristic dream is now
          a reality where AI-driven tools handle the heavy lifting, automating
          everything from generating code and hunting down bugs to fine-tuning
          UI and UX design with precise, surgical accuracy. This seamless blend
          of human creativity and machine efficiency transforms the entire
          process of building web applications, dramatically shortening
          development cycles while unlocking smarter, more intuitive user
          experiences. It is not about replacing the human touch but about
          amplifying it, freeing developers to focus on innovation, creativity,
          and problem-solving rather than repetitive tasks. In order to thrive
          in tomorrow’s fast-evolving digital landscape, embracing this AI
          revolution is no longer optional; it is the essential key to staying
          ahead in a race that waits for no one.
        </p>
      );
    case "Serverless Computing":
      return (
        <p className="blog1-section-paragraph">
          <strong>Serverless Computing</strong> marks a
          confident goodbye to the era of always-on servers and the complex
          headaches of managing infrastructure. Instead, it brings a new way of
          working where your code only runs when needed, scaling automatically
          and charging you only for the resources you actually consume. This
          shift frees developers from the constant burdens of server upkeep and
          capacity planning, allowing them to focus their energy on building
          innovative features and creating memorable user experiences.
          Serverless represents the ideal balance between efficiency and
          freedom, a cloud-native evolution designed to keep pace with the
          fast-moving world of modern development. It’s not just another tool
          but a fundamental change in how applications are built, enabling teams
          to innovate freely while the backend quietly handles the heavy
          lifting. This approach transforms scalability, reduces operational
          overhead, and empowers businesses to respond instantly to changing
          user demands without the usual delays. Serverless computing is shaping
          the future of software development by making agility and resilience
          the foundation of every project, giving teams the power to deliver
          value faster than ever before.
        </p>
      );
    case "WebAssembly":
      return (
        <p className="blog1-section-paragraph">
          <strong>WebAssembly</strong> unlocks near-native speed
          directly inside your browser breaking down the traditional performance
          barriers that once limited what web applications could achieve. By
          compiling powerful languages like C++ and Rust into a compact and
          efficient binary format WebAssembly allows heavyweight applications
          from richly immersive games to professional-grade video editors to run
          smoothly and seamlessly online without compromise. This groundbreaking
          technology transforms the browser into a high-performance playground
          expanding the horizon of what was once thought possible on the web.
          For developers bold enough to break the mold and challenge convention
          WebAssembly opens the door to a new era of innovation where raw
          computational power blends effortlessly with the accessibility and
          ubiquity of the internet. It reshapes the digital landscape inviting
          creators to build faster richer and more complex experiences right in
          the browser revolutionizing how we interact with web technology every
          day.
        </p>
      );
    case "Motion UI & Microinteractions":
      return (
        <p className="blog1-section-paragraph">
          <strong>Motion UI & Microinteractions</strong> are the subtle
          storytellers of the digital realm, breathing life into interfaces that
          might otherwise feel cold and static. These small yet deliberate
          animations serve as signposts and emotional whispers, guiding users
          seamlessly through their journey with your site or app. From the
          delicate hover that hints at a button’s purpose, to the satisfying
          bounce when an action completes, microinteractions add nuance,
          feedback, and personality transforming mechanical clicks into
          moments that resonate on a human level. Beyond mere decoration, they
          build trust and clarity, reassuring users that their actions have
          meaning and effect. This intricate dance of motion is deeply rooted in
          classical design principles, where every movement carries intention
          and grace. Yet, in today’s fast-moving digital landscape, mastering
          microinteractions is crucial for creating experiences that feel alive,
          intuitive, and downright delightful. It’s where art meets science,
          tradition melds with innovation, and every pixel tells a story,
          making your product not just usable, but truly memorable.
        </p>
      );
    case "API-First Design":
      return (
        <p className="blog1-section-paragraph">
          <strong>API-First Design</strong> puts connectivity
          and communication right at the core of application development,
          championing a mindset where modularity and scalability are not
          afterthoughts but the very foundation. By designing your APIs from the
          start, you build a flexible and robust architecture that acts like the
          digital nervous system of your software, seamlessly linking different
          platforms, devices, and services into one harmonious ecosystem. This
          approach simplifies integration and makes your application
          future-proof, ready to evolve and grow as technology advances without
          breaking a sweat. Rooted in the time-tested principles of clean,
          maintainable architecture, API-First embraces the fluid and
          interconnected future of the web where traditional boundaries blur and
          collaboration thrives effortlessly. It serves as the blueprint for
          creating resilient and adaptable software that can stand tall amid the
          constant waves of change, helping you stay ahead in a fast-moving
          digital world.
        </p>
      );
    case "Voice Search Optimization":
      return (
        <p className="blog1-section-paragraph">
          <strong>Voice Search Optimization</strong> is your website’s confident
          leap into a hands-free future where people speak their queries instead
          of typing, expecting quick, natural, and conversational answers that
          feel like real conversations rather than robotic responses. It goes
          far beyond simply using keywords; it requires crafting content that
          truly reflects the way people talk, with the questions, rhythms, and
          everyday phrases they actually use in their daily lives. More than
          just words, it means structuring your data carefully so that smart
          assistants like Alexa, Siri, and Google can easily find, understand,
          and deliver your information instantly and accurately. This powerful
          combination of advanced technology and timeless human communication
          transforms your website from a static collection of pages into a
          living, responsive companion that becomes a natural extension of
          everyday life. Ignoring voice search today is like ignoring the
          invention of electricity when it first powered cities. Embracing voice
          search optimization is no longer optional but an absolute necessity
          for anyone who wants to stay relevant, visible, and ahead of the curve
          in a world that is moving faster, thinking smarter, and speaking
          louder every day. Whether you are a seasoned marketer or a business
          owner just starting out, diving into voice search means
          future-proofing your online presence, connecting more deeply with your
          audience, and mastering the art of being heard clearly in a noisy and
          ever-changing digital landscape. The future is not only digital but
          vocal, conversational, and alive. Are you ready to listen and respond?
        </p>
      );
    default:
      return "Stay tuned for more insights.";
  }
}

export default Blog1;
