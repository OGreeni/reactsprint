'use client';
import React, { useState } from 'react';
import { z } from 'zod';

import { StyledButton, StyledInput } from '@components/styled';

const formSchema = z.object({
  title: z.string().max(75),
  description: z.string().max(350),
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formSchema.safeParse(formFields).success) return;
    // const formData = new FormData();
  };

  return (
    <form
      className="mx-auto flex flex-col items-center gap-2 rounded-md bg-white/10 p-10"
      onClick={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col items-start justify-center gap-4">
        <div>
          <label htmlFor="title">Title</label>
          <StyledInput
            type="text"
            id="title"
            name="title"
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
          <StyledInput
            type="text"
            id="ts-sandbox-starter"
            name="ts-sandbox-starter"
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
            id="ts-sandbox-solution"
            name="ts-sandbox-solution"
            onChange={(e) =>
              setFormFields((prevState) => ({
                ...prevState,
                typescript: {
                  starter: prevState.typescript.starter,
                  solution: e.target.value,
                },
              }))
            }
            value={formFields.typescript.solution}
          />
        </div>
        <div>
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
        </div>
        <StyledButton className="w-full">Submit Challenge</StyledButton>
      </div>
    </form>
  );
}
