'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';

import { StyledButton, StyledInput } from '@components/styled';

// TODO: fix API route
const DifficultyTooltip = () => {
  return (
    <>
      <span className="group relative grid h-6 w-6 place-content-center rounded-full bg-white/50 font-bold shadow-xl">
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/50 px-2 py-1 text-purple-900 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-white/50 before:content-[''] group-hover:opacity-100">
          We will adjust it if needed.
        </span>
        i
      </span>
    </>
  );
};

const formSchema = z.object({
  title: z.string().min(2).max(75),
  description: z.string().min(2).max(350),
  javascript: z.object({
    starter: z.string().url(),
    solution: z.string().url(),
  }),
  typescript: z.object({
    starter: z.string().url(),
    solution: z.string().url(),
  }),
  difficulty: z.union([
    z.literal('easy'),
    z.literal('medium'),
    z.literal('hard'),
  ]),
});

export type ChallengeDetails = z.infer<typeof formSchema>;

export default function ContributeForm() {
  const [formFields, setFormFields] = useState<ChallengeDetails>({
    title: '',
    description: '',
    javascript: { starter: '', solution: '' },
    typescript: { starter: '', solution: '' },
    difficulty: 'easy',
  });
  const [titleCharCount, setTitleCharCount] = useState(0);
  const [descriptionCharCount, setDescriptionCharCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(
    null
  );
  const [formParseError, setFormParseError] = useState<Record<string, any>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = formSchema.safeParse(formFields);
    if (!validationResult.success) {
      setFormParseError({ ...validationResult.error.flatten().fieldErrors });
      return;
    }

    try {
      setLoading(true);

      await axios.post('/api/contribute', formFields);

      setFormFields({
        title: '',
        description: '',
        javascript: { starter: '', solution: '' },
        typescript: { starter: '', solution: '' },
        difficulty: 'easy',
      });
      setTitleCharCount(0);
      setDescriptionCharCount(0);
      setFormStatus('success');
    } catch (error) {
      setFormStatus('error');
    }
    setLoading(false);
  };

  return (
    <form
      className="mx-auto flex flex-col items-center gap-2 rounded-md bg-white/10 p-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col items-start justify-center gap-4">
        <div>
          <label htmlFor="title">Title</label>
          <StyledInput
            type="text"
            id="title"
            name="title"
            className={formParseError.title ? 'border-red-500' : ''}
            onChange={(e) => {
              if (e.target.value.length > 75) return;
              setFormFields((prevState) => ({
                ...prevState,
                title: e.target.value,
              }));
              setTitleCharCount(e.target.value.length);
            }}
            value={formFields.title}
          />
          <div className="mt-2">{titleCharCount} / 75</div>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <StyledInput
            type="text"
            id="description"
            name="description"
            className={formParseError.description ? 'border-red-500' : ''}
            onChange={(e) => {
              if (e.target.value.length > 350) return;
              setFormFields((prevState) => ({
                ...prevState,
                description: e.target.value,
              }));
              setDescriptionCharCount(e.target.value.length);
            }}
            value={formFields.description}
          />
          <div className="mt-2">{descriptionCharCount} / 350</div>
        </div>
        <div>
          <label htmlFor="js-sandbox-starter">
            JavaScript codesandbox starter template link
          </label>
          <StyledInput
            type="text"
            id="js-sandbox-starter"
            name="js-sandbox-starter"
            className={
              formParseError.javascript && formParseError.javascript[0]
                ? 'border-red-500'
                : ''
            }
            onChange={(e) =>
              setFormFields((prevState) => ({
                ...prevState,
                javascript: {
                  starter: e.target.value,
                  solution: prevState.javascript.solution,
                },
              }))
            }
            value={formFields.javascript.starter}
          />
        </div>
        <div>
          <label htmlFor="js-sandbox-solution">
            JavaScript codesandbox solution link
          </label>
          <StyledInput
            type="text"
            id="js-sandbox-solution"
            name="js-sandbox-solution"
            className={
              formParseError.javascript && formParseError.javascript[1]
                ? 'border-red-500'
                : ''
            }
            onChange={(e) =>
              setFormFields((prevState) => ({
                ...prevState,
                javascript: {
                  starter: prevState.javascript.starter,
                  solution: e.target.value,
                },
              }))
            }
            value={formFields.javascript.solution}
          />
        </div>
        <div>
          <label htmlFor="ts-sandbox-starter">
            TypeScript codesandbox starter template link
          </label>
          {/* TODO: fix TS solution input value */}
          <StyledInput
            type="text"
            id="ts-sandbox-starter"
            name="ts-sandbox-starter"
            className={
              formParseError.typescript && formParseError.typescript[0]
                ? 'border-red-500'
                : ''
            }
            onChange={(e) =>
              setFormFields((prevState) => ({
                ...prevState,
                typescript: {
                  starter: e.target.value,
                  solution: prevState.typescript.starter,
                },
              }))
            }
            value={formFields.typescript.starter}
          />
        </div>
        <div>
          <label htmlFor="ts-sandbox-solution">
            TypeScript codesandbox solution link
          </label>
          <StyledInput
            type="text"
            id="ts-sandbox-starter"
            name="ts-sandbox-starter"
            className={
              formParseError.typescript && formParseError.typescript[1]
                ? 'border-red-500'
                : ''
            }
            onChange={(e) =>
              setFormFields((prevState) => ({
                ...prevState,
                typescript: {
                  solution: e.target.value,
                  starter: prevState.typescript.starter,
                },
              }))
            }
            value={formFields.typescript.solution}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="difficulty">Difficulty:</label>{' '}
          <select
            className="rounded-md bg-white/20"
            id="difficulty"
            name="difficulty"
            onChange={(e) =>
              setFormFields((prevState) => ({
                ...prevState,
                difficulty: e.target.value as 'easy' | 'medium' | 'hard',
              }))
            }
            value={formFields.difficulty}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <DifficultyTooltip />
        </div>
        <StyledButton className={`w-full ${loading && 'animate-pulse'}`}>
          Submit Challenge
        </StyledButton>
        {formStatus === 'success' && (
          <div className="w-full text-center font-bold text-green-700">
            Challenge submitted!
          </div>
        )}
        {formStatus === 'error' && (
          <div className="w-full text-center font-bold text-red-700">
            Error submitting challenge. Please try again.
          </div>
        )}
      </div>
    </form>
  );
}
