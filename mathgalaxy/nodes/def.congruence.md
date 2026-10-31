# 同余　`def.congruence`
模 $n$ 同余：与运算相容的等价关系
layer 11 · 定义 · 整除与同余 · 数论
[在星图里打开](../#n=def.congruence)　·　[节点索引](../index.md)

设 $n \ge 1$。称 $a$ 与 $b$ **模 $n$ 同余**，记 $a \equiv b \pmod n$，若 $n \mid (a - b)$。

同余是 $\mathbb{Z}$ 上的等价关系，且与加法、乘法相容：由 $a \equiv b$、$c \equiv d$ 可得 $a + c \equiv b + d$ 与 $ac \equiv bd$。

## 为什么成立（入边，证明在 proofs/）
- [`def.divides`](../nodes/def.divides.md) 整除：用到了定义 整除　[proofs/e112:definition.md](../proofs/e112:definition.md)

## 它能推出什么 / 谁在用它
- 被 [`def.zmodn`](../nodes/def.zmodn.md) 剩余类环 用

refs: 华罗庚《数论导引》§2

> 说明见 `notes/def.congruence.md`

引用：`def.congruence`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
