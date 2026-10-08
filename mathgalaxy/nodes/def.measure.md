# 测度　`def.measure`
测度（Measure）
layer 13 · 定义 · 测度的构造 · 分析学

设 $\mathcal{M}$ 是 $X$ 上的 $\sigma$代数。函数 $\mu : \mathcal{M} \to [0, +\infty]$ 是一个**测度**，当且仅当

- **(i)**　$\mu(\emptyset) = 0$
- **(ii) 可数可加**：若 $\{E_{j}\}$ 是 $\mathcal{M}$ 中两两不交的集合列，则

$$\mu( \bigcup_{j=1}^{\infty} E_j ) = \sum_{j=1}^{\infty} \mu(E_j)$$
> 陈述续见 `nodes/def.measure.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.extended-real` 扩充实数 [−∞,+∞]：用到了定义 扩充实数 [−∞,+∞]　proofs/dep.extended-measure.md
- `def.sigma-algebra` σ-代数：用到了定义 σ-代数　proofs/def-dep.sigma-algebra-measure.md
- `def.extended-real` 扩充实数 [−∞,+∞]：用到了定义 扩充实数 [−∞,+∞]　proofs/def-dep.extreal-measure.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.measure-basic` 测度的基本性质
- 被 `def.measure-space` 有限 / σ-有限 / 半有限 用

- …另有出边，续页见 `nodes/def.measure.3.md`

refs: Halmos, Measure Theory, §9；Folland, Real Analysis, §1.2

> 说明见 `notes/def.measure.md`
