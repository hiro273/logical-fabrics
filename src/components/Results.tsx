import React from 'react'
import numeral from 'numeral'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => createStyles({
  table: {
    maxWidth: 320,
  },
}))

type Props = {
  Search: string[]
}

const Results: React.FC<Props> = ({Search}) => {
  const classes = useStyles()
  const items = Search.map((item: any) => {
    return (
      <TableRow key={item.description}>
      <TableCell>{item.description}</TableCell>
      <TableCell align='right'>{numeral(item.score).format('0.0000%')}</TableCell>
    </TableRow>
    )
  })

  return (
      <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell align='right'>Score</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items}
      </TableBody>
    </Table>
  )
}

export default Results
