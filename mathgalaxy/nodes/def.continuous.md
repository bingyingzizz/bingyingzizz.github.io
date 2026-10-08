# 连续　`def.continuous`
连续（Continuity）
layer 13 · 定义 · 实数与极限 · 分析学+拓扑学

$f : \mathbb{R} \to \mathbb{R}$ 在 $x_0$ **连续**，当且仅当

$$\forall \varepsilon > 0, \exists \delta > 0 : |x - x_0| < \delta \implies |f(x) - f(x_0)| < \varepsilon$$

等价说法：$\lim_{x \to x_0} f(x) = f(x_0)$（极限存在且等于函数值）。

$f$ **连续**（在 $\mathbb{R}$ 上连续）当且仅当它在每一点连续。
> 陈述续见 `nodes/def.continuous.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.sequence-limit` 数列极限：用到了定义 数列极限　proofs/dep.real-continuous.md
- `def.topology` 拓扑空间与开集：用到了定义 拓扑空间与开集　proofs/dep.topology-engine-continuous.md

## 它能推出什么 / 谁在用它
- 被 `def.derivative` 导数 用
- 被 `cor.continuous-measurable` 连续 ⟹ Borel 可测 用

refs: Rudin, Principles of Mathematical Analysis, Ch. 4

> 说明见 `notes/def.continuous.md`
