import React, { useEffect, useState } from "react";
import "./Blog6.css";
import blog6Image from "../../assets/blog6.jpg";
import recommendedBlog1 from "../../assets/blog1.jpg";
import recommendedBlog2 from "../../assets/blog2.jpg";
import recommendedBlog3 from "../../assets/blog3.jpg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaLink,
  FaArrowCircleUp,
} from "react-icons/fa";
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";

const trends = [
  "Zero Trust Architecture",
  "AI-Powered Threat Detection",
  "Cloud Security Enhancements",
  "Ransomware Defense Strategies",
  "Privacy-First Regulations",
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
    title: "10 Web Development Trends to Watch",
    image: recommendedBlog1,
    category: "Cybersecurity",
    date: "March 1, 2025",
    url: "/blogs/top-10-web-development-trends",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Digital Marketing ROI",
    image: recommendedBlog2,
    category: "AI & Security",
    date: "April 10, 2025",
    url: "/blogs/the-ultimate-guide-to-digital-marketing-roi",
  },
  {
    id: 3,
    title: "5 Essential Features for Successful Mobile Apps",
    image: recommendedBlog3,
    category: "Compliance",
    date: "May 20, 2025",
    url: "/blogs/essential-features-for-successful-mobile-apps",
  },
];

const Blog6 = () => {
  const currentUrl = window.location.href;
  const shareText =
    "Stay ahead in cybersecurity — check out the top trends you gotta follow!";
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
        tooltip.className = "blog6-copy-tooltip";
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
    <div className="blog6-blog-container">
      <div className="blog6-blog-header">
        <div className="blog6-breadcrumb">
          {showButton && (
            <button
              className="blog6-scroll-to-top"
              title="Scroll to top"
              onClick={scrollToTop}
            >
              <FaArrowCircleUp />
            </button>
          )}
        </div>

        <div className="blog6-header-content">
          <h1 className="blog6-blog-title">
            Top Cybersecurity Trends to Follow
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
              By Hitesh Joshi
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
              july 13, 2024
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

      <div className="blog6-featured-image-container">
        <img
          src={blog6Image}
          alt="Cybersecurity Trends"
          className="blog6-featured-image"
        />
        <div className="blog6-image-caption">
          Stay ahead with the latest cybersecurity moves
        </div>
      </div>

      <div className="blog6-blog-content">
        <aside className="blog6-sidebar">
          <div className="blog6-sidebar-content">
            <h3 className="blog6-sidebar-title">Key Trends</h3>
            <ul className="blog6-trend-nav">
              {trends.map((trend, i) => (
                <li key={i}>
                  <a href={`#trend-${i + 1}`} className="blog6-nav-link">
                    <span className="blog6-trend-number">{i + 1}.</span> {trend}
                  </a>
                </li>
              ))}
            </ul>

            <div className="blog6-recommended-blogs">
              <h3 className="blog6-sidebar-title">Recommended Reads</h3>
              <div className="blog6-recommended-list">
                {recommendedBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="blog6-recommended-item"
                    onClick={() => navigateToBlog(blog.url)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog6-recommended-image"
                    />
                    <div className="blog6-recommended-info">
                      <span className="blog6-recommended-category">
                        {blog.category}
                      </span>
                      <h4 className="blog6-recommended-title">{blog.title}</h4>
                      <span className="blog6-recommended-date">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="blog6-share-widget">
              <h3 className="blog6-share-title">Share This Article</h3>
              <div className="blog6-share-buttons">
                <a
                  href={shareUrls.facebook(currentUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="blog6-share-button blog6-facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={shareUrls.linkedin(currentUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="blog6-share-button blog6-linkedin"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={shareUrls.twitter(currentUrl, shareText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="blog6-share-button blog6-twitter"
                >
                  <FaTwitter />
                </a>
                <button
                  onClick={copyToClipboard}
                  className="blog6-share-button blog6-copy-link"
                  aria-label="Copy link to clipboard"
                >
                  <FaLink />
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="blog6-article-content">
          <div className="blog6-article-intro">
            <p className="blog6-lead-paragraph">
              Cybersecurity is a moving target and the only way to stay safe is
              to stay updated. The digital battlefield shifts every second with
              new threats evolving faster than most defenses can catch. Staying
              ahead means embracing innovation without losing sight of the
              trusted strategies that have stood the test of time. This is not
              just about reacting but about anticipating adapting and building a
              fortress that is smarter faster and more resilient. Ready to dive
              into the trends reshaping how we protect our digital world? Let’s
              break it down.
            </p>
          </div>

          {trends.map((trend, i) => (
            <section
              key={i}
              id={`trend-${i + 1}`}
              className="blog6-trend-section"
            >
              <div className="blog6-section-header">
                <span className="blog6-section-number">{i + 1}</span>
                <h2 className="blog6-section-title">{trend}</h2>
              </div>
              <p className="blog6-section-content">
                {generateTrendDescription(trend)}
              </p>
              {i < trends.length - 1 && (
                <hr className="blog6-section-divider" />
              )}
            </section>
          ))}

          <div className="blog6-article-footer">
            <div className="blog6-tags-container">
              <span className="blog6-tags-label">Tags:</span>
              <span className="blog6-tag">Cybersecurity</span>
              <span className="blog6-tag">Trends</span>
              <span className="blog6-tag">Security</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

function generateTrendDescription(trend) {
  switch (trend) {
    case "Zero Trust Architecture":
      return (
        <p className="blog6-section-paragraph">
          Gone are the days when companies could simply trust everyone inside
          their network and focus only on keeping outsiders out. With the rise
          of remote work, cloud services, and mobile devices, the traditional
          “castle and moat” security model no longer holds up. Zero Trust
          Architecture (ZTA) flips that idea on its head. It works on the
          principle of “never trust, always verify.” Every user, device, and
          application must continuously prove its identity before accessing any
          resource, no matter if it’s inside or outside the corporate network.
          This means implementing multi-factor authentication, verifying device
          health, enforcing least-privilege access, and constantly monitoring
          user behavior for anomalies. The strength of Zero Trust lies in its
          layered approach. Even if one defense fails, others are still in place
          to block the attack. It significantly reduces the attack surface,
          limits the impact of insider threats, and makes it much harder for
          cybercriminals to move laterally within systems. In today’s world
          where cyberattacks are more sophisticated and persistent than ever,
          Zero Trust isn’t just a best practice; it’s becoming a business
          necessity. Organizations adopting Zero Trust frameworks often see
          improvements in visibility across their networks and a more effective
          way to detect and respond to breaches, making their overall security
          posture far more resilient. This shift also demands a cultural change
          where trust is continuously earned, verified, and never assumed,
          leading to a more vigilant and security-conscious workforce.
        </p>
      );
    case "AI-Powered Threat Detection":
      return (
        <p className="blog6-section-paragraph">
          Cybercriminals are constantly evolving their tactics, making it harder
          for traditional security systems to keep up. This is where Artificial
          Intelligence (AI) steps in, transforming cybersecurity from reactive
          defense to proactive protection. AI-powered threat detection uses
          advanced algorithms and machine learning models to analyze massive
          amounts of network data in real time, spotting patterns and anomalies
          that human analysts might miss. Unlike conventional tools that rely
          solely on known threat signatures, AI systems can detect previously
          unseen attacks by recognizing suspicious behaviors. They continuously
          learn from new data, becoming smarter and more accurate over time.
          This allows security teams to respond to potential breaches faster,
          often before any real damage occurs. From identifying phishing
          attempts and malware variants to flagging insider threats, AI acts as
          a vigilant, 24/7 digital security guard. By automating threat
          detection, organizations can drastically reduce response times,
          minimize human error, and strengthen their overall security posture in
          an increasingly complex digital landscape. Beyond detection, AI also
          enables predictive analytics, anticipating potential vulnerabilities
          and attack vectors before they are exploited. As AI continues to
          advance, its integration with cybersecurity frameworks will be
          critical to safeguarding data, networks, and critical infrastructure
          from increasingly sophisticated threats.
        </p>
      );
    case "Cloud Security Enhancements":
      return (
        <p className="blog6-section-paragraph">
          With the rapid adoption of cloud computing, businesses are enjoying
          unparalleled flexibility, scalability, and cost efficiency, but this
          shift also brings new security challenges. Cyber threats targeting
          cloud environments are growing in sophistication, from misconfigured
          storage buckets to advanced account hijacking attempts. As a result,
          cloud security enhancements have become a top priority for
          organizations. Modern cloud security strategies now go beyond basic
          firewalls and encryption. Providers are integrating advanced identity
          and access management (IAM), stronger data encryption both in transit
          and at rest, and automated compliance checks to meet strict regulatory
          requirements. Zero Trust principles are also being embedded into cloud
          platforms, ensuring that every user and device is continuously
          verified before gaining access. Additionally, AI-driven monitoring
          tools are helping detect unusual activity across distributed cloud
          workloads, allowing for instant threat isolation. Multi-cloud and
          hybrid-cloud setups are also pushing for standardized security
          policies, ensuring consistent protection regardless of where the data
          resides. Organizations are investing heavily in automation and
          orchestration tools to manage security across complex cloud
          infrastructures effectively, while also focusing on educating their
          teams about the shared responsibility model inherent in cloud
          security. These enhancements collectively help reduce vulnerabilities,
          improve incident response, and enable businesses to confidently
          leverage cloud technologies while maintaining compliance and data
          integrity.
        </p>
      );
    case "Ransomware Defense Strategies":
      return (
        <p className="blog6-section-paragraph">
          Ransomware continues to be one of the most disruptive and costly cyber
          threats, targeting organizations of all sizes and sectors. Attackers
          are becoming more sophisticated, using double extortion tactics where
          they not only encrypt data but also threaten to leak it if the ransom
          isn’t paid. In this environment, a strong ransomware defense strategy
          is no longer optional; it’s essential for business continuity and
          reputation protection. Modern defense approaches focus on prevention,
          early detection, and rapid response. Regularly updated security
          patches help close vulnerabilities that ransomware might exploit,
          while advanced email filtering reduces the chances of phishing, still
          the most common entry point. Network segmentation ensures that even if
          ransomware breaches one area, it cannot easily spread to critical
          systems. Equally important is the human factor. Employee awareness
          programs teach staff how to recognize suspicious links or attachments,
          minimizing the risk of accidental infections. Organizations are also
          investing in immutable backups stored offline or in secure cloud
          vaults, ensuring that recovery is possible without paying a ransom.
          Furthermore, incident response plans are regularly tested and updated
          to address evolving threats, and collaboration with cybersecurity
          communities helps share intelligence and best practices. By combining
          technology, process, and people, organizations can build a resilient
          defense against ransomware’s growing menace.
        </p>
      );
    case "Privacy-First Regulations":
      return (
        <p className="blog6-section-paragraph">
          As data breaches and misuse incidents continue to rise, governments
          and regulatory bodies worldwide are enforcing stricter privacy laws to
          protect individuals’ personal information. Privacy-first regulations,
          such as the General Data Protection Regulation (GDPR) in Europe and
          the California Consumer Privacy Act (CCPA) in the United States, set
          clear guidelines on how businesses must collect, store, and process
          user data. These frameworks aim to give individuals greater control
          over their personal information, while holding organizations
          accountable for transparency and security. For businesses, compliance
          with these regulations is no longer just a legal requirement; it is a
          trust-building opportunity. Companies are implementing
          privacy-by-design principles, ensuring that user privacy is considered
          from the very start of product development rather than as an
          afterthought. This involves using data minimization techniques,
          encrypting sensitive information, and being transparent with users
          about data usage and retention policies. As more regions introduce
          their own privacy standards, organizations must stay agile and
          proactive in their compliance strategies. This evolving regulatory
          landscape requires continuous monitoring and adaptation, but those who
          prioritize privacy can enhance their brand reputation, foster customer
          loyalty, and avoid costly penalties. Ultimately, privacy-first
          approaches are not only ethical but also a competitive advantage in
          today’s data-driven economy.
        </p>
      );
    default:
      return (
        <p className="blog6-section-paragraph">
          Cybersecurity is a nonstop hustle. Threats evolve every day, and
          staying alert is crucial to protect your data and assets. It requires
          continuous learning, adaptation, and investment in new technologies
          and training. Organizations must foster a culture of security
          awareness across all levels, promote collaboration between IT teams
          and business units, and implement layered defenses to mitigate risk
          effectively. Remember, cybersecurity isn’t just about technology; it’s
          about people, processes, and proactive strategies working together to
          stay one step ahead of attackers. Keep evolving, stay vigilant, and
          build resilience against the complex challenges of the digital world.
        </p>
      );
  }
}

export default Blog6;
