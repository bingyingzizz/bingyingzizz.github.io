# 迹　`def.trace`
迹 $\operatorname{tr} A$
layer 14 · 定义 · 特征值与 Jordan 型 · 抽象代数
[在星图里打开](../#n=def.trace)　·　[节点索引](../index.md)

对方阵 $A = (a_{ij}) \in M_n(K)$，定义**迹**为对角线之和：

$$\operatorname{tr} A := \sum_{i=1}^{n} a_{ii}$$

基本性质：

- $\operatorname{tr}(A + B) = \operatorname{tr} A + \operatorname{tr} B$，$\operatorname{tr}(cA) = c\operatorname{tr} A$（线性）；
- $\operatorname{tr}(AB) = \operatorname{tr}(BA)$，于是 $\operatorname{tr}(P^{-1}AP) = \operatorname{tr} A$（**相似不变**）；
- $\operatorname{tr}(ABC) = \operatorname{tr}(BCA)$（**循环不变**）。

## 它能推出什么 / 谁在用它
- 被 [`def.mean-curvature`](../nodes/def.mean-curvature.md) 平均曲率 用

- …另有出边，续页见 [nodes/def.trace.3.md](./def.trace.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.trace.2.md](./def.trace.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 6

> 说明见 `notes/def.trace.md`

引用：`def.trace`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
