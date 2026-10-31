# 奇异同调群　`def.singular-homology`　·　说明
根 `../`

**和单纯同调的关系**：$K$ 的每个 $p$-单纯形 $[v_{0}, \ldots, v_{p}]$ 都能看成一个奇异 $p$-单纯形（把 $\Delta^{p}$ 的顶点 $v_{i}$ 线性送到 $K$ 的 $v_{i}$），这给出子复形 $C_{*}(K) \subseteq S_{*}(|K|)$。`thm.simplicial-approximation` 说这个包含诱导**同构** $H_{p}(K) \cong H_{p}(|K|)$。换句话说：奇异同调是「不选三角剖分的同调」，两者在可三角剖分的空间上完全一致。

⭐ **为什么允许铺天盖地的奇异单纯形**：这样**每个连续映射**都能作用，于是不需要任何三角剖分、不需要任何好条件，理论对**一切**拓扑空间（甚至一切拓扑对）都有定义。代价是 $S_{p}(X)$ 一般巨大（为了可数性还得附加条件），几乎不可能直接算——所以实际计算全靠长正合列（`thm.long-exact-pair`）、Mayer–Vietoris（`thm.mv-homology`）和「奇异 $=$ 单纯」（`thm.simplicial-approximation`）。

> 续见 notes/def.singular-homology.2.md
