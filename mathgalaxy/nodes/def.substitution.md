# 代入　`def.substitution`
代入 $\varphi (x/t)$（Substitution）
layer 2 · 定义 · 一阶语言与公式 · 数理逻辑
[在星图里打开](../#n=def.substitution)　·　[节点索引](../index.md)

设 $x$ 是变元，$t$ 是项，$\varphi$ 是公式。把 $\varphi$ 中 $x$ 的**自由出现**全部换成 $t$，得到的公式记作

$$\varphi (x/t)$$

称为 $t$ 对 $x$ 的**代入**（约束出现不动 —— 它们被量词管着）。

⚠ 代入要求 $t$ 对 $\varphi$ 中的 $x$ 是**可代入的**：$t$ 里出现的变元不会在代入后被 $\varphi$ 里的量词「抓走」。这叫**变元捕获**。

## 它能推出什么 / 谁在用它
- 被 [`ax.repl`](../nodes/ax.repl.md) 替换公理模式 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.substitution.2.md](./def.substitution.2.md)

refs: Enderton, A Mathematical Introduction to Logic, §2.4

> 说明见 `notes/def.substitution.md`

引用：`def.substitution`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
