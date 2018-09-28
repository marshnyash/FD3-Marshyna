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
        ),
        
    },
    
    getInitialState: function() {
        return { 
            selectedGoodCode: null,
            selectedGoodCodeDelete: null
        };
    },

    goodSelected: function(code) {
        console.log('выбран товар с кодом: ', code);
        this.setState({selectedGoodCode: code});
    },
    goodSelectedDelete: function(code){

        console.log('кодом BUTTON: ', code);
        this.setState({selectedGoodCodeDelete: code});
        console.log('selectedGoodCodeDelete: ', this.state.selectedGoodCodeDelete);

        var isConfirm = confirm("Are you sure you wish to delete this item?");
        console.log('isConfirm: ',isConfirm);
        var filteredGoods = this.props.goods.filter((item) => {
            console.log('code ?== selectedGoodCodeDelete: ', item.code == this.state.selectedGoodCodeDelete);
            return item;
        })
        console.log('filteredGoods ',filteredGoods);
        
    },

    render: function() {
        var goodsCode = this.props.goods.map( item =>
            React.createElement(IshopGood, {
                key: item.code,
                name: item.name,
                code:item.code,
                price: item.price,
                URL: item.URL,
                available: item.available,
                cbClicked: this.goodSelected,
                cbGoodClickedDelete: this.goodSelectedDelete,
                selectedGoodCode: this.state.selectedGoodCode,
                selectedGoodCodeDelete: this.state.selectedGoodCodeDelete

            })
        );
        
        return React.DOM.div({className:'Ishop'}, 
                React.DOM.div( {className:'Goods'}, goodsCode ));

    },
});