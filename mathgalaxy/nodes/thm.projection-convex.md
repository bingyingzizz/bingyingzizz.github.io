# 凸闭集的最近点　`thm.projection-convex`
凸闭集上的最近点（投影算子）
layer 15 · 定理 · Hilbert 空间 · 泛函分析
[在星图里打开](../#n=thm.projection-convex)　·　[节点索引](../index.md)

设 $H$ 是 Hilbert 空间，$C \subseteq H$ 非空、**凸**、**闭**。则

1. 每个 $x \in H$ 有**唯一**的 $y = P_C(x) \in C$ 使 $\|x - y\| = d(x, C)$；
2. $y = P_C(x) \iff \operatorname{Re}\langle x - y, z - y\rangle \le 0$ 对一切 $z \in C$；
3. $\|P_C(x) - P_C(x')\| \le \|x - x'\|$（非扩张）；
4. $P_C \circ P_C = P_C$。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.projection-subspace`](../nodes/thm.projection-subspace.md) 闭子空间的正交投影

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.projection-convex.2.md](./thm.projection-convex.2.md)

refs: Conway, A Course in Functional Analysis · Hilbert 空间与正交基

> 说明见 `notes/thm.projection-convex.md`

引用：`thm.projection-convex`（内容 v0.9.2）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
