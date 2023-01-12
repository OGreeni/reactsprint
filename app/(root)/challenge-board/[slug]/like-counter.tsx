'use client';
import React from 'react';
import axios from 'axios';

import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client';
import LoginButton from '@components/auth/login-button';
import { StyledButton } from '@components/styled';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface Props {
  challengeId: string;
}

export default function LikeCounter({ challengeId }: Props) {
  const getLikes = async () => {
    const response = await axios.get(`/api/challenges/${challengeId}/getLikes`);
    return response.data;
  };
  const postLike = async (increment: { increment: boolean }) => {
    const response = await axios.post(
      `/api/challenges/${challengeId}/postLikes`,
      increment
    );
    return response.data;
  };

  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ['likes', challengeId],
    queryFn: getLikes,
  });

  const mutation = useMutation({
    mutationFn: postLike,
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ['likes', challengeId] });
      const previousLikes = queryClient.getQueryData(['likes', challengeId]);

      // optimistically update to the new value
      queryClient.setQueryData(['likes', challengeId], (old) => {
        if (data.increment) {
          // @ts-ignore
          return { likes: old.likes + 1, userData: { isLiked: true } };
        }
        // @ts-ignore
        return { likes: old.likes - 1, userData: { isLiked: false } };
      });

      return { previousLikes };
    },

    onError: (err, newLikes, context) => {
      queryClient.setQueryData(['likes', challengeId], context?.previousLikes);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['likes', challengeId] });
    },
  });

  return (
    <>
      <SignedIn>
        <StyledButton
          onClick={() => {
            if (query?.data.userData.isLiked) {
              mutation.mutate({ increment: false });
            } else {
              mutation.mutate({ increment: true });
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={query?.data?.userData?.isLiked ? 'white' : 'none'}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mx-auto h-5 w-5 lg:h-8 lg:w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
            />
          </svg>
        </StyledButton>
        <span className="text-2xl font-bold">{query.data?.likes}</span>
      </SignedIn>
      <SignedOut>
        <StyledButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={'none'}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mx-auto h-5 w-5 lg:h-8 lg:w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
            />
          </svg>
          <LoginButton />
        </StyledButton>
        <span className="text-2xl font-bold">{query.data?.likes}</span>
      </SignedOut>
    </>
  );
}
