# 曲面与参数化　`def.regular-surface`　·　续页（第 2 页）
[在星图里打开](../#n=def.regular-surface)　·　第 1 页 [nodes/def.regular-surface.md](./def.regular-surface.md)

## 陈述（续）
$$r_{u}\times r_{v} \ne 0 ,$$
则称 $r$ 是 $U$ 上的**正则参数曲面**。此时 $\{r_{u}, r_{v}\}$ 在每个参数点处张成一个 $2$ 维子空间（把它附着在参数点上，就记作 $T_{p}S$）；像集 $S = r(U)$ 要作为
曲面拥有**唯一**的切平面，还须要求 $r$ 是到像的**嵌入** —— 否则像会自交（$r(u,v) = (\sin u, \sin 2u, v)$ 在 $(0,0)$ 与 $(\pi,0)$ 映到同一点，两支切平面不同）。
而
$$n := \frac{r_{u}\times r_{v}}{\lVert r_{u}\times r_{v}\rVert}$$

是单位法向量，$n\colon U \to S^{2}$ 叫 **Gauss 映射**。
切映射 $\mathrm{d}r\colon T_{p}U \to T_{r(p)}S$ 由 $\mathrm{d}r(\partial_{u}) = r_{u}$、$\mathrm{d}r(\partial_{v}) = r_{v}$ 确定。

> 续见 [nodes/def.regular-surface.3.md](./def.regular-surface.3.md)
