var USER_DATA = {
    name:'Arulselvan Madhavan',
    username:'Arulselvanmadhavan',
    image:'https://avatars2.githubusercontent.com/u/7578919?v=3&u=79eeab9bfae5dd73b49f78522aa03acaaf5d9804&s=140'
}

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
// var ProfilePic = React.createClass({
//     render:function(){
//         return (
//             <img src={this.props.imageUrl} style={{height:100,width:100}} />
//         );
//     }
// });
//
// var Link = React.createClass({
//     changeUrl:function(){
//         window.location.replace(this.props.url)
//     },
//     render:function(){
//         return (
//             <span style={{color:'blue',cursor:'pointer'}}
//                 onClick={this.changeUrl}>
//                 {this.props.children}
//             </span>
//         );
//     }
// });
//
// var ProfileLink = React.createClass({
//     render:function(){
//         return (
//             <div>
//                 <Link url={'https://github.com/'+this.props.username}>
//                     {this.props.username}
//                 </Link>
//             </div>
//         );
//     }
// });
//
// var ProfileName = React.createClass({
//     render:function(){
//         return (
//             <div>{this.props.name}</div>
//         );
//     }
// });
//
// var Avatar = React.createClass({
//     render:function(){
//         return (
//             <div>
//                 <ProfilePic imageUrl={this.props.user.image} />
//                 <ProfileName name={this.props.user.name} />
//                 <ProfileLink username={this.props.user.username} />
//             </div>
//         )
//     }
// });

ReactDOM.render(
    routes,
    document.getElementById('app')
);
