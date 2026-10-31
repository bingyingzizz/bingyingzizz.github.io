# Riemann 可去奇点定理　`thm.riemann-removable`
定理：Riemann 可去奇点定理
layer 21 · 定理 · Cauchy 理论 · 复变函数
[在星图里打开](../#n=thm.riemann-removable)　·　[节点索引](../index.md)

**白话**：如果 $f$ 在 $a$ 附近全纯，而且靠近 $a$ 时「爆得比 $1/|z - a|$ 慢」，那 $a$ 这个洞可以补上，补完还是全纯。

设 $f$ 在 $D(a, r) \setminus \{a\}$ 上全纯，且

$$\lim_{z \to a} (z - a) f(z) = 0 \qquad (\text{等价地，} f(z) = o(|z - a|^{-1})).$$
> 陈述续见 [nodes/thm.riemann-removable.2.md](./thm.riemann-removable.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.casorati-weierstrass`](../nodes/thm.casorati-weierstrass.md) Casorati–Weierstrass 定理

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.riemann-removable.3.md](./thm.riemann-removable.3.md)

refs: 王晓光《复变函数》笔记，第 9 章 · Riemann 可去奇点定理；Ahlfors, Complex Analysis, Ch. 4 · Complex Integration

> 说明见 `notes/thm.riemann-removable.md`

引用：`thm.riemann-removable`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
