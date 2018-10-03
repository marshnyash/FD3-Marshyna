var IshopBlock = React.createClass({

    displayName: 'Ishop',

    propTypes:{
        goods:React.PropTypes.arrayOf(
            React.PropTypes.shape({
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
            })
        )
    },
    
    getInitialState: function() {
        return { 
            selectedGoodCode: null,
            goodsArr : this.props.goods
        };
    },

    goodSelected: function(code) {
        console.log('выбран товар с кодом: ', code);
        this.setState({selectedGoodCode: code});
    },
    deleteGood: function(code){
        var goodsArrFiltered = this.state.goodsArr.filter( item => {
            return item.code != code;
        });
        this.setState({goodsArr: [...goodsArrFiltered]})
    },

    render: function() {
        var goodsArrRender = this.state.goodsArr.map( item =>
            React.createElement(IshopGood, {
                key: item.code,
                name: item.name,
                code:item.code,
                price: item.price,
                URL: item.URL,
                available: item.available,
                cbClicked: this.goodSelected,
                cbGoodClickedDelete: this.deleteGood,
                selectedGoodCode: this.state.selectedGoodCode
            })
        );
        return React.DOM.div({className:'Ishop'}, 
            React.DOM.table( {className:'Goods'}, 
                React.DOM.tr({className: 'good flex'},
                React.DOM.th({className:'name flex-col'},"Name"),
                React.DOM.th({className:'price flex-col'},"Price"),
                React.DOM.th({className:'url flex-col'},"URL"),
                React.DOM.th({className:'available flex-col'},"Available"),
                React.DOM.th({className:'button'}, "Delete" )
            ),
            goodsArrRender)
        )
    }
});