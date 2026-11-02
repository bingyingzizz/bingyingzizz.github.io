# 闭子空间的正交投影　`thm.projection-subspace`
正交投影与正交分解：$H = E \oplus E^\perp$
layer 16 · 定理 · Hilbert 空间 · 泛函分析
[在星图里打开](../#n=thm.projection-subspace)　·　[节点索引](../index.md)

设 $H$ 是 Hilbert 空间，$E \subseteq H$ 是**闭**子空间。则

1. $y = P_E(x) \iff y \in E$ 且 $x - y \in E^\perp$；
2. $P_E$ 线性，且 $\|P_E\| \le 1$（$E \ne 0$ 时为 $1$）；
3. 正交分解 $H = E \oplus E^\perp$，且 $\|x\|^2 = \|x - P_E x\|^2 + \|P_E x\|^2$。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.riesz-hilbert`](../nodes/thm.riesz-hilbert.md) Riesz 表示（Hilbert）

- …另有出边，续页见 [nodes/thm.projection-subspace.3.md](./thm.projection-subspace.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.projection-subspace.2.md](./thm.projection-subspace.2.md)

refs: Conway, A Course in Functional Analysis · Hilbert 空间与正交基

> 说明见 `notes/thm.projection-subspace.md`

引用：`thm.projection-subspace`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
