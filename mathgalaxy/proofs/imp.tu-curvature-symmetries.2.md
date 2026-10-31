# 保度量 $+$ 无挠 $\implies$ 曲率张量的四条对称性
`imp.tu-curvature-symmetries` · 推出 · strong 边 · 根 `../`

`def.curvature-tensor` 黎曼曲率张量 + `def.affine-connection` 仿射联络 → `prop.curvature-tensor-symmetries` 曲率张量的对称性

同理 $\langle\nabla_{Y}\nabla_{X}Z,Z\rangle = \frac{1}{2}YX\langle Z,Z\rangle-\langle\nabla_{X}Z,\nabla_{Y}Z\rangle$，而 $\langle\nabla_{[X,Y]}Z,Z\rangle = \frac{1}{2}[X,Y]\langle Z,Z\rangle$。三项相减：二阶项合成 $\frac{1}{2}\bigl(XY-YX-[X,Y]\bigr)\langle Z,Z\rangle = 0$，两个内积项相消。再把 $\langle R(X,Y)(Z+W),Z+W\rangle = 0$ 展开，即得 $\langle R(X,Y)Z,W\rangle = -\langle R(X,Y)W,Z\rangle$。

(3) **第一比安基**（用无挠）。记 $\nabla^{2}Z(X,Y) := \nabla_{X}\nabla_{Y}Z-\nabla_{\nabla_{X}Y}Z$。无挠给 $\nabla_{X}Y-\nabla_{Y}X = [X,Y]$，于是

> 续见 proofs/imp.tu-curvature-symmetries.3.md
