# 预测度　`def.premeasure`
预测度（Premeasure）—— 定义在环上的「测度」
layer 14 · 定义 · 测度的构造 · 分析学

若 $\mathcal{M}$ 只是一个**环**（不必是 $\sigma$代数），而 $\mu : \mathcal{M} \to [0, +\infty]$ 仍满足测度的两条：

$$\mu(\emptyset) = 0, \quad  \{E_j\}\text{ 两两不交} \implies \mu(\bigcup E_j) = \sum \mu(E_j)$$

则称 $\mu$ 是 $\mathcal{M}$ 上的**预测度**。

## 为什么成立（入边，证明在 proofs/）
- `def.set-ring` 环与代数：用到了定义 环与代数　proofs/def-dep.set-ring-premeasure.md
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-premeasure.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.outer-measure-induced` 由预测度诱导外测度
- 被 `prop.outer-measure-induced` 由预测度诱导外测度 用
- ⇒ `def.product-measure` 乘积测度
- 被 `def.product-measure` 乘积测度 用
- 被 `prop.ls-premeasure` F 给出的预测度 用

refs: Halmos, Measure Theory, §9；Folland, Real Analysis, §1.4

> 说明见 `notes/def.premeasure.md`
