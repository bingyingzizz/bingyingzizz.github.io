# 闭开集　`def.clopen`
闭开集（Clopen Set）
layer 6 · 定义 · 拓扑空间 · 拓扑学

$X$ 的子集 $K$ 叫**闭开集**，如果它同时是开集与闭集。等价地：$K$ 与它的补 $K^{c}$ 都是开集，即 $X = K \sqcup K^{c}$ 是一个不交非空开集之并（$K$ 非平凡时）。

## 为什么成立（入边，证明在 proofs/）
- `def.closed-set` 闭集与闭包：用到了定义 闭集与闭包　proofs/dep.topology-clopen.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.component-clopen` 连通分量是闭开邻域之交
- 被 `prop.component-clopen` 连通分量是闭开邻域之交 用
- 被 `prop.stonean-basic` 极端不连通的基本性质 用
- 被 `def.stone-space` 全不连通与 Stone 空间 用

> 说明见 `notes/def.clopen.md`
