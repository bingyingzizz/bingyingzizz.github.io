# 零集与完备　`def.null-set`
μ-零集 / 完备测度空间（Null Set & Complete Measure Space）
layer 14 · 定义 · 测度的构造 · 分析学

设 $(X, \mathcal{M}, \mu )$ 是测度空间，$E \in \mathcal{M}$。

若 $\mu(E) = 0$，则称 $E$ 是 **$\mu$零集**（$\mu -null set$）。

若**零集的每个子集都可测**：

$$\forall E \in \mathcal{M}, \forall F \subseteq E : \mu(E) = 0 \implies F \in \mathcal{M}$$

则称 $\mu$（或这个测度空间）**完备**。

## 为什么成立（入边，证明在 proofs/）
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-null-set.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.completion` 完备化定理
- 被 `thm.completion` 完备化定理 用
- 被 `prop.complete-measurable` 完备性 ⟺ 不破坏可测性 用
- 被 `prop.completion-measurable-function` 完备化后可改在零集上 用
- 被 `prop.integral-zero-iff` 积分为零 ⟺ 几乎处处为零 用
- 被 `cor.mct-ae` MCT（a.e. 版本） 用

- …另有出边，续页见 `nodes/def.null-set.2.md`

refs: Halmos, Measure Theory, §11

> 说明见 `notes/def.null-set.md`
