# F ↔ Borel 测度　`thm.ls-exists`
定理：每个单调右连续的 F 对应一个 Borel 测度（差常数意义下）
layer 18 · 定理 · 测度的构造 · 分析学

对每个递增右连续的 $F : \mathbb{R} \to \mathbb{R}$，存在 $\mathbb{R}$ 上的一个 Borel 测度 $\mu _F$ 使

$$\mu_F( (a, b] ) = F(b) - F(a)\quad  \forall a < b$$

且这样的 $\mu _F$ 与 $F$ 的对应在**相差一个常数**的意义下是一一的。

## 为什么成立（入边，证明在 proofs/）
- `prop.ls-premeasure` F 给出的预测度 + `thm.caratheodory-uniqueness` 扩张的唯一性：F 的预测度 $\implies \mathbb{R}$ 上的 Borel 测度　proofs/imp.ls-premeasure-to-measure.md
- `def.borel` Borel σ-代数：用到了定义 Borel σ-代数　proofs/def-link.borel-ls.md

refs: Folland, Real Analysis, Theorem 1.16

> 说明见 `notes/thm.ls-exists.md`
