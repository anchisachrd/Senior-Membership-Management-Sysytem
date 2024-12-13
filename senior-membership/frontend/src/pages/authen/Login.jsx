import React from 'react'

function Login() {
  return (
    
    <div>
      {/* แก้ทีหลัง */}
      <div class="max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl">
      <a href="" class="flex items-center mb-5">
            <img src="https://media.discordapp.net/attachments/1263104771322155050/1316775634856579092/logo_chomrom.png?ex=675c465f&is=675af4df&hm=174eea12b7785a176d074afb6dc8f0febe147082dccceac20f99d7ecd33a25db&=&format=webp&quality=lossless&width=625&height=195"
              class="h-auto max-w-xs" alt="Logo" />
          </a>
      </div>
      
      {/* กล่อง register */}
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        {/* <div class="md:shrink-0">
          <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://media.discordapp.net/attachments/1190745408822059078/1316513656887967925/IMG_3234.jpg?ex=675d4ca3&is=675bfb23&hm=acb5e7a2d1b4f7fbc608b013f26609fc5a6440ba9c4017f3167ca2e91dce0990&=&format=webp&width=672&height=701" alt="Modern building architecture" />
        </div> */}
        <div className='ibm-plex-sans-thai-medium'>
          <div class="p-8">
          <div class="text-center text-3xl text-grey-500">ลงทะเบียนชมรมผู้สูงอายุ</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
          <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
        </div>
        </div>
        
      </div>
    </div>
    </div>

  )
}

export default Login