# 符号测度　`def.signed-measure`
符号测度（Signed Measure）
layer 14 · 定义 · 符号测度与分解 · 分析学

设 $(X, \mathcal{M})$ 是可测空间。$\nu : \mathcal{M} \to [-\infty, +\infty]$ 是**符号测度**，当且仅当

- $\nu(\emptyset) = 0$；
- $\nu$ **至多取到 $\pm \infty$ 中的一个**（不能同时取到 $\infty$ 与 $-\infty$）；
- 对两两不交的 $\{E_j\} \subseteq \mathcal{M}$：
> 陈述续见 `nodes/def.signed-measure.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.sigma-algebra` σ-代数：用到了定义 σ-代数　proofs/def-dep.sigma-algebra-signed-measure.md
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-signed-measure.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.hahn-decomposition` Hahn 分解定理
- 被 `def.positive-negative-null` 正集 / 负集 / 零集 用
- 被 `thm.jordan-decomposition` Jordan 分解定理 用
- 被 `prop.total-variation-basics` 全变差的基本性质 用

- …另有出边，续页见 `nodes/def.signed-measure.3.md`

refs: Folland, Real Analysis, §3.1；Halmos, Measure Theory, §28

> 说明见 `notes/def.signed-measure.md`
