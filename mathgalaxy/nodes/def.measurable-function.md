# 可测函数　`def.measurable-function`
可测函数（Measurable Function）
layer 6 · 定义 · 可测函数与收敛 · 分析学

设 $(X, \mathcal{M})$ 与 $(Y, \mathcal{N})$ 是可测空间。函数 $f : X \to Y$ 是 **$(\mathcal{M}, \mathcal{N})$可测的**，当且仅当每个可测集的原像可测：

$$f^{-1}(E) \in \mathcal{M}\quad  \forall E \in \mathcal{N}$$

## 为什么成立（入边，证明在 proofs/）
- `def.sigma-algebra` σ-代数：用到了定义 σ-代数　proofs/def-dep.sigma-algebra-measurable-fn.md
- `def.function` 函数：用到了定义 函数　proofs/def-dep.function-measurable-function.md

## 它能推出什么 / 谁在用它
- 被 `def.simple-function` 简单函数 用
- 被 `prop.measurable-criterion` 可测性的两条判定准则 用
- 被 `def.lebesgue-measurable` Lebesgue 可测 用
- 被 `prop.section-measurable` 截口可测 用
- 被 `def.lplus` L⁺ 用
- 被 `def.convergence-modes` 五种收敛 用

- …另有出边，续页见 `nodes/def.measurable-function.2.md`

refs: Folland, Real Analysis, §2.1；Halmos, Measure Theory, §18

> 说明见 `notes/def.measurable-function.md`
