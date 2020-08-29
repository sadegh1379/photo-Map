import React , {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import StarsIcon from '@material-ui/icons/Stars';


import { context} from '../../dataContext';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginBottom : '56px',
     
    },
    gridList: {
      width: '100%',
      height: "100%",
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
      button: {
        margin: theme.spacing(1),
      },
  }));

function ImageList(props) {
    const classes = useStyles();
    const [color , setColor] = React.useState(false);

   const {images , loading , setZoom , zoomImg , removeZoom , setFav  } = useContext(context);
   
   const list  = images.length > 0 ?  images.map((img , index) => (
    <GridListTile key={index}>
      <img style={{backgroundPosition:'center' ,  backgroundSize:'cover' , width:'100%'}} src={img.largeImageURL} alt={img.user} />
      <GridListTileBar
        title={img.tags}
        subtitle={<span>by:  <strong>{img.user}</strong> </span>}
        actionIcon={
          <IconButton onClick={()=>setZoom(img.largeImageURL)} aria-label="send" className={classes.icon}>
            <ZoomInIcon />
          </IconButton>
        }
      />
    </GridListTile>
  )) : null

    
  if(loading){
      return(
        <Backdrop  className={classes.backdrop} open={true}>
            <CircularProgress color="secondary" />
        </Backdrop>
      ) 
  }else{
      if(images){
        return (
            <div className={classes.root}>
            <GridList cellHeight={140} className={classes.gridList}>
              <GridListTile  cols={3} style={{ height: 'auto' }}>
                <ListSubheader component="div"></ListSubheader>
              </GridListTile>
              {list}
            </GridList>

            {/* dialog */}
                  
                      <Dialog
                         
                          open={zoomImg ? true : false}
                          // onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                   {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
                          <DialogContent>
                            <img style={{width:'100%' , height , backgroundPosition:'center' , backgroundSize:'cover'}} src={zoomImg}/>
                            <div style={{display:'flex' , justifyContent:'space-between' , alignItems:'start'}}>
                                <Typography className={classes.root}>
                                    <Link href={zoomImg} color="inherit">
                                    <Button
                                          variant="contained"
                                          color="primary"
                                          size="small"
                                          className={classes.button}
                                          startIcon={<GetAppIcon />}
                                        >
                                          دانلود عکس
                                        </Button>
                                    </Link>
                                  </Typography>

                                  <IconButton color="primary" onClick={()=>{
                                      const fav = {date : new Date().toLocaleDateString('fa-IR') , img:zoomImg}
                                      setFav(fav);
                                      setColor(!color)
                                  }} >
                                       <StarsIcon  fontSize="large" />
                                  </IconButton>

                            </div>
                            
                          </DialogContent>
                          <DialogActions>
                      
                              <Button onClick={removeZoom} className={classes.close} variant="outlined"   color="secondary" autoFocus>
                                بستن  
                              </Button>
                          </DialogActions>
                </Dialog>
          </div>
        )
      }else{
         return null
      }
    
  }
  
  
    
}

export default ImageList;

