# 保度量 $+$ 无挠 $\implies$ 曲率张量的四条对称性
`imp.tu-curvature-symmetries` · 推出 · strong 边 · 根 `../`

`def.curvature-tensor` Riemann 曲率张量 + `def.affine-connection` 仿射联络 → `prop.curvature-tensor-symmetries` 曲率张量的对称性

(1) **对 $X,Y$ 反称**：$R(X,Y) = [\nabla_{X},\nabla_{Y}]-\nabla_{[X,Y]}$ 中交换 $X,Y$，每一项都反号。

(2) **对 $Z,W$ 反称**（用保度量）。先证 $\langle R(X,Y)Z,Z\rangle = 0$。由 $\langle\nabla_{U}Z,Z\rangle = \frac{1}{2}U\langle Z,Z\rangle$：

$$\langle\nabla_{X}\nabla_{Y}Z,Z\rangle = X\langle\nabla_{Y}Z,Z\rangle-\langle\nabla_{Y}Z,\nabla_{X}Z\rangle = \frac{1}{2}XY\langle Z,Z\rangle-\langle\nabla_{Y}Z,\nabla_{X}Z\rangle ,$$

> 续见 proofs/imp.tu-curvature-symmetries.2.md
