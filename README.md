# The Excuse That Almost Works

[![make.fun](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/addiedroid1/makefun-excuse-almost-works-69fde8f5/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/addiedroid1/makefun-excuse-almost-works-69fde8f5/reward.svg)](https://make.fun)

Entry for the [make.fun](https://make.fun) bounty **The Excuse That Almost Works**
(`u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5`).

## The entry

One line a gamer texts the boss to skip work on GTA 6 launch week — at most
20 words, plain text, sent in a hurry:

> cant come in, the council shut our street for resurfacing and my car's boxed in behind the rollers

18 words, 98 characters. A boring, specific, verifiable-sounding civic detail
— the car is physically trapped behind the roadworks — rather than a wild
story, a dead grandmother, a flat tyre, or a sudden fever.

## How it works

`main.ts` writes that single line to `/output/entry.txt` (or to
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set), with no trailing newline and mode
`0644`.

```sh
node main.ts
```
