# 复测度　`def.complex-measure`
复测度（Complex Measure）
layer 15 · 定义 · 符号测度与分解 · 分析学

可测空间 $(X, \mathcal{M})$ 上的**复测度**是一个映射

$$\nu : \mathcal{M} \to \mathbb{C}$$

满足

$$\nu(\emptyset) = 0, $$

且对两两不交的 $\{E_j\} \subseteq \mathcal{M}$：

$$\nu( \bigsqcup_j E_j ) = \sum_j \nu(E_j),\text{ 右边的级数绝对收敛}$$

## 为什么成立（入边，证明在 proofs/）
- `def.complex` 复数 ℂ：用到了定义 复数 ℂ　proofs/dep.complex-complex-measure.md
- `def.sigma-algebra` σ-代数：用到了定义 σ-代数　proofs/def-dep.sigma-algebra-complex-measure.md
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-complex-measure.md
- `def.signed-measure` 符号测度：用到了定义 符号测度　proofs/def-dep.signed-complex-measure.md

## 它能推出什么 / 谁在用它
- 被 `thm.rn-complex` 复测度的 Radon–Nikodym 用
- 被 `prop.total-variation-basics` 全变差的基本性质 用

- …另有出边，续页见 `nodes/def.complex-measure.2.md`

refs: Folland, Real Analysis, §3.3

> 说明见 `notes/def.complex-measure.md`
