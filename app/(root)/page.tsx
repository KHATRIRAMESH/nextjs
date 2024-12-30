import Hero from "../../components/hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero/>
      <div className="my-5">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-5 gap-6 mb-8">
          <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Fair & Transparent</h2>
            <p className="text-lg">
              With blockchain&apos;s immutable ledger, all bets and transactions
              are publicly verifiable, meaning no more manipulation or hidden
              fees. Trust the technology, not an intermediary.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
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
      </div>
    </div>
  );
}
