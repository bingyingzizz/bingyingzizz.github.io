# 代入　`def.substitution`
代入 $\varphi (x/t)$（Substitution）
layer 2 · 定义 · 一阶语言与公式 · 数理逻辑

设 $x$ 是变元，$t$ 是项，$\varphi$ 是公式。把 $\varphi$ 中 $x$ 的**自由出现**全部换成 $t$，得到的公式记作

$$\varphi (x/t)$$

称为 $t$ 对 $x$ 的**代入**（约束出现不动 —— 它们被量词管着）。

⚠ 代入要求 $t$ 对 $\varphi$ 中的 $x$ 是**可代入的**：$t$ 里出现的变元不会在代入后被 $\varphi$ 里的量词「抓走」。这叫**变元捕获**。

## 为什么成立（入边，证明在 proofs/）
- `def.formula` 公式：用到了定义 公式　proofs/dep.formula-substitution.md

## 它能推出什么 / 谁在用它
- 被 `ax.repl` 替换公理模式 用

refs: Enderton, A Mathematical Introduction to Logic, §2.4

> 说明见 `notes/def.substitution.md`
