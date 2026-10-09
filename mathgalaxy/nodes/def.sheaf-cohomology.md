# 层上同调　`def.sheaf-cohomology`
层上同调 $H^{n}(X, M^{\bullet})$
layer 17 · 定义 · 层上同调 · 同调代数+范畴论

设 $M^{\bullet}$ 是 site $\mathcal{C}$ 上的**阿贝尔层复形**，$X \in \mathcal{C}$。它在 $X$ 上的**第 $n$ 个上同调群**是

$$H^{n}(X, M^{\bullet}) := R^{n}\Gamma(X, M^{\bullet}),$$

其中 $\Gamma(X, -)$ 是 $X$ 处的**截面函子**。

## 为什么成立（入边，证明在 proofs/）
- `def.section-functor` 截面函子：用到了定义 截面函子　proofs/def-dep.sheafcoh-section.md
- `def.right-derived-functor` 右导出函子：用到了定义 右导出函子　proofs/def-dep.sheafcoh-rdf.md

## 它能推出什么 / 谁在用它
- 被 `def.acyclic-sheaf` 无环层 用
- 被 `prop.chaus-cech-eq-h` 紧 Hausdorff 上 Čech 就是上同调 用
- 被 `prop.filtered-limit-cohomology` 滤过极限的上同调 用
- 被 `cor.homotopy-invariant-cohomology` 层上同调是同伦不变量 用

refs: Le Stum, Definition 7.3.1

> 说明见 `notes/def.sheaf-cohomology.md`
