# 五种收敛　`def.convergence-modes`
收敛的类型：一致 / 近一致 / a.e. / 依测度 / $L^{1}$
layer 19 · 定义 · 可测函数与收敛 · 分析学

设 $f_n, f : X \to \mathbb{C}$ 可测，$X$ 带测度 $\mu$。
> 陈述续见 `nodes/def.convergence-modes.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.measurable-function` 可测函数：用到了定义 可测函数　proofs/def-dep.measurable-fn-convergence.md
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-convergence.md
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-dep.integrable-convergence.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.egorov` Egorov 定理
- 被 `prop.convergence-counterexamples` 四个标准反例 用
- 被 `thm.egorov` Egorov 定理 用
- 被 `prop.L1-implies-measure` L¹ 收敛 ⟹ 依测度收敛 用

refs: Folland, Real Analysis, §2.4

> 说明见 `notes/def.convergence-modes.md`
