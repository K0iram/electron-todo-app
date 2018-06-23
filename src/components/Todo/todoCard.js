import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

import './style.css'

const TodoCard = (props) => {
  const { title, date, body, removeItem, disabled } = props

  return (
    <div>
      <Card className="card">
        <CardContent>
          <Typography variant="headline" component="h2">
            {title}
          </Typography>
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

  TodoCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string
  }


export default TodoCard;