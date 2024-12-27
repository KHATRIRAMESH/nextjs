const Pools = () => {
  return (
    <>
      <div className=" min-h-[100vh] flex flex-col items-center gap-5">
        <h1 className="text-4xl font-bold pb-9">Welcome to the Pools!</h1>
        <form className="flex flex-col">
          <input type="number" name="amount" placeholder="Enter your bet amount" />
           <button className="rounded shadow-lg bg-[#1f1b24]  mt-2 px-4 py-1 mx-16">Bet</button>
        </form>
      </div>
    </>
  );
};
export default Pools;
