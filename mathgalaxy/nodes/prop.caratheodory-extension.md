# 预测度还原　`prop.caratheodory-extension`
命题：从预测度出发做 Carathéodory，原代数上的值不变
layer 16 · 命题 · 测度的构造 · 分析学

设 $\mathfrak{A} \subseteq \mathcal{P}(X)$ 是**代数**，$\mu _{0}$ 是 $\mathfrak{A}$ 上的**预测度**，$\mu^{*}$ 是由 $\mu _{0}$ 诱导的外测度（按上一条命题，取 $\mathcal{E} = \mathfrak{A}$、$\rho = \mu _{0}$）。则
> 陈述续见 `nodes/prop.caratheodory-extension.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.caratheodory` Carathéodory 定理 + `prop.outer-measure-induced` 由预测度诱导外测度：Carathéodory + 预测度 $\implies$ 原代数上的值不变　proofs/imp.carath-extension.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.caratheodory-uniqueness` 扩张的唯一性

refs: Halmos, Measure Theory, §12；Folland, Real Analysis, Theorem 1.14

> 说明见 `notes/prop.caratheodory-extension.md`
