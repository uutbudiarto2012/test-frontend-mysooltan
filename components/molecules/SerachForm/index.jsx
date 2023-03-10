import Button from '@/components/atoms/Button'
import FormControl from '@/components/atoms/FormControl'
import { getRepos } from '@/features/repos/reposSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const SearchForm = () => {
  const [username, setUsername] = useState('uutbudiarto2012')
  const dispatch = useDispatch()

  const handleSearch = e => {
    e.preventDefault()
    dispatch(getRepos(username ? username : 'uutbudiarto2012'))
  }
  return (
    <form
      onSubmit={handleSearch}
      className='grid items-center md:grid-cols-2 pb-4'
    >
      <h2 className='mb-4 text-slate-600 font-semibold text-xl'>
        Public Repositories
      </h2>
      <div className='flex gap-2'>
        <div className='flex-1'>
          <FormControl
            onChange={e => setUsername(e.target.value)}
            placeholder='username github'
          />
        </div>
        <Button label='Search' />
      </div>
    </form>
  )
}

export default SearchForm
