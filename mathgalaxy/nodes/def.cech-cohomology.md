# Čech 上同调　`def.cech-cohomology`
Čech 上同调 $\check{H}^{n}(X, M^{\bullet})$
layer 17 · 定义 · 层上同调 · 同调代数+范畴论

设 $M^{\bullet}$ 是 site $\mathcal{C}$ 上的**阿贝尔预层复形**，$X \in \mathcal{C}$。它的第 $n$ 个 **Čech 上同调群**是

$$\check{H}^{n}(X, M^{\bullet}) := \Gamma\bigl(X,\ \check{H}^{n}(M^{\bullet})\bigr).$$

## 为什么成立（入边，证明在 proofs/）
- `def.cech-functor` Čech 函子：用到了定义 Čech 函子　proofs/def-dep.cechcoh-cech.md

## 它能推出什么 / 谁在用它
- 被 `prop.cech-as-colim` Čech 上同调是沿覆盖筛的余极限 用
- 被 `thm.cartan-leray` Cartan–Leray 谱序列 用
- 被 `prop.acyclic-iff-cech` 无环 ⟺ Čech 上同调为零 用
- 被 `lem.stone-cech-1-bounded` Stone 满射的 Čech 复形 1-有界零调 用
- 被 `method.simplicial-cohomology` 单纯方法算层上同调 用

refs: Le Stum, Definition 7.3.5

> 说明见 `notes/def.cech-cohomology.md`
