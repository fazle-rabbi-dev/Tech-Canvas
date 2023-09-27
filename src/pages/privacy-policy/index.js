import Link from 'next/link';

function PrivacyPolicyPage() {
  return (
    <section className="">
      <h1 className="text-center mb-4 text-2xl font-satoshi-medium font-bold">
        Privacy Policy
      </h1>
      <span className="to-gray-400 italic mb-2 block text-sm">
        Last updated: 25, September, 2023
      </span>
      <p className="font-supreme-regular mb-2">
        Thank you for visiting <Link href="/" className="text-purple-600">{process.env.NEXT_PUBLIC_DOMAIN}</Link>! We respect your privacy and
        do not collect any personal information from our visitors.
      </p>
      {data.map((obj) => (
        <div key={obj.id} className="my-4">
          <h2 className="font-bold italic">
            {obj.heading}
          </h2>
          <p className="mt-2 font-supreme-regular text-sm">
            {obj.desc} {obj.contact && <Link className="text-purple-600" href="mailto:fazlerabbi1343@gmail.com">fazlerabbi1343@gmail.com.</Link>}
          </p>
        </div>
      ))}
    </section>
  );
}

export default PrivacyPolicyPage;


const data = [
  {
    id: 1,
    heading: "Information Collection",
    desc: "We do not collect any personal information, such as names, email addresses, or payment details, from our visitors.",
  },
  {
    id: 2,
    heading: "Cookies",
    desc: "We do not use cookies or similar tracking technologies.",
  },
  {
    id: 3,
    heading: "External Links",
    desc: "Our website may contain links to external sites. We are not responsible for the content and privacy practices of these third-party sites.",
  },
  {
    id: 4,
    heading: "Contact Us",
    desc: "If you have any questions about our privacy policy, feel free to contact us at ",
    contact: true
  },
];