var IshopGood = React.createClass({

    displayName: 'IshopGood',

    propTypes:{
        name: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        URL: React.PropTypes.string.isRequired,
        available: React.PropTypes.number.isRequired,
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
        return this.props.selectedGoodCode!=this.props.code 
            ? React.DOM.tr({
                className: 'Ishop good flex', 
                onClick: this.goodClicked
            },
                React.DOM.td({className:'name flex-col'},this.props.name),
                React.DOM.td({className:'price flex-col'},this.props.price),
                React.DOM.td({className:'url flex-col'},this.props.URL),
                React.DOM.td({className:'available flex-col'},this.props.available),
                React.DOM.td({className:'button'}, React.DOM.button({onClick: this.clickedDelete}, "Delete" ))
            )
            : React.DOM.tr({
                className: 'good flex activeBg', 
                onClick: this.goodClicked
            },
                React.DOM.td({className:'name flex-col'},this.props.name),
                React.DOM.td({className:'price flex-col'},this.props.price),
                React.DOM.td({className:'url flex-col'},this.props.URL),
                React.DOM.td({className:'available flex-col'},this.props.available),
                React.DOM.td({className:'button'}, React.DOM.button({onClick: this.clickedDelete}, "Delete" ))
            )
        

    },
});