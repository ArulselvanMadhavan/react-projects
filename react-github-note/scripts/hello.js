var HelloWorld = React.createClass({
    render:function(){
        return (
            <div>
            HelloWorld!
            </div>
        );
    }
});

ReactDOM.render(<HelloWorld/>,document.getElementById("app"));
