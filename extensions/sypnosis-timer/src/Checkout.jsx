import {
  reactExtension,
  Banner,
  BlockStack,
} from "@shopify/ui-extensions-react/checkout";
import { useEffect, useState } from "react";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  
   const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <BlockStack padding="tight">
      <Banner title="" status="critical">
        {timeLeft > 0 ? (
          <>Your order is reserved for {minutes}:{seconds} min! Hurry, sale items are selling fast.</>
        ) : (
          <>YOUR ORDER RESERVATION ENDED</>
        )}
      </Banner>
 </BlockStack>
  );

}
