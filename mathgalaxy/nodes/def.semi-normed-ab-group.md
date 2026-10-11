# 半范数阿贝尔群　`def.semi-normed-ab-group`
半范数阿贝尔群
layer 7 · 定义 · 凝聚态上同调 · 凝聚态数学+分析学

**半范数阿贝尔群**是一个阿贝尔群 $M$ 配上函数 $\|\cdot\| : M \to \mathbb{R}_{\ge 0}$，满足

- $\|0\| = 0$；
- $\|s + t\| \le \|s\| + \|t\|$（三角不等式）；
- $\|-s\| = \|s\|$（对称性）。

## 为什么成立（入边，证明在 proofs/）
- `def.group` 群：用到了定义 群　proofs/def-dep.seminorm-group.md

## 它能推出什么 / 谁在用它
- 被 `def.banach-ab-group` Banach 阿贝尔群 用
- 被 `def.k-bounded-exact` K-有界正合 用
- 被 `lem.stone-cech-1-bounded` Stone 满射的 Čech 复形 1-有界零调 用

refs: Le Stum, §8.2

> 说明见 `notes/def.semi-normed-ab-group.md`
