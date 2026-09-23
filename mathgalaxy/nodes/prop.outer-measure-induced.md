# 由预测度诱导外测度　`prop.outer-measure-induced`
命题：从 $\mathcal{E}$ 上的 $\rho$ 诱导出一个外测度
layer 15 · 命题 · 测度的构造 · 分析学

设 $\mathcal{E} \subseteq \mathcal{P}(X)$，$\emptyset \in \mathcal{E}$，$X \in \mathcal{E}$，$\rho : \mathcal{E} \to [0, +\infty ]$ 满足 $\rho (\emptyset ) = 0$。对 $A \subseteq X$ 定义
> 陈述续见 `nodes/prop.outer-measure-induced.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.premeasure` 预测度：预测度 $\implies$ 诱导的外测度　proofs/imp.premeasure-to-outer.md
- `def.premeasure` 预测度：用到了定义 预测度　proofs/def-link.premeasure-outer.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.caratheodory-extension` 预测度还原

refs: Halmos, Measure Theory, §11；Folland, Real Analysis, §1.4

> 说明见 `notes/prop.outer-measure-induced.md`
