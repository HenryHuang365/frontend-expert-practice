import React, { useState } from 'react';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleTodoItem } from './codeBlocks';
import Input from '../UI/Input';
import { ButtonBlue } from '../UI/Button';
import Divider from '../UI/Divider';
import { CONTENT_VARIANTS } from '../../constants';

interface ToDo {
  text: string;
}

const TodoList: React.FC<Props> = ({ title }) => {
  const [input, setInput] = useState<string>('');
  const [toDoLists, setToDoLists] = useState<ToDo[]>([]);
  const handleSubmit = () => {
    const todoItem: ToDo = { text: input ?? '' };
    const array = [...toDoLists, todoItem];
    setToDoLists(array);
    setInput('');
  };

  const handleDelete = (index: number) => {
    const prev = [...toDoLists];
    prev.splice(index, 1);
    setToDoLists(prev);
  };
  return (
    <ProjectPage title={title}>
      <QuestionDetails
        title={title}
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>You're given HTML and CSS files for a simple todo list, and you need to make the todo list functional using JavaScript.</p>
        <p>
          The todo list has an input field and an add button, which are meant to be used to create named todo items. It also has an empty{' '}
          <span className={classes.questionDescriptionHighlight}>#todo-list</span> <span className={classes.questionDescriptionHighlight}>ul</span>,
          to which todo items will be appended.
        </p>
        <p>The todo list should have the following functionality:</p>
        <ul>
          <li>When nothing is typed into the input, the add button should be disabled. Otherwise, it should be enabled.</li>
          <li>
            When the add button is enabled and clicked on, a new todo item should be created and appended to the{' '}
            <span className={classes.questionDescriptionHighlight}>#todo-list</span>, and the input should be cleared.
          </li>
          <li>
            Each todo item should be an HTML list item with two children: a level-two heading and a button element. The heading should have the text
            content of whatever was typed into the input at the time of creation, and the button should have{' '}
            <span className={classes.questionDescriptionHighlight}>X</span> as its text content and{' '}
            <span className={classes.questionDescriptionHighlight}>delete-button</span> as its class (this class is defined in the provided CSS file).
          </li>
          <li>
            When the <span className={classes.questionDescriptionHighlight}>X</span> button of a todo item is clicked on, the todo item should be
            removed from the list. Below is an example of a todo item in HTML:
          </li>
        </ul>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleTodoItem} language='xml' />
        </div>
      </QuestionDetails>
      <Divider />
      <motion.section variants={CONTENT_VARIANTS} className={classes.solutionContainer}>
        <div className={classes.todoListWrapper}>
          <h1 className={classes.todoListHeader}>Todo List</h1>
          <div className={classes.todoListInputWrapper}>
            <Input
              key={'input'}
              type='text'
              placeholder='Input'
              value={input}
              onChange={(e) => {
                setInput(e.currentTarget.value);
              }}
            />
            <ButtonBlue
              key={'add-button'}
              disabled={input === ''}
              onClick={() => {
                handleSubmit();
              }}
            >
              Add
            </ButtonBlue>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
              gap: '1rem',
            }}
          >
            <div
              style={{
                backgroundColor: 'transparent',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '40px',
                width: '100%',
                border: 'white solid 1px',
                padding: '0 10px',
              }}
            >
              <input
                type='text'
                placeholder='Second input'
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  height: '100%',
                  color: 'white',
                  fontSize: 'large',
                }}
                value={input}
                onChange={(e) => {
                  setInput(e.currentTarget.value);
                }}
              />
            </div>
            <ButtonBlue
              disabled={input === ''}
              onClick={() => {
                handleSubmit();
              }}
            >
              Add
            </ButtonBlue>
          </div>
          <ul
            key='todo-list'
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              textAlign: 'left',
              paddingLeft: '0px',
            }}
          >
            {toDoLists.map((t, index) => (
              <li
                key={`t.text-${index}`}
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '5px 10px',
                  borderRadius: '5px',
                }}
              >
                <p style={{ alignItems: 'center' }}>{t.text}</p>
                <ButtonBlue
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  X
                </ButtonBlue>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </ProjectPage>
  );
};

export default TodoList;
