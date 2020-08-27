import React , {createContext , Component} from 'react';
import axios from 'axios'

const context = createContext();

const URL = 'https://pixabay.com/api';
const API_KEY = '18052634-b0363632471d44deff5c642af';


 class DataContextProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            images : [],
            loading : false,
            savedImage : [],
            error : '',
            number : 30 ,
            zoomImg : '' ,
            favImages :  window.localStorage.getItem("favimages")?JSON.parse( window.localStorage.getItem("favimages")) : []
        }

    }

    // search for find images for result
    searchImage =async (text) =>{

    
        if(text === ''){
            this.setState({
                images : false
            })
            return
        }

        // set loading true
        this.setState({
            loading : true
        })

        const {data} =await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${this.state.number}&safesearch=true`)
        if(data.hits.length > 10){
            this.setState({
                images : data.hits,
                loading : false
            })
            
           
        }else{
            setTimeout( ()=>{
                this.setState({
                    error : 'نتیجه ای دریافت نشد',
                    loading : false
                    
                } , ()=>alert("نتیجه ای یافت نشد."))
            } , 4000)
        }
    }

    // set image to zoom
    setZoom = (img)=>{
        this.setState({
            zoomImg : img
        })
    }

     // remove image to zoom
     removeZoom = ()=>{
        this.setState({
            zoomImg : ''
        })
    }

    // set fav img
    setFav = (ob) =>{
        this.setState({
            favImages : [...this.state.favImages , ob]
        } , ()=>{
            window.localStorage.setItem("favimages" , JSON.stringify(this.state.favImages))
        })
    }

    // changeNumber
    changeNumber = (number)=>{
        this.setState({
            number : number
        } , ()=>console.log(this.state.number))
    }
    

    render() {
        return (
            <context.Provider value={{
                ...this.state,
                searchImage : this.searchImage,
                setZoom : this.setZoom,
                removeZoom : this.removeZoom,
                setFav : this.setFav,
                changeNumber : this.changeNumber

            }}>
                {this.props.children }
            </context.Provider>
        )
    }
}

const DataContextConsumer = context.Consumer;
export { DataContextProvider , DataContextConsumer , context } ;
