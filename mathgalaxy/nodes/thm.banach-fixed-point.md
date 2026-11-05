# 压缩映射原理　`thm.banach-fixed-point`
定理（Banach）：完备度量空间上的压缩映射有唯一不动点
layer 17 · 定理 · 多元微分 · 数学分析
[在星图里打开](../#n=thm.banach-fixed-point)　·　[节点索引](../index.md)

设 $(X, d)$ 是**非空**的**完备**度量空间（`def.complete`），$T : X \to X$ 是以 $q < 1$ 为系数的压缩映射。则

- $T$ 有**唯一**不动点 $x^{\ast} \in X$（即 $Tx^{\ast} = x^{\ast}$）；
- 对**任意**初值 $x_0 \in X$，迭代列 $x_{k+1} := T x_k$ 收敛到 $x^{\ast}$；
- 并有先验误差估计与后验误差估计
> 陈述续见 [nodes/thm.banach-fixed-point.2.md](./thm.banach-fixed-point.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.banach-fixed-point.3.md](./thm.banach-fixed-point.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.banach-fixed-point.4.md](./thm.banach-fixed-point.4.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 9；Zeidler, Nonlinear Functional Analysis I, Ch. 1

> 说明见 `notes/thm.banach-fixed-point.md`

引用：`thm.banach-fixed-point`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
