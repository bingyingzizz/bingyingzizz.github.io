# 中国剩余定理　`thm.crt`
中国剩余定理：$\mathbb{Z}/N \cong \prod_{i}\mathbb{Z}/n_{i}$
layer 14 · 定理 · 整除与同余 · 数论
[在星图里打开](../#n=thm.crt)　·　[节点索引](../index.md)

设 $n_{1}, \cdots, n_{k}$ 两两互素，$N = n_{1} \cdots n_{k}$。则

$$\mathbb{Z}/N\mathbb{Z} \;\cong\; \mathbb{Z}/n_{1}\mathbb{Z} \times \cdots \times \mathbb{Z}/n_{k}\mathbb{Z}, \qquad [a] \longmapsto ([a], \cdots, [a])$$

是环同构。等价说法：同余方程组 $x \equiv a_{i} \pmod{n_{i}}$（$i = 1, \cdots, k$）对任意右端都有解，且解模 $N$ 唯一。

## 为什么成立（入边，证明在 proofs/）
- [`thm.bezout`](../nodes/thm.bezout.md) Bézout 恒等式：中国剩余定理：用 Bézout 造出「单位分解」　[proofs/imp.nt-crt.md](../proofs/imp.nt-crt.md)

- …另有入边，续页见 [nodes/thm.crt.2.md](./thm.crt.2.md)

refs: 华罗庚《数论导引》§2

> 说明见 `notes/thm.crt.md`

引用：`thm.crt`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
