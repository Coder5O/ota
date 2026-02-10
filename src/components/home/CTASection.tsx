import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-10 md:py-14 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
              Interested in becoming a member?
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Register to join the Ovaherero Traditional Authority community.
            </p>
          </div>
          <Link
            to="/membership"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
          >
            Register for Membership
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
