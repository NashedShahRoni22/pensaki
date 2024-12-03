import { Link } from "react-router-dom";
import { cookiesType } from "../data/cookiesType";

function CookiePolicy() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-10 text-primary md:py-20">
      <h1 className="mb-4 text-center text-3xl font-semibold">
        Cookies Policy
      </h1>
      <p className="mb-20 text-center">
        Below, you’ll find the Cookie Policy for{" "}
        <Link to="https://pensaki.org/" className="text-accent">
          Pensaki.org
        </Link>
        , Providing an
        <br />
        overview of how cookies are used to enhance your experience on our
        website.
      </p>

      <h2 className="text-xl font-semibold">
        What are Cookies and how does Pensaki use them?
      </h2>
      <p className="mb-2.5 mt-4">
        Cookies are small pieces of text stored in web browsers to save
        information about your interactions with websites. They are used to
        store and receive identifiers and other data on your computer, phone, or
        other devices. Additionally, other technologies, such as browser or
        device storage and unique device identifiers, serve similar purposes.
        For simplicity, we refer to all these technologies collectively as
        &quot;cookies.&quot;
      </p>
      <p>
        At Pensaki, we use cookies to enhance your experience on our platform,
        including our website and apps. Cookies help us deliver tailored
        services, improve website functionality, and understand how you interact
        with our tools. This policy explains the types of cookies we use, how
        they work, and the choices available to you.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        Understanding Cookies at Pensaki
      </h2>
      <p className="mb-2.5 mt-4">
        Pensaki uses cookies to enhance your experience and deliver essential
        features on our platform. These cookies help us provide functionality,
        improve performance, and offer tailored services.
      </p>
      <p>
        While you have the option to disable cookies, please note that there are
        no universal methods to do so without affecting the functionality and
        features they enable. If you are unsure about the necessity of certain
        cookies, we recommend keeping them enabled to ensure the best experience
        with our services.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        How can you manage Cookies?
      </h2>
      <p className="mb-2.5 mt-4">
        You have control over cookies through your browser settings, allowing
        you to prevent their storage or remove them at any time. Refer to your
        browser’s Help section for guidance on managing cookies.
      </p>
      <p>
        Please note, however, that disabling cookies may impact the
        functionality of this website and others you visit. Certain features and
        services rely on cookies to function properly, and turning them off may
        result in a less optimal browsing experience. For the best experience,
        we recommend keeping cookies enabled.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        Types of Cookies Pensaki Uses
      </h2>
      <ul className="ml-6 list-disc">
        <div className="mt-4 space-y-3">
          {cookiesType.map(({ title, des }, i) => (
            <li key={i}>
              <h4 className="mb-1.5 font-medium">{title}</h4>
              <p className="w-full max-w-3xl text-sm">{des}</p>
            </li>
          ))}
        </div>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Third Party Cookies</h2>
      <p className="my-4">
        In certain cases, Pensaki uses cookies provided by trusted third parties
        to enhance your experience on our site. Below are the types of
        third-party cookies we employ:
      </p>

      <ul className="ml-5 list-disc">
        <li>
          <h4 className="mb-2 font-semibold">Analytics Cookies</h4>
          <p className="w-full max-w-3xl text-sm">
            Pensaki uses Google Analytics, one of the most trusted analytics
            tools on the web, to understand how users interact with our site and
            identify areas for improvement. These cookies may track metrics like
            the time spent on the site, pages visited, and user behavior
            patterns. This data helps us create more engaging and optimized
            content. For additional details, visit the{" "}
            <Link
              to="https://marketingplatform.google.com/about/analytics/"
              className="text-accent"
            >
              Official Google Analytics page.
            </Link>
          </p>
        </li>
        <li>
          <h4 className="mb-1.5 mt-4 font-semibold">
            Social Media Integration Cookies
          </h4>
          <p className="w-full max-w-3xl text-sm">
            Our site includes social media buttons and/or plugins that let you
            connect to your social networks in various ways. To enable these
            features, social media platforms (such as [list integrated
            platforms, e.g., Facebook, Twitter, LinkedIn]) may set cookies
            through our site. These cookies can be used to enhance your profile
            on those platforms or contribute to their data collection as per
            their privacy policies.
          </p>
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Need More Information?</h2>
      <p className="mb-2.5 mt-4">
        We hope this explanation clarifies the use of cookies on Pensaki. If
        you’re unsure about enabling or disabling cookies, it’s often best to
        keep them enabled to ensure all site features function as intended.
      </p>
      <p className="mb-2.5">
        For additional assistance, feel free to contact us at:
      </p>
      <p>
        <span className="font-medium">Email:</span>{" "}
        <a href="mailto:support@bobosohomail.com" className="text-accent">
          support@bobosohomail.com
        </a>
      </p>
    </section>
  );
}

export default CookiePolicy;
