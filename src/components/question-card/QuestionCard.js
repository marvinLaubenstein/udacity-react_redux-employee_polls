import { connect } from 'react-redux';
import './question-card.css';
import { Link, useResolvedPath } from 'react-router-dom';

const QuestionCard = ({ answered, question, users }) => {
  return (
    <div className={`list-item-question-card${answered ? '-answered' : ''}`}>
      <li key={question.id} className="question-card-list">
        <img
          src={users[question.author]?.avatarURL}
          alt="User"
          className="question-card-list-avatar"
        ></img>
        <div className="question-card-list-author">{question.author}</div>
        <div className="question-card-list-date">
          {Date(question.timestamp)}
        </div>
      </li>
      <Link to={'/questions/' + question.id}>Show me the question</Link>
    </div>
  );
};

const mapStateToProps = ({ questions, users }, { questionID }) => {
  const question = questions[questionID];
  return {
    question: question,
    users,
  };
};

export default connect(mapStateToProps)(QuestionCard);
