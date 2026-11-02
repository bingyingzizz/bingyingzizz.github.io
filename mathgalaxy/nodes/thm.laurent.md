# Laurent 展开定理　`thm.laurent`
定理：Laurent 展开定理
layer 21 · 定理 · Cauchy 理论 · 复变函数
[在星图里打开](../#n=thm.laurent)　·　[节点索引](../index.md)

**白话**：环域上的全纯函数一定能展成 Laurent 级数，而且系数由积分**唯一**确定。

设 $f$ 在环域 $A_{r,R}(a)$ 上全纯（$0 \le r < R \le +\infty$）。则对每个 $n \in \mathbb{Z}$，取任意 $\rho \in (r, R)$ 定义

$$c_n := \frac{1}{2\pi i}\oint_{|\zeta - a| = \rho} \frac{f(\zeta)}{(\zeta - a)^{n+1}}\,\mathrm{d}\zeta,$$
> 陈述续见 [nodes/thm.laurent.2.md](./thm.laurent.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.casorati-weierstrass`](../nodes/thm.casorati-weierstrass.md) Casorati–Weierstrass 定理

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.laurent.3.md](./thm.laurent.3.md)

refs: 王晓光《复变函数》笔记，第 21 章 · Laurent 级数；Ahlfors, Complex Analysis, Ch. 5 · Series and Product Developments

> 说明见 `notes/thm.laurent.md`

引用：`thm.laurent`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
