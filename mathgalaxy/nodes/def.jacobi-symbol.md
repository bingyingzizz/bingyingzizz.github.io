# Jacobi 符号　`def.jacobi-symbol`
Jacobi 符号：把 Legendre 符号乘起来
layer 15 · 定义 · 二次剩余与原根 · 数论
[在星图里打开](../#n=def.jacobi-symbol)　·　[节点索引](../index.md)

设 $n = q_{1}^{e_{1}}\cdots q_{r}^{e_{r}}$ 是正奇数（$q_{i}$ 为奇素数），$a \in \mathbb{Z}$。定义

$$\left(\frac{a}{n}\right) := \prod_{i=1}^{r}\left(\frac{a}{q_{i}}\right)^{e_{i}} .$$

## 为什么成立（入边，证明在 proofs/）
- [`def.legendre-symbol`](../nodes/def.legendre-symbol.md) Legendre 符号：用到了定义 Legendre 符号　[proofs/e154:definition.md](../proofs/e154:definition.md)

- …另有入边，续页见 [nodes/def.jacobi-symbol.2.md](./def.jacobi-symbol.2.md)

## 它能推出什么 / 谁在用它
- 被 [`thm.jacobi-laws`](../nodes/thm.jacobi-laws.md) Jacobi 符号的计算法则 用

- …另有出边，续页见 [nodes/def.jacobi-symbol.3.md](./def.jacobi-symbol.3.md)

refs: 华罗庚《数论导引》第四章

> 说明见 `notes/def.jacobi-symbol.md`

引用：`def.jacobi-symbol`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
