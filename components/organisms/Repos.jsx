import { getRepos } from '@/features/repos/reposSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Repo from '../molecules/Repo'
import Loader from '../molecules/Repo/Loader'
import NotFoundRepo from '../molecules/Repo/NotFoundRepo'
import SearchForm from '../molecules/SerachForm'

const Repos = () => {
  const { repos } = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRepos())
  }, [dispatch])
  return (
    <div>
      <SearchForm />
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4'>
        {!repos.status || (repos.status === 'loading' && <Loader count={8} />)}
        {repos.status === 'success' &&
          repos?.entities?.map(item => (
            <Repo
              size={item?.size}
              clone_url={item?.clone_url}
              stargazers_count={item?.stargazers_count}
              watchers_count={item?.watchers_count}
              forks_count={item?.forks_count}
              avatar={item?.owner?.avatar_url}
              language={item?.language}
              username={item?.owner?.login}
              name={item?.name}
              key={item.id}
              preview_link={item?.homepage}
            />
          ))}
      </div>
      {repos.status === 'success' && repos?.entities.length === 0 && (
        <NotFoundRepo type='repo' />
      )}
      {repos.status === 'failed' && <NotFoundRepo type='user' />}
    </div>
  )
}

export default Repos
