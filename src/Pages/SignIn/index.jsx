import Layout from '../../Components/Layout'

function SignIn() {
  return (
    <Layout>
      <h1 className='font-medium text-xl'>Welcome</h1>
      <form action="submit" className='flex flex-col mt-[30px]'>
        <label htmlFor="">Your Name:</label>
        <input type="text" placeholder='hi@helloword.com' className='border border-l border-black rounded-md px-[20px] mb-[20px] py-[10px]' />
        <label htmlFor="">Your Email:</label>
        <input type="text" placeholder='Peter' className='border border-l border-black rounded-md px-[20px] mb-[20px] py-[10px]' />
        <label htmlFor="">Your Password:</label>
        <input type="text" placeholder='******' className='border border-l border-black rounded-md px-[20px] mb-[20px] py-[10px]' />

        <button className='text-white bg-black py-[10px] rounded-md'>Create</button>
      </form>
    </Layout>
  )
}

export default SignIn