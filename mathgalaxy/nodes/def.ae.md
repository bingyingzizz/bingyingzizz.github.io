# 几乎处处　`def.ae`
几乎处处（Almost Everywhere, a.e.）
layer 15 · 定义 · 测度的构造 · 分析学

设 $(X, \mathcal{M}, \mu)$ 是测度空间。称一个关于点 $x$ 的命题 $P(x)$ **几乎处处成立**（记 a.e.），当且仅当

$$\exists E \in \mathcal{M}:\ \mu(E) = 0 \quad \text{且} \quad \forall x \in X \setminus E,\ P(x)\ \text{成立}$$

即：**使命题不成立的那些点构成一个零集**。

常见的用法：$f = g$ a.e.（$\{f \ne g\}$ 是零集）、$f_n \to f$ a.e.（不收敛的点是零集）、$F' = 0$ a.e.。

## 为什么成立（入边，证明在 proofs/）
- `def.null-set` 零集与完备：用到了定义 零集与完备　proofs/dep.nullset-ae.md
- `def.measure` 测度：用到了定义 测度　proofs/dep.measure-ae.md

## 它能推出什么 / 谁在用它
- 被 `cor.mct-ae` MCT（a.e. 版本） 用
- 被 `prop.integral-zero-iff` 积分为零 ⟺ 几乎处处为零 用
- 被 `prop.complete-measurable` 完备性 ⟺ 不破坏可测性 用

- …另有出边，续页见 `nodes/def.ae.2.md`

refs: Rudin, Real and Complex Analysis, Ch. 1

> 说明见 `notes/def.ae.md`
