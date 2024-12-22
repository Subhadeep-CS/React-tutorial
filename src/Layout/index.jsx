import Header from "../Common/Header";
import Footer from "../Common/Footer";
const Layout=(props)=>{
    //console.log(styles);
    return(
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout;

