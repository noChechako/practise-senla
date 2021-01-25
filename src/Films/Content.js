import './Content.css';

function Element(){
    return (<div class="content__elem ">
    Фильм
</div>);

}

function Content() {
    return (
         <div class="content">
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
           
        </div>
      
    );
  }


  export default Content;
