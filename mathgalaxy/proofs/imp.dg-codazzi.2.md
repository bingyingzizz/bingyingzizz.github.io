# 结构方程拆出混合分量 $\implies$ Codazzi–Mainardi 方程
`imp.dg-codazzi` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `lem.adapted-frame` 适配标架 → `thm.codazzi-mainardi` Codazzi–Mainardi 方程

把 $R^{\mathbb{R}^{3}}(X,Y)Z = \bar\nabla_{X}\bar\nabla_{Y}Z-\bar\nabla_{Y}\bar\nabla_{X}Z-\bar\nabla_{[X,Y]}Z = 0$ 展开，两边取**法向分量**（切向分量给出 Gauss 方程）：

$$X\bigl(II(Y,Z)\bigr)-Y\bigl(II(X,Z)\bigr)+II(X,\nabla_{Y}Z)-II(Y,\nabla_{X}Z)-II([X,Y],Z) = 0 .$$

而 $(\nabla_{X}II)(Y,Z) = X(II(Y,Z))-II(\nabla_{X}Y,Z)-II(Y,\nabla_{X}Z)$。代入上式，并用无挠 $\nabla_{X}Y-\nabla_{Y}X = [X,Y]$：

$$(\nabla_{X}II)(Y,Z)-(\nabla_{Y}II)(X,Z) = 0 .$$

> 续见 proofs/imp.dg-codazzi.3.md
