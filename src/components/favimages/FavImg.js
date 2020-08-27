import React , {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Paper from '@material-ui/core/Paper';


import {context} from '../../dataContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    marginBottom : '60px'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

export default function FavImg() {
  const classes = useStyles();
  const value = useContext(context);
  const {favImages} = value;

  return (
    <div className={classes.root}>
      <GridList cellHeight={"auto"} spacing={1} className={classes.gridList}>
        {favImages.length > 0 ? favImages.map((tile , index) => (
          <GridListTile key={index} cols={2} rows={2}>
            <img style={{backgroundPosition:'center' ,  backgroundSize:'cover' , width:'100%'}} src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.date}
              titlePosition="top"
            //   actionIcon={
            //     <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
            //       <StarBorderIcon />
            //     </IconButton>
            //   }
            //   actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        )) : <div style={{textAlign:'center' , padding :'20px'}}>
                    <h3 style={{textAlign:'center'}}>هنوز موردی وجود ندارد</h3>
            </div>
        }
      </GridList>
    </div>
    
  );
}

