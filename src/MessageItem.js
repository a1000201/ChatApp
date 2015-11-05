const React = require ('react');



class MessageItem extends React.Component {
  render() {
	  const {text,fromMe} = this.props;
	  var fromWho;
	if(fromMe)
		fromWho="message-item message-from-me";
	else
		fromWho="message-item message-from-other";
    return (
	           
				<div className={fromWho} >
					<span>{text}</span>
				</div>
				
      // html -> jsx
    );
  }
}



module.exports=MessageItem;
