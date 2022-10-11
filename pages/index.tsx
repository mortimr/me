import "98.css/style.css";
import type { NextPage } from "next";
import Head from "next/head";
import { userAgentFromString } from "next/server";
import { useEffect, useState } from "react";
import CommandLine from "react-command-line";

const commands = {
  help: {
    fn: args => {
      return `
\tiulian.rotaru.fr - A list of available commands.

\t\temail\t\t\tPrint email
\t\ttg\t\t\t\tPrint telegram handle
\t\tgithub\t\tPrint github profile link
\t\tjob\t\t\tPrint current employment status
`
    }
  },
  email: {
    fn: args => {
      return `\tiulian@rotaru.fr`
    }
  },
  tg: {
    fn: args => {
      return `\t@mortimr`
    }
  },
  github: {
    fn: args => {
      return `\thttps://github.com/mortimr`
    }
  },
  job: {
    fn: args => {
      return `\tLead Ethereum Engineer @ Kiln (kiln.fi)`
    }
  }
};

const messages = {
  'WELCOME_MESSAGE': ' welcome. type "help" to see all commands',
  'INVALID_COMMAND': ' invalid command, try typing "help" for a list of commands.'
}

const Home: NextPage = () => {
  const [dimensions, setDimensions] = useState({
    height: "100%",
    width: "100%",
  });

  useEffect(() => {
    window.visualViewport?.addEventListener("resize", () => {
      setDimensions({
        height: `calc(${window.visualViewport?.height.toString()}px - 32px)`,
        width: `calc(${window.visualViewport?.width.toString()}px - 32px)`,
      })
      var elements = document.getElementsByName("body");
      if (elements.length) {
        elements[0].style.height =  `${window.visualViewport?.height.toString()}px`;
        elements[0].style.width = `${window.visualViewport?.width.toString()}px`;
      }
    })
  }, []);

  useEffect(() => {
    var elements = document.getElementsByClassName("react_cli");
    if (elements.length) {
      console.log("OK");
      elements[0].addEventListener("DOMNodeInserted", () => {
        // elements[0].scrollTop = elements[0].scrollHeight * 2;
        elements[0].scrollIntoView(false);
      });
    }
  }, []);

  return (
    <div className="window" style={{ width: dimensions.width, height: dimensions.height }}>
      <Head>
        <title>iulian.rotaru.fr</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <div className="title-bar">
        <div className="title-bar-text">iulian.rotaru.fr</div>
        <div className="title-bar-controls">
          <button
            aria-label="Close_"
            onClick={() => window.location.replace("https://google.com")}
          ></button>
        </div>
      </div>
      <div
        className="window-body"
        style={{
          backgroundColor: "#000000",
          margin: 0,
          padding: 4,
          height: "calc(100% - 24px)",
          overflow: "scroll",
        }}
      >
        <CommandLine commands={commands} messages={messages} prompt={"$ "} autoFocus={true}/>
      </div>
    </div>
  );
};

export default Home;
