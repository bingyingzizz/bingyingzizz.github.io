# 反称性 $\implies$ 截面曲率与基的选取无关
`imp.tu-sectional` · 推出 · strong 边 · 根 `../`

`def.curvature-tensor` Riemann 曲率张量 + `def.riemannian-metric` Riemann 度量 → `def.sectional-curvature` 截面曲率

**无关性。** 设 $X' = aX+bY$、$Y' = cX+dY$，$\Delta := ad-bc\ne0$。由 $R$ 的多重线性与对前两变元的反称性，$R(X',Y') = \Delta\,R(X,Y)$；再用 $\langle R(X,Y)X,X\rangle = \langle R(X,Y)Y,Y\rangle = 0$（对后两变元反称）得

$$\langle R(X',Y')Y',X'\rangle = \Delta^{2}\langle R(X,Y)Y,X\rangle .$$

分母是 Gram 行列式 $\langle X',X'\rangle\langle Y',Y'\rangle-\langle X',Y'\rangle^{2}$，它同样乘 $\Delta^{2}$。故比值不变。

**二维即高斯曲率。** $\dim M = 2$ 时只有 $\sigma = T_{p}M$ 一个截面。取 $g$-单位正交基 $e_{1},e_{2}$，分母为 $1$，故

$$K = \langle R(e_{1},e_{2})e_{2},e_{1}\rangle = R_{1221} ,$$

与 `def.gauss-curvature` 的 $K = R_{1221}/\det(g_{ij})$ 在正交基下相同。

> 续见 proofs/imp.tu-sectional.2.md
