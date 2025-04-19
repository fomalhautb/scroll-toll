import { redirect } from "next/navigation";

export const metadata = {
  title: "Scroll Toll Dashboard",
};

export default function Dashboard() {
  // Redirect to the team dashboard
  // In a real app, you'd get the team ID from the user's session
  redirect("/dashboard/default");
}
