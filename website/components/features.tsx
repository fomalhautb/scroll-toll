export function FeatureGridItem(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-lg border bg-background p-2"
      data-oid="gc7vwm1"
    >
      <div
        className="flex h-[180px] flex-col rounded-md p-6 gap-4"
        data-oid="rt4t4fn"
      >
        {props.icon}
        <div className="space-y-2" data-oid="rw9ikcu">
          <h3 className="font-bold" data-oid="g2p30d2">
            {props.title}
          </h3>
          <p className="text-sm text-muted-foreground" data-oid="q-q9_21">
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
      className="container space-y-6 py-8 md:py-12 lg:py-24"
      data-oid="4g082oj"
    >
      <div
        className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center"
        data-oid="qeprost"
      >
        <h2 className="text-3xl md:text-4xl font-semibold" data-oid="zx2fbwo">
          {props.title}
        </h2>
        <p
          className="max-w-[85%] text-muted-foreground sm:text-lg"
          data-oid="dwhs7.:"
        >
          {props.subtitle}
        </p>
      </div>

      <div
        className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3"
        data-oid="o0pehd9"
      >
        {props.items.map((item, index) => (
          <FeatureGridItem key={index} {...item} data-oid="mtblk3d" />
        ))}
      </div>
    </section>
  );
}
