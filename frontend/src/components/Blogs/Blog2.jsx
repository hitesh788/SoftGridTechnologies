import React, { useEffect, useState } from "react";
import "./Blog2.css";
import blog2Image from "../../assets/blog2.jpg";
import recommendedBlog1 from "../../assets/blog3.jpg";
import recommendedBlog2 from "../../assets/blog4.jpg";
import recommendedBlog3 from "../../assets/blog5.jpg";
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaLink,
  FaArrowCircleUp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const trends = [
  "Understanding ROI Basics",
  "Setting Measurable Goals",
  "Choosing the Right Channels",
  "Tracking Conversions",
  "Optimizing Ad Spend",
  "Leveraging Analytics",
  "Attribution Models Explained",
  "Customer Lifetime Value (CLV)",
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
    title: "5 Essential Features for Successful Mobile Apps",
    image: recommendedBlog1,
    category: "Technology",
    date: "May 15, 2025",
    url: "/blogs/essential-features-for-successful-mobile-apps",
  },
  {
    id: 2,
    title: "The Future of AI in Business Strategy",
    image: recommendedBlog2,
    category: "Development",
    date: "June 5, 2025",
    url: "/blogs/future-of-ai-in-business-strategy",
  },
  {
    id: 3,
    title: "UX/UX for E-commerce Success",
    image: recommendedBlog3,
    category: "Development",
    date: "June 5, 2025",
    url: "/blogs/ui-ux-for-e-commerce-success",
  },
];

const Blog2 = () => {
  const currentUrl = window.location.href;
  const shareText = "Check out these 10 Web Development Trends to Watch!";
  const [showButton, setShowButton] = useState(true);
  const navigate = useNavigate();

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
        tooltip.className = "blog2-copy-tooltip";
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
    <div className="blog2-blog-container">
      <div className="blog2-blog-header">
        <div className="blog2-breadcrumb">
          {showButton && (
            <button
              className="blog2-scroll-to-top"
              title="Scroll to top"
              onClick={scrollToTop}
            >
              <FaArrowCircleUp />
            </button>
          )}
        </div>

        <div className="blog2-header-content">
          <h1 className="blog2-blog-title">
            The Ultimate Guide to Digital Marketing ROI
          </h1>
          <div className="blog2-meta-info">
            <span className="blog2-author">
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
            <span className="blog2-publish-date">
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
            <span className="blog2-read-time">
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

      <div className="blog2-featured-image-container">
        <img
          src={blog2Image}
          alt="Web Development Trends"
          className="blog2-featured-image"
        />
        <div className="blog2-image-caption">
          Unlocking the true value of every marketing dollar spent
        </div>
      </div>

      <div className="blog2-blog-content">
        <aside className="blog2-sidebar">
          <div className="blog2-sidebar-content">
            <h3 className="blog2-sidebar-title">Trend Navigation</h3>
            <ul className="blog2-trend-nav">
              {trends.map((trend, i) => (
                <li key={i}>
                  <a href={`#trend-${i + 1}`} className="blog2-nav-link">
                    <span className="blog2-trend-number">{i + 1}.</span> {trend}
                  </a>
                </li>
              ))}
            </ul>

            {/* Recommended Blogs Section */}
            <div className="blog2-recommended-blogs">
              <h3 className="blog2-sidebar-title">Recommended Reads</h3>
              <div className="blog2-recommended-list">
                {recommendedBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="blog2-recommended-item"
                    onClick={() => navigateToBlog(blog.url)}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog2-recommended-image"
                    />
                    <div className="blog2-recommended-info">
                      <span className="blog2-recommended-category">
                        {blog.category}
                      </span>
                      <h4 className="blog2-recommended-title">{blog.title}</h4>
                      <span className="blog2-recommended-date">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="blog2-share-widget">
              <h3 className="blog2-share-title">Share This Article</h3>
              <div className="blog2-share-buttons">
                <a
                  href={shareUrls.facebook(currentUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="blog2-share-button blog2-facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={shareUrls.linkedin(currentUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="blog2-share-button blog2-linkedin"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={shareUrls.twitter(currentUrl, shareText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="blog2-share-button blog2-twitter"
                >
                  <FaTwitter />
                </a>
                <button
                  onClick={copyToClipboard}
                  className="blog2-share-button blog2-copy-link"
                  aria-label="Copy link to clipboard"
                >
                  <FaLink />
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="blog2-article-content">
          <div className="blog2-article-intro">
            <p className="blog2-lead-paragraph">
              Every marketing dollar counts, but the real challenge lies in
              transforming your spending into clear, measurable profits. In a
              world flooded with endless marketing options and noisy campaigns,
              knowing exactly how your investments translate into tangible
              results is what separates success from waste. This ultimate guide
              takes you deep into the art and science of mastering digital
              marketing ROI. You’ll learn how to maximize your returns by
              sharpening your strategies, cutting through the clutter, and
              making every campaign genuinely pay off. Whether you’re a seasoned
              marketer or just starting out, understanding ROI empowers you to
              make smarter decisions that fuel sustainable growth and give you a
              real edge in the competitive digital landscape. With the right
              approach, you can stop guessing and start knowing what truly moves
              the needle. This clarity helps you allocate resources wisely,
              prioritize high-impact initiatives, and avoid costly missteps. Get
              ready to unlock the power of data-driven marketing that respects
              both time-tested principles and tomorrow’s innovations.
            </p>
          </div>

          {trends.map((trend, i) => (
            <section
              key={i}
              id={`trend-${i + 1}`}
              className="blog2-trend-section"
            >
              <div className="blog2-section-header">
                <span className="blog2-section-number">{i + 1}</span>
                <h2 className="blog2-section-title">{trend}</h2>
              </div>
              <p className="blog2-section-content">
                {generateTrendDescription(trend)}
              </p>
              {i < trends.length - 1 && (
                <hr className="blog2-section-divider" />
              )}
            </section>
          ))}

          <div className="blog2-article-footer">
            <div className="blog2-tags-container">
              <span className="blog2-tags-label">Tags:</span>
              <span className="blog2-tag">Digital Marketing</span>
              <span className="blog2-tag">ROI</span>
              <span className="blog2-tag">Strategy</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

function generateTrendDescription(trend) {
  switch (trend) {
    case "Understanding ROI Basics":
      return (
        <p className="blog2-section-paragraph">
          <strong>Understanding ROI Basics</strong> is your foundational compass
          in the chaotic sea of marketing. It’s not just a metric; it’s the
          heartbeat of every campaign, measuring the net profit against the cost
          invested. Without knowing this ratio, you’re flying blind, throwing
          dollars into the void hoping something sticks. Mastering ROI means you
          can pinpoint exactly which efforts fuel growth and which drain your
          resources. This clarity transforms marketing from a cost center to a
          profit engine. Remember, the more accurately you measure, the smarter
          you spend, and the stronger your business stands against the
          unpredictable winds of competition. ROI is tradition meeting insight,
          a timeless formula for success. It’s the key that unlocks the door
          between guesswork and certainty, empowering marketers to justify
          budgets with confidence. By fully embracing ROI, you respect the value
          of every rupee spent and ensure your strategies contribute not just to
          short-term wins, but to long-term growth and resilience in a
          constantly evolving market.
        </p>
      );
    case "Setting Measurable Goals":
      return (
        <p className="blog2-section-paragraph">
          <strong>Setting Measurable Goals</strong> is the art of turning vague
          ambitions into precise, trackable targets. Without clear goals, your
          marketing is like a ship without a rudder, drifting aimlessly and
          wasting energy. Defining KPIs aligned with your broader vision ensures
          every step has meaning and every campaign moves you closer to your
          destination. These goals bring discipline and accountability, forcing
          you to face reality instead of wishful thinking. They keep your team
          motivated with milestones to celebrate and course-correct. In a noisy
          digital world full of distractions, measurable goals anchor your
          efforts in reality and tradition, proving that clear purpose will
          always outshine flashy gimmicks. More than just benchmarks, these
          goals become your strategic compass, guiding every decision and
          resource allocation. By setting measurable objectives, you build a
          framework that not only tracks progress but also fuels continuous
          improvement. It’s a time-tested approach that balances ambition with
          accountability, helping you steer your marketing ship steadily through
          the waves of change.
        </p>
      );
    case "Choosing the Right Channels":
      return (
        <p className="blog2-section-paragraph">
          <strong>Choosing the Right Channels</strong> is about knowing where
          your audience truly lives and speaks. Not every platform deserves your
          budget or attention; spraying money everywhere dilutes impact and
          drains your energy. Instead, focus on channels that resonate with your
          target customers, where your message cuts through the noise
          authentically. Research their habits, test diligently, and double down
          on what works. This targeted approach honors the time-tested marketing
          wisdom that quality beats quantity every time. By zeroing in on the
          right channels, you conserve resources, maximize engagement, and build
          brand loyalty that lasts beyond fleeting trends. It’s not just about
          being present everywhere but being impactful where it matters most.
          When you align your efforts with audience behavior, you create
          connections that feel genuine and foster trust. This strategy
          transforms marketing from a shot in the dark into a precision strike,
          ensuring your message lands with power and purpose.
        </p>
      );
    case "Tracking Conversions":
      return (
        <p className="blog2-section-paragraph">
          <strong>Tracking Conversions</strong> turns guessing into knowing. It
          measures those precious moments when your audience takes action
          signing up, buying, or committing. Without conversion data, your
          marketing is just noise, with no proof of impact. Accurate tracking
          tools capture these moments, revealing which campaigns pull their
          weight and which fall flat. More than just numbers, conversions
          illuminate the customer journey, exposing leaks where prospects drop
          off and opportunities to optimize. This insight transforms raw effort
          into refined strategy, letting you funnel resources to what truly
          moves the needle. Conversion tracking is where ancient wisdom meets
          modern tech to perfect the marketing craft. It empowers you to
          identify bottlenecks and understand the exact paths your customers
          take. With this knowledge, you can continuously refine your approach,
          turning potential lost leads into loyal advocates. In a landscape
          crowded with distractions, conversion tracking provides the clarity
          and precision needed to turn your marketing into measurable success.
        </p>
      );
    case "Optimizing Ad Spend":
      return (
        <p className="blog2-section-paragraph">
          <strong>Optimizing Ad Spend</strong> demands vigilance and agility,
          never dumping budget blindly but constantly tuning investments to
          where they yield the highest return. It’s the dance of moving funds
          from underperforming campaigns to those that spark growth. This
          ongoing refinement requires data, guts, and the humility to cut losses
          early. By making each rupee accountable, you sharpen your competitive
          edge and squeeze every drop of value from your spend. The best
          marketers are not those who spend the most, but those who spend
          wisely, this old-school wisdom is more relevant than ever in today’s
          fast-paced ad ecosystem. Constant monitoring and quick pivots separate
          winners from also-rans, enabling you to capitalize on trends before
          they fade. It’s about building a feedback loop where every decision is
          informed and every adjustment fuels better results. This disciplined
          approach turns ad budgets into powerful engines driving sustainable
          growth and real profit.
        </p>
      );
    case "Leveraging Analytics":
      return (
        <p className="blog2-section-paragraph">
          <strong>Leveraging Analytics</strong> unlocks the story hidden in
          numbers, turning raw data into strategic gold. Analytics tools give
          you real-time windows into customer behavior, campaign performance,
          and emerging trends. Armed with these insights, you replace guesswork
          with evidence-based decisions, fine-tuning your marketing to
          perfection. Analytics empower you to segment audiences, personalize
          messaging, and spot growth pockets before competitors do. Ignoring
          analytics is like sailing into a storm without instruments, risky and
          unnecessary. In this way, data is the modern marketer’s compass,
          blending the reliability of tradition with the power of technology.
          This deep dive into data reveals patterns that guide smarter targeting
          and messaging strategies, ensuring every campaign speaks directly to
          its intended audience. It also helps you measure ROI more accurately
          and forecast future trends, keeping you one step ahead. By embracing
          analytics, marketers transform raw numbers into stories of opportunity
          and pathways to lasting success.
        </p>
      );
    case "Attribution Models Explained":
      return (
        <p className="blog2-section-paragraph">
          <strong>Attribution Models Explained</strong> decode the complex
          journey customers take before converting. They assign credit to
          marketing touchpoints, showing which channels and campaigns truly
          drive action. Whether it’s first-touch, last-touch, linear, or time
          decay models, each tells a different story, revealing the mix of
          influences that lead to success. Choosing the right model requires
          understanding your sales cycle, customer behavior, and business goals.
          Proper attribution prevents you from over-investing in flashy but
          ineffective channels, while recognizing those subtle efforts that
          build momentum. This knowledge sharpens your strategy, ensuring every
          marketing step works in harmony, a blend of old-school accountability
          and new-age insight. It empowers you to allocate budgets where they
          make the most impact, avoiding wasted spend and maximizing returns.
          With accurate attribution, you can confidently identify the true
          drivers of growth and fine-tune your marketing mix accordingly.
          Mastering this balance is essential to sustaining long-term success in
          a competitive marketplace.
        </p>
      );
    case "Customer Lifetime Value (CLV)":
      return (
        <p className="blog2-section-paragraph">
          <strong>Customer Lifetime Value (CLV)</strong> shifts your gaze from
          the moment to the marathon, measuring the total worth a customer
          brings over their entire relationship with your brand. It’s a powerful
          metric that guides how much you can afford to spend on acquisition and
          retention while still profiting. Focusing on CLV encourages investing
          in loyalty, customer experience, and repeat business instead of
          chasing quick wins. This approach builds sustainable growth rooted in
          trust and long-term relationships, a timeless marketing truth.
          Understanding CLV lets you build a brand that doesn’t just survive the
          race but thrives for generations. It reveals hidden opportunities to
          upsell, cross-sell, and deepen engagement that most marketers
          overlook. By prioritizing lifetime value, you create strategies that
          nurture lasting bonds and elevate your customer base into loyal
          advocates. This mindset transforms marketing into a long game where
          every interaction adds meaningful value.
        </p>
      );
    default:
      return (
        <p className="blog2-section-paragraph">Stay tuned for more insights.</p>
      );
  }
}

export default Blog2;
