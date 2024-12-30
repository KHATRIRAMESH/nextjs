import { useEffect, useState } from "react";

const BarChart = () => {
  const [price, setPrice] = useState<string>("0.00");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@trade"
    );

    socket.onopen = () => {
      console.log("Connected to Binance WebSocket");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
    //   console.log(data.p);

      setPrice(data.p);
      setLoading(false);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
    };
  }, []);
  return (
    <>
      <div>
        <h1>Live BTC/USDT Price</h1>
        {loading ? <p>Loading...</p> : <p>Current Price: ${price}</p>}
      </div>
    </>
  );
};

export default BarChart;
