# 仿射联络　`def.affine-connection`　·　说明
根 `../`

**三条公理的读法**：第 1 条说明 $\nabla_{X}Y$ 在一点只依赖 $X$ 在该点的值（否则不算「沿方向」）；第 3 条说明它对 $Y$ 不是张量性的 —— 求导必须看见 $Y$ 的变化。这个不对称正是「联络」与「张量」的分界。

**平行移动与测地线**：解 $\nabla_{\dot\gamma}V = 0$ 得 $V$ 沿 $\gamma$ 的**平行移动**；$\nabla_{\dot\gamma}\dot\gamma = 0$ 的解就是**测地线**（`def.geodesic`）。两样都只用 $\nabla$，不需要外围空间。

**联络不唯一**：一般的仿射联络有无穷多（$\Gamma$ 的任意非对称部分都能改）。加上「无挠 + 保度量」才唯一 —— 这就是 Levi-Civita 联络的存在唯一性（Koszul 公式）。

**曲率是联络的交换子**：$R(X,Y) = [\nabla_{X},\nabla_{Y}]-\nabla_{[X,Y]}$（`def.curvature-tensor`）。所以一个「联络」同时生出平行移动、测地线与曲率。

> 续见 notes/def.affine-connection.2.md
