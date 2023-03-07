import Image from 'next/image'
import { FaEye, FaLink, FaStar } from 'react-icons/fa'
import { TbGitFork } from 'react-icons/tb'

const Repo = ({
  name,
  username,
  avatar,
  language,
  preview_link,
  size,
  clone_url,
  stargazers_count,
  watchers_count,
  forks_count
}) => {
  const link = preview_link && preview_link.split('/').pop()
  return (
    <div className='p-3 relative rounded-lg overflow-hidden group shadow bg-white hover:shadow-lg transition-all duration-500'>
      {link && (
        <a
          className='text-cyan-50 p-1 bg-cyan-400 flex gap-2 text-xs font-semibold absolute -bottom-5 right-2 group-hover:bottom-2 duration-500'
          href={`http://${link}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLink className='text-cyan-50' />
        </a>
      )}
      <div className='mb-2'>
        <div className='md:flex my-1 text-xs md:text-sm'>
          <div className='w-12'>Name</div>
          <div className='hidden md:block mx-2'>:</div>
          <div className='flex-1'>{name}</div>
        </div>
      </div>
      <div className='flex gap-1 md:gap-4 py-2'>
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
          <div className='flex gap-1 items-center'>
            <span className='text-xs text-slate-500'>{size} kb</span>
            <span> - </span>
            <span className='text-xs text-cyan-500'>
              {language || 'not detected'}
            </span>
          </div>
        </div>
      </div>
      <div className='border-t mt-2 pt-2'>
        <div className='flex gap-2'>
          <div className='flex gap-1 border py-[2px] px-[4px] items-center'>
            <FaStar fontSize={13} />
            <span className='text-[10px]'>{stargazers_count}</span>
          </div>
          <div className='flex gap-1 border py-[2px] px-[4px] items-center'>
            <FaEye fontSize={13} />
            <span className='text-[10px]'>{watchers_count}</span>
          </div>
          <div className='flex gap-1 border py-[2px] px-[4px] items-center'>
            <TbGitFork fontSize={13} />
            <span className='text-[10px]'>{forks_count}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Repo
