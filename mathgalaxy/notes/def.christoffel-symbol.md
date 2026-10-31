# 克里斯托费尔记号　`def.christoffel-symbol`　·　说明
根 `../`

**来处只有 Koszul 公式**。「挠率为零」与「保度量」两条要求合起来给出唯一解：

$$2\langle \nabla_{X}Y,Z\rangle = X\langle Y,Z\rangle+Y\langle Z,X\rangle-Z\langle X,Y\rangle+\langle [X,Y],Z\rangle-\langle [Y,Z],X\rangle+\langle [Z,X],Y\rangle.$$

对坐标标架 $[\partial_{i},\partial_{j}] = 0$，右端只剩两个导数项，左端是 $2\Gamma^{\ell}_{ij}g_{\ell k}$，解出来就是上面的公式。**推导里只用到 $g_{ij}$ 和它的一阶导数** —— 这是第一个内蕴量。

⚠️ $\Gamma^{k}_{ij}$ **不是张量**：换坐标时多出一个非齐次的二阶导数项，所以「$\Gamma$ 在 $p$ 处等于某个数」随坐标变。但「**存在**使 $\Gamma(p) = 0$ 的坐标」是坐标无关的事实（法坐标），两者的区别是「数值」与「存在性」。

**为什么它决定测地线**：测地线方程里唯一的外来数据就是 $\Gamma$，所以「哪些曲线是测地线」完全是 $I$ 的事 —— 这已经是内蕴几何的第一步。

> 续见 notes/def.christoffel-symbol.2.md
