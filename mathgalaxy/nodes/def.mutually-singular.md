# 相互奇异　`def.mutually-singular`
相互奇异 / 互相垂直（Mutually Singular $\mu \perp \nu$）
layer 15 · 定义 · 符号测度与分解 · 分析学

两个测度（或符号测度）$\mu, \nu$ **相互奇异**，记作 $\mu \perp  \nu$，当且仅当存在 $E, F \in \mathcal{M}$ 使

$$E \cap F = \emptyset, \quad  E \cup F = X, $$

且 **$E$ 是 $\mu$零集、$F$ 是 $\nu$零集**。

## 为什么成立（入边，证明在 proofs/）
- `def.null-set` 零集与完备：用到了定义 零集与完备　proofs/def-dep.null-set-mutually-singular.md
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-mutually-singular.md

## 它能推出什么 / 谁在用它
- 被 `thm.jordan-decomposition` Jordan 分解定理 用
- 被 `lem.singular-or-lower-bound` 要么奇异、要么有下界 用
- 被 `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 用
- 被 `prop.nbv-derivative` NBV 函数的导数与测度的关系 用

- …另有出边，续页见 `nodes/def.mutually-singular.2.md`

refs: Folland, Real Analysis, §3.2

> 说明见 `notes/def.mutually-singular.md`
