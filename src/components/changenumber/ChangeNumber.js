import React , {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {context} from '../../dataContext';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';




const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  snack : {
    marginBottom: '50%'
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ChangeNumber() {
  const value = useContext(context);
  const { changeNumber , number } = value;

  const classes = useStyles();
  const [currency, setCurrency] = React.useState(number);
  const [open , setOpen] = React.useState(false)

  const handleChange = (event) => {
    setCurrency(event.target.value);
    
  };

  const outTime = ()=>{
    setTimeout(()=>setOpen(false) , 4000)
  }


  return (
    <>
    <form style={{ display:'flex'  , justifyContent:'center' , alignItems:'center' , backgroundColor:'white'}} className={classes.root} noValidate autoComplete="off">
     
                <TextField
                id="outlined-select-currency"
                select
                label="تعداد"
                value={currency}
                onChange={handleChange}
                // helperText="تعداد عکس را انتخاب کنید"
                
                >
                
                    <MenuItem   value={15}>
                                15
                    </MenuItem>
                    <MenuItem  value={20}>
                                20
                    </MenuItem>
                    <MenuItem  value={25}>
                                25
                    </MenuItem>
                    <MenuItem   value={30}>
                                30
                    </MenuItem>
                
                </TextField>
                <Button size="small" onClick={()=>{

                    changeNumber(currency);
                    setOpen(true);
                    outTime();

                }} variant="outlined" color="primary">
                            set
                </Button>
      
    </form>

            <Snackbar open={open} autoHideDuration={6000} className={classes.snack}>
                <Alert  severity="success">
                    با موفقیت انجام شد
                </Alert>
            </Snackbar>
    </>
  );
}

