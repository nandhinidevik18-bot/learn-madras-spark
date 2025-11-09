import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="w-full py-20 px-6 lg:px-12"
      style={{
        background: "linear-gradient(135deg, rgba(255,122,0,0.06), rgba(255,244,227,0.4) 60%)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center">
          <div className="tray-animation mr-4 flex items-center justify-center rounded-full bg-white p-3 shadow-sm" aria-hidden>
            <span style={{ fontSize: '1.8rem' }} role="img" aria-label="tray">🍽️</span>
          </div>
          <div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-[#FF7A00]">
              MEC CANTEEN
            </h1>
            <p className="text-sm lg:text-base uppercase font-semibold text-[#333333] mt-1">
              ORDER SMART, EAT FRESH.
            </p>
          </div>
        </div>

        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
          Fresh meals, easy ordering and secure college ID payments. Browse the menu, place a pre-order
          and pick up when your order is ready — fast, predictable and delicious.
        </p>

        <div className="pt-6 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#FF7A00] text-white hover:bg-[#ff6a00] rounded-full px-8 py-4 text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Order Now
          </Button>

          <Button
            size="lg"
            className="bg-white text-[#FF7A00] border border-[#FF7A00] hover:bg-[#FFF4E3] rounded-full px-8 py-4 text-lg font-medium"
          >
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
