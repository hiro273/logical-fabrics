import React, {useState,useEffect} from 'react'
import axios from 'axios'
import _ from 'lodash'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PageviewIcon from '@material-ui/icons/Pageview'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Results from './Results'

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    margin: theme.spacing(1),
  }
}))

export const Text: React.FC = () => {
  const classes = useStyles()
  const [imageUrl, setImageUrl] = useState('')
  const [Search,setSearch] = useState([])
  const [loading,setLoading] = useState(false)
  
  const clickApi = async () => {
    try {
      const result = await axios.get(`https://lf-exam-v2.web.app/api/analyze?imageUrl=${imageUrl}`)
      setSearch(result.data);
      setLoading(true)

      console.log(result.data);
    } catch {
      window.alert('読み込めないURLです')
    }
  }

  useEffect(() => {
    if (_.isNull(Search)) {
      console.log('null');
    }
  }, []);



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value)
  }

  return (
    <div>
      <TextField
      required
      id='outlined-required'
      label='Image URL'
      variant='outlined'
      value={imageUrl}
      onChange={handleChange}
    />
    <Button
      variant='contained'
      color='primary'
      size='large'
      className={classes.button}
      startIcon={<PageviewIcon />}
      onClick={() => clickApi()}
      >
      {loading ? 'ANALYZING...' : 'ANALYZE'}
    </Button>
    <Results Search={Search} />
    </div>
  )
}
