# Banach 阿贝尔群　`def.banach-ab-group`
Banach 阿贝尔群与 Banach 化
layer 15 · 定义 · 凝聚态上同调 · 凝聚态数学+分析学

**Banach 阿贝尔群**是半范数阿贝尔群 $M$，且满足

- $\|s\| = 0 \implies s = 0$（**分离性**，即半范数其实是范数）；
- $M$ 对范数导出的度量**完备**。

任一半范数阿贝尔群 $M$ 都有 **Banach 化**：先 Hausdorff 化、再完备化，

$$M \longmapsto \widehat{M/M_{0}},\qquad M_{0} = \{\, s : \|s\| = 0 \,\}.$$

## 为什么成立（入边，证明在 proofs/）
- `def.semi-normed-ab-group` 半范数阿贝尔群：用到了定义 半范数阿贝尔群　proofs/def-dep.banach-seminorm.md
- `def.complete` 完备：用到了定义 完备　proofs/def-dep.banach-complete.md

## 它能推出什么 / 谁在用它
- 被 `lem.k-bounded-completion` K-有界正合在完备化下不变 用
- 被 `prop.k-bounded-implies-exact` 相邻两条 K-有界 推出 正合 用
- 被 `cor.k-acyclic-acyclic` K-有界零调 推出 零调 用

- …另有出边，续页见 `nodes/def.banach-ab-group.2.md`

refs: Le Stum, §8.2

> 说明见 `notes/def.banach-ab-group.md`
