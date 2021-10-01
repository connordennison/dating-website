import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const List = () => {
  const {data, error} = useSWR('/api/entries/getAll', fetcher)
  if (error) return <div className='error'>Failed to load entries.</div>
  if (!data) return <div className='muted'>Loading...</div>
  return (
    <div>
      <ul>
        {data['items'].map((item) => (
          <li className='reason' key={Math.round(Math.random() * 9999).toString()}><span>{item.message}</span><span className='muted'> - {item.name} <span className='muteded'>{item.email}</span></span></li>
        ))}
      </ul>
    </div>
  )
}

export default List
