const React = require ('react');
const MessageItem = require ('./MessageItem');



class MessageList extends React.Component {
  renderText(ms,i){
    return (
    <MessageItem 
    text = {ms.text}
	fromMe = {ms.fromMe}
	/>
    );
};
  render() {
	   const  {threads,currentIndex} =this.props; 
	   const { target, messages } = threads[currentIndex];
	   const text = messages.text;
	   
    return (
	<div className="message-list">{messages.map(this.renderText,this)}</div>
      // html -> jsx
    );
  }
}


module.exports=MessageList;
