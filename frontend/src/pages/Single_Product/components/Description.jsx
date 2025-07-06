import React from 'react'

const Description = () => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center justify-center gap-5">
      <div className='flex items-center justify-center rounded md:gap-[150px] p-2'>
        <button className="bg-[#B88E2F] font-bold hover:text-gray-700 hover:bg-[#F9F1E7] transition-colors duration-200 flex-1 p-3 text-center rounded">
          Description
        </button>
        
        <button className="text-gray-500 text-center hover:text-gray-700 hover:bg-[#F9F1E7] transition-colors duration-300 flex-1 p-3 rounded">
          Additional information
        </button>
        
        <button className="text-gray-500 text-center hover:text-gray-700 hover:bg-[#F9F1E7] transition-colors duration-300 flex-1 p-3 rounded">
          Reviews [5]
        </button>
      </div>

      <div className="md:p-[90px] md:pt-0 md:pb-0 p-[10px] text-gray-500">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptate amet totam sit impedit, quisquam et quis iure sunt ipsam nisi tempora, similique sint ipsa expedita rerum quaerat. Mollitia, dicta!</p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit distinctio asperiores expedita repellat sunt veniam quaerat eveniet! Omnis tenetur architecto provident dicta nesciunt quo perspiciatis saepe repellat, corporis rem! Neque itaque ipsum, atque dolorum quas consequuntur, perspiciatis dolorem quisquam quaerat corrupti eum veniam ratione officia cupiditate alias autem fuga cumque vero. Possimus qui, corrupti eligendi inventore earum cupiditate nam quis reiciendis voluptas exercitationem sapiente ipsum autem quos, voluptatibus a enim officia aliquam dolorem libero esse nesciunt aspernatur dolorum! Necessitatibus saepe, quo amet perspiciatis doloremque debitis dignissimos distinctio labore error architecto voluptas assumenda dolorem laboriosam officiis explicabo perferendis, ducimus quos rem.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 p-4 pt-0">
        <img src="src/assets/a.png" className='cursor-pointer hover:opacity-80 transition duration-300 max-w-full h-auto' />
        <img src="src/assets/b.png" className='cursor-pointer hover:opacity-80 transition duration-300 max-w-full h-auto' />
      </div>

      <div className="h-[1px] bg-gray-300 mb-9 w-full"></div>
    </div>
  )
}

export default Description
