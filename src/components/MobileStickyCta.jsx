import Button from "./Button.jsx";

export default function MobileStickyCta() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-ivory/95 backdrop-blur-md border-t border-ink/10 px-5 py-3.5">
      <Button to="/#booking" variant="primary" icon={false} className="w-full">
        Book Your Stay
      </Button>
    </div>
  );
}
