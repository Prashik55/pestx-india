import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "PestX India solved our termite problem completely. The team was professional, punctual, and their treatment was highly effective. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "We had a severe bed bug infestation in our hotel. PestX India's commercial team handled it discreetly and efficiently. Our guests are happy again!",
  },
  {
    name: "Mohammed Ismail",
    location: "Bangalore",
    rating: 5,
    text: "Excellent service! The technicians explained everything clearly and used eco-friendly products. Very satisfied with the mosquito control treatment.",
  },
  {
    name: "Sunita Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "After trying multiple pest control services, PestX India finally solved our rodent problem. The warranty they provide gives great peace of mind.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}