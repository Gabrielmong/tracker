import { motion } from 'framer-motion';

export const TransitionedPage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};
