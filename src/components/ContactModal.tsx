import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-br from-background to-primary/10 border-2 border-primary/30 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-accent mb-8">
            Contact Support
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-accent bg-muted flex items-center justify-center">
              <span className="text-6xl">👤</span>
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-center text-accent">Cyprian Anon</h3>
          
          <div className="space-y-3">
            <div className="bg-card/50 rounded-xl p-4 border border-primary/30 flex items-center gap-3">
              <div className="bg-primary/20 rounded-full p-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <span className="text-lg text-foreground font-semibold">hackersnet919@gmail.com</span>
            </div>
          </div>
          
          <Button
            onClick={() => window.open(`mailto:hackersnet919@gmail.com`, '_blank')}
            className="w-full h-14 text-lg font-bold bg-gradient-to-r from-event-green to-event-green/80 hover:from-event-green/90 hover:to-event-green/70 text-white"
          >
            Send Email
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
