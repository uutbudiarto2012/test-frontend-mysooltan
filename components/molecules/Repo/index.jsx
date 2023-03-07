import Image from 'next/image'

const Repo = ({ name, username, avatar, language, preview_link }) => {
  const link = preview_link && preview_link.split('/').pop()
  return (
    <div className='p-3 rounded-lg shadow bg-white hover:scale-105 transition-all duration-300'>
      <div className='mb-2'>
        <div className='md:flex my-1 text-xs md:text-sm'>
          <div className='w-12'>Repo</div>
          <div className='hidden md:block mx-2'>:</div>
          <div className='flex-1'>{name}</div>
        </div>
        {link && (
          <div className='my-1'>
            <a
              className='text-cyan-500 text-xs font-semibold'
              href={`http://${link}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Preview Homepage
            </a>
          </div>
        )}
      </div>
      <div className='flex gap-1 md:gap-4 border-t py-2'>
        <div className='w-10 h-10 border rounded-full relative'>
          <Image
            className='w-full h-full object-cover p-[2px] rounded-full'
            fill
            src={avatar}
            alt={avatar || 'image'}
          />
        </div>
        <div className='text-xs md:text-sm flex flex-1 flex-col gap-1'>
          <span>{username}</span>
          <span className='text-xs text-cyan-500'>{language || '-'}</span>
        </div>
      </div>
    </div>
  )
}

export default Repo
