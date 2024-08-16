export default function Home() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
      <div className="container flex flex-col gap-4 text-center">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl md:mb-3 lg:mb-4 font-black text-balance">
          App, make something
        </h1>
        <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}
