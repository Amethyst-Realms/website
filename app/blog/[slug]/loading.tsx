export default function Loading() {
  return (
    <section className="animate-pulse overflow-hidden">
      <div className="grow h-64 bg-neutral-900   rounded-xl"></div>
      <div className="rounded-md bg-neutral-900 h-14 mt-14 w-5/6"></div>
      <div className="rounded-full bg-neutral-900 h-6 mt-4 w-32 "></div>
      <section className="mt-20">
        <div className="rounded-md bg-neutral-900 h-5 mt-1 w-full "></div>
        <div className="rounded-md bg-neutral-900 h-5 mt-1 w-full "></div>
        <div className="rounded-md bg-neutral-900 h-5 mt-1 w-full "></div>
        <div className="rounded-md bg-neutral-900 h-5 mt-1 w-9/12 "></div>

        <div className="rounded-md bg-neutral-900 h-5 mt-6 w-full "></div>
        <div className="rounded-md bg-neutral-900 h-5 mt-1 w-full "></div>
        <div className="rounded-md bg-neutral-900 h-5 mt-1 w-full "></div>
        <div className="rounded-md bg-neutral-900 h-5 mt-1 w-2/6 "></div>
      </section>
    </section>
  );
}
