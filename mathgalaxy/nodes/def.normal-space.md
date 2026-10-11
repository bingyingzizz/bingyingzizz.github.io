# 正规空间　`def.normal-space`
正规空间（Normal Space）
layer 6 · 定义 · 拓扑空间 · 拓扑学

拓扑空间 $X$ 叫**正规的**，如果它是 $T_{1}$ 的，并且任意两个**不交闭集** $A, B$ 都能被开集分开：存在开集 $U \supseteq A$、$V \supseteq B$ 使 $U \cap V = \emptyset$。

把「不交闭集」换成「一点与不含该点的闭集」，得到的是**正则**空间；再换成「两点」，得到的就是 **Hausdorff**。

## 为什么成立（入边，证明在 proofs/）
- `def.hausdorff` Hausdorff 空间：用到了定义 Hausdorff 空间　proofs/def-dep.normal-hausdorff.md
- `def.closed-set` 闭集与闭包：用到了定义 闭集与闭包　proofs/def-dep.normal-closed.md

## 它能推出什么 / 谁在用它
- 被 `lem.urysohn` Urysohn 引理 用
- 被 `thm.tietze-banach` Tietze 延拓（Banach 值） 用

> 说明见 `notes/def.normal-space.md`
