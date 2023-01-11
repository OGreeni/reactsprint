import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <section className="text-purple-900">
      <h1 className="text-center text-5xl">
        About <span className="font-bold">ReactSprint</span>
      </h1>
      <article className="text-center">
        <p>Hey there 👋, </p>
        <p>My name is Omri Green, creator of ReactSprint.</p>
        <Image
          src="/images/profile.jpg"
          alt="profile"
          width={300}
          height={300}
          className="mx-auto rounded-full shadow-xl"
        />
        <p>
          I&apos;ve always felt like there was a lack of content intended to
          practice React.js skills, both for beginners and advanced developers.
        </p>
        <p>
          I&apos;ve decided to change that, and create ReactSprint &mdash; a
          platform for practicing your React.js skills, for every skill level.
        </p>
        <p>
          The platform is completely free and open source, and relies on the
          community for support. You can help by contributing challenges,
          opening an issue in our GitHub repo, or by just spreading the word!
        </p>
      </article>
    </section>
  );
}
