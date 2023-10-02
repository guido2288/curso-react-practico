import Layout from '../../Components/Layout'

function LogIn() {
  return (
    <Layout>
      <h1 className='font-medium text-xl'>Welcome</h1>
      <form action="submit" className='flex flex-col mt-[30px]'>
        <label htmlFor="">Email:</label>
        <input type="text" placeholder='hi@helloword.com' className='border border-l border-black rounded-md px-[20px] mb-[20px] py-[10px]' />
        <label htmlFor="">Password:</label>
        <input type="text" placeholder='Peter' className='border border-l border-black rounded-md px-[20px] mb-[20px] py-[10px]' />
        <button className='text-white bg-gray-500 py-[10px] rounded-md'>Log in</button>
      </form>
      <p className='text-sm mt-2 underline cursor-pointer'>Forgot my password</p>
    </Layout>
  )
}

export default LogIn