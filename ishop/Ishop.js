var Ishop = React.createClass({

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
    
    render: function() {
        var goodsCode = this.props.goods.map( item =>
            React.DOM.div({key:item.code,className:'good flex'},
              React.DOM.span({className:'name flex-col'},item.name),
              React.DOM.span({className:'price flex-col'},item.price),
              React.DOM.span({className:'url flex-col'},item.URL),
              React.DOM.span({className:'available flex-col'},item.available),
            )
        );
        
        return React.DOM.div( {className:'Ishop'}, goodsCode);

    },
});