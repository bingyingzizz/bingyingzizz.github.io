# 图卡　`def.manifold-chart`　·　续页（第 2 页）
[在星图里打开](../#n=def.manifold-chart)　·　第 1 页 [nodes/def.manifold-chart.md](./def.manifold-chart.md)

## 陈述（续）
设 $M$ 是拓扑空间，$n \ge 0$。$M$ 上的一张 **$n$ 维图卡**（坐标卡）是二元组 $(U,\varphi)$，其中 $U \subseteq M$ 是开集，$\varphi : U \to \varphi(U) \subseteq \mathbb{R}^{n}$ 是同胚（要求 $\varphi(U)$ 在 $\mathb
b{R}^{n}$ 里开）。$U$ 叫**坐标邻域**，$\varphi$ 叫**坐标映射**；分量 $x^{i} := \varphi^{i}$ 叫**局部坐标**，即 $p \mapsto \bigl(x^{1}(p),\ldots,x^{n}(p)\bigr)$。
$n = 0$ 时 $\mathbb{R}^{0}$ 是单点，图卡给的是「这个点在不在 $U$ 里」。

两张卡 $(U,\varphi)$、$(V,\psi)$ 的**转移映射**是

$$\psi \circ \varphi^{-1} : \varphi(U \cap V) \longrightarrow \psi(U \cap V),$$
它把「$\varphi$ 牌的坐标」换成「$\psi$ 牌的坐标」。两张卡**$C^{\infty}$-相容**指转移映射在每处都是 $C^{\infty}$（它定义在 $\mathbb{R}^{n}$ 的开集上，用偏导数检验）；若 $U \cap V = \emptyset$ 则规
定相容。

> 续见 [nodes/def.manifold-chart.3.md](./def.manifold-chart.3.md)
