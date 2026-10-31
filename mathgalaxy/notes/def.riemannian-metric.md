# Riemann 度量　`def.riemannian-metric`　·　说明
根 `../`

**存在性**：局部总有度量（坐标里取 $\delta_{ij}$），再用单位分解把局部度量凸组合成整体的 —— 正定性对凸组合封闭。所以**每个**光滑流形都能配黎曼度量（复结构、辛结构都有拓扑障碍，度量没有）。

**它不是流形的一部分**：同一个光滑流形上有无穷多度量。度量的选取是**额外结构**；只依赖 $g$ 的量叫内蕴量（`def.intrinsic-quantity`），依赖嵌入的叫外在量。

**二维的特例就是第一基本形式**：曲面上取 $\mathbb{R}^{3}$ 的内积限制在 $T_{p}S$ 上，得到的就是 $I$。所以黎曼几何是曲面内蕴几何的高维版，曲面论是它的二维模型。

**度量决定其余全部**：由 $g$ 唯一确定 Levi-Civita 联络与 Christoffel 记号（`def.affine-connection`、`def.christoffel-symbol`），于是测地线、曲率张量、Ricci 都与 $g$ 绑定 —— 这是「内蕴几何」的全部内容。

> 续见 notes/def.riemannian-metric.2.md
