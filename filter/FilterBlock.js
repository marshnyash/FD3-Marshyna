var FilterBlock = React.createClass({
    displayName: 'FilterBlock',

    propTypes: {
        words:React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired
        )
    },

    getInitialState: function() {
        return { 
            wordsArr: this.props.words,
            modeChecked: false,
            textFilter: ''
        };
    },

    changeSort: function(EO){
        this.setState({
            modeChecked: EO.target.checked
        }, this.handler)
    },

    typeWord: function(EO){
        this.setState({
            textFilter: EO.target.value
        },this.handler)
    },

    handler: function(){
        var wordsArrNew = this.props.words.slice();
        if(this.state.modeChecked){
            wordsArrNew = wordsArrNew.sort();
        }
        if(this.state.textFilter){
            wordsArrNew = wordsArrNew.filter(item => item.indexOf(this.state.textFilter) != -1);
        }
        this.setState({
            wordsArr: wordsArrNew
        })
        console.log('modeChecked',this.state.modeChecked);
        console.log('textFilter',this.state.textFilter);
        console.log('wordsArr',this.state.wordsArr);
    },


    render: function(){

        var wordsArrRender = this.state.wordsArr.map( (item , id) =>
            React.DOM.div({key: id},
                item
            )
        );

        return  React.DOM.div(null,
                    React.DOM.div({
                        className:'filterWrapper'},
                        React.DOM.input({
                            type:'checkbox',
                            checked:this.state.modeChecked,
                            onChange:this.changeSort
                        }),
                        React.DOM.input({
                            type:'text',
                            onChange:this.typeWord
                        }),
                    ),
            
                    React.DOM.div ( {className:'words'}, wordsArrRender) 
        )
    },

})

