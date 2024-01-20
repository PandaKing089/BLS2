# NOTE: WorkingTurboGPT is now dpercated because of the built-in reverse proxy. Please use it's successor [PenguinGPT](https://rubyteam.tech/cdn/extensions/penguingpt.js) by [RubyTeam](https://rubyteam.tech/gallery). trying to use the import link provided will automatically download PenguinGPT. This is to 'fix' existing projects with WorkingTurboGPT that's imported by URL.

# WorkingTurboGPT

<img src="https://anonymous-cat1.github.io/WorkingTurboGPT/img/thumb.svg" width="300%" height="300"/>

## Harness the power of ChatGPT-3.5 in your projects! 
*Extension originally made by LOLEMO then forked by Anonymous_cat1.*

## API Note
APIs go up and down every once in a while, so if you get error responses, you should be able to find more reverse proxies here on the internet.
The API used in LOLEMO's version is dead, so I've updated it to use https://api.tmrace.net/v1/chat/completions by default, although you can update it using the "Set Reverse Proxy API URL" block.

Ratelimits are inevitable however, you can get around them with a VPN/Proxy or just waiting a few hours. I may include automatic proxy switching at some point if I ever learn enough JS. lol

## Installation
To use this extension in Turbowarp (or any other Scratch mod that allows custom extensions), open Add Extension > Custom Extension and paste this link
(Note: If you just want to try it out, [try it here!](https://studio.penguinmod.com/editor.html?extension=https://anonymous-cat1.github.io/WorkingTurboGPT/extension.js))

    https://anonymous-cat1.github.io/WorkingTurboGPT/extension.js
    
## How to use
If you find that using the extension only reports errors, use this block to update the API URL. (You can find ChatGPT reverse proxies by looking them up)

<img src="https://anonymous-cat1.github.io/WorkingTurboGPT/img/block_10_2_2023-4_59_51 PM.svg" width="100%" height="70"/>

Additionally, You can use this reporter to check if the API you are using is alive. 

<img src="https://anonymous-cat1.github.io/WorkingTurboGPT/img/block_10_14_2023-4_28_51 PM.svg" width="100%" height="70"/>

To simply send a prompt to ChatGPT without any context (chat history), use this reporter:

<img src="https://anonymous-cat1.github.io/WorkingTurboGPT/img/block_10_14_2023-4_28_56%20PM.svg" width="100%" height="70"/>


If you want to use prompts with history (GPT remembers previous messages) you will have to create a chatbot! you can use these blocks to manage (create, delete, and reset) chatbots.

<img src="https://anonymous-cat1.github.io/WorkingTurboGPT/img/block_10_14_2023-4_29_19 PM.svg" width="100%" height="200"/>

Also, you can use this block to change the behavior of the chatbot:

<img src="https://anonymous-cat1.github.io/WorkingTurboGPT/img/block_10_14_2023-4_29_02 PM.svg" width="100%" height="70"/>

Then, use this reporter to interact with the one you have created:

<img src="https://anonymous-cat1.github.io/WorkingTurboGPT/img/block_10_14_2023-4_39_30 PM.svg" width="100%" height="71"/>

If you want to get a predefiend jailbreak or prompt. You can use this block:

<img src="https://anonymous-cat1.github.io/WorkingTurboGPT/img/block_11_19_2023-3_14_26%20PM.svg" width="100%" height="71"/>

Now, if you want to export chat(s), use these blocks to export those:

<img src="https://anonymous-cat1.github.io/WorkingTurboGPT/img/block_10_14_2023-4_29_37 PM.svg" width="100%" height="50"/>
<img src="https://anonymous-cat1.github.io/WorkingTurboGPT/img/block_11_19_2023-3_17_42%20PM.svg" width="100%" height="50"/>

If you want to import chat(s), use these blocks to import chat(s):

<img src="https://anonymous-cat1.github.io/WorkingTurboGPT/img/block_10_14_2023-4_29_40 PM.svg" width="100%" height="120"/>

Finally, to get all active chats as an array, use this block:

<img src="https://anonymous-cat1.github.io/WorkingTurboGPT/img/block_10_14_2023-4_29_43 PM.svg" width="100%" height="50"/>

