//1.import Area 
import '../../public/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../public/assets/vendor/boxicons/css/boxicons.min.css';
import '../../public/assets/vendor/quill/quill.snow.css';
import '../../public/assets/vendor/quill/quill.bubble.css';
import '../../public/assets/vendor/remixicon/remixicon.css';
import '../../public/assets/vendor/simple-datatables/style.css';
import '../../public/assets/css/style.css';

import './globals.css';
import Script from  'next/script';
// import { Inter } from 'next/font/google'

// Import Open sans font
// Import {namedImport1, NamedImport2,...} from 'some library/location' 
import { Open_Sans, Nunito, Poppins } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// configure our font object
const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700']
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Dashboard - FlipKart Automation',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${nunito.className} ${poppins.className}`}>

        {children}
    
        <Script src="../assets/vendor/apexcharts/apexcharts.min.js"></Script>
        <Script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script src="../assets/vendor/chart.js/chart.umd.js"></Script>
        <Script src="../assets/vendor/echarts/echarts.min.js"></Script>
        <Script src="../assets/vendor/quill/quill.min.js"></Script>
        <Script src="../assets/vendor/simple-datatables/simple-datatables.js"></Script>
        <Script src="../assets/vendor/tinymce/tinymce.min.js"></Script>
        <Script src="../assets/vendor/php-email-form/validate.js"></Script>
        <Script src="../assets/js/main.js"></Script>
        </body>
    </html>
  )
}
