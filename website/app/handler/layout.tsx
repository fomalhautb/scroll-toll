import HandlerHeader from "@/components/handler-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen" data-oid="x-qoish">
      <HandlerHeader data-oid="bxaai14" />
      <div className="flex-grow" data-oid="mm9hxw8">
        {props.children}
      </div>
    </div>
  );
}
