import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRepos, repoSelectors } from '@/features/repos/reposSlice'
import Image from 'next/image'
const Repos = () => {
  const dispatch = useDispatch()
  const repos = useSelector(repoSelectors.selectAll)
  console.log(repos)
  useEffect(() => {
    dispatch(getRepos())
  }, [dispatch])

  return (
    <div>
      <div className='grid grid-cols-4 gap-4'>
        {repos?.map(item => (
          <div className='shadow bg-white p-4 rounded-lg' key={item.id}>
            <div>{item?.name}</div>
            <div>{item?.owner?.login}</div>
            <div className='h-8 w-8 relative'>
              <Image
                fill
                src={item?.owner?.avatar_url}
                alt={item?.name || 'image'}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Repos
