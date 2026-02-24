import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <motion.div 
          className="w-16 h-16 border-4 border-muted border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-muted-foreground font-mono tracking-widest"
        >
          LOADING...
        </motion.p>
      </div>
    </div>
  );
}
