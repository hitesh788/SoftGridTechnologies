import React, { useEffect, useState } from "react";
import "./Blog5.css";
import blog5Image from "../../assets/blog5.jpg";
import recommendedBlog1 from "../../assets/blog6.jpg";
import recommendedBlog2 from "../../assets/blog1.jpg";
import recommendedBlog3 from "../../assets/blog2.jpg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaLink,
  FaArrowCircleUp,
} from "react-icons/fa";
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";

const principles = [
  "Clear & Consistent Navigation",
  "Fast & Responsive Design",
  "Compelling Visual Hierarchy",
  "Trust Signals & Transparency",
  "Seamless Checkout Process",
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
    title: "Top Cybersecurity Trends to Follow",
    image: recommendedBlog1,
    category: "Design",
    date: "January 20, 2025",
    url: "/blogs/top-cybersecurity-trends-to-follow",
  },
  {
    id: 2,
    title: "10 Web Development Trends to Watch",
    image: recommendedBlog2,
    category: "Mobile UX",
    date: "February 15, 2025",
    url: "/blogs/top-10-web-development-trends",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Digital Marketing ROI",
    image: recommendedBlog3,
    category: "E-commerce",
    date: "March 10, 2025",
    url: "/blogs/the-ultimate-guide-to-digital-marketing-roi",
  },
];

const Blog5 = () => {
  const currentUrl = window.location.href;
  const shareText =
    "Want to boost e-commerce conversions? Check out these essential UX/UI principles!";
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
        tooltip.className = "blog5-copy-tooltip";
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
    <div className="blog5-blog-container">
      <div className="blog5-blog-header">
        <div className="blog5-breadcrumb">
          {showButton && (
            <button
              className="blog5-scroll-to-top"
              title="Scroll to top"
              onClick={scrollToTop}
            >
              <FaArrowCircleUp />
            </button>
          )}
        </div>

        <div className="blog5-header-content">
          <h1 className="blog5-blog-title">UX/UI for E-commerce Success</h1>
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
              By Shilpa Shetty
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
              August 14, 2025
            </span>
            <span className="blog1-read-time">
              <FaClock
                style={{
                  marginRight: "6px",
                  verticalAlign: "middle",
                  color: "navy",
                }}
              />
              10 min read
            </span>
          </div>
        </div>
      </div>

      <div className="blog5-featured-image-container">
        <img
          src={blog5Image}
          alt="E-commerce UX/UI"
          className="blog5-featured-image"
        />
        <div className="blog5-image-caption">
          Design principles that turn browsers into buyers
        </div>
      </div>

      <div className="blog5-blog-content">
        <aside className="blog5-sidebar">
          <div className="blog5-sidebar-content">
            <h3 className="blog5-sidebar-title">Core Principles</h3>
            <ul className="blog5-trend-nav">
              {principles.map((principle, i) => (
                <li key={i}>
                  <a href={`#principle-${i + 1}`} className="blog5-nav-link">
                    <span className="blog5-trend-number">{i + 1}.</span>{" "}
                    {principle}
                  </a>
                </li>
              ))}
            </ul>

            {/* Recommended Blogs Section */}
            <div className="blog5-recommended-blogs">
              <h3 className="blog5-sidebar-title">Recommended Reads</h3>
              <div className="blog5-recommended-list">
                {recommendedBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="blog5-recommended-item"
                    onClick={() => navigateToBlog(blog.url)}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog5-recommended-image"
                    />
                    <div className="blog5-recommended-info">
                      <span className="blog5-recommended-category">
                        {blog.category}
                      </span>
                      <h4 className="blog5-recommended-title">{blog.title}</h4>
                      <span className="blog5-recommended-date">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="blog5-share-widget">
              <h3 className="blog5-share-title">Share This Article</h3>
              <div className="blog5-share-buttons">
                <a
                  href={shareUrls.facebook(currentUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="blog5-share-button blog5-facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={shareUrls.linkedin(currentUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="blog5-share-button blog5-linkedin"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={shareUrls.twitter(currentUrl, shareText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="blog5-share-button blog5-twitter"
                >
                  <FaTwitter />
                </a>
                <button
                  onClick={copyToClipboard}
                  className="blog5-share-button blog5-copy-link"
                  aria-label="Copy link to clipboard"
                >
                  <FaLink />
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="blog5-article-content">
          <div className="blog5-article-intro">
            <p className="blog5-lead-paragraph">
              In the crowded arena of e-commerce, it is the UX and UI that make
              or break your game, deciding whether visitors stick around or
              bounce before you even get a chance to show off. Mastering these
              core principles is not just a nice to have, it is the difference
              between a scrolling ghost town and a bustling digital marketplace.
              When your design feels effortless, intuitive, and tailored to the
              user’s needs, you do not just keep eyeballs glued, you build
              trust, spark engagement, and ultimately watch your conversion
              rates soar to new heights. Nail these fundamentals, and your
              e-commerce platform transforms from just another site into a must
              visit destination that turns casual browsers into loyal customers.
            </p>
          </div>

          {principles.map((principle, i) => (
            <section
              key={i}
              id={`principle-${i + 1}`}
              className="blog5-principle-section"
            >
              <div className="blog5-section-header">
                <span className="blog5-section-number">{i + 1}</span>
                <h2 className="blog5-section-title">{principle}</h2>
              </div>
              <p className="blog5-section-content">
                {generatePrincipleDescription(principle)}
              </p>
              {i < principles.length - 1 && (
                <hr className="blog5-section-divider" />
              )}
            </section>
          ))}

          <div className="blog5-article-footer">
            <div className="blog5-tags-container">
              <span className="blog5-tags-label">Tags:</span>
              <span className="blog5-tag">E-commerce</span>
              <span className="blog5-tag">UX/UI</span>
              <span className="blog5-tag">Conversion</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

function generatePrincipleDescription(principle) {
  switch (principle) {
    case "Clear & Consistent Navigation":
      return (
        <p className="blog1-section-paragraph">
          In the realm of e-commerce, where users expect instant access to
          products and effortless browsing, clear and consistent navigation
          serves as the backbone of an effective online store. It is the
          framework that organizes information and guides visitors intuitively
          through your site, helping them find exactly what they want without
          unnecessary confusion or delay. When navigation is thoughtfully
          designed, every user whether a first-time visitor or a returning
          customer can easily understand the site’s structure at a glance. This
          clarity comes from using familiar navigation patterns, consistent
          placement of menus and buttons, and predictable pathways that
          eliminate guesswork. For example, keeping the main menu in the same
          position across all pages, using clear category labels, and offering
          prominent search bars help users build a mental map of the site. This
          mental map reduces cognitive load, meaning visitors don’t have to
          think hard about how to explore or where to click next they simply
          flow through the shopping experience. Moreover, consistency extends
          beyond placement to include visual styling and interaction behavior.
          Buttons that look clickable on one page should look the same on
          others. Dropdown menus, filters, and breadcrumbs should operate
          similarly throughout the site, fostering trust and reducing
          frustration. Users quickly learn how your site works and develop
          confidence in navigating it, which directly influences their
          willingness to stay, browse more products, and make purchases. Good
          navigation also supports multiple user journeys whether someone is
          casually browsing categories, searching for a specific item, or
          returning to complete a previously abandoned cart. Providing clear
          paths, such as “Back to Category,” “Related Products,” or “Continue
          Shopping,” ensures users always know where they are and what their
          options are next. This prevents dead ends and confusion, which are
          common causes of bounce and cart abandonment.Additionally, navigation
          should be optimized for every device. With mobile shopping on the
          rise, menus need to be easily accessible and usable on smaller screens
          without overwhelming the user. Responsive design and thoughtful touch
          targets maintain the clarity and consistency users expect, regardless
          of the device they choose.
        </p>
      );
    case "Fast & Responsive Design":
      return (
        <p className="blog1-section-paragraph">
          In today’s digital age, speed and responsiveness are no longer just
          nice-to-haves they are critical pillars that determine the success of
          any e-commerce platform. Fast loading times and a fluid, responsive
          interface directly impact user satisfaction, engagement, and
          ultimately, conversion rates. Users expect pages to load almost
          instantly. Even a delay of a few seconds can cause frustration,
          increase bounce rates, and lead potential customers to abandon their
          shopping journey altogether. Optimizing website speed by compressing
          images, leveraging caching, minimizing code, and using efficient
          hosting is essential to meet these expectations. Fast-loading pages
          create a sense of reliability and professionalism, making visitors
          more likely to trust your brand and stay longer to explore products.
          Beyond raw speed, responsive design ensures your website adapts
          seamlessly to different devices and screen sizes, from large desktop
          monitors to tablets and smartphones. With the explosion of mobile
          shopping, delivering a smooth and accessible experience on small
          screens is vital. Responsive layouts automatically adjust content,
          navigation, images, and interactive elements to fit any device without
          sacrificing usability or aesthetics. This adaptability means users
          don’t have to pinch, zoom, or struggle to interact with your site it’s
          optimized for touch, clarity, and convenience everywhere. A responsive
          design combined with fast performance empowers shoppers to browse and
          buy anytime, anywhere, whether on a slow café Wi-Fi or a blazing 5G
          connection. It eliminates barriers to engagement, reduces friction
          during product discovery and checkout, and encourages repeat visits.
          Moreover, fast and responsive design benefits your SEO ranking, as
          search engines prioritize sites that deliver excellent performance and
          mobile usability. This increases organic traffic and broadens your
          reach to potential customers. In short, prioritizing speed and
          responsiveness transforms your e-commerce platform into a
          customer-centric, efficient, and reliable destination. It keeps
          visitors engaged, builds trust, and maximizes sales potential by
          providing an effortless shopping experience on any device at any time{" "}
        </p>
      );
    case "Compelling Visual Hierarchy":
      return (
        <p className="blog1-section-paragraph">
          In the crowded and competitive space of e-commerce, a compelling
          visual hierarchy is essential to guide users effortlessly through your
          website and highlight what matters most. Visual hierarchy is the
          deliberate arrangement and styling of design elements such as size,
          color, contrast, spacing, and typography to establish an order of
          importance that naturally directs users’ eyes and attention. A
          well-crafted visual hierarchy helps users quickly scan and understand
          product categories, key offers, calls to action (CTAs), and essential
          information without feeling overwhelmed or lost. By using larger
          fonts, bold colors, or prominent placement for primary elements like
          “Add to Cart” buttons or promotional banners, you create clear focal
          points that invite interaction and guide users toward desired
          behaviors.Beyond grabbing attention, a strong visual hierarchy
          improves readability and reduces cognitive load by organizing content
          into digestible sections. Clear distinctions between headlines,
          descriptions, images, and navigation cues help users absorb
          information more intuitively and make faster decisions. This is
          especially critical in e-commerce, where customers want to evaluate
          product options quickly and confidently. Consistency in visual cues
          such as uniform button styles, predictable placement of price tags, or
          recognizable icons reinforces user familiarity and trust. It also
          supports brand identity, making your store not only easy to navigate
          but memorable and professional. Moreover, visual hierarchy should
          adapt across devices, maintaining clarity and emphasis on mobile
          screens where space is limited. Responsive typography, scaling images,
          and thoughtful spacing ensure that users get a coherent and engaging
          experience whether they browse on desktop or smartphone. Ultimately, a
          compelling visual hierarchy transforms your e-commerce platform from a
          simple catalog into an engaging story that leads users from discovery
          to purchase. It reduces friction, highlights value propositions, and
          motivates action making it a fundamental ingredient for UX/UI success
          and higher conversion rates.{" "}
        </p>
      );
    case "Trust Signals & Transparency":
      return (
        <p className="blog1-section-paragraph">
          In e-commerce, trust is currency. Without face-to-face interaction,
          customers rely heavily on visual and informational cues to decide
          whether a site is credible and safe. Trust signals and transparency
          are vital UX/UI elements that reassure users, reduce hesitation, and
          encourage them to take the leap from browsing to buying.Trust signals
          include elements like customer reviews and ratings, secure payment
          badges, money-back guarantees, clear return policies, and visible
          contact information. When these are prominently displayed, they create
          a sense of reliability and professionalism. For example, authentic
          user reviews provide social proof, helping shoppers feel confident
          that your products are high-quality and that other customers have had
          positive experiences. Transparency goes hand-in-hand with trust
          signals by openly sharing information about shipping times, costs,
          data privacy, and company policies. When customers know exactly what
          to expect no hidden fees, no surprise delays they’re more likely to
          complete purchases without second-guessing. Clear and honest
          communication, especially during critical moments like checkout,
          builds long-term relationships and repeat business. Additionally,
          secure design practices such as SSL certificates, encrypted payment
          gateways, and visible security icons signal to users that their
          sensitive information is protected. This visual reassurance is crucial
          in reducing cart abandonment caused by fears of fraud or data misuse.
          A trustworthy, transparent interface also fosters customer loyalty.
          When users feel respected and well-informed, they become brand
          advocates, sharing positive experiences and returning for future
          purchases. Ultimately, embedding trust signals and transparency
          throughout your e-commerce UX/UI is more than just good design it’s a
          strategic business decision. It removes barriers, calms anxieties, and
          creates a foundation for lasting customer relationships and
          sustainable growth.
        </p>
      );
    case "Seamless Checkout Process":
      return (
        <p className="blog1-section-paragraph">
          The checkout process is often the most critical point in an e-commerce
          user journey where browsers become buyers or abandon their carts in
          frustration. A seamless checkout process is essential for converting
          interest into completed sales by minimizing obstacles and making the
          final steps as smooth, quick, and trustworthy as possible.To achieve
          this, the checkout flow should be streamlined with as few steps as
          necessary, avoiding overwhelming forms or confusing options. Offering
          guest checkout options allows customers to purchase without the
          friction of account creation, which is a common barrier to conversion.
          For returning customers, saved information and easy login methods
          speed up the process and create a personalized, hassle-free
          experience. Clear progress indicators throughout the checkout reassure
          users that they’re moving forward and help reduce anxiety. Visibility
          of key information such as order summary, shipping costs, taxes, and
          payment options ensures transparency and prevents unpleasant surprises
          at the last moment. Security is paramount: displaying trusted payment
          methods and secure payment badges reassures users that their sensitive
          data is protected. Supporting a wide range of payment options,
          including digital wallets, credit cards, and buy-now-pay-later
          services, caters to diverse customer preferences and increases the
          likelihood of completion.Mobile optimization is also crucial since
          many shoppers complete purchases on smartphones. The checkout
          interface must be responsive, with easy-to-use input fields, large
          buttons, and minimal typing to prevent errors and frustration. By
          removing friction, enhancing clarity, and fostering trust at checkout,
          you dramatically increase the chances of converting visitors into
          satisfied customers. A seamless checkout process is not just good
          UX/UI it’s a powerful driver of e-commerce revenue and long-term
          customer loyalty.{" "}
        </p>
      );
    default:
      return (
        <p className="blog1-section-paragraph">
          Focus on your users, and keep iterating for steady growth.
        </p>
      );
  }
}

export default Blog5;
