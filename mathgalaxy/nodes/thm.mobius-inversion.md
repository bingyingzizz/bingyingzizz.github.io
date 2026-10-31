# Möbius 反演　`thm.mobius-inversion`
从和函数还原原函数
layer 17 · 定理 · 数论函数与素数分布 · 数论
[在星图里打开](../#n=thm.mobius-inversion)　·　[节点索引](../index.md)

设 $f, g : \mathbb{N}^{+} \to \mathbb{C}$。则

$$g(n) = \sum_{d \mid n} f(d) \quad \text{对一切 } n \qquad \iff \qquad f(n) = \sum_{d \mid n} \mu(d)\, g\!\left(\frac{n}{d}\right) \ \text{对一切 } n .$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.mu-sum`](../nodes/thm.mu-sum.md) Möbius 和的恒等式：反演：交换求和次序，内层只剩 $n/m=1$　[proofs/imp.nt-mobius-inversion.md](../proofs/imp.nt-mobius-inversion.md)

- …另有入边，续页见 [nodes/thm.mobius-inversion.2.md](./thm.mobius-inversion.2.md)

refs: 华罗庚《数论导引》第三章；Apostol, Ch. 2

> 说明见 `notes/thm.mobius-inversion.md`

引用：`thm.mobius-inversion`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
