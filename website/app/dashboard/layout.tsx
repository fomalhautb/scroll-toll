import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scroll Toll Dashboard",
  description: "Manage your Scroll Toll settings and view your usage metrics.",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background" data-oid="sab8pyp">
      {props.children}
    </div>
  );
}
