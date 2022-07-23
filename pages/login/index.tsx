import type { NextPage } from 'next'
import Layout from '../../components/layout/Layout'

const login:NextPage = () : any => {
    return (
        <>
          <Layout>
               <div className="login-wrapper p-10">
                  <div className="login-box mx-auto w-full md:w-[400px] p-4 rounded-md bg-slate-800 ">
                      <h1 className='m-4 text-center text-white'>Login page</h1>
                      <form>
                        <div className="field-control mb-6">
                          <input type="text" name="username" id=" username " placeholder='username'  className='p-2 w-full rounded-xl text-sm text-state-900'/>
                        </div>
                        <div className="field-control mb-6">
                          <input type="password" name="password" id=" password " placeholder='password'  className='p-2 w-full rounded-xl text-sm text-state-900'/>
                        </div>
                        <div className="field-control mb-6">
                          <input type="submit" name="submit" id=" submit " value="login" className='py-2 px-10 mx-auto bg-[green] text-white rounded-md cursor-pointer'/>
                        </div>
                      </form>
                  </div>
               </div>
          </Layout>
        </>
      )
}


export default login