# 连通与连通分量　`def.connected`
连通空间与连通分量（Connectedness）
layer 5 · 定义 · 拓扑空间 · 拓扑学

拓扑空间 $X$ 叫**不连通的**，如果它可以写成两个不交非空开集之并 $X = U \sqcup V$；否则叫**连通的**。

固定 $x \in X$，包含 $x$ 的**连通分量** $C(x)$ 是所有含 $x$ 的连通子集的并 —— 它本身连通，且是极大的。

## 为什么成立（入边，证明在 proofs/）
- `def.topology` 拓扑空间与开集：用到了定义 拓扑空间与开集　proofs/dep.topology-connected.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.component-clopen` 连通分量是闭开邻域之交
- 被 `prop.component-clopen` 连通分量是闭开邻域之交 用
- 被 `prop.td-reflective` 全不连通空间是反射子范畴 用
- 被 `def.stone-space` 全不连通与 Stone 空间 用

> 说明见 `notes/def.connected.md`
