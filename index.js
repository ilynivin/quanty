#!/usr/bin/env node


import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Quize \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am Runing on Your Computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    Pls ${chalk.bgGreen('Star me On Gitub')}

  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work That's a greate Answer` });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose !` });
    process.exit(1);
  }
}


async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'In which Italian city can you find the Colosseum?\n',
    choices: [
      'Venice',
      'Rome',
      'Naples',
      'Milan',
    ],
  });

  return handleAnswer(answers.question_1 === 'Rome');
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'In the TV show New Girl, which actress plays Jessica Day?\n',
    choices: [
        'Zooey Deschanel',
        'Kaley Cuoco',
        'Jennifer Aniston',
        'Alyson Hannigan',
    ],
  });
  return handleAnswer(answers.question_2 === 'Zooey Deschanel');
}

async function question3() {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: `What is the largest canyon in the world?\n`,
    choices: [
        'Verdon Gorge, France',
        'King’s Canyon, Australia',
        'Yarlung Zangbo Grand Canyon',
        'Fjaðrárgljúfur Canyon, Iceland'
    ],
  });

  return handleAnswer(answers.question_3 === 'Yarlung Zangbo Grand Canyon');
}

async function question4() {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: 'How long is the border between the United States and Canada?\n',
    choices: [
      '3,525 miles',
      '4,525 miles',
      '5,525 miles',
      '6,525 miles', 
    ],
  });
  return handleAnswer(answers.question_4 === '5,525 miles');
}

async function question5() {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message:
      'What is the largest active volcano in the world?\n',
    choices: ['Mount Etna', 'Mount Vesuvius', 'Mauna Loa', 'Mount Batur'],
  });

  return handleAnswer(answers.question_5 === 'Mauna Loa');
}



async function Winner(){
    console.clear();
    const msg = 'You Win !';

    figlet(msg,(err, data) => {

    console.log(gradient.pastel.multiline(data));

    });
}


console.clear();
await welcome();
await question1();
await question2();
await question3();
await question4();
await question5();
Winner();
