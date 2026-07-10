import { buildHaloKnowledgePrompt, findDestinations, getStudySnapshot, getSuggestedSteps } from './halo-knowledge.js';

const API_KEY = 'saintly-anthropic-api-key';
const MODEL = 'claude-opus-4-8';
const $ = id => document.getElementById(id);
const plan = $('halo-next-steps');
const intro = $('halo-study-intro');
const chat = $('halo-guide-chat');
const form = $('halo-guide-form');
const input = $('halo-guide-input');
let busy = false;

function renderPlan() {
  const snapshot = getStudySnapshot();
  const steps = getSuggestedSteps(snapshot);
  intro.textContent = snapshot.topics.some(topic => topic.attempts > 0) || snapshot.openMistakes || snapshot.testsCompleted
    ? 'Here’s the strongest next sequence based on what you’ve already done.'
    : 'Start with a quick baseline, build one focused skill, then test it under time pressure.';
  plan.replaceChildren(...steps.map((step, index) => {
    const link = document.createElement('a');
    link.className = 'halo-next-step';
    link.href = step.url;
    link.innerHTML = `<span class="halo-step-number">${index + 1}</span><span><strong></strong><small></small></span><span class="halo-step-link"></span>`;
    link.querySelector('strong').textContent = step.title;
    link.querySelector('small').textContent = step.detail;
    link.querySelector('.halo-step-link').textContent = `${step.label} →`;
    return link;
  }));
}

function addMessage(kind, text, destinations = []) {
  const bubble = document.createElement('div');
  bubble.className = `halo-guide-message halo-guide-message--${kind}`;
  const copy = document.createElement('span');
  copy.textContent = text;
  bubble.append(copy);
  if (destinations.length) {
    const links = document.createElement('div');
    links.className = 'halo-guide-links';
    destinations.forEach(destination => {
      const link = document.createElement('a');
      link.href = destination.url;
      link.textContent = `${destination.title} →`;
      links.append(link);
    });
    bubble.append(links);
  }
  chat.append(bubble);
  chat.scrollTop = chat.scrollHeight;
  return bubble;
}

function snapshotPrompt() {
  const snapshot = getStudySnapshot();
  const topicLines = snapshot.topics.length
    ? snapshot.topics.map(topic => `${topic.name}: mastery ${topic.rating}, ${topic.attempts} attempts${topic.accuracy === null ? '' : `, ${topic.accuracy}% accuracy`}`).join('\n')
    : 'No topic practice recorded yet.';
  return `STUDENT SNAPSHOT:\n${topicLines}\nOpen mistakes: ${snapshot.openMistakes}\nConquered mistakes: ${snapshot.conqueredMistakes}\nPractice tests completed: ${snapshot.testsCompleted}\nLatest score: ${snapshot.latestScore ?? 'none'}`;
}

function localAnswer(query) {
  const normalized = query.toLowerCase();
  if (/what.*(next|study)|study next|prep plan|recommend/.test(normalized)) {
    const steps = getSuggestedSteps();
    return {
      text: `I’d go in this order: ${steps.map((step, index) => `${index + 1}) ${step.title}`).join(', ')}. That moves from review to focused practice, then checks whether it holds up under test conditions.`,
      destinations: steps.map(step => ({ title: step.label, url: step.url }))
    };
  }
  const destinations = findDestinations(query);
  if (destinations.length) {
    const first = destinations[0];
    return {
      text: `Your best match is ${first.title}. I found ${destinations.length > 1 ? 'a few useful places' : 'the most relevant place'} in Saintly for that.`,
      destinations
    };
  }
  return null;
}

async function askHalo(query) {
  if (busy) return;
  addMessage('user', query);
  const local = localAnswer(query);
  if (local) {
    addMessage('assistant', local.text, local.destinations);
    return;
  }

  const key = localStorage.getItem(API_KEY);
  if (!key) {
    addMessage('assistant', 'I can navigate the whole site without a key. For a more open-ended coaching answer, add your Anthropic key from the gear in the Practice Arena’s Halo panel.', [
      { title: 'Open Practice Arena', url: 'amc-10-practice-test.html' }
    ]);
    return;
  }

  busy = true;
  const thinking = addMessage('thinking', 'Thinking through your prep…');
  try {
    const mod = await import('https://esm.sh/@anthropic-ai/sdk');
    const client = new mod.default({ apiKey: key, dangerouslyAllowBrowser: true });
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 700,
      system: `You are Coach Halo, Saintly's concise and encouraging AMC 10 prep coach. Give concrete next actions and use exact Saintly URLs when useful. Keep the response under 140 words.\n\n${buildHaloKnowledgePrompt()}\n\n${snapshotPrompt()}`,
      messages: [{ role: 'user', content: query }]
    });
    const text = response.content.filter(block => block.type === 'text').map(block => block.text).join('') || 'Let’s pick one small next step.';
    thinking.remove();
    addMessage('assistant', text, findDestinations(query));
  } catch (error) {
    thinking.remove();
    addMessage('assistant', error?.status === 401
      ? 'That Anthropic key was rejected. Open Halo settings in the Practice Arena and update it.'
      : 'I couldn’t reach the AI service just now, but the study plan and every navigation shortcut above still work.');
  } finally {
    busy = false;
  }
}

form?.addEventListener('submit', event => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) return;
  input.value = '';
  askHalo(query);
});

document.querySelectorAll('[data-halo-prompt]').forEach(button => {
  button.addEventListener('click', () => askHalo(button.dataset.haloPrompt));
});

$('halo-plan-refresh')?.addEventListener('click', renderPlan);
renderPlan();
