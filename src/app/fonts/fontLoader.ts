import localFont from 'next/font/local';

const graphik = localFont({
  src: [
    {
      path: './Graphik-Regular-Trial.otf',
      weight: '400',
      style: 'regular',
    },
    {
      path: './Graphik-Medium-Trial.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: './Graphik-Semibold-Trial.otf',
      weight: '700',
      style: 'semibold',
    },
    {
      path: './Graphik-Bold-Trial.otf',
      weight: '800',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
});

export default graphik;
