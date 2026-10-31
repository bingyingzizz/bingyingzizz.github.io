# 整除　`def.divides`
整除与它的基本性质
layer 10 · 定义 · 整除与同余 · 数论
[在星图里打开](../#n=def.divides)　·　[节点索引](../index.md)

设 $a, b \in \mathbb{Z}$。若存在 $c \in \mathbb{Z}$ 使 $b = ac$，就说 **$a$ 整除 $b$**，记 $a \mid b$；否则记 $a \nmid b$。

基本性质：$a \mid b \implies a \mid bc$；$a \mid b$ 且 $b \mid c$ $\implies$ $a \mid c$；$a \mid b$ 且 $a \mid c$ $\implies$ $a \mid (mb + nc)$ 对一切 $m, n \in \mathbb{Z}$；若 $a, b \ne 0$，则 $a \mid b$ 且 $b \mid a$ $\iff$ $a = \pm b$。

## 为什么成立（入边，证明在 proofs/）
- [`def.int`](../nodes/def.int.md) 整数 ℤ：用到了定义 整数 ℤ　[proofs/e107:definition.md](../proofs/e107:definition.md)

- …另有入边，续页见 [nodes/def.divides.2.md](./def.divides.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.divides.3.md](./def.divides.3.md)

refs: 华罗庚《数论导引》第一章

> 说明见 `notes/def.divides.md`

引用：`def.divides`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
