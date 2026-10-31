# 第一基本形式就是一个黎曼度量
`imp.tu-surface-riemannian` · 推出 · strong 边 · 根 `../`

`def.first-fundamental-form` 第一基本形式 + `def.regular-surface` 曲面与参数化 → `def.riemannian-metric` 黎曼度量

对 $p\in S$ 令 $g_{p}(v,w) := \langle\mathrm{d}r_{p}(v),\mathrm{d}r_{p}(w)\rangle$，$v,w\in T_{p}S$。三条公理逐个验证：

- **双线性**：内积双线性，$\mathrm{d}r_{p}$ 线性；
- **对称**：$\mathbb{R}^{3}$ 的内积对称；
- **正定**：$\langle v,v\rangle\ge 0$，等号成立时 $\mathrm{d}r_{p}(v) = 0$，而 $\mathrm{d}r_{p}$ 单射（$r_{u}\times r_{v}\ne 0$ 保证 $r_{u},r_{v}$ 线性无关），故 $v = 0$。

**光滑性**：在一张卡里 $g_{ij} = \langle\partial_{i}r,\partial_{j}r\rangle$ 是 $r$ 的一阶偏导数的内积，$r$ 光滑则 $g_{ij}$ 光滑。

于是 $(S,g)$ 是二维黎曼流形，而 $g$ 就是 `def.first-fundamental-form` 里的 $I$。反过来，任何二维黎曼流形在局部取卡，$(g_{ij})$ 就写成同样的形状 —— 两侧只是同一套记账的两种叫法。∎
