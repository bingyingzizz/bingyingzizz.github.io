# 体积密度与体积形式　`def.volume-density`　·　说明
根 `../`

**为什么系数是 $\sqrt{\det g}$**：$\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$ 在基 $(\partial_{1},\ldots,\partial_{n})$ 上取 $1$，但 $\partial_{i}$ 一般不是正交基。设 $\partial_{i} = \sum_{j}A_{ij}e_{j}$（$e_{j}$ 为标准正交基），则 $g = A^{\mathsf T}A$，于是 $\sqrt{\det g} = |\det A|$；保向时 $\det A>0$，而 $\mathrm{d}V(\partial_{1},\ldots,\partial_{n}) = \det A$，与「在正交基上取 $1$」相容。面积（体积）放大率就是行列式，这是 $\sqrt{\det(g_{ij})}$ 的全部来历。

**两个结构各管一头**：度量管「多大」（$\sqrt{\det g}$ 这个标量），定向管「正负」（$\mathrm{d}x^{1}\wedge\cdots$ 的次序）。所以 $\mathrm{d}V$ 属于「度量 $+$ 定向」，缺一个都定义不出来；而 $\mathrm{d}\mu_{g}$ 只要度量，这是它俩唯一但关键的差别。

> 续见 notes/def.volume-density.2.md
