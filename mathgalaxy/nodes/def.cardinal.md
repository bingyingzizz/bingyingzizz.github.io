# 基数 |A|　`def.cardinal`
基数与基数的比较（Cardinality）
layer 8 · 定义 · 基数与等势 · 集合论

等势把「所有集合」分成一个个类。「集合 $A$ 的**基数**」$|A|$ 指的就是 $A$ 所在的这个等势类 —— 它衡量 $A$ 有多大，而不关心 $A$ 的元素是什么。

比较两个基数：

- $|A| \le |B|$：存在**单射** $A \to B$；
- $|A| = |B|$：存在**双射** $A \to B$（等势）；
- $|A| < |B|$：$|A| \le |B|$ 但 $|A| \ne |B|$。

若 $|A| \le |B|$ 且 $|B| \le |A|$，则 $|A| = |B|$（Schröder–Bernstein 定理）。

## 为什么成立（入边，证明在 proofs/）
- `def.equinumerous` 等势：用到了定义 等势　proofs/dep.equinumerous-cardinal.md
- `def.ordinal` 序数：用到了定义 序数　proofs/def-link.ordinal-cardinal.md

## 它能推出什么 / 谁在用它
- 被 `thm.cantor` Cantor 定理 用
- 被 `thm.cardinal-comparable` 基数可比定理 用
- 被 `thm.real-uncountable` ℝ 不可数 用

refs: Kunen, Set Theory, I.6

> 说明见 `notes/def.cardinal.md`
