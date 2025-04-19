export function FeatureGridItem(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border bg-card p-2 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
      data-oid="gc7vwm1"
    >
      <div
        className="flex h-[200px] flex-col rounded-xl p-8 gap-4 items-center text-center"
        data-oid="rt4t4fn"
      >
        <div className="p-3 rounded-full bg-secondary/50" data-oid="yeml3_9">
          {props.icon}
        </div>
        <div className="space-y-2" data-oid="rw9ikcu">
          <h3 className="font-medium text-xl" data-oid="g2p30d2">
            {props.title}
          </h3>
          <p className="text-muted-foreground" data-oid="q-q9_21">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FeatureGrid(props: {
  title: string;
  subtitle: string;
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}) {
  return (
    <section
      id="features"
      className="container space-y-10 py-16 md:py-24"
      data-oid="4g082oj"
    >
      <div
        className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center"
        data-oid="qeprost"
      >
        <h2 className="text-3xl md:text-4xl font-medium" data-oid="zx2fbwo">
          {props.title}
        </h2>
        <p
          className="text-muted-foreground sm:text-lg leading-relaxed"
          data-oid="dwhs7.:"
        >
          {props.subtitle}
        </p>
      </div>

      <div
        className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-5xl lg:grid-cols-4"
        data-oid="o0pehd9"
      >
        {props.items.map((item, index) => (
          <FeatureGridItem key={index} {...item} data-oid="mtblk3d" />
        ))}
      </div>

      <div className="flex justify-center mt-12" data-oid="fwbm416">
        <div
          className="h-0.5 w-24 bg-primary/30 rounded-full"
          data-oid="j3i6l8r"
        ></div>
      </div>
    </section>
  );
}
