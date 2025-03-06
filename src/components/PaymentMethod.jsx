import payment1 from "../assets/payment/cod.png";
import payment2 from "../assets/payment/bkash.png";
import payment3 from "../assets/payment/dbbl.png";
import payment4 from "../assets/payment/master.png";
import payment5 from "../assets/payment/nagad.png";
import payment6 from "../assets/payment/rocket.png";
import payment7 from "../assets/payment/visa.png";

const PaymentMethod = () => {
  const paymentMethods = [
    { id: 1, src: payment1, alt: "Cash on Delivery" },
    { id: 2, src: payment2, alt: "Bkash" },
    { id: 3, src: payment3, alt: "DBBL" },
    { id: 4, src: payment4, alt: "Mastercard" },
    { id: 5, src: payment5, alt: "Nagad" },
    { id: 6, src: payment6, alt: "Rocket" },
    { id: 7, src: payment7, alt: "Visa" },
  ];

  return (
    <div className="px-4 md:px-0">
      {" "}
      {/* মোবাইল ডিভাইসে প্যাডিং যোগ করা হয়েছে */}
      <section className="max-w-screen-xl mx-auto mt-28 font-poppins">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Payment Methods
          </h2>
          <div className="flex flex-wrap gap-4">
            {paymentMethods.map((method) => (
              <img
                key={method.id}
                src={method.src}
                alt={method.alt}
                className="w-16 h-7"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentMethod;
