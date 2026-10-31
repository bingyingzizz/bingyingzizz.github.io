# Gauss 引理（二次剩余）　`lem.gauss-qr`
Gauss 引理：$\left(\frac{a}{p}\right) = (-1)^{\mu}$
layer 16 · 引理 · 二次剩余与原根 · 数论
[在星图里打开](../#n=lem.gauss-qr)　·　[节点索引](../index.md)

设 $p$ 是奇素数，$p \nmid a$。考虑 $a, 2a, \cdots, \frac{p-1}{2}a$，把它们各自换成模 $p$ 的最小正剩余（落在 $1, \cdots, p-1$），设其中有 $\mu$ 个大于 $\frac{p}{2}$。则

$$\left(\frac{a}{p}\right) = (-1)^{\mu} .$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.euler-criterion`](../nodes/thm.euler-criterion.md) Euler 判别法：Gauss 引理：数超过 $p/2$ 的个数，用 Euler 判别法收尾　[proofs/imp.nt-gauss-qr.md](../proofs/imp.nt-gauss-qr.md)

- …另有入边，续页见 [nodes/lem.gauss-qr.2.md](./lem.gauss-qr.2.md)

refs: 华罗庚《数论导引》第四章

> 说明见 `notes/lem.gauss-qr.md`

引用：`lem.gauss-qr`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
