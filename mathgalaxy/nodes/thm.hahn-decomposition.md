# Hahn 分解定理　`thm.hahn-decomposition`
Hahn 分解定理（Hahn Decomposition Theorem）
layer 17 · 定理 · 符号测度与分解 · 分析学

设 $\nu$ 是 $(X, \mathcal{M})$ 上的符号测度。则存在 $P, N \in \mathcal{M}$ 使

$$P \cup N = X, \quad  P \cap N = \emptyset, $$

其中 **$P$ 是正集、$N$ 是负集**。

若 $P', N'$ 是另一对这样的集合，则 $P \triangle  P' = N \triangle  N'$ 是 $\nu$零集。

## 为什么成立（入边，证明在 proofs/）
- `def.signed-measure` 符号测度 + `prop.positive-set-closure` 正集的封闭性：符号测度 + 正集的封闭性 $\implies$ Hahn 分解　proofs/imp.hahn.md
- `def.positive-negative-null` 正集 / 负集 / 零集：用到了定义 正集 / 负集 / 零集　proofs/def-link.positive-hahn.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.jordan-decomposition` Jordan 分解定理
- 被 `thm.jordan-decomposition` Jordan 分解定理 用

refs: Folland, Real Analysis, Theorem 3.3；Halmos, Measure Theory, §29

> 说明见 `notes/thm.hahn-decomposition.md`
