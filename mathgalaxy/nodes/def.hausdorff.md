# Hausdorff 空间　`def.hausdorff`
Hausdorff 空间 / $T_{2}$（Hausdorff Space）
layer 5 · 定义 · 拓扑空间 · 拓扑学

拓扑空间 $X$ 叫 **Hausdorff 空间**（或 **$T_{2}$ 空间**），如果任意两个不同点都**可以被开集分开**：

$$\forall x \ne y \in X,\ \exists U \ni x,\ V \ni y \ \text{开},\quad U \cap V = \emptyset$$

## 为什么成立（入边，证明在 proofs/）
- `def.topology` 拓扑空间与开集：用到了定义 拓扑空间与开集　proofs/dep.topology-hausdorff.md

## 它能推出什么 / 谁在用它
- 被 `prop.chaus-reflective` 紧 Haus 是反射子范畴 用
- 被 `cor.cg-product` 紧生成空间对积封闭 用
- 被 `def.chaus` 紧 Hausdorff 空间范畴 用
- 被 `def.weak-hausdorff` 弱 Hausdorff 空间 用
- 被 `thm.cgwh-reflective` CGWH 是 CG 的反射子范畴 用

> 说明见 `notes/def.hausdorff.md`
