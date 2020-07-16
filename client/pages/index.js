import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <div className="banner">
        <br></br>
        <h1>sandiego.js</h1>
        <h2>Speaker Pipeline</h2>
        <p>Share your perspective with the San Diego JavaScript community</p>
        <Link href="/signup">
          <button className="btn">Get Started</button>
        </Link>
      </div>
      <div className="info">
        <p>
          Have you been learning JavaScript and want to spend 5 or less minutes
          sharing something you learned? Did you find a library or discover a JS
          feature you&apos;d like to share? Have an interesting method for
          learning or teaching JavaScript? San Diego JS is the perfect platform
          to share your knowledge.
        </p>
        <h3>Want to talk about a talk?</h3>
        <p>
          Have an idea you&apos;d like to hear someone give a talk about? Want
          to chat about your own talk you are preparing?
        </p>
        <p>
          Come talk to us in our&nbsp;
          <a
            href="https://sdjs.slack.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
          >
            Slack channel
          </a>
          .
        </p>
        <h3>Want to do an extended talk?</h3>
        <p>
          We do accept extended talks, but prefer presenters to have done a
          lightning talk before. If you&apos;re unsure,&nbsp;
          <a
            href="mailto:sandiegojs-organizers@googlegroups.com?subject=Extended%20talk%20request"
            className="inline-link"
          >
            please email us to discuss your talk
          </a>
          .
        </p>
        <h3>Preparing your talk</h3>
        <p>
          First, if you aren&apos;t sure what to share,&nbsp;
          <a
            href="https://github.com/sandiegojs/sandiegojs.github.com/wiki/Talk-Ideas"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
          >
            here are a few ideas
          </a>
          .
        </p>
        <p>
          Second, you will be presenting on a 800x600px projector so make sure
          to tailor your slides to that dimension. Also, please note that we try
          to livestream every presentation so practice slow and clear speaking.
        </p>

        <div className="dos-and-donts">
          <div className="dos">
            <h5>DO</h5>
            <ul>
              <li>Use a large legible font</li>
              <li>Use white slides with black text</li>
              <li>Practice your talk at home and time it</li>
            </ul>
          </div>
          <div className="donts">
            <h5>DO NOT</h5>
            <ul>
              <li>
                Use more than a few slides.
                <strong> We recommend less than 10 slides.</strong>
              </li>
              <li>
                Live code/demo for your first talk. It&apos;s really hard for a
                lightning talk.
              </li>
              <li>Forget to practice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
