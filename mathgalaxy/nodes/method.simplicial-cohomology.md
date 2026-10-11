# 单纯方法算层上同调　`method.simplicial-cohomology`
用单纯超覆盖计算 $H^{n}(X, M)$
layer 18 · 命题 · 层上同调 · 同调代数

设 $M$ 是 site $\mathcal{C}$ 上的阿贝尔层，$X \in \mathcal{C}$。取 $M$ 的一个**超覆盖**（即一个复形 $F_{\bullet} \to M$，其中每个 $F_{n}$ 是若干可表层的直和，且增广后处处正合）。则 $M$ 的上同调等于「逐层取截面」得到的**单纯阿贝尔群**的同伦群：

$$H^{n}(X,\ M) \cong \pi^{n}\bigl(\Gamma(X,\ F_{\bullet})\bigr).$$

## 为什么成立（入边，证明在 proofs/）
- `def.sheaf-cohomology` 层上同调：用到了定义 层上同调　proofs/def-dep.simpcohom-cohom.md
- `def.simplicial` 单纯对象：用到了定义 单纯对象　proofs/def-dep.simpcohom-simplicial.md
- `def.cech-cohomology` Čech 上同调：用到了定义 Čech 上同调　proofs/def-dep.simpcohom-cech.md

refs: Le Stum, §7.3（配合 Lemma 7.3.2）

> 说明见 `notes/method.simplicial-cohomology.md`
