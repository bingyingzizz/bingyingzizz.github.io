# 绝对连续　`def.absolute-continuity`
绝对连续（Absolute Continuity $\nu \ll \mu$）
layer 15 · 定义 · 符号测度与分解 · 分析学

设 $\mu$ 是 $(X, \mathcal{M})$ 上的测度、$\nu$ 是符号测度。称 $\nu$ **关于 $\mu$ 绝对连续**，记作

$$\nu \ll  \mu, $$

当且仅当**每个 $\mu$零集都是 $\nu$零集**：

$$\forall E \in \mathcal{M}, \mu(E) = 0 \implies \nu(E) = 0$$

## 为什么成立（入边，证明在 proofs/）
- `def.measure` 测度：用到了定义 测度　proofs/def-link.measure-ac.md
- `def.null-set` 零集与完备：用到了定义 零集与完备　proofs/def-dep.null-set-absolute-continuity.md
- `def.signed-measure` 符号测度：用到了定义 符号测度　proofs/def-dep.signed-measure-absolute-continuity.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.ac-epsilon-delta` 绝对连续的 ε–δ 刻画
- 被 `lem.singular-or-lower-bound` 要么奇异、要么有下界 用

- …另有出边，续页见 `nodes/def.absolute-continuity.2.md`

refs: Folland, Real Analysis, §3.2

> 说明见 `notes/def.absolute-continuity.md`
