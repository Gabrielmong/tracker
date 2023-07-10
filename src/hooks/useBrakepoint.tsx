import { useMediaQuery, useTheme } from '@mui/material';

export const useBreakpoint = () => {
  const theme = useTheme();

  const mq_xs = useMediaQuery(theme.breakpoints.only('xs'));
  const mq_sm = useMediaQuery(theme.breakpoints.only('sm'));
  const mq_md = useMediaQuery(theme.breakpoints.only('md'));
  const mq_lg = useMediaQuery(theme.breakpoints.only('lg'));
  const mq_xl = useMediaQuery(theme.breakpoints.only('xl'));

  switch (true) {
    case mq_xs:
      return 'xs';
    case mq_sm:
      return 'sm';
    case mq_md:
      return 'md';
    case mq_lg:
      return 'lg';
    case mq_xl:
      return 'xl';
    default:
      return 'xs';
  }
};
