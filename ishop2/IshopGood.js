var IshopGood = React.createClass({

    displayName: 'IshopGood',

    propTypes:{
        name: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        price: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        URL: React.PropTypes.string.isRequired,
        available: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        cbClicked: React.PropTypes.func.isRequired,
        cbGoodClickedDelete: React.PropTypes.func,
        selectedGoodCode: React.PropTypes.number,
    },

    goodClicked: function(EO){
        this.props.cbClicked(this.props.code);
        console.log('this.props.code:' , this.props.code)
    },

    clickedDelete: function(EO){
        this.props.cbGoodClickedDelete(this.props.code);
    },

    render: function() {
        return React.DOM.div( {className:'Ishop'},
        this.props.selectedGoodCode!=this.props.code 
            ? React.DOM.div({
                className: 'good flex', 
                onClick: this.goodClicked
            },
                React.DOM.span({className:'name flex-col'},this.props.name),
                React.DOM.span({className:'price flex-col'},this.props.price),
                React.DOM.span({className:'url flex-col'},this.props.URL),
                React.DOM.span({className:'available flex-col'},this.props.available),
                React.DOM.span({className:'button'}, React.DOM.button({onClick: this.clickedDelete}, "Delete" ))
            )
            : React.DOM.div({
                className: 'good flex activeBg', 
                onClick: this.goodClicked
            },
                React.DOM.span({className:'name flex-col'},this.props.name),
                React.DOM.span({className:'price flex-col'},this.props.price),
                React.DOM.span({className:'url flex-col'},this.props.URL),
                React.DOM.span({className:'available flex-col'},this.props.available),
                React.DOM.span({className:'button'}, React.DOM.button({onClick: this.clickedDelete}, "Delete" ))
            )
            
        
        )    
        

    },
});