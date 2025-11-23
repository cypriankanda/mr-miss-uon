import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Minus, Plus, Ticket, MapPin, Clock } from "lucide-react";

interface TicketModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type TicketType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

const TicketModal = ({ open, onOpenChange }: TicketModalProps) => {
  const [step, setStep] = useState<"category" | "tickets">("category");
  const [category, setCategory] = useState<"student" | "non-student" | null>(null);
  
  const [tickets, setTickets] = useState<TicketType[]>([
    { id: "regular", name: "Regular Student", price: 100, quantity: 0 },
    { id: "vip", name: "VIP Student", price: 300, quantity: 0 },
    { id: "regular-ns", name: "Regular Non-Student", price: 500, quantity: 0 },
    { id: "vip-ns", name: "VIP Non-Student", price: 1000, quantity: 0 },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setTickets(tickets.map(t => 
      t.id === id ? { ...t, quantity: Math.max(0, t.quantity + change) } : t
    ));
  };

  const getFilteredTickets = () => {
    if (category === "student") {
      return tickets.filter(t => t.id === "regular" || t.id === "vip");
    }
    return tickets.filter(t => t.id === "regular-ns" || t.id === "vip-ns");
  };

  const getTotalPrice = () => {
    return getFilteredTickets().reduce((sum, t) => sum + (t.price * t.quantity), 0);
  };

  const handleCategorySelect = (selectedCategory: "student" | "non-student") => {
    setCategory(selectedCategory);
    setStep("tickets");
  };

  const handleBack = () => {
    setStep("category");
    setCategory(null);
  };

  const handleClose = () => {
    setStep("category");
    setCategory(null);
    setTickets(tickets.map(t => ({ ...t, quantity: 0 })));
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-background border-border max-w-2xl max-h-[90vh] overflow-y-auto">
        {step === "category" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center text-accent flex items-center justify-center gap-2">
                <Ticket className="w-6 h-6" />
                Purchase Tickets
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-6">
              <Button
                onClick={() => handleCategorySelect("student")}
                className="w-full h-20 text-xl font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground"
              >
                <GraduationCap className="w-6 h-6 mr-3" />
                UoN Student
              </Button>
              <Button
                onClick={() => handleCategorySelect("non-student")}
                className="w-full h-20 text-xl font-bold bg-gradient-to-r from-event-pink to-event-pink/80 hover:from-event-pink/90 hover:to-event-pink/70 text-white"
              >
                <Users className="w-6 h-6 mr-3" />
                Non-Student
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground">Available Tickets</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4 mt-4">
              <div className="bg-card rounded-lg p-4 border border-border space-y-2">
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="font-semibold">First Show - 6:00 PM 05/12/25 - 6:00 AM 06/12/25</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-5 h-5 text-event-pink" />
                  <span className="font-semibold">KICC</span>
                </div>
              </div>

              <div className="space-y-3">
                {getFilteredTickets().map((ticket) => (
                  <div key={ticket.id} className="bg-card rounded-lg p-5 border border-border">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-event-pink text-lg">flash sale {ticket.name}</h3>
                        <p className="text-2xl font-bold text-event-pink mt-2">KES {ticket.price.toLocaleString()}.00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full bg-muted border-border hover:bg-muted/80"
                        onClick={() => updateQuantity(ticket.id, -1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="text-2xl font-bold text-foreground w-12 text-center">{ticket.quantity}</span>
                      <Button
                        size="icon"
                        className="rounded-full bg-event-pink hover:bg-event-pink/80 text-white"
                        onClick={() => updateQuantity(ticket.id, 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {getTotalPrice() > 0 && (
                <div className="bg-card rounded-lg p-5 border-2 border-primary space-y-3">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-foreground">Total Amount:</span>
                    <span className="text-accent text-2xl">KES {getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="border-t border-border pt-3 space-y-3">
                    <h4 className="font-bold text-foreground text-sm">Payment Instructions:</h4>
                    <div className="bg-muted rounded p-4 space-y-3 text-sm">
                      <div className="space-y-2">
                        <p className="text-foreground"><span className="font-semibold">Paybill:</span> 329329</p>
                        <p className="text-foreground"><span className="font-semibold">Account Number:</span> 0100408218100</p>
                      </div>
                      <div className="bg-background rounded p-3 border border-border">
                        <p className="text-foreground font-semibold mb-2">⚠️ Important:</p>
                        <ul className="text-foreground space-y-1 text-xs list-disc list-inside">
                          <li>Payment is made through M-PESA Paybill to the bank account above</li>
                          <li><span className="font-semibold">Enter your EMAIL ADDRESS</span> when prompted for the account number/reference</li>
                          <li>Your ticket will be sent to the email you provide</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1 border-border hover:bg-muted"
                >
                  Back
                </Button>
                <Button
                  onClick={handleClose}
                  disabled={getTotalPrice() === 0}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Confirm Purchase
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TicketModal;
