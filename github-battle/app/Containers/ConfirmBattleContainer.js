var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
    contextTypes:{
        router:React.PropTypes.object.isRequired
    },
    componentWillMount:function(){
        console.log("Will Mount");
    },
    componentDidMount:function(){
        var query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne,query.playerTwo])
            .then(function(players){
                console.log("Called",players);
                this.setState({
                    isLoading:true,
                    playersInfo:[players[0],players[1]]
                });
            }.bind(this));
    },
    handleInitiateBattle:function(){
        this.context.router.push({
            pathname:'/results',
            state:{
                playersInfo:this.state.playersInfo
            }
        })
    },
    getInitialState:function(){
        return {
            isLoading:true,
            playersInfo:[]
        }
    },
    render:function(){
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={this.handleInitiateBattle}
                playersInfo={this.state.playersInfo}/>
        );
    }
});

module.exports = ConfirmBattleContainer;
