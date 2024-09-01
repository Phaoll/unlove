import React, { useEffect, useState } from 'react';
import { Button, Modal, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import QuestionComponent from './question.component';
import questions from '../const/questions'; 
import Cookies from 'js-cookie';

const TestPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for a cookie to see if the user has dismissed the dialog before
    const hasVisited = Cookies.get('hasVisitedTestPage');
    if (!hasVisited) {
      setIsModalVisible(true); // Show modal on first visit
      Cookies.set('hasVisitedTestPage', 'true', { expires: 30 }); // Set cookie for one month
    }
  }, []);

  const handleSubmit = () => {
    console.log('Submitted answers.');
  };

  const navigateToHome = () => {
    navigate('/');
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const showInfoDialog = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-softOrange p-6">
      <h1 className="text-3xl font-cozy font-bold mb-8 text-center text-cozyPurple">
        Personality Test
      </h1>
      <div className="w-full max-w-3xl">
        {questions.map((question) => (
          <QuestionComponent
            key={question.id}
            question={question.wording.EN} // Adjust based on language selection
            questionId={question.id}
          />
        ))}
      </div>
      <div className="flex space-x-4 mt-8">
        <Button
          type="primary"
          size="large"
          onClick={handleSubmit}
          className="bg-cozyPurple hover:bg-purpleBubble border-none text-white"
        >
          Submit Answers
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={navigateToHome}
          className="bg-cozyPurple hover:bg-purpleBubble border-none text-white"
        >
          Back to Home
        </Button>
      </div>
      <Modal
        title="Welcome to the Personality Test"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        okText="Got it!"
        cancelButtonProps={{ style: { display: 'none' } }} // Hide cancel button
      >
        <p>Explanation of the logic + explanation of the scales + example with age gap</p>
      </Modal>
      <div className="fixed bottom-4 right-4">
        <Tooltip title="Show Information">
          <Button
            shape="circle"
            icon={<i className="anticon anticon-info-circle" />}
            onClick={showInfoDialog}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default TestPage;
