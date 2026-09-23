# 正则 Borel 测度　`def.regular-measure`
正则 Borel 测度（Regular Borel Measure）
layer 16 · 定义 · 微分定理 · 分析学

$\mathbb{R}^{n}$ 上的 Borel 测度 $\nu$ 是**正则的**，当且仅当

$\cdot$ $\nu(K) < \infty$ 对每个紧集 $K$ 成立；
$\cdot$ $\nu(E) = \inf\{ \nu(U) : U\text{ 开}, E \subseteq U \}$ 对每个 $E \in \mathfrak{B}_{\mathbb{R}^n}$ 成立（**外正则**）。

符号测度或复测度 $\nu$ 叫正则 $\iff$ $|\nu|$ 正则。

## 为什么成立（入边，证明在 proofs/）
- `def.borel` Borel σ-代数：用到了定义 Borel σ-代数　proofs/def-dep.borel-regular.md
- `def.compact` 紧：用到了定义 紧　proofs/def-dep.compact-regular.md
- `def.signed-measure` 符号测度：用到了定义 符号测度　proofs/def-dep.signed-regular-measure.md
- `def.complex-measure` 复测度：用到了定义 复测度　proofs/def-dep.complex-regular-measure.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.rn-pointwise` RN 导数的点态公式

- …另有出边，续页见 `nodes/def.regular-measure.2.md`

refs: Folland, Real Analysis, §7.2

> 说明见 `notes/def.regular-measure.md`
