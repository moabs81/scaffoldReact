import React, {Component} from 'react';

import '../lessStyles/WebPart.less';

class DisplayCategories extends Component{
    render(){
        const returnArr = [];
        this.props.categories.forEach(el=>{
            returnArr.push(<div className = "categoryCell">{el}</div>);
        });
        return(
            <div className = "tableHeaderRow">            
                {returnArr}
            </div>
        );
    }
};

class DisplayContent extends Component{    
    render(){
        const arrContent = [];        
        Object.keys(this.props.content).forEach(el=>{            
            arrContent.push(<div className = "contentCell">{this.props.content[el]}</div>);            
        });
        return(
            <div className = {'tableBodyRow ' + this.props.content['region']}>
                {arrContent}
            </div>
        );
    }
}

class ContentContainer extends Component{        
    render(){
        const arrContent = [];
        this.props.data.forEach(el=>{            
            arrContent.push(<DisplayContent content={el}/> );
        });
        return(
            <div className = "tableContainer">
                <div className = "table">
                    <DisplayCategories categories = {Object.keys(this.props.data[0])} />                
                    {arrContent}
                </div>
            </div>            
    );  
    }
}

class SearchWebPart extends Component{
    constructor(props){
        super(props);
        this.searchText = this.searchText.bind(this);
    }
    searchText(e){        
        this.props.onTextChange(e.target.value);
    };

    render(){
        return(
            <div className = "searchBarContainer">
                <input type = "text" placeholder = "search city" onChange = {this.searchText} />
            </div>
        );
    }
}

class WebPart extends Component{    
    constructor(props){
        super(props);
        this.state={
            searchText:''
        };
        this.setSearchText = this.setSearchText.bind(this);
    }
    setSearchText(searchString){
        console.log(searchString);
        this.setState({searchText:searchString});
    }

    render(){                
        let ContentContainerProps = [];
        const componentModel = {};
        Object.keys(this.props.data[0]).forEach(el=>{
            componentModel[el] = '';
        });
        ContentContainerProps.push(componentModel);

        if(this.state.searchText == ''){
            ContentContainerProps = this.props.data;
        } else{
            this.props.data.forEach(el=>{
                if(el['city'].indexOf(this.state.searchText) != -1){
                    ContentContainerProps = [];
                    ContentContainerProps.push(el);
                };
            });
        };

        return(
            <div className = "webPartContainer">
                <ContentContainer data = {ContentContainerProps}/>
                <SearchWebPart onTextChange = {this.setSearchText}/>
            </div>
        );
    };
};

export default WebPart;