# 体积密度与体积形式　`def.volume-density`　·　续页（第 2 页）
[在星图里打开](../#n=def.volume-density)　·　第 1 页 [nodes/def.volume-density.md](./def.volume-density.md)

## 陈述（续）
设 $(M,g)$ 是 $n$ 维黎曼流形，卡 $(U,x)$ 里记 $g_{ij} = g(\partial_{i},\partial_{j})$。

**体积密度**（不需要定向）：

$$\mathrm{d}\mu_{g} := \sqrt{\det(g_{ij})}\;\mathrm{d}x^{1}\cdots\mathrm{d}x^{n},$$
右边是 Lebesgue 测度乘一个正的光滑函数，所以它是一个**密度**：换卡不变（绝对值那一半在开方里，见 `prop.volume-density-well-defined`），拼接后给出 $M$ 上唯一的 Radon 测度 $\mu_{g
}$。
**体积形式**（需要先取定一个定向）：在每张保向卡里令

$$\mathrm{d}V := \sqrt{\det(g_{ij})}\;\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}.$$
等价地，它逐点由「在正向标准正交基上取 $1$」刻画：$\mathrm{d}V_{p}(e_{1},\ldots,e_{n}) = 1$，其中 $(e_{1},\ldots,e_{n})$ 是 $T_{p}M$ 的任意一组正向标准正交基 —— 交错性加上「换一组

> 续见 [nodes/def.volume-density.3.md](./def.volume-density.3.md)
