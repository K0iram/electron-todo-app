import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Typography from '@material-ui/core/Typography'

import './style.css'

const ItemCard = (props) => {
  const { date, body, removeItem } = props

  return (
    <div>
      <Card className="card">
        <CardContent>
          <Typography className="pos" color="textSecondary">
            {date}
          </Typography>
          <Typography component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="fab" color="secondary" aria-label="delete" onClick={removeItem}>
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

  ItemCard.propTypes = {
    date: PropTypes.string.isRequired,
    body: PropTypes.string
  }


export default ItemCard