import React, { useEffect, useState } from "react";
import "./Blog4.css";
import blog4Image from "../../assets/blog4.jpg";
import recommendedBlog1 from "../../assets/blog5.jpg";
import recommendedBlog2 from "../../assets/blog6.jpg";
import recommendedBlog3 from "../../assets/blog1.jpg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaLink,
  FaArrowCircleUp,
  FaUser,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const insights = [
  "AI-Driven Decision Making",
  "Automation of Repetitive Tasks",
  "Personalized Customer Experiences",
  "Predictive Analytics & Forecasting",
  "Ethical AI and Governance",
  "Enhanced Collaboration Tools",
  "Scalable AI Integration",
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
    title: "UX/UX for E-commerce Success",
    image: recommendedBlog1,
    category: "Marketing",
    date: "February 15, 2025",
    url: "/blogs/ui-ux-for-e-commerce-success",
  },
  {
    id: 2,
    title: "Top Cybersecurity Trends to Follow",
    image: recommendedBlog2,
    category: "Tech Ethics",
    date: "March 10, 2025",
    url: "/blogs/top-cybersecurity-trends-to-follow",
  },
  {
    id: 3,
    title: "10 Web Development Trends to Watch",
    image: recommendedBlog3,
    category: "Business",
    date: "April 5, 2025",
    url: "/blogs/top-10-web-development-trends",
  },
];

const Blog4 = () => {
  const currentUrl = window.location.href;
  const shareText =
    "Discover how AI is transforming modern business strategy — the future is here!";
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
        tooltip.className = "blog4-copy-tooltip";
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
    <div className="blog4-blog-container">
      <div className="blog4-blog-header">
        <div className="blog4-breadcrumb">
          {showButton && (
            <button
              className="blog4-scroll-to-top"
              title="Scroll to top"
              onClick={scrollToTop}
            >
              <FaArrowCircleUp />
            </button>
          )}
        
        </div>

        <div className="blog4-header-content">
          <h1 className="blog4-blog-title">
            The Future of AI in Business Strategy
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
              By Ishan Singh Thakuri
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
              12 min read
            </span>
          </div>
        </div>
      </div>

      <div className="blog4-featured-image-container">
        <img
          src={blog4Image}
          alt="AI in Business Strategy"
          className="blog4-featured-image"
        />
        <div className="blog4-image-caption">
          Embracing AI as the cornerstone of future business success
        </div>
      </div>

      <div className="blog4-blog-content">
        <aside className="blog4-sidebar">
          <div className="blog4-sidebar-content">
            <h3 className="blog4-sidebar-title">Explore Insights</h3>
            <ul className="blog1-trend-nav">
              {insights.map((insight, i) => (
                <li key={i}>
                  <a href={`#insight-${i + 1}`} className="blog1-nav-link">
                    <span className="blog1-trend-number">{i + 1}.</span>{" "}
                    {insight}
                  </a>
                </li>
              ))}
            </ul>

            <div className="blog4-recommended-blogs">
              <h3 className="blog4-sidebar-title">Recommended Reads</h3>
              <div className="blog4-recommended-list">
                {recommendedBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="blog4-recommended-item"
                    onClick={() => navigateToBlog(blog.url)}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog4-recommended-image"
                    />
                    <div className="blog4-recommended-info">
                      <span className="blog4-recommended-category">
                        {blog.category}
                      </span>
                      <h4 className="blog4-recommended-title">{blog.title}</h4>
                      <span className="blog4-recommended-date">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="blog4-share-widget">
              <h3 className="blog4-share-title">Share This Article</h3>
              <div className="blog4-share-buttons">
                <a
                  href={shareUrls.facebook(currentUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="blog4-share-button blog4-facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={shareUrls.linkedin(currentUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="blog4-share-button blog4-linkedin"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={shareUrls.twitter(currentUrl, shareText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="blog4-share-button blog4-twitter"
                >
                  <FaTwitter />
                </a>
                <button
                  onClick={copyToClipboard}
                  className="blog4-share-button blog4-copy-link"
                  aria-label="Copy link to clipboard"
                >
                  <FaLink />
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="blog4-article-content">
          <div className="blog4-article-intro">
            <p className="blog4-lead-paragraph">
              AI isn’t just some passing buzzword; it’s fundamentally reshaping
              the way businesses plan, make decisions, and grow in today’s
              fast-paced world. From analyzing massive amounts of data to
              predicting trends before they even emerge, AI is becoming the
              secret weapon for companies that want to stay competitive and
              innovate continuously. This guide dives deep into the
              game-changing ways AI will define tomorrow’s business strategies,
              helping you understand how to harness its power to stay ahead of
              the curve. Whether you’re looking to improve customer experiences,
              optimize operations, or create new revenue streams, embracing AI
              isn’t optional. It is essential for anyone who wants to lead in
              the future marketplace.
            </p>
          </div>

          {insights.map((insight, i) => (
            <section
              key={i}
              id={`insight-${i + 1}`}
              className="blog4-insight-section"
            >
              <div className="blog4-section-header">
                <span className="blog4-section-number">{i + 1}</span>
                <h2 className="blog4-section-title">{insight}</h2>
              </div>
              <div className="blog4-section-content">
                {generateInsightDescription(insight)}
              </div>
              {i < insights.length - 1 && (
                <hr className="blog4-section-divider" />
              )}
            </section>
          ))}

          <div className="blog4-article-footer">
            <div className="blog4-tags-container">
              <span className="blog4-tags-label">Tags:</span>
              <span className="blog4-tag">AI</span>
              <span className="blog4-tag">Business Strategy</span>
              <span className="blog4-tag">Innovation</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

function generateInsightDescription(insight) {
  switch (insight) {
    case "AI-Driven Decision Making":
      return (
        <p className="blog4-section-paragraph">
          Harness AI to cut through the noise and make smarter, faster decisions
          with data-backed confidence. In today’s complex business environment,
          the sheer volume of information can be overwhelming, making it
          difficult to identify the signals that truly matter. AI-driven
          decision-making changes everything by using advanced algorithms to
          analyze vast and varied datasets quickly. These systems go beyond just
          processing numbers. They reveal hidden patterns, detect emerging
          trends, and uncover insights that might otherwise remain unnoticed. By
          providing real-time, actionable intelligence, AI enables businesses to
          respond promptly to market changes, adjust strategies immediately, and
          optimize how resources are distributed across teams and projects. This
          level of agility and accuracy allows companies to make well-informed
          strategic choices that support sustainable growth and keep them ahead
          of competitors. Ultimately, using AI in decision-making is not only
          about improving efficiency but about turning uncertainty into
          opportunity and achieving smarter results in every area of business.
        </p>
      );
    case "Automation of Repetitive Tasks":
      return (
        <p className="blog4-section-paragraph">
          Free your team from mundane chores by automating routine processes,
          boosting both efficiency and creativity in the workplace. AI powered
          automation is transforming how businesses handle repetitive tasks such
          as data entry, scheduling appointments, and managing customer support
          inquiries. By taking these time consuming duties off employees’
          plates, AI opens up space for people to focus on high value creative
          work that actually drives innovation and moves the needle. This shift
          does not just make day to day operations smoother it empowers your
          team to think bigger brainstorm bolder and solve complex problems that
          require human insight and imagination. When employees are freed from
          the grind of monotonous tasks their motivation and job satisfaction
          rise which in turn leads to higher overall productivity and better
          outcomes for the business. Embracing AI automation is not about
          replacing people it is about amplifying their strengths and creating
          an environment where creativity and efficiency thrive side by side.
        </p>
      );
    case "Personalized Customer Experiences":
      return (
        <p className="blog4-section-paragraph">
          Leverage AI to tailor every customer touchpoint, making interactions
          feel personal and meaningful. By analyzing user behavior, preferences,
          and historical data, AI can deliver customized recommendations that
          truly resonate with each individual. It enables businesses to create
          targeted marketing campaigns designed to reach the right people at the
          right time with messages that speak directly to their interests.
          Beyond marketing, AI-powered personalization extends to customer
          support, offering tailored assistance that anticipates needs and
          resolves issues quickly. This thoughtful approach builds stronger
          customer loyalty and satisfaction by showing users that the brand
          understands and values them. When every interaction feels tailored and
          relevant, customers are more likely to engage deeply, trust the
          business, and keep coming back for more.
        </p>
      );
    case "Predictive Analytics & Forecasting":
      return (
        <p className="blog4-section-paragraph">
          Look beyond the present moment and tap into the future with AI driven
          analytics that do more than just report on what is happening now.
          These powerful tools predict trends and guide your strategy toward
          sustained growth by unlocking insights hidden deep within data. By
          leveraging sophisticated machine learning models, businesses can
          forecast market demands with remarkable accuracy helping them prepare
          inventory levels just right and avoid costly shortages or surpluses.
          But it does not stop there. AI helps anticipate customer needs before
          they even voice them allowing companies to tailor products services
          and marketing efforts proactively. This forward looking approach
          enables organizations to move faster make smarter decisions and
          outpace competitors who are stuck reacting to yesterday’s data. In a
          world where change happens lightning fast embracing AI powered
          forecasting is not just an advantage it is a necessity for staying
          relevant and thriving in the long run.
        </p>
      );
    case "Ethical AI and Governance":
      return (
        <p className="blog4-section-paragraph">
          As AI grows, so does the responsibility that comes with it. It is
          essential to embed ethics and strong governance throughout every stage
          of AI development and deployment to build lasting trust and
          sustainability. Implementing transparent AI practices means being open
          about how AI systems work and what data they use. Addressing biases is
          crucial to ensure fairness and prevent discrimination, making sure the
          technology treats all users equitably. Equally important is ensuring
          full compliance with laws and regulations that govern data privacy and
          AI usage. By prioritizing these principles, businesses can foster
          confidence among users and stakeholders alike, positioning AI not just
          as a powerful tool but as a reliable and ethical driver of business
          growth. This commitment to responsible AI is what will ultimately
          determine success in an increasingly AI-driven world. Without a solid
          ethical foundation, AI risks causing harm and losing public trust.
          Organizations that proactively engage with these challenges will lead
          the way in shaping a future where technology benefits everyone. The
          path forward requires constant vigilance, education, and collaboration
          across industries to uphold these standards.
        </p>
      );
    case "Enhanced Collaboration Tools":
      return (
        <p className="blog4-section-paragraph">
          AI powered collaboration tools streamline communication and project
          management, enabling teams to work smarter and more efficiently. These
          technologies offer a wide range of features, from intelligent
          scheduling assistants that help coordinate meetings without the back
          and forth, to real time language translation that breaks down
          communication barriers across global teams. Automated meeting
          summaries capture key points and action items, making it easier for
          everyone to stay aligned and follow up on tasks. By removing common
          obstacles and simplifying workflows, AI collaboration tools not only
          boost productivity but also foster a culture of seamless teamwork.
          This leads to faster decision making, better problem solving, and
          stronger connections no matter where team members are located. As
          these tools continue to evolve, they will play an even bigger role in
          shaping how work gets done in the future. Embracing AI powered
          collaboration is no longer optional but essential for organizations
          that want to stay competitive and agile.
        </p>
      );
    case "Scalable AI Integration":
      return (
        <p className="blog4-section-paragraph">
          Build a future ready business with scalable AI solutions that grow
          alongside your needs. By integrating AI into core systems using
          modular and flexible architectures, businesses gain the ability to
          adapt quickly to evolving demands and market changes. This approach
          allows companies to incorporate new AI capabilities seamlessly as
          technology advances, without the need for costly and disruptive
          overhauls to existing infrastructure. Scalability ensures that as your
          business expands, your AI tools can handle increased workloads and
          more complex tasks without losing performance or reliability.
          Ultimately, investing in scalable AI solutions empowers organizations
          to stay agile, innovate continuously, and maintain a competitive edge
          in an ever changing landscape. This flexibility also supports faster
          time to market when launching new products or services. Businesses can
          experiment and iterate with confidence knowing their AI infrastructure
          can support growth and change. By planning for scalability from the
          start, companies build a foundation that supports long term success
          and resilience.
        </p>
      );
    default:
      return (
        <p className="blog4-section-paragraph">
          Stay curious and adaptive, the AI revolution is just beginning. As AI
          continues to evolve, businesses that embrace continuous learning and
          adaptability will thrive in an increasingly dynamic landscape.
        </p>
      );
  }
}

export default Blog4;
