import React from "react";
import { Check } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean;
};

export function PricingCard(props: PricingCardProps) {
  return (
    <Card
      className={`w-full max-w-sm ${
        props.isPopular ? "border-primary border-2 shadow-lg" : ""
      }`}
      data-oid="hb6.diz"
    >
      <CardHeader data-oid="vm05g_n">
        <CardTitle className="text-2xl font-bold" data-oid="f6fegg9">
          {props.title}
        </CardTitle>
        <CardDescription data-oid="z17nex2">
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="5kgx-pd">
        <div className="mb-4" data-oid="feqrfk1">
          <span className="text-4xl font-bold" data-oid="neixr9x">
            {props.price}
          </span>
          <span className="text-muted-foreground" data-oid="6m_nxj2">
            /month
          </span>
        </div>
        <ul className="space-y-2" data-oid="qwsd217">
          {props.features.map((feature, index) => (
            <li key={index} className="flex items-center" data-oid="j132dvt">
              <Check className="mr-2 h-4 w-4 text-primary" data-oid="-y23x4l" />
              <span data-oid="ms13ku2">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter data-oid="c4uug2q">
        <Link
          href={props.buttonHref}
          className={buttonVariants({
            variant: props.isPopular ? "default" : "outline",
          })}
          data-oid="5kyhqsx"
        >
          {props.buttonText}
        </Link>
      </CardFooter>
    </Card>
  );
}

export function PricingGrid(props: {
  title: string;
  subtitle: string;
  items: PricingCardProps[];
}) {
  return (
    <section
      id="features"
      className="container space-y-6 py-8 md:py-12 lg:py-24"
      data-oid="o9l:zug"
    >
      <div
        className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center"
        data-oid="sajei1c"
      >
        <h2 className="text-3xl md:text-4xl font-semibold" data-oid="afykusr">
          {props.title}
        </h2>
        <p
          className="max-w-[85%] text-muted-foreground sm:text-lg"
          data-oid="ym1v:vo"
        >
          {props.subtitle}
        </p>
      </div>

      <div
        className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3"
        data-oid="a4ecsxb"
      >
        {props.items.map((item, index) => (
          <PricingCard key={index} {...item} data-oid="oeqvyb5" />
        ))}
      </div>
    </section>
  );
}
