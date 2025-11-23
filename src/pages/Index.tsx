import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Atom, Home, Trophy, Award, Ticket, Crown, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import Countdown from "@/components/Countdown";
import TicketModal from "@/components/TicketModal";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-20 left-10 text-accent text-2xl animate-pulse">⭐</div>
      <div className="absolute top-40 right-20 text-accent text-xl animate-pulse delay-100">⭐</div>
      <div className="absolute bottom-40 left-1/4 text-accent text-lg animate-pulse delay-200">⭐</div>
      <div className="absolute top-1/3 right-10 text-accent text-2xl animate-pulse delay-300">⭐</div>
      
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Atom className="w-8 h-8 text-primary" />
        </div>
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-primary transition-colors">
            <Home className="w-5 h-5" />
            <span className="font-semibold">Home</span>
          </Link>
          <Link to="/models" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Models</span>
          </Link>
          <a href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Ranking</span>
          </a>
        </div>
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          <span className="text-foreground">👤</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-primary">MR & MISS </span>
                <span className="text-accent">UoN</span>
              </h1>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-accent text-2xl">⭐⭐⭐</span>
                <span className="text-foreground text-xl font-bold">2025/26</span>
                <span className="text-accent text-2xl">⭐⭐⭐</span>
              </div>
            </div>

            {/* Grand Prizes */}
            <div className="flex items-center gap-2 text-xl font-bold">
              <span className="text-2xl">🔥</span>
              <span className="text-accent uppercase tracking-wide">GRAND PRIZES TO BE WON</span>
              <span className="text-2xl">🔥</span>
            </div>

            {/* Event Details Card */}
            <div className="bg-event-card-blue rounded-3xl p-8 border-2 border-primary/30 space-y-6">
              <div className="space-y-2">
                <p className="text-lg">
                  <span className="text-accent font-bold">VENUE: </span>
                  <span className="text-foreground font-semibold">KICC</span>
                </p>
                <p className="text-lg">
                  <span className="text-accent font-bold">DATE: </span>
                  <span className="text-foreground font-semibold">5TH DEC 2025</span>
                </p>
                <p className="text-foreground/80">6:00 PM TILL DAWN</p>
              </div>

              {/* Ticket Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary to-primary/70 rounded-2xl p-4 text-center border-2 border-primary/50">
                  <p className="text-primary-foreground font-semibold mb-1">Regular Student</p>
                  <p className="text-accent text-2xl font-bold">KES 100</p>
                </div>
                <div className="bg-gradient-to-br from-event-pink to-event-pink/70 rounded-2xl p-4 text-center border-2 border-event-pink/50">
                  <p className="text-white font-semibold mb-1">VIP Student</p>
                  <p className="text-accent text-2xl font-bold">KES 300</p>
                </div>
                <div className="bg-gradient-to-br from-primary to-primary/70 rounded-2xl p-4 text-center border-2 border-primary/50">
                  <p className="text-primary-foreground font-semibold mb-1">Non-Student</p>
                  <p className="text-accent text-2xl font-bold">KES 500</p>
                </div>
                <div className="bg-gradient-to-br from-event-pink to-event-pink/70 rounded-2xl p-4 text-center border-2 border-event-pink/50">
                  <p className="text-white font-semibold mb-1">VIP Non-Student</p>
                  <p className="text-accent text-2xl font-bold">KES 1,000</p>
                </div>
              </div>
            </div>

            {/* Countdown */}
            <Countdown />
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button
                onClick={() => setTicketModalOpen(true)}
                className="w-full h-16 text-lg font-bold bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Ticket className="w-5 h-5 mr-2" />
                Get Your Ticket Now!
              </Button>
              
              <Button className="w-full h-16 text-lg font-bold bg-gradient-to-r from-event-pink to-event-pink/80 hover:from-event-pink/90 hover:to-event-pink/70 text-white">
                <Crown className="w-5 h-5 mr-2" />
                Vote For Your Favorite Model!
              </Button>
              
              <Button 
                onClick={() => setContactModalOpen(true)}
                className="w-full h-16 text-lg font-bold bg-gradient-to-r from-event-green to-event-green/80 hover:from-event-green/90 hover:to-event-green/70 text-white"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
            </div>

            {/* Profile Card */}
            <div className="bg-gradient-to-br from-event-card-blue to-primary/20 rounded-3xl p-8 border-2 border-primary/30 space-y-6">
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full border-4 border-accent bg-muted overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                    alt="Derick Troy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold text-accent">Derick Troy</h3>
                <p className="text-foreground/80 text-lg">~UoN Student President 2025/26</p>
                <p className="text-foreground/70 italic leading-relaxed">
                  "This year's Mr. & Miss UoN 2025/26 is not just another event. It's a reflection of our diverse talents, creativity, and academic excellence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <TicketModal open={ticketModalOpen} onOpenChange={setTicketModalOpen} />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
};

export default Index;
