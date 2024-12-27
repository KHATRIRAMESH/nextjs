const About = () => {
  return (
    <div className="min-h-screen  text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          About Our Decentralized Betting Platform
        </h1>
        <p className="text-xl mb-6">
          Welcome to the future of betting. We are a decentralized platform
          powered by blockchain technology, providing fair, secure, and
          transparent betting experiences. Gone are the days of trusting
          centralized institutions with your bets—our platform ensures that all
          wagers are handled on-chain, ensuring full transparency and security.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Fair & Transparent</h2>
            <p className="text-lg">
              With blockchain&apos;s immutable ledger, all bets and transactions
              are publicly verifiable, meaning no more manipulation or hidden
              fees. Trust the technology, not an intermediary.
            </p>
          </div>

          <div className="flex flex-col items-center p-6  rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">
              Decentralized & Secure
            </h2>
            <p className="text-lg">
              Our platform runs on a decentralized network, ensuring that no
              single entity has control over your funds. By leveraging the power
              of smart contracts, we eliminate human error and provide a secure,
              transparent environment for betting.
            </p>
          </div>
        </div>

        <div className=" rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-center mb-4">
            How We Work
          </h2>
          <p className="text-lg text-center">
            Our decentralized betting system leverages the power of smart
            contracts and blockchain technology to ensure fairness in every bet.
            Here&apos;s how it works:
          </p>
          <ol className="list-decimal text-lg mt-4 space-y-3 list-inside text-white  ">
            <li >
              Place your bets using cryptocurrency or tokens on our platform.
            </li>
            <li >
              All wagers are recorded on the blockchain, making them transparent
              and verifiable.
            </li>
            <li >
              The outcome is determined using a secure, decentralized oracle or
              random number generation (RNG) system.
            </li>
            <li >
              Winnings are automatically paid out to your wallet via smart
              contracts.
            </li>
          </ol>
        </div>

        <h2 className="text-3xl font-semibold text-center mb-6">
          Join the Decentralized Revolution
        </h2>
        <p className="text-lg mb-6">
          We&apos;re on a mission to bring fairness, transparency, and security
          to the betting industry. Join us as we reshape the future of betting
          with decentralized technology and Web3 principles.
        </p>
        <div className="flex justify-center">
          <a
            href="/sign-up"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
