# 压缩映射　`def.contraction`
压缩映射
layer 14 · 定义 · 多元微分 · 数学分析
[在星图里打开](../#n=def.contraction)　·　[节点索引](../index.md)

设 $(X, d)$ 是度量空间，$T : X \to X$。$T$ 叫**压缩映射**，当且仅当存在常数 $q \in [0, 1)$ 使

$$d(Tx, Ty) \le q\, d(x, y) \qquad (x, y \in X)$$

最小的这样的 $q$ 叫 $T$ 的**压缩系数**。（$q = 1$ 时叫非扩张映射，那时结论会变。）

## 为什么成立（入边，证明在 proofs/）
- [`def.metric-space`](../nodes/def.metric-space.md) 距离空间：用到了定义 距离空间　[proofs/dep.metric-contraction.md](../proofs/dep.metric-contraction.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.contraction.2.md](./def.contraction.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 9；Zeidler, Nonlinear Functional Analysis I, Ch. 1

> 说明见 `notes/def.contraction.md`

引用：`def.contraction`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
