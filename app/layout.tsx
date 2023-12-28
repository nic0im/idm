    import { Inter } from 'next/font/google'
    import './globals.css'
    import {options} from './api/auth/[...nextauth]/options'
    import {getServerSession} from "next-auth/next"
    import Header from "./components/Header"
    import Footer from './components/Footer'


    const inter = Inter({ subsets: ['latin'] })

    export const metadata = {
      title: 'I.D.M.P.',
      description: 'Comunidad isla de maipo',
    }

    export default async function RootLayout(props: { children: React.ReactNode }) {

      const session = await getServerSession(options)

      return (
        
        <html lang="en">
          <body className={`${inter.className} w-full h-full overflow-y-scroll overflow-x-hidden`}>
          <Header Session={session} />
          <>
          {props.children}
          </>
          <div className='z-10'>
          <Footer/>
          </div>
          </body>
          
          
        </html>
      )
    }
