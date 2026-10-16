# 紧块的纤维积还是紧的　`prop.cgwh-fiber-product`　·　说明
根 `../`

**证明。** 记两个映射为 $f : S\to X$、$g : S'\to X$。关键是把纤维积写成**对角线的原像**：
$$S \times_{X} S' = \{(s, s') : f(s) = g(s')\} = (f, g)^{-1}\bigl(\Delta_{X}\bigr), \qquad (f,g) : S\times S' \longrightarrow X\times X .$$
- $S\times S'$ **紧 Hausdorff** ✓；
- 由「弱 Hausdorff $\implies$ 对角是 $k$-闭的」，$\Delta_{X}$ 是 $k$-闭的；
- 而 $k$-闭集沿**从紧 Hausdorff 空间出发**的连续映射的拉回是**闭**集（这就是 $k$-闭的定义）：$(f,g)^{-1}(\Delta_{X})$ 在 $S\times S'$ 中闭 ✓。
于是 $S\times_{X} S'$ 是紧 Hausdorff 空间的**闭子空间**，故紧 Hausdorff（闭子空间紧、Hausdorff 的闭子空间 Hausdorff）。∎
⭐ **这条就是「$\mathrm{CGWH}$ 里紧块相交还是紧块」的全部内容** —— 后面「弱 Hausdorff $\implies$ 拟分离」「$\mathrm{CGWH}$ 对有限积封闭」都得靠它。
