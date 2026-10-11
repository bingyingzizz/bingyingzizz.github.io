# Tietze 延拓（Banach 值）　`thm.tietze-banach`
Tietze 延拓定理：$C(X, V) \twoheadrightarrow C(K, V)$
layer 15 · 定理 · 凝聚态上同调 · 凝聚态数学+拓扑学

设 $X$ 是**正规**拓扑空间，$K \subseteq X$ 是**紧**子集，$V$ 是**实 Banach 空间**。则限制映射

$$C(X,\ V) \twoheadrightarrow C(K,\ V)$$

是**满**的：每个连续映射 $K \to V$ 都能延拓到 $X$ 上。

## 为什么成立（入边，证明在 proofs/）
- `def.normal-space` 正规空间：用到了定义 正规空间　proofs/def-dep.tietze-normal.md
- `def.compact` 紧：用到了定义 紧　proofs/def-dep.tietze-compact.md
- `def.continuous-map` 连续映射：用到了定义 连续映射　proofs/def-dep.tietze-cont.md

refs: Le Stum, Theorem 8.2.7

> 说明见 `notes/thm.tietze-banach.md`
