import ContactForm from "@/views/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - Md Shadik",
  };

export default function ContactPage() {
  return <ContactForm />;
}
