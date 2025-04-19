import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scroll Toll Dashboard",
  description: "Manage your Scroll Toll settings and view your usage metrics.",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background" data-oid="x1rr9ty">
      {props.children}
    </div>
  );
}
