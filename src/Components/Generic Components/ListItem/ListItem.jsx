import React,{Fragment} from 'react';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './listitem.css'
export default function ListItems(props) {
    const data = props.data;

    return (
      <Fragment>
        <ListItem>
          <ListItemAvatar>
            <Avatar>H</Avatar>
          </ListItemAvatar>
          <ListItemText
          primary={
            <Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                test
              </Typography>
            </Fragment>
          }
          secondary={
            <Fragment>
              <Typography
                component="span"
                variant="body1"
                color="textPrimary"
              >
                {data.mensajes}
              </Typography>
            </Fragment>
          }
        />
        <ListItemText ><span className="textRigth">{data.fecha}</span></ListItemText>
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        </Fragment>
    );
  }