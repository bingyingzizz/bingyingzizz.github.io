# 离散即常　`prop.discrete-iff-constant`
命题：$X$ 离散 $\iff$ 常 $\iff$ 只依赖紧 Hausdorff 的离散商
layer 17 · 命题 · 凝聚态集 · 凝聚态数学
[在星图里打开](../#n=prop.discrete-iff-constant)　·　[节点索引](../index.md)

对凝聚态集 $X$，三条等价：

1. $X$ 是**离散的**：存在离散拓扑空间 $E$ 使 $X \cong \underline{E}$；
2. $X$ 是**常的**：存在集合 $E$ 使 $X \cong \widetilde{E}$（常层）；
3. 对任何紧 Hausdorff 空间 $S$，
$$X(S) \;\cong\; \varprojlim_{S \twoheadrightarrow S'} X(S'),$$
其中 $S'$ 跑遍 $S$ 的**离散商**。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.discrete-iff-constant.2.md](./prop.discrete-iff-constant.2.md)

refs: Le Stum, An introduction to condensed mathematics, Exercise 4.5

> 说明见 `notes/prop.discrete-iff-constant.md`

引用：`prop.discrete-iff-constant`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
