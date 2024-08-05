import '@styles/globals.css'
import { AuthProvider } from './Provider'
const layout = ({children}) => {
  return (
    <html lang='en'>
        <body className='bg-slate-50 h-screen '>
          <div className='m-auto w-4/5 bg-white  h-full'>
          <AuthProvider>
           {children}
          </AuthProvider>
          </div>
        </body>
    </html>
  )
}

export default layout