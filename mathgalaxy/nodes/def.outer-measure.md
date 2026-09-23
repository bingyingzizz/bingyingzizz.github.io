# 外测度　`def.outer-measure`
外测度（Outer Measure）
layer 13 · 定义 · 测度的构造 · 分析学

设 $X$ 是非空集合。函数 $\mu^* : \mathcal{P}(X) \to [0, +\infty]$ 是一个**外测度**，当且仅当

- $\mu^*(\emptyset) = 0$
- **单调**：$A \subseteq B \implies \mu^*(A) \le \mu^*(B)$
- **可数次可加**：$\mu^*( \bigcup_{j=1}^{\infty} A_j ) \le \sum_{j=1}^{\infty} \mu^*(A_j)$

## 为什么成立（入边，证明在 proofs/）
- `def.power-set` 幂集 𝒫(X)：用到了定义 幂集 𝒫(X)　proofs/dep.powerset-outer-measure.md
- `def.subset` 子集：用到了定义 子集　proofs/def-dep.subset-outer-measure.md
- `def.power-set` 幂集 𝒫(X)：用到了定义 幂集 𝒫(X)　proofs/def-dep.powerset-outer-measure.md
- `def.extended-real` 扩充实数 [−∞,+∞]：用到了定义 扩充实数 [−∞,+∞]　proofs/def-dep.extreal-outer-measure.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.caratheodory` Carathéodory 定理

- …另有出边，续页见 `nodes/def.outer-measure.2.md`

refs: Halmos, Measure Theory, §11；Folland, Real Analysis, §1.4

> 说明见 `notes/def.outer-measure.md`
