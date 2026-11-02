# 最大模原理　`thm.max-modulus`
定理：最大模原理
layer 21 · 定理 · 共形映射与正规族 · 复变函数
[在星图里打开](../#n=thm.max-modulus)　·　[节点索引](../index.md)

**白话**：全纯函数的模，不可能在区域内部取到最大值 —— 除非它是常数。最大值只可能出现在边界上。

设 $\Omega$ 是平面区域（连通开集），$f$ 在 $\Omega$ 上全纯。则或者 $f$ 是常数，或者

$$|f(z)| < \|f\|_{\Omega} := \sup_{\zeta \in \Omega} |f(\zeta)|, \qquad \forall z \in \Omega.$$

## 它能推出什么 / 谁在用它
- ⇒ [`lem.schwarz`](../nodes/lem.schwarz.md) Schwarz 引理
- ⇒ [`thm.open-mapping`](../nodes/thm.open-mapping.md) 开映射定理

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.max-modulus.2.md](./thm.max-modulus.2.md)

refs: 王晓光《复变函数》笔记，第 9 章 · 最大模原理；Ahlfors, Complex Analysis, Ch. 4 · Complex Integration

> 说明见 `notes/thm.max-modulus.md`

引用：`thm.max-modulus`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
