import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './Components/CommentDetail';
import ApprovalCard from './Components/ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <h4>WARNING!</h4>
             Are U Sure U Want To Do This...?
             </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="SAM" timeago="today at 4:30 PM" content="nice block post" avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="jane" timeago="today at 12:10 PM" content="I like the subject" avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="mary" timeago="Yesterday at 6:30 PM" content="I like the writting" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));